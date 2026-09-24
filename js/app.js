/* UX BRIDGE IMPORT & EXPORT — site logic (data-driven: galleries + contact info load from data/*.json) */
'use strict';

let WA_NUMBER = '2349066666633';
let SERVICES = [];
let SITE_CONFIG = {};

/* ---------- Load data files ---------- */
async function loadData() {
  const opts = { cache: 'no-store' };
  const [gRes, cRes] = await Promise.all([
    fetch('data/galleries.json', opts),
    fetch('data/site-config.json', opts),
  ]);
  if (!gRes.ok) throw new Error('galleries.json HTTP ' + gRes.status);
  if (!cRes.ok) throw new Error('site-config.json HTTP ' + cRes.status);
  const g = await gRes.json();
  const c = await cRes.json();
  if (!g || !Array.isArray(g.services)) throw new Error('bad galleries data');
  SERVICES = g.services;
  SITE_CONFIG = c || {};
  const digits = String(SITE_CONFIG.whatsapp_number || '').replace(/\D/g, '');
  if (digits) WA_NUMBER = digits;
}

/* ---------- Apply site config (contact info) ---------- */
function applyConfig() {
  const c = SITE_CONFIG;
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el && val) el.textContent = val;
  };
  const setHref = (id, val) => {
    const el = document.getElementById(id);
    if (el && val) el.href = val;
  };

  setHref('wa-float', 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Hello UX BRIDGE IMPORT & EXPORT'));
  if (c.phone_ng_tel) setHref('tel-ng', 'tel:' + c.phone_ng_tel);
  setText('tel-ng-num', c.phone_ng_display);
  if (c.phone_uk_tel) setHref('tel-uk', 'tel:' + c.phone_uk_tel);
  setText('tel-uk-num', c.phone_uk_display);
  setText('contact-address', c.address);
  if (c.email) setHref('contact-email', 'mailto:' + c.email);

  const total = SERVICES.reduce((n, s) => n + (s.photos ? s.photos.length : 0), 0);
  setText('stat-photos', String(total));
}

/* ---------- Render everything that depends on the data ---------- */
function renderSite() {
  /* ----- Service cards ----- */
  const grid = document.getElementById('service-grid');
  grid.innerHTML = '';
  SERVICES.forEach((svc) => {
    const photos = svc.photos || [];
    const card = document.createElement('button');
    card.className = 'service-card reveal';
    card.dataset.service = svc.slug;
    card.setAttribute('aria-label', 'View ' + svc.name + ' gallery');

    const cover = photos.length
      ? `<div class="service-cover"><img src="${photos[0].src}" alt="${svc.name}" loading="lazy"></div>`
      : `<div class="service-cover-fallback"><span>${svc.name[0]}</span></div>`;
    const count = photos.length
      ? `<span class="photo-count">${photos.length} photos</span>` : '';

    card.innerHTML = `
      <span class="card-arrow" aria-hidden="true">&#8599;</span>
      ${cover}
      <div class="service-card-body">
        <h3>${svc.name}</h3>
        <p>${svc.tagline}</p>
        ${count}
      </div>`;
    card.addEventListener('click', () => openGallery(svc));
    grid.appendChild(card);
  });

  /* ----- Quote form service options ----- */
  const serviceSelect = document.getElementById('q-service');
  serviceSelect.querySelectorAll('option:not([disabled])').forEach((o) => o.remove());
  SERVICES.forEach((svc) => {
    const opt = document.createElement('option');
    opt.value = svc.name;
    opt.textContent = svc.name;
    serviceSelect.appendChild(opt);
  });

  /* ----- Quote form → WhatsApp ----- */
  document.getElementById('quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let ref = 'UB-';
    for (let i = 0; i < 6; i++) ref += chars[Math.floor(Math.random() * chars.length)];

    const lines = [
      'Hello UX BRIDGE IMPORT & EXPORT,',
      'Quote request ' + ref,
      'Name: ' + document.getElementById('q-name').value.trim(),
      'Service: ' + document.getElementById('q-service').value,
      'Details: ' + document.getElementById('q-details').value.trim(),
    ];
    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank');
  });

  initReveal();
}

/* ---------- Gallery modal ---------- */
const modal = document.getElementById('gallery-modal');
const lightbox = document.getElementById('lightbox');

function openGallery(svc) {
  document.getElementById('modal-title').textContent = svc.name;
  document.getElementById('modal-desc').textContent = svc.description;
  const gridEl = document.getElementById('modal-grid');
  gridEl.innerHTML = '';

  const photos = svc.photos || [];
  if (!photos.length) {
    gridEl.innerHTML = '<p class="muted">Photos coming soon — chat with us on WhatsApp for details.</p>';
  } else {
    photos.forEach((p) => {
      const fig = document.createElement('figure');
      fig.className = 'g-item';
      const img = document.createElement('img');
      img.src = p.src; img.alt = p.caption; img.loading = 'lazy';
      const fc = document.createElement('figcaption');
      fc.textContent = p.caption;
      fig.appendChild(img); fig.appendChild(fc);
      fig.addEventListener('click', () => openLightbox(p.src, p.caption));
      gridEl.appendChild(fig);
    });
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeGallery);
modal.addEventListener('click', (e) => { if (e.target === modal) closeGallery(); });

/* ---------- Lightbox ---------- */
function openLightbox(src, cap) {
  const img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = cap;
  document.getElementById('lightbox-cap').textContent = cap;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.getElementById('lightbox-img').src = '';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeLightbox(); closeGallery(); }
});

/* ---------- Nav scroll effect ---------- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el));
}

/* ---------- Boot ---------- */
loadData()
  .then(() => { applyConfig(); renderSite(); })
  .catch(() => {
    const gridEl = document.getElementById('service-grid');
    if (gridEl) gridEl.innerHTML = '<p class="muted">Could not load the galleries. Please check your connection and reload.</p>';
  });
