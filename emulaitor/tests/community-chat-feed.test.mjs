import test from 'node:test';
import assert from 'node:assert/strict';
import {CommunityChatFeed} from '../community-chat-feed.mjs';
const channel = {id:'1509161917430763601'};
function fixture() {
    const source = {};
    const feed = new CommunityChatFeed({source:() => source, instance:'qa-instance'});
    const emit = (event, data, overrides={}) => feed.receive({origin:'https://e.widgetbot.io', source,
        data:JSON.stringify({widgetbot:true,id:'qa-instance',event,data}), ...overrides});
    const send = (id, content=`mensaje ${id}`) => emit('message', {channel, message:{id, channelId:channel.id, content, author:{username:'Amigo'}}});
    return {feed, emit, send};
}
test('mantiene solo los tres textos más recientes y no duplica IDs', () => {
    const {feed, send} = fixture(); for (const id of ['1','2','3','4']) send(id);
    send('4'); assert.deepEqual(feed.snapshot().map(m => m.id), ['2','3','4']);
});
test('rechaza mensajes de otra ventana, otro origen, otra instancia u otro canal', () => {
    const {feed, emit} = fixture(); const payload = {channel, message:{id:'1',content:'privado'}};
    emit('message', payload, {origin:'https://evil.example'}); emit('message', payload, {source:{}});
    emit('message', payload, {data:JSON.stringify({widgetbot:true,id:'otra',event:'message',data:payload})});
    emit('message', {...payload, channel:{id:'123'}}); assert.deepEqual(feed.snapshot(), []);
});
test('edición parcial no reordena el historial y borrados retiran el texto', () => {
    const {feed, send, emit} = fixture(); send('1'); send('2'); send('3');
    emit('messageUpdate', {channel, message:{id:'2',content:'corregido'}});
    assert.deepEqual(feed.snapshot().map(m => m.id), ['1','2','3']);
    assert.equal(feed.snapshot()[1].text, 'corregido'); assert.equal(feed.snapshot()[1].author, 'Amigo');
    emit('messageDelete', {channel,id:'2'}); assert.deepEqual(feed.snapshot().map(m => m.id), ['1','3']);
    emit('messageDeleteBulk', {channel,ids:['1','3']}); assert.deepEqual(feed.snapshot(), []);
});
test('acota texto y autor y no conserva adjuntos, marcas de formato o controles', () => {
    const {feed, emit} = fixture(); emit('message', {channel, message:{id:'1',content:'x'.repeat(4000),author:{username:'z'.repeat(500)},attachments:[{url:'https://example.invalid'}]}});
    assert.equal(feed.snapshot()[0].text.length, 180); assert.equal(feed.snapshot()[0].author.length, 32);
    assert.deepEqual(Object.keys(feed.snapshot()[0]).sort(), ['author','id','text']);
    emit('message', {channel, message:{id:'2',content:'   '}}); assert.equal(feed.snapshot().length, 1);
    emit('messageUpdate', {channel, message:{id:'1',content:''}}); assert.deepEqual(feed.snapshot(), []);
});
test('datos incompletos, JSON inválido y un payload masivo no provocan excepción', () => {
    const {feed, emit} = fixture(); emit('message', null); emit('message', {channel});
    emit('message', {}, {data:'{'}); emit('message', {}, {data:'x'.repeat(65537)}); assert.deepEqual(feed.snapshot(), []);
});
test('cerrar borra los mensajes y una copia obtenida no puede mutar el búfer', () => {
    const {feed, send} = fixture(); send('1'); const copy = feed.snapshot(); copy[0].text = 'alterado';
    assert.equal(feed.snapshot()[0].text, 'mensaje 1'); feed.clear(); assert.deepEqual(feed.snapshot(), []);
});

test('conserva el último mensaje inicial y no lo duplica al recibir message', () => {
    const {feed, emit, send} = fixture();
    emit('latestMessage', {message:{id:'1',channelId:channel.id,content:'último',author:{username:'Ana'}}});
    assert.deepEqual(feed.snapshot(), [{id:'1',author:'Ana',text:'último'}]);
    send('1', 'último'); assert.equal(feed.snapshot().length, 1);
});
