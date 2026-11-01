import test from 'node:test';
import assert from 'node:assert/strict';
import { isChatEnabled, CommunityChatController, readChatConfiguration } from '../community-chat.mjs';

const deferred = () => { let resolve; const promise = new Promise(r => { resolve = r; }); return {promise, resolve}; };
function harness(readConfig) {
    let open = false, opens = 0, state = '';
    const controller = new CommunityChatController({readConfig,
        openChat: () => {open = true; opens++;}, closeChat: () => {open = false;},
        onState: next => {state = next;}});
    return {controller, snapshot: () => ({open, opens, state})};
}

test('respeta booleanos y usa respaldo desactivado si falta una configuración válida', () => {
    assert.equal(isChatEnabled({community_chat_enabled:true, active_pasarela_ripto:false}), true);
    assert.equal(isChatEnabled({community_chat_enabled:false, active_pasarela_ripto:true}), false);
    for (const input of [null, {}, [], true, {active_pasarela_ripto:true},
        {community_chat_enabled:'false'}, {community_chat_enabled:1}]) {
        assert.equal(isChatEnabled(input), false);
    }
});
test('el constructor no abre conexiones ni contenido', () => {
    const h = harness(() => {throw new Error('no debería consultar');});
    assert.equal(h.snapshot().open, false);
});
test('una respuesta activa abre una sola instancia aunque se refresque', async () => {
    const h = harness(async () => ({community_chat_enabled:true}));
    await h.controller.refresh(); await h.controller.refresh();
    assert.deepEqual(h.snapshot(), {open:true, opens:1, state:'enabled'});
});
test('la desactivación destruye el chat existente', async () => {
    let enabled = true;
    const h = harness(async () => ({community_chat_enabled:enabled}));
    await h.controller.refresh(); enabled = false; await h.controller.refresh();
    assert.deepEqual(h.snapshot(), {open:false, opens:1, state:'disabled'});
});
test('el error de configuración conserva el chat activo sin recrear la sesión', async () => {
    let fail = false;
    const h = harness(async () => {if(fail) throw new Error('sin red'); return {community_chat_enabled:true};});
    await h.controller.refresh(); fail = true; await h.controller.refresh();
    assert.deepEqual(h.snapshot(), {open:true, opens:1, state:'enabled'});
});
test('una respuesta activa antigua no gana a la desactivación más reciente', async () => {
    const old = deferred(); let calls = 0;
    const h = harness(() => ++calls === 1 ? old.promise : Promise.resolve({community_chat_enabled:false}));
    const first = h.controller.refresh(); await h.controller.refresh();
    old.resolve({community_chat_enabled:true}); await first;
    assert.deepEqual(h.snapshot(), {open:false, opens:0, state:'disabled'});
});
test('salir de la página invalida una respuesta pendiente', async () => {
    const pending = deferred(); const h = harness(() => pending.promise);
    const first = h.controller.refresh(); h.controller.stop();
    pending.resolve({community_chat_enabled:true}); await first;
    assert.equal(h.snapshot().open, false); assert.equal(h.snapshot().opens, 0);
});

test('un error antiguo no vence a una desactivación reciente', async () => {
    let reject; const old = new Promise((_, r) => {reject = r;}); let calls = 0;
    const h = harness(() => ++calls === 1 ? old : Promise.resolve({community_chat_enabled:false}));
    const first = h.controller.refresh(); await h.controller.refresh(); reject(new Error('sin red')); await first;
    assert.deepEqual(h.snapshot(), {open:false, opens:0, state:'disabled'});
});
test('un fallo al crear contenido no se disfraza como respaldo activo', async () => {
    let state = '', closed = false;
    const controller = new CommunityChatController({readConfig:async () => ({community_chat_enabled:true}),
        openChat:() => {throw new Error('renderer');}, closeChat:() => {closed = true;}, onState:s => {state = s;}});
    await controller.refresh(); assert.equal(state, 'error'); assert.equal(closed, true);
});

test('la configuración interrumpe un stream grande sin materializar el cuerpo completo', async () => {
    let chunks = 0, cancelled = false;
    const response = new Response(new ReadableStream({
        pull(controller) { if (++chunks <= 256) controller.enqueue(new Uint8Array(4096).fill(120)); else controller.close(); },
        cancel() {cancelled = true;},
    }));
    await assert.rejects(readChatConfiguration(response));
    assert.equal(cancelled, true); assert.ok(chunks <= 6, `Leyó ${chunks} fragmentos`);
});
test('la configuración admite JSON UTF-8 fragmentado dentro de 16 KiB', async () => {
    const bytes = new TextEncoder().encode('{"community_chat_enabled":false,"detalle":"á"}'); let i = 0;
    const response = new Response(new ReadableStream({pull(c) {if(i < bytes.length) c.enqueue(bytes.slice(i, ++i)); else c.close();}}));
    assert.deepEqual(await readChatConfiguration(response), {community_chat_enabled:false, detalle:'á'});
});

test('un valor ausente o inválido no expulsa de una sesión ya abierta', async () => {
    let config = {community_chat_enabled:true};
    const h = harness(async () => config);
    await h.controller.refresh();
    for (const unknown of [null, {}, [], {community_chat_enabled:'false'}]) {
        config = unknown; await h.controller.refresh();
        assert.deepEqual(h.snapshot(), {open:true, opens:1, state:'enabled'});
    }
});
test('sin activación previa los errores no abren el chat', async () => {
    const h = harness(async () => {throw new Error('sin red');});
    await h.controller.refresh();
    assert.deepEqual(h.snapshot(), {open:false, opens:0, state:'disabled'});
});
test('un error posterior a un apagado explícito no reactiva la sesión', async () => {
    let config = {community_chat_enabled:true};
    const h = harness(async () => config);
    await h.controller.refresh(); config = {community_chat_enabled:false}; await h.controller.refresh();
    config = null; await h.controller.refresh();
    assert.deepEqual(h.snapshot(), {open:false, opens:1, state:'disabled'});
});
