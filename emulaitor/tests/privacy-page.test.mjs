import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';

const html=readFileSync(new URL('../privacy.html',import.meta.url),'utf8');
const code=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1)[1];
function page({saved=null,search='',storageBlocked=false}={}){
  const elements=new Map([...html.matchAll(/data-i18n="([^"]+)"/g)].map(([,key])=>[key,{innerHTML:'',getAttribute:()=>key,querySelector:()=>({innerHTML:''})}]));
  const buttons=new Map(['es','en'].map(lang=>['btn-'+lang,{classList:{add(){},remove(){}}}]));
  const document={documentElement:{lang:''},title:'',getElementById:id=>buttons.get(id),querySelectorAll:selector=>selector==='[data-i18n]'?[...elements.values()]:[...buttons.values()],addEventListener:(name,fn)=>{if(name==='DOMContentLoaded')fn();}};
  const context={document,location:{search},URLSearchParams,localStorage:{getItem(){if(storageBlocked)throw Error('bloqueado');return saved;},setItem(){if(storageBlocked)throw Error('bloqueado');}}};
  vm.createContext(context);vm.runInContext(code,context);
  return {document,elements,context,translations:vm.runInContext('translations',context)};
}
test('la política documenta la comunidad en ambos idiomas sin negar su almacenamiento',()=>{
 const p=page();
 for(const lang of ['es','en']){
  const t=p.translations[lang];
  assert.ok(t.priv_community_data,'falta explicar los datos mínimos de comunidad');
  assert.match(t.priv_community_links,/https:\/\/emulaitor\.unleashed\.rolemiaster\.com\/cuenta/);
  assert.match(t.priv_community_links,/\/privacidad/);
  for(const key of p.elements.keys())assert.equal(typeof t[key],'string',lang+': '+key);
 }
 assert.doesNotMatch(p.translations.en.priv_s2_text,/does not maintain its own user database/);
});
test('inglés por defecto, incluido el HTML sin JavaScript',()=>{
 const p=page();assert.equal(p.document.documentElement.lang,'en');assert.match(html,/<html lang="en">/);assert.match(p.document.title,/Privacy/);
});
test('respeta español guardado y prioriza la URL',()=>{
 assert.equal(page({saved:'es'}).document.documentElement.lang,'es');
 assert.equal(page({saved:'es',search:'?lang=en'}).document.documentElement.lang,'en');
});
test('un idioma ajeno o almacenamiento bloqueado no rompe la política',()=>{
 for(const options of [{saved:'de'},{saved:'toString'},{storageBlocked:true}])assert.equal(page(options).document.documentElement.lang,'en');
});
test('cambiar de idioma actualiza texto, título y atributos',()=>{
 const p=page();vm.runInContext("changeLang('es')",p.context);assert.equal(p.document.documentElement.lang,'es');assert.match(p.elements.get('priv_title').innerHTML,/Privacidad/);
 vm.runInContext("changeLang('xx')",p.context);assert.equal(p.document.documentElement.lang,'en');
});

test('separa la aplicación Android de la web comunitaria',()=>{
 const p=page();
 assert.match(p.translations.en.priv_community_scope,/external browser/);
 assert.match(p.translations.en.priv_community_scope,/does not receive/);
 assert.match(p.translations.es.priv_community_scope,/navegador externo/);
 assert.match(p.translations.es.priv_community_scope,/no recibe/);
 assert.match(html,/data-i18n="priv_community_scope"/);
});
