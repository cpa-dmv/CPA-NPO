/* =====================================================================
   Business Growth Foundation — Main Script (Vanilla ES6)
   Sections:
     1. Helpers
     2. Page loader
     3. Dynamic content (programs, webdev, partners, resources, FAQ)
     4. Navigation (sticky, mobile, active link, smooth scroll)
     5. Theme toggle (dark mode)
     6. Scroll progress + Back to top
     7. Reveal on scroll (IntersectionObserver)
     8. Animated counters
     9. Typing effect
    10. Cursor glow + program card spotlight
    11. Modal (apply / register)
    12. Forms (contact, newsletter, popup) + success animation
    13. Newsletter popup timing
   ===================================================================== */
(function () {
  'use strict';

  /* ============ 1. HELPERS ============ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* SVG icon set (reused across cards) */
  const icons = {
    rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    chart: '<path d="M3 3v18h18M7 14l4-4 3 3 5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    brush: '<path d="M9.06 11.9 17 4a2.83 2.83 0 0 1 4 4l-7.9 7.94M9 12a3 3 0 0 0-3 3c0 1.5-1 2-2 2.5 1 1.5 3 2.5 5 2.5a4 4 0 0 0 4-4 3 3 0 0 0-4-4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    handshake: '<path d="M12 5 9 8l3 3 3-3-3-3zM4 11l4-4M16 7l4 4-4 4-3-3M8 15l3 3M2 13l5 5 2-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    library: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    network: '<circle cx="12" cy="5" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="5" cy="19" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="19" cy="19" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 8v3M7 17l3-4M17 17l-3-4" stroke="currentColor" stroke-width="2"/>',
    referral: '<path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4" fill="none" stroke="currentColor" stroke-width="2"/>',
    box: '<path d="M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7 12 12l8.7-5M12 22V12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    talent: '<path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 1v2M12 21v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    crown: '<path d="M2 18h20l-2-9-5 4-3-7-3 7-5-4-2 9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    bulb: '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    globe: '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" fill="none" stroke="currentColor" stroke-width="2"/>',
    gift: '<path d="M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    award: '<circle cx="12" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8.2 13 7 22l5-3 5 3-1.2-9" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    seo: '<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.3-4.3M9 11h4M11 9v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    server: '<rect x="2" y="3" width="20" height="7" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="2" y="14" width="20" height="7" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 6.5h.01M6 17.5h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="2"/>',
    gauge: '<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 4a8 8 0 0 0-8 8M20 12a8 8 0 0 0-3-6.2M13.5 10.5 17 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    form: '<rect x="4" y="3" width="16" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    page: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 2v6h6M9 13h6M9 17h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    phone: '<path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 2v6h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  const svg = (name, size = 24) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${icons[name] || ''}</svg>`;

  /* Configuration (single source of truth) — falls back to {} if missing */
  const CONFIG = window.SITE_CONFIG || {};

  /* ============ 1b. BRAND INJECTION ============
     Pull all branding from config so the site can be rebranded by editing
     only js/config.js. Static HTML acts as a graceful no-JS fallback. */
  function applyBrand() {
    const b = CONFIG.brand;
    if (!b) return;
    if (b.name && b.tagline) document.title = `${b.name} — ${b.tagline}`;

    const fill = (key, value) => {
      if (value == null) return;
      $$(`[data-brand="${key}"]`).forEach(el => { el.textContent = value; });
    };
    fill('name', b.name);
    fill('primary', b.primary);
    fill('secondary', b.secondary);
    fill('tagline', b.tagline);

    if (b.email) $$('[data-brand="email"]').forEach(el => { el.textContent = b.email; el.setAttribute('href', 'mailto:' + b.email); });
    if (b.phone) $$('[data-brand="phone"]').forEach(el => { el.textContent = b.phone; el.setAttribute('href', 'tel:' + b.phone.replace(/[^0-9+]/g, '')); });

    const modalTitle = $('#modalTitle');
    if (modalTitle && b.name) modalTitle.textContent = `Join ${b.name}`;
  }
  applyBrand();

  /* ============ 2. PAGE LOADER ============ */
  window.addEventListener('load', () => {
    const loader = $('#loader');
    if (loader) setTimeout(() => loader.classList.add('is-hidden'), 500);
  });

  /* ============ 3. DYNAMIC CONTENT ============
     Content is sourced from js/config.js (SITE_CONFIG). The arrays below
     are fallback defaults used only if the config file fails to load. */
  const programs = CONFIG.programs || [];
  const webdev = CONFIG.webdev || [];
  const partners = CONFIG.partners || [];
  const resources = CONFIG.resources || [];
  const events = CONFIG.events || [];
  const testimonials = CONFIG.testimonials || [];
  const faqs = CONFIG.faqs || [];

  function buildPrograms() {
    const grid = $('#programsGrid');
    if (!grid) return;
    grid.innerHTML = programs.map(p => `
      <article class="glass-card program-card reveal">
        <span class="program-card__icon">${svg(p.icon, 24)}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="#membership" class="program-card__link">Learn More <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </article>`).join('');
  }

  function buildWebdev() {
    const grid = $('#webdevGrid');
    if (!grid) return;
    grid.innerHTML = webdev.map(w => `
      <article class="webdev-card reveal">
        <span class="webdev-card__icon">${svg(w.icon, 22)}</span>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
      </article>`).join('');
  }

  function buildPartners() {
    const track = $('#partnersTrack');
    if (!track) return;
    const set = partners.map(p => `<div class="partner-logo">${svg(p.icon, 22)}<span>${p.name}</span></div>`).join('');
    track.innerHTML = set + set; // duplicate for seamless loop
  }

  function buildResources() {
    const grid = $('#resourcesGrid');
    if (!grid) return;
    grid.innerHTML = resources.map(r => `
      <article class="glass-card resource-card reveal">
        <span class="resource-card__icon">${svg(r.icon, 24)}</span>
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <a href="#" class="resource-card__dl">${svg('download', 16)} Download</a>
      </article>`).join('');
  }

  function buildEvents() {
    const grid = $('#eventsGrid');
    if (!grid) return;
    grid.innerHTML = events.map(e => `
      <article class="glass-card event-card reveal">
        <div class="event-card__date"><span class="event-card__day">${e.day}</span><span class="event-card__mon">${e.mon}</span></div>
        <div class="event-card__body"><span class="tag">${e.tag}</span><h3>${e.title}</h3><p>${e.desc}</p><span class="event-card__meta">${e.meta}</span></div>
      </article>`).join('');
  }

  function buildStories() {
    const grid = $('#storiesGrid');
    if (!grid) return;
    grid.innerHTML = testimonials.map(t => `
      <article class="glass-card story-card reveal">
        <div class="story-card__video" role="img" aria-label="Video testimonial placeholder">
          <button class="story-card__play" aria-label="Play testimonial"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></button>
        </div>
        <p class="story-card__quote">"${t.quote}"</p>
        <div class="story-card__author"><span class="avatar">${t.initials}</span><div><b>${t.name}</b><small>${t.role}</small></div></div>
      </article>`).join('');
  }

  function buildFaq() {
    const acc = $('#accordion');
    if (!acc) return;
    acc.innerHTML = faqs.map(f => `
      <div class="acc-item">
        <button class="acc-head" aria-expanded="false">
          ${f.q}
          <span class="acc-icon"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></span>
        </button>
        <div class="acc-body"><p>${f.a}</p></div>
      </div>`).join('');

    $$('.acc-head', acc).forEach(head => {
      head.addEventListener('click', () => {
        const item = head.parentElement;
        const body = head.nextElementSibling;
        const open = item.classList.contains('is-open');
        // close others
        $$('.acc-item', acc).forEach(i => {
          i.classList.remove('is-open');
          $('.acc-head', i).setAttribute('aria-expanded', 'false');
          $('.acc-body', i).style.maxHeight = null;
        });
        if (!open) {
          item.classList.add('is-open');
          head.setAttribute('aria-expanded', 'true');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }

  buildPrograms(); buildWebdev(); buildPartners(); buildResources(); buildEvents(); buildStories(); buildFaq();

  /* ============ 4. NAVIGATION ============ */
  const nav = $('#nav');
  const navToggle = $('#navToggle');
  const navMenu = $('#navMenu');

  const onScrollNav = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
  onScrollNav();

  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // close mobile menu + smooth scroll on link click
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = $(id);
        if (target) {
          e.preventDefault();
          navMenu.classList.remove('is-open');
          navToggle.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
          const top = target.getBoundingClientRect().top + window.scrollY - 64;
          window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
        }
      }
    });
  });

  // active link via scroll spy
  const sections = $$('main section[id]');
  const navLinks = $$('.nav__link');
  const spy = () => {
    let current = '';
    const pos = window.scrollY + 120;
    sections.forEach(sec => { if (pos >= sec.offsetTop) current = sec.id; });
    navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + current));
  };

  /* ============ 5. THEME TOGGLE ============ */
  const themeToggle = $('#themeToggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('bgf-theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.setAttribute('data-theme', 'dark');

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('bgf-theme', next);
  });

  /* ============ 6. SCROLL PROGRESS + BACK TO TOP ============ */
  const progress = $('#scrollProgress');
  const backToTop = $('#backToTop');

  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    progress.style.width = (scrolled * 100) + '%';
    backToTop.hidden = window.scrollY < 600;
    onScrollNav();
    spy();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' }));

  /* ============ 7. REVEAL ON SCROLL ============ */
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => revealObserver.observe(el));

  /* ============ 8. ANIMATED COUNTERS ============ */
  const animateCounter = (el) => {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + suffix;
    };
    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounter(entry.target); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  $$('.counter').forEach(c => counterObserver.observe(c));

  /* ============ 9. TYPING EFFECT ============ */
  const typedEl = $('#typed');
  if (typedEl && !prefersReduced) {
    const phrases = (CONFIG.typedPhrases && CONFIG.typedPhrases.length) ? CONFIG.typedPhrases : ['mentorship.', 'proven programs.', 'a generous community.', 'real resources.'];
    let pi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = phrases[pi];
      typedEl.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; setTimeout(tick, 70); }
      else if (deleting && ci > 0) { ci--; setTimeout(tick, 40); }
      else if (!deleting && ci === word.length) { deleting = true; setTimeout(tick, 1600); }
      else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 250); }
    };
    setTimeout(tick, 900);
  } else if (typedEl) {
    typedEl.textContent = 'mentorship, programs & community.';
  }

  /* ============ 10. CURSOR GLOW + CARD SPOTLIGHT ============ */
  const glow = $('#cursorGlow');
  if (glow && window.matchMedia('(hover: hover)').matches) {
    let gx = 0, gy = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', (e) => { gx = e.clientX; gy = e.clientY; });
    const render = () => {
      cx += (gx - cx) * 0.12; cy += (gy - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(render);
    };
    render();
  }

  // program card spotlight follows pointer
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.program-card');
    if (card) {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }
  });

  /* ============ 11. MODAL ============ */
  const modal = $('#modal');
  const modalForm = $('#modalForm');
  const modalSuccess = $('#modalSuccess');
  const modalTitle = $('#modalTitle');
  const modalSub = $('#modalSub');
  const roleSelect = $('#m-role');
  let lastFocused = null;

  const openModal = (role) => {
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalForm.hidden = false;
    modalSuccess.hidden = true;
    if (role) {
      modalTitle.textContent = `Apply as ${role}`;
      modalSub.textContent = 'Complete the form and our team will reach out shortly.';
      if (roleSelect) roleSelect.value = role;
    } else {
      modalTitle.textContent = `Join ${(CONFIG.brand && CONFIG.brand.name) || 'Us'}`;
      modalSub.textContent = 'Complete the form and our team will reach out shortly.';
    }
    setTimeout(() => $('#m-name').focus(), 100);
  };
  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  $$('.js-apply').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.role)));
  $('#fabJoin').addEventListener('click', () => openModal());
  $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closePopup(); }
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate(modalForm)) return;
    modalForm.hidden = true;
    modalSuccess.hidden = false;
  });

  /* ============ 12. FORMS ============ */
  // simple required-field validation
  function validate(form) {
    let ok = true;
    $$('[required]', form).forEach(field => {
      const valid = field.type === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value) : field.value.trim() !== '';
      field.classList.toggle('is-invalid', !valid);
      if (!valid) ok = false;
    });
    return ok;
  }
  // live-clear invalid state
  document.addEventListener('input', (e) => {
    if (e.target.classList && e.target.classList.contains('is-invalid')) e.target.classList.remove('is-invalid');
  });

  // Contact form
  const contactForm = $('#contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate(contactForm)) return;
    $('#contactSuccess').hidden = false;
    contactForm.reset();
    setTimeout(() => { $('#contactSuccess').hidden = true; }, 5000);
  });

  // Footer newsletter
  const footerNl = $('#footerNewsletter');
  footerNl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate(footerNl) && !$('#nl-email').value) return;
    $('#nlNote').hidden = false;
    footerNl.reset();
  });

  // Brochure "download" (placeholder action)
  $$('.js-brochure').forEach(btn => btn.addEventListener('click', () => {
    btn.textContent = 'Preparing brochure…';
    setTimeout(() => { btn.textContent = 'Download started ✓'; }, 1200);
    setTimeout(() => { btn.textContent = 'Download Brochure'; }, 4000);
  }));

  /* ============ 13. NEWSLETTER POPUP ============ */
  const popup = $('#newsletterPopup');
  const popupClose = $('#popupClose');
  const popupForm = $('#popupForm');
  const closePopup = () => { popup.classList.remove('is-open'); popup.setAttribute('aria-hidden', 'true'); };

  if (!sessionStorage.getItem('bgf-popup-seen')) {
    setTimeout(() => {
      popup.classList.add('is-open');
      popup.setAttribute('aria-hidden', 'false');
      sessionStorage.setItem('bgf-popup-seen', '1');
    }, 9000);
  }
  popupClose.addEventListener('click', closePopup);
  popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const card = $('.popup__card');
    card.innerHTML = '<span class="modal__check" style="margin:auto"><svg viewBox="0 0 24 24" width="40" height="40"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><h3 style="text-align:center;margin-top:12px">You\'re in!</h3><p style="text-align:center">Thanks for subscribing. Watch your inbox for growth tips.</p>';
    setTimeout(closePopup, 2200);
  });

  /* ============ FOOTER YEAR ============ */
  $('#year').textContent = new Date().getFullYear();

})();
