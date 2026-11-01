/* Mejoras progresivas de presentación. No modifica lógica ni datos de producto. */
(() => {
  'use strict';
  const mobile = window.matchMedia('(max-width: 900px)');
  const labels = {
    es: { menu: 'Menú', skip: 'Saltar al contenido', reviews: 'Reseñas' },
    en: { menu: 'Menu', skip: 'Skip to content', reviews: 'Reviews' },
    de: { menu: 'Menü', skip: 'Zum Inhalt springen', reviews: 'Bewertungen' },
    pt: { menu: 'Menu', skip: 'Ir para o conteúdo', reviews: 'Avaliações' },
    ja: { menu: 'メニュー', skip: 'コンテンツへ移動', reviews: 'レビュー' }
  };
  const local = () => labels[document.documentElement.lang.split('-')[0]] || labels.es;
  const menus = [];
  document.querySelectorAll('nav').forEach((nav, index) => {
    const links = nav.querySelector('.nav-links');
    if (!links) return;
    if (!links.id) links.id = 'site-navigation-' + index;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'site-menu-toggle';
    button.setAttribute('aria-controls', links.id);
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg><span></span>';
    nav.insertBefore(button, links);
    const setOpen = (open, restoreFocus = false) => {
      nav.dataset.menuOpen = String(open);
      button.setAttribute('aria-expanded', String(open));
      if (restoreFocus) button.focus();
    };
    setOpen(false);
    button.addEventListener('click', () => setOpen(nav.dataset.menuOpen !== 'true'));
    nav.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobile.matches && nav.dataset.menuOpen === 'true') {
        event.preventDefault();
        setOpen(false, true);
      }
    });
    links.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (mobile.matches && link && !link.closest('.dropdown') && (link.hasAttribute('href') || link.hasAttribute('onclick'))) setOpen(false, true);
    });
    mobile.addEventListener('change', () => setOpen(false));
    menus.push(button);
  });
  document.querySelectorAll('a[onclick]:not([href])').forEach(link => {
    link.setAttribute('role', 'button');
    link.tabIndex = 0;
    link.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        link.click();
      }
    });
  });
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector(':scope > a:not([href])');
    if (!trigger) return;
    trigger.setAttribute('role', 'button');
    trigger.tabIndex = 0;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-haspopup', 'true');
    dropdown.dataset.dropdownOpen = 'false';
    const toggle = () => {
      const open = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(open));
      dropdown.dataset.dropdownOpen = String(open);
    };
    trigger.addEventListener('click', toggle);
    trigger.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); }
    });
    dropdown.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.preventDefault(); event.stopPropagation();
        dropdown.dataset.dropdownOpen = 'false'; trigger.setAttribute('aria-expanded', 'false'); trigger.focus();
      }
    });
    dropdown.addEventListener('focusout', event => {
      if (!dropdown.contains(event.relatedTarget)) { dropdown.dataset.dropdownOpen = 'false'; trigger.setAttribute('aria-expanded', 'false'); }
    });
  });
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    const details = document.createElement('details');
    details.className = 'site-toc';
    details.open = !mobile.matches;
    const summary = document.createElement('summary');
    const heading = sidebar.querySelector('h3');
    if (heading) { summary.append(...heading.childNodes); heading.remove(); }
    details.append(summary, ...sidebar.childNodes);
    sidebar.append(details);
    mobile.addEventListener('change', () => { details.open = !mobile.matches; });
    const languageSelect = sidebar.querySelector('#manual-lang-select');
    if (languageSelect && document.getElementById('sidebar-title')) languageSelect.setAttribute('aria-labelledby', 'sidebar-title');
  }
  const target = document.querySelector('main, .doc-container .content, .privacy-container, .cards-container, section.active, .container, .hero');
  let skip;
  if (target) {
    if (!target.id) target.id = 'site-content';
    skip = document.createElement('a');
    skip.href = '#' + target.id;
    skip.className = 'site-skip';
    target.tabIndex = -1;
    skip.addEventListener('click', () => target.focus({ preventScroll: true }));
    document.body.prepend(skip);
  }
  const reviews = document.querySelector('.carousel-wrapper');
  if (reviews) {
    reviews.tabIndex = 0;
    reviews.setAttribute('role', 'region');
    const heading = reviews.closest('section')?.querySelector('h2');
    if (heading) {
      if (!heading.id) heading.id = 'site-reviews-title';
      reviews.setAttribute('aria-labelledby', heading.id);
    }
  }
  const translate = () => {
    menus.forEach(button => { button.querySelector('span').textContent = local().menu; });
    if (skip) skip.textContent = local().skip;
    if (reviews && !reviews.hasAttribute('aria-labelledby')) reviews.setAttribute('aria-label', local().reviews);
  };
  const syncLanguage = () => {
    const active = document.querySelector('.btn-lang.active[id^="btn-"]');
    const lang = active?.id.slice(4);
    if (lang && labels[lang.split('-')[0]] && document.documentElement.lang !== lang) document.documentElement.lang = lang;
    translate();
  };
  document.querySelectorAll('.btn-lang').forEach(button => {
    new MutationObserver(syncLanguage).observe(button, { attributes: true, attributeFilter: ['class'] });
  });
  syncLanguage();
  new MutationObserver(translate).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
