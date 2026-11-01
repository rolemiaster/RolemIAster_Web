import test from 'node:test';
import assert from 'node:assert/strict';
import {readChannels, initialChannel} from '../community-chat-channels.mjs';
const en = {id:'1509161917430763601', name:'General (English)', language:'en', flag:'🇺🇸', type:'lounge'};
const es = {id:'1559990000000000001', name:'Español', language:'es', flag:'🇪🇸', type:'lounge'};
const roms = {id:'1509162542235127938', name:'ROMs', type:'community', discord_only:true};
const config = {community_chat_channels:[en,es,roms]};
test('el idioma regional recomienda sala y la elección manual prevalece', () => {
  const rooms=readChannels(config);
  assert.equal(initialChannel(rooms,null,'es-MX').id,es.id);
  assert.equal(initialChannel(rooms,en.id,'es').id,en.id);
  assert.equal(initialChannel(rooms,null,'ja').id,en.id);
});
test('ROMs y una sala retirada no sustituyen la preferencia de idioma', () => {
  const rooms=readChannels(config);
  assert.equal(initialChannel(rooms,roms.id,'es').id,es.id);
  assert.equal(initialChannel(rooms,'1559990000000000999','es').id,es.id);
});
test('config antigua conserva la sala existente y lista vacía la retira', () => {
  assert.equal(readChannels({})[0].id,en.id);
  assert.deepEqual(readChannels({community_chat_channels:[]}),[]);
  assert.deepEqual(readChannels({community_chat_channels:'incorrecto'}),[]);
});
test('filtra IDs no válidos, duplicados y canales desactivados', () => {
  assert.deepEqual(readChannels({community_chat_channels:[en,es,roms,en,{...es,id:'javascript:alert(1)'},{...es,id:'1559990000000000002',enabled:false}]}).map(r=>r.id),[en.id,es.id,roms.id]);
});
test('las salas adicionales se definen únicamente desde configuración', () => {
  const de={id:'1559990000000000003', name:'Deutsch', type:'lounge', language:'de', flag:'🇩🇪'};
  assert.equal(initialChannel(readChannels({community_chat_channels:[en,de]}),null,'de-DE').id,de.id);
});

test('enabled usa booleanos estrictos, no cadenas ni números', () => {
  const variants = [true, false, 'true', 1, null].map((enabled,index) => ({...es,id:`15599900000000000${index+10}`,enabled}));
  assert.deepEqual(readChannels({community_chat_channels:variants}).map(room=>room.id),[variants[0].id]);
});

test('sin lounges el primer canal configurado sigue siendo un destino inicial válido', () => {
  const rooms=readChannels({community_chat_channels:[roms]});
  assert.equal(initialChannel(rooms,en.id,'es-ES')?.id,roms.id);
  assert.equal(initialChannel([],en.id,'es-ES'),undefined);
});
