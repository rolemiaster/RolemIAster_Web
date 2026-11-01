import test from 'node:test';
import assert from 'node:assert/strict';
let generation = 0;

// DOM mínimo: prueba la página real y sus eventos, no el comportamiento del proveedor.
async function page(search, check, configuration = {community_chat_enabled:true}) {
    const names = ['document','window','location','fetch','setInterval','clearInterval'];
    const saved = names.map(name => Object.getOwnPropertyDescriptor(globalThis, name));
    const listeners = new Map(), events = new Map();
    let frame, created = 0; const posted = [];
    const host = {querySelector:() => frame, replaceChildren:(next) => {frame = next; if (next) created++;}};
    const status = {}, retry = {addEventListener:() => {}};
    const document = {hidden:false, body:{dataset:{}}, getElementById:id => ({'chat-frame':host,'chat-status':status,'chat-retry':retry})[id],
        createElement:() => ({contentWindow:{postMessage:(data, origin) => posted.push({data, origin})}, setAttribute:() => {}}),
        addEventListener:(name, fn) => events.set(name, fn)};
    const window = {addEventListener:(name, fn) => listeners.set(name, fn), removeEventListener:name => listeners.delete(name)};
    Object.assign(globalThis, {document, window, location:{search},
        fetch:async () => new Response(JSON.stringify(configuration)), setInterval:() => 1, clearInterval:() => {}});
    try {
        await import(`../community-chat.mjs?qa=${++generation}`);
        await new Promise(setImmediate);
        await check({document, window, listeners, events, frame:() => frame, created:() => created, posted});
    } finally {
        listeners.get('pagehide')?.();
        names.forEach((name, i) => saved[i] ? Object.defineProperty(globalThis, name, saved[i]) : delete globalThis[name]);
    }
}

test('el completo recibe el mismo contrato de mensajes que el compacto', async () => {
    await page('', async h => {
        assert.equal(h.created(), 1);
        const frame = h.frame();
        const id = new URL(frame.src).searchParams.get('api');
        assert.ok(id);
        h.listeners.get('message')({origin:'https://e.widgetbot.io', source:frame.contentWindow,
            data:JSON.stringify({widgetbot:true, id, event:'message', data:{channel:{id:'1509161917430763601'},
                message:{id:'42', content:'Mensaje de mi amigo', author:{username:'Alias elegido'}}}})});
        assert.deepEqual(h.window.emulaitorChatSnapshot(), {enabled:true, messages:[{id:'42',text:'Mensaje de mi amigo',author:'Alias elegido'}]});
    });
});
test('ocultar y mostrar la vista nativa no sustituye el iframe ni la identidad', async () => {
    await page('?native=1', async h => {
        const same = h.frame();
        h.document.hidden = true; h.events.get('visibilitychange')();
        h.document.hidden = false; h.events.get('visibilitychange')();
        await new Promise(setImmediate);
        assert.equal(h.frame(), same);
        assert.equal(h.created(), 1);
    });
});
test('en navegador normal se conserva la liberación al ocultar y reapertura al volver', async () => {
    await page('', async h => {
        h.document.hidden = true; h.events.get('visibilitychange')();
        assert.equal(h.frame(), undefined);
        h.document.hidden = false; h.events.get('visibilitychange')();
        await new Promise(setImmediate);
        assert.equal(h.created(), 2);
    });
});

test('la app nativa no duplica su cabecera y la web normal conserva la información', async () => {
    await page('?native=1', async h => assert.equal(h.document.body.dataset.native, 'true'));
    await page('', async h => assert.equal(h.document.body.dataset.native, undefined));
});

// Una URL nueva evita conservar CSS/JS de una versión anterior tras publicar.
test('la página referencia CSS y módulo con la huella de su contenido', async () => {
    const {readFile} = await import('node:fs/promises');
    const {createHash} = await import('node:crypto');
    const html = await readFile(new URL('../community-chat.html', import.meta.url), 'utf8');
    for (const asset of ['community-chat.css', 'community-chat.mjs']) {
        const content = await readFile(new URL(`../${asset}`, import.meta.url));
        const revision = createHash('sha256').update(content).digest('hex').slice(0, 12);
        assert.ok(html.includes(`./${asset}?v=${revision}`), `${asset} debe invalidar la versión cacheada`);
    }
});

test('las dependencias del chat invalidan su caché al cambiar de API', async () => {
    const {readFile} = await import('node:fs/promises');
    const {createHash} = await import('node:crypto');
    const module = await readFile(new URL('../community-chat.mjs', import.meta.url), 'utf8');
    for (const asset of ['community-chat-feed.mjs', 'community-chat-channels.mjs']) {
        const content = await readFile(new URL(`../${asset}`, import.meta.url));
        const revision = createHash('sha256').update(content).digest('hex').slice(0, 12);
        assert.ok(module.includes(`'./${asset}?v=${revision}'`), `${asset} debe invalidar la dependencia cacheada`);
    }
});

test('el acceso nativo por mando abre la identificación en el mismo iframe y origen exacto', async () => {
    await page('?native=1', async h => {
        const frame = h.frame();
        assert.equal(h.window.emulaitorChatLogin(), false, 'no enviar antes del ready del receptor');
        const ready = {origin:'https://e.widgetbot.io',source:frame.contentWindow,
            data:JSON.stringify({widgetbot:true,id:new URL(frame.src).searchParams.get('api'),event:'ready'})};
        h.listeners.get('message')({...ready,origin:'https://otro.example'});
        h.listeners.get('message')({...ready,source:{}});
        h.listeners.get('message')({...ready,data:JSON.stringify({widgetbot:true,id:'otra-instancia',event:'ready'})});
        for (const data of [false,null,'true',{},[]]) {
            h.listeners.get('message')({...ready,data:JSON.stringify({...JSON.parse(ready.data),data})});
        }
        assert.equal(h.window.emulaitorChatLogin(), false, 'un ready ajeno no habilita comandos');
        assert.equal(h.posted.length, 0);
        h.listeners.get('message')(ready);
        assert.equal(h.window.emulaitorChatLogin(), true);
        assert.equal(h.frame(), frame);
        assert.equal(h.created(), 1);
        assert.equal(h.posted.length, 1);
        assert.equal(h.posted[0].origin, 'https://e.widgetbot.io');
        assert.deepEqual(JSON.parse(h.posted[0].data), {widgetbot:true,
            id:new URL(frame.src).searchParams.get('api'), event:'login'});
        h.document.body.dataset.mode = 'feed';
        assert.equal(h.window.emulaitorChatLogin(), false);
        h.listeners.get('pagehide')();
        assert.equal(h.window.emulaitorChatLogin(), false);
        assert.equal(h.posted.length, 1);
    });
    await page('', async h => assert.equal(h.window.emulaitorChatLogin(), false));
});

 test('el ready legado booleano conserva compatibilidad sin rebajar origen ni instancia', async () => {
    await page('?native=1', async h => {
        const frame = h.frame();
        h.listeners.get('message')({origin:'https://e.widgetbot.io',source:frame.contentWindow,
            data:JSON.stringify({widgetbot:true,id:new URL(frame.src).searchParams.get('api'),event:'ready',data:true})});
        assert.equal(h.window.emulaitorChatLogin(), true);
        assert.equal(h.created(), 1);
    });
});

const roomConfig = {community_chat_enabled:true,community_chat_channels:[
  {id:'1509161917430763601',name:'General (English)',language:'en',type:'lounge'},
  {id:'1559990000000000001',name:'Español',language:'es',type:'lounge'},
]};
test('el selector nativo cambia el canal del mismo iframe y rechaza destinos ajenos', async () => {
  await page('?native=1&channels=1&channel=1559990000000000001', async h => {
    const frame=h.frame(); const id=new URL(frame.src).searchParams.get('api');
    assert.ok(frame.src.includes('/1559990000000000001/'));
    assert.equal(h.window.emulaitorChatSelectChannel('1509161917430763601'),false);
    h.listeners.get('message')({origin:'https://e.widgetbot.io',source:frame.contentWindow,data:JSON.stringify({widgetbot:true,id,event:'ready',data:true})});
    assert.equal(h.window.emulaitorChatSelectChannel('1509161917430763601'),true);
    assert.equal(h.window.emulaitorChatSelectChannel('999'),false);
    assert.equal(h.frame(),frame); assert.equal(h.created(),1);
    const packet=JSON.parse(h.posted.at(-1).data);
    assert.equal(packet.event,'navigate');
    assert.deepEqual(packet.data,{guild:'1470216161223508123',channel:'1509161917430763601'});
  },roomConfig);
});
test('al cambiar de sala vacía el compacto y no mezcla mensajes de la anterior', async () => {
  await page('?native=1&channels=1&channel=1509161917430763601', async h => {
    const frame=h.frame(), id=new URL(frame.src).searchParams.get('api');
    const packet=(event,data)=>h.listeners.get('message')({origin:'https://e.widgetbot.io',source:frame.contentWindow,data:JSON.stringify({widgetbot:true,id,event,data})});
    packet('ready',true);
    packet('message',{channel:{id:'1509161917430763601'},message:{id:'42',content:'Anterior',author:{username:'Amigo'}}});
    assert.equal(h.window.emulaitorChatSnapshot().messages.length,1);
    assert.equal(h.window.emulaitorChatSelectChannel('1559990000000000001'),true);
    assert.deepEqual(h.window.emulaitorChatSnapshot().messages,[]);
    packet('message',{channel:{id:'1509161917430763601'},message:{id:'43',content:'Tardío'}});
    assert.deepEqual(h.window.emulaitorChatSnapshot().messages,[]);
    packet('message',{channel:{id:'1559990000000000001'},message:{id:'44',content:'Nueva sala',author:{username:'Amigo'}}});
    assert.equal(h.window.emulaitorChatSnapshot().messages[0].text,'Nueva sala');
  },roomConfig);
});

test('la página abre un directorio de comunidad sin lounge en lugar de quedar deshabilitada', async () => {
  await page('?native=1&channels=1', async h => {
    assert.equal(h.created(),1);
    assert.ok(h.frame().src.includes('/1509162542235127938/'));
    assert.equal(h.window.emulaitorChatSnapshot().enabled,true);
  },{community_chat_enabled:true,community_chat_channels:[
    {id:'1509162542235127938',name:'ROMs',type:'community',discord_only:true},
  ]});
});
