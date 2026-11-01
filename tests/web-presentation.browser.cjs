/* Regresiones reales de presentación con Chrome y Playwright ya instalados. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const http = require('node:http');
const path = require('node:path');
const os = require('node:os');
const { createRequire } = require('node:module');
const root = path.resolve(__dirname, '..');
const excluded = new Set(['emulaitor/community-chat.html', 'emulaitor/tiktok/index.html', 'rolemiaster/response_hannah.html']);
function playwright() {
  try { return require('playwright'); } catch {}
  const runtime = path.join(os.homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
  return createRequire(runtime)('playwright');
}
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.md': 'text/plain; charset=utf-8', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
test('Presentación adaptable, navegación y contratos de interacción', { timeout: 240000 }, async t => {
  const output = await fs.mkdtemp(path.join(os.tmpdir(), 'rolemiaster-unslop-qa-'));
  const server = http.createServer(async (req, res) => {
    try {
      let name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      if (name.endsWith('/')) name += 'index.html';
      const file = path.resolve(root, '.' + name);
      if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
      const bytes = await fs.readFile(file);
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }).end(bytes);
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  let browser;
  const report = { pages: [], errors: [], screenshots: output };
  try {
    browser = await playwright().chromium.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    // Se permiten bibliotecas, fuentes y logos públicos; no se reproduce vídeo remoto.
    await context.route('**/*', route => {
      const request = route.request();
      if (request.resourceType() === 'media' || (request.isNavigationRequest() && !request.url().startsWith(base))) return route.abort();
      return route.continue();
    });
    const page = await context.newPage();
    page.on('pageerror', e => report.errors.push({ url: page.url(), message: e.message, stack: e.stack }));
    const open = async (name, width = 360) => {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(base + '/' + name, { waitUntil: 'domcontentloaded', timeout: 20000 });
      if (!name.startsWith('payments/')) await page.waitForFunction(() => document.querySelector('.site-skip'), null, { timeout: 5000 });
      await page.evaluate(() => Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1500))]));
    };
    const layout = () => page.evaluate(() => {
      const width = document.documentElement.clientWidth;
      return { width, scroll: document.documentElement.scrollWidth,
        invisibleHero: [...document.querySelectorAll('.hero-content')].some(el => Number(getComputedStyle(el).opacity) < 1),
        overflow: [...document.querySelectorAll('body *')].filter(el => {
          const r = el.getBoundingClientRect(); const s = getComputedStyle(el);
          if (!r.width || !r.height || s.display === 'none' || s.position === 'fixed') return false;
          if (el.closest('.carousel-track, pre, table, .site-skip')) return false;
          let parent = el.parentElement;
          while (parent && parent !== document.body) { if (['hidden','auto','scroll','clip'].includes(getComputedStyle(parent).overflowX)) return false; parent = parent.parentElement; }
          return r.right > width + 1 || r.left < -1;
        }).slice(0,8).map(el => ({ tag: el.tagName, class: el.className, text: el.textContent.slice(0,60) })) };
    });
    const names = (await fs.readdir(root, { recursive: true })).map(n => n.replaceAll('\\','/')).filter(n => n.endsWith('.html') && !n.split('/').some(p => p.startsWith('.')) && !excluded.has(n)).sort();
    await t.test('Las 28 páginas no desbordan en móvil ni escritorio', async () => {
      const failures = [];
      assert.equal(names.length, 28);
      for (const name of names) for (const width of [360,1440]) {
        await open(name, width);
        const data = await layout(); report.pages.push({ name, ...data });
        if (data.scroll > width + 1 || data.overflow.length || data.invisibleHero) failures.push({ name, ...data });
      }
      assert.deepEqual(failures, []);
    });
    await t.test('Los casos estrechos y tabletas también se adaptan', async () => {
      const failures = [];
      for (const name of ['index.html','rolemiaster/index.html','rolemiaster/manual.html','syncronia/index.html','emulaitor/index.html','emulaitor/homebrew-retro-library.html','emulaitor/press-kit.html','payments/index.html']) for (const width of [320,768]) {
        await open(name,width); const data=await layout();
        if (data.scroll > width + 1 || data.overflow.length || data.invisibleHero) failures.push({ name, ...data });
      }
      assert.deepEqual(failures, []);
    });
    await t.test('Menú por teclado, Escape y cambios de ancho', async () => {
      await open('emulaitor/homebrew-retro-library.html');
      const toggle=page.locator('.site-menu-toggle');
      assert.equal(await toggle.getAttribute('aria-expanded'),'false');
      await toggle.focus(); await page.keyboard.press('Enter');
      assert.equal(await toggle.getAttribute('aria-expanded'),'true');
      await page.locator('.nav-links a').first().focus(); await page.keyboard.press('Escape');
      assert.equal(await toggle.getAttribute('aria-expanded'),'false');
      assert.equal(await toggle.evaluate(el => el === document.activeElement),true);
      await page.setViewportSize({width:1440,height:1000});
      assert.equal(await page.locator('.nav-links').isVisible(),true);
      await page.setViewportSize({width:360,height:1000});
      await page.waitForFunction(() => getComputedStyle(document.querySelector('.nav-links')).display === 'none');
    });
    await t.test('Índice, idioma y plataformas del manual conservados', async () => {
      await open('rolemiaster/manual.html');
      assert.equal(await page.locator('.site-toc').getAttribute('open'),null);
      await page.locator('.site-toc summary').click();
      assert.equal(await page.locator('#manual-lang-select').isVisible(),true);
      await page.locator('.site-menu-toggle').click();
      await page.locator('#btn-en').click();
      await page.waitForFunction(() => document.querySelector('.site-menu-toggle span').textContent === 'Menu');
      await page.locator('#btn-android').click();
      assert.match(await page.locator('#btn-android').getAttribute('class'),/active/);
      await page.setViewportSize({width:1440,height:1000});
      await page.waitForFunction(() => document.querySelector('.site-toc').open);
    });
    await t.test('Los idiomas de EmulAItor y los controles de SyncronIA funcionan', async () => {
      await open('emulaitor/index.html');
      for (const lang of ['es','en','pt-BR','de','ja']) {
        await page.locator('[id="btn-'+lang+'"]').click();
        assert.equal(await page.locator('html').getAttribute('lang'),lang);
      }
      assert.equal(await page.locator('.carousel-wrapper').getAttribute('tabindex'),'0');
      await page.waitForSelector('.review-card');
      const expected=JSON.parse(await fs.readFile(path.join(root,'emulaitor/reviews.json'),'utf8')).length;
      assert.equal(await page.locator('.review-card').count(),expected);
      assert.equal(await page.locator('.carousel-track').evaluate(el=>getComputedStyle(el).animationName),'none');
      await open('syncronia/index.html');
      assert.equal(await page.locator('#desktop-download-source').isVisible(),true);
      assert.equal(await page.locator('#desktop-download-source option').count(),3);
      await page.locator('#btn-en').click();
      assert.equal(await page.locator('html').getAttribute('lang'),'en');
    });
    await t.test('Las identidades cromáticas conservan sus colores originales', async () => {
      await open('index.html',1440);
      assert.match(await page.locator('body').evaluate(el=>getComputedStyle(el).backgroundImage),/stars.svg/);
      assert.equal(await page.locator('.card-rolemiaster').evaluate(el=>getComputedStyle(el).getPropertyValue('--card-accent').trim()),'#00d2ff');
      assert.equal(await page.locator('.card-emulaitor').evaluate(el=>getComputedStyle(el).getPropertyValue('--card-accent').trim()),'#39ff14');
      await open('rolemiaster/index.html',1440);
      assert.equal(await page.locator('.hero .btn').first().evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(0, 210, 255)');
      assert.equal(await page.locator('body').evaluate(el=>getComputedStyle(el).getPropertyValue('--secondary').trim()),'#ff0055');
      assert.equal(await page.locator('.card-pc').evaluate(el=>getComputedStyle(el).borderTopColor),'rgb(0, 210, 255)');
      assert.equal(await page.locator('.card-android').evaluate(el=>getComputedStyle(el).borderTopColor),'rgb(66, 133, 244)');
      await open('syncronia/index.html',1440);
      const gradient=await page.locator('.btn-sync-primary').evaluate(el=>getComputedStyle(el).backgroundImage);
      assert.match(gradient,/224, 64, 251/); assert.match(gradient,/0, 229, 255/);
      await open('emulaitor/index.html',1440);
      assert.equal(await page.locator('.hero h1').evaluate(el=>getComputedStyle(el).color),'rgb(57, 255, 20)');
      assert.equal(await page.locator('.hero-tagline').evaluate(el=>getComputedStyle(el).color),'rgb(255, 176, 0)');
    });
    await t.test('Un idioma guardado por EmulAItor no rompe las páginas bilingües', async () => {
      for(const name of ['index.html','rolemiaster/index.html','rolemiaster/manual.html','rolemiaster/changelog.html','rolemiaster/privacy.html','syncronia/index.html','syncronia/privacy.html']) {
        await page.evaluate(()=>localStorage.setItem('rolemiaster_lang','ja'));
        await open(name);
        assert.equal(await page.locator('#btn-es').evaluate(el=>el.classList.contains('active')),true,name);
      }
    });
    await t.test('Sin movimiento reducido tampoco hay bucles ni vídeo automático', async () => {
      await page.emulateMedia({reducedMotion:'no-preference'});
      await open('index.html');
      assert.equal(await page.locator('canvas').count(),0);
      assert.equal(await page.locator('.universe-title').evaluate(el=>getComputedStyle(el).animationName),'none');
      await open('rolemiaster/index.html');
      assert.equal(await page.locator('.hero-video-bg').evaluate(el=>el.autoplay || el.loop),false);
      assert.equal(await page.locator('.hero-video-bg').evaluate(el=>el.controls),true);
      await page.locator('.site-menu-toggle').click();
      const docs=page.locator('.dropdown > a');
      await docs.focus(); await page.keyboard.press('Enter');
      assert.equal(await docs.getAttribute('aria-expanded'),'true');
      await page.keyboard.press('Escape');
      assert.equal(await docs.getAttribute('aria-expanded'),'false');
      await open('emulaitor/index.html');
      assert.equal(await page.locator('.carousel-track').evaluate(el=>getComputedStyle(el).animationName),'none');
      await page.emulateMedia({reducedMotion:'reduce'});
    });
    await t.test('Pago inactivo sin spinner ni navegación iniciada', async () => {
      await open('payments/index.html');
      assert.equal(await page.locator('.spinner').isVisible(),false);
      assert.equal(page.url(),base+'/payments/index.html');
      assert.equal(await page.locator('script[src*="assets/site.js"]').count(),0);
    });
    await t.test('Sin JavaScript, las guías mantienen su navegación', async () => {
      const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:360,height:1000}});
      const plain=await nojs.newPage();
      await plain.goto(base+'/emulaitor/homebrew-retro-library.html');
      assert.equal(await plain.locator('.nav-links').isVisible(),true);
      assert.equal(await plain.evaluate(()=>document.documentElement.scrollWidth<=360),true);
      await nojs.close();
    });
    await t.test('No hay errores JavaScript de página', () => assert.deepEqual(report.errors,[]));
    if (process.env.WEB_QA_CAPTURES !== '0') for (const name of ['index.html','rolemiaster/index.html','rolemiaster/manual.html','syncronia/index.html','emulaitor/index.html','emulaitor/homebrew-retro-library.html','emulaitor/press-kit-es.html','payments/index.html']) for(const width of [360,1440]) {
      await open(name,width);
      await page.evaluate(() => Promise.race([Promise.all([...document.images].filter(img => img.loading !== 'lazy').map(img => img.decode().catch(() => {}))),new Promise(r => setTimeout(r,2000))]));
      await page.screenshot({path:path.join(output,name.replaceAll('/','_').replace('.html','')+'-'+width+'.png'),fullPage:false});
    }
  } finally {
    await fs.writeFile(path.join(output,'verificacion.json'),JSON.stringify(report,null,2));
    console.log('Informe de QA: '+output);
    if(browser) await browser.close();
    await new Promise(resolve=>server.close(resolve));
  }
});
