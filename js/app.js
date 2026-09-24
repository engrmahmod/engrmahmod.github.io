/* UX BRIDGE IMPORT & EXPORT — site logic */
'use strict';

const WA_NUMBER = '2349066666633';

const SERVICES = [
  {
    slug: 'vehicles', name: 'Vehicles',
    tagline: 'Cars for sale in Nigeria',
    description: 'Quality vehicles sourced and supplied — from sedans to SUVs. Tap to see our current stock.',
    photos: [
      ['img/vehicles/v1.jpg', 'Toyota Corolla fleet'],
      ['img/vehicles/v2.jpg', 'Sedans ready for delivery'],
      ['img/vehicles/v3.jpg', 'Vehicle warehouse'],
      ['img/vehicles/v4.jpg', 'Stock lineup'],
      ['img/vehicles/v5.jpg', 'Fresh arrivals'],
      ['img/vehicles/v6.jpg', 'Sedans in storage'],
      ['img/vehicles/v7.jpg', 'Range Rover in container'],
      ['img/vehicles/v8.jpg', 'Toyota Hilux pickup'],
      ['img/vehicles/v9.jpg', 'Toyota Hilux front view'],
      ['img/vehicles/v10.jpg', 'Vehicle supply proposal — 158 units'],
      ['img/vehicles/v11.jpg', 'UCC dealership partnership'],
      ['img/vehicles/v12.jpg', 'Car showroom visit'],
      ['img/vehicles/v13.jpg', 'Cadillac Escalade'],
      ['img/vehicles/v14.jpg', 'Cadillac Escalade rear view'],
      ['img/vehicles/v15.jpg', 'Honda Crider stock'],
      ['img/vehicles/v16.jpg', 'Toyota Hilux GR'],
      ['img/vehicles/v17.jpg', 'Range Rover secured in container'],
      ['img/vehicles/v18.jpg', 'UX BRIDGES showroom'],
      ['img/vehicles/v19.jpg', 'Sedans and SUVs on ground'],
      ['img/vehicles/v20.jpg', 'Toyota Corolla warehouse stock'],
      ['img/vehicles/v21.jpg', 'Toyota Hilux GR Launch Edition'],
      ['img/vehicles/v22.jpg', 'Toyota stock inspection'],
    ],
  },
  {
    slug: 'trucks', name: 'Trucks',
    tagline: 'Heavy-duty HOWO trucks',
    description: 'Heavy-duty trucks and tippers — HOWO and Sinotruk units available for serious work.',
    photos: [
      ['img/trucks/t1.jpg', 'HOWO truck head'],
      ['img/trucks/t2.jpg', 'HOWO tipper'],
      ['img/trucks/t3.jpg', 'Sinotruk dump truck'],
      ['img/trucks/t4.jpg', 'HOWO trucks lineup'],
      ['img/trucks/t5.jpg', 'HOWO chassis'],
      ['img/trucks/t6.jpg', 'HOWO tipper on site'],
      ['img/trucks/t7.jpg', 'HOWO chassis rear view'],
      ['img/trucks/t8.jpg', 'HOWO dump truck'],
      ['img/trucks/t9.jpg', 'Dump truck delivery inspection'],
      ['img/trucks/t10.jpg', 'Sinotruk dump trucks'],
      ['img/trucks/t11.jpg', 'Sinotruk factory visit'],
      ['img/trucks/t12.jpg', 'Dump truck warehouse'],
      ['img/trucks/t13.jpg', 'Sinotruk dump truck inspection'],
      ['img/trucks/t14.jpg', 'HOWO dump truck'],
      ['img/trucks/t15.jpg', 'Shacman truck handover'],
      ['img/trucks/t16.jpg', 'Engine inspection at workshop'],
      ['img/trucks/t17.jpg', 'HOWO dump truck unit'],
      ['img/trucks/t18.jpg', 'HOWO truck front view'],
      ['img/trucks/t19.jpg', 'HOWO dump trucks in yard'],
      ['img/trucks/t20.jpg', 'Sinotruk dump trucks ready'],
      ['img/trucks/t21.jpg', 'HOWO trucks lineup'],
      ['img/trucks/t22.jpg', 'HOWO trucks on trailer at sunset'],
      ['img/trucks/t23.jpg', 'HOWO dump trucks in snow'],
      ['img/trucks/t24.jpg', 'HOWO trucks in snow yard'],
      ['img/trucks/t25.jpg', 'LPG tanker trailers'],
      ['img/trucks/t26.jpg', 'Diesel engine at truck plant'],
      ['img/trucks/t27.jpg', 'Sinotruk trucks in snow'],
    ],
  },
  {
    slug: 'cargo', name: 'Cargo',
    tagline: 'Air, sea & express freight',
    description: 'China-to-Nigeria freight forwarding by air, sea and express. Track every shipment from dispatch to delivery.',
    photos: [
      ['img/cargo/cg1.jpg', 'HOWO tractor chassis at port'],
      ['img/cargo/cg2.jpg', 'Truck craned onto vessel'],
      ['img/cargo/cg3.jpg', 'Truck loading at port'],
      ['img/cargo/cg4.jpg', 'Truck chassis crane lift'],
      ['img/cargo/cg5.jpg', 'Dump truck crane loading'],
      ['img/cargo/cg6.jpg', 'Dump truck vessel loading'],
      ['img/cargo/cg7.jpg', 'Trucks on vessel deck'],
      ['img/cargo/cg8.jpg', 'Truck crane lift at port'],
      ['img/cargo/cg9.jpg', 'Stacked trucks on vessel'],
      ['img/cargo/cg10.jpg', 'Trucks shipped on deck'],
      ['img/cargo/cg11.jpg', 'Stacked dump trucks on vessel'],
      ['img/cargo/cg12.jpg', 'Cargo hold — truck beds and parts'],
      ['img/cargo/cg13.jpg', 'Tractor head unloading at port'],
    ],
  },
  {
    slug: 'procurement', name: 'Procurement',
    tagline: 'Sourcing you can trust',
    description: 'We find and verify suppliers, negotiate pricing and manage purchase orders so you receive exactly what you paid for.',
    photos: [
      ['img/procurement/p1.jpg', 'Supplier meeting in China'],
      ['img/procurement/p2.jpg', 'Factory visit in China'],
      ['img/procurement/p3.jpg', 'Supplier handshake'],
      ['img/procurement/p4.jpg', 'Partner meeting'],
      ['img/procurement/p5.jpg', 'Supplier partnership handshake'],
      ['img/procurement/p6.jpg', 'Sourcing operations office'],
      ['img/procurement/p7.jpg', 'Factory partnership'],
      ['img/procurement/p8.jpg', 'Factory inspection visit'],
      ['img/procurement/p9.jpg', 'Film blowing machine sourcing'],
      ['img/procurement/p10.jpg', 'Industrial machines at factory'],
      ['img/procurement/p11.jpg', 'Machinery supplier visit'],
      ['img/procurement/p12.jpg', 'Business handshake'],
      ['img/procurement/p13.jpg', 'Pipe factory visit'],
      ['img/procurement/p14.jpg', 'Film machines at factory'],
      ['img/procurement/p15.jpg', 'Pipe extrusion plant'],
      ['img/procurement/p16.jpg', 'Factory visit with partner'],
      ['img/procurement/p17.jpg', 'Truck factory visit'],
      ['img/procurement/p18.jpg', 'Film machine inspection'],
      ['img/procurement/p19.jpg', 'Electrical cabinet sourcing'],
      ['img/procurement/p20.jpg', 'Supplier visit'],
      ['img/procurement/p21.jpg', 'Film blowing machine tower'],
      ['img/procurement/p22.jpg', 'Partner office meeting'],
    ],
  },
  {
    slug: 'customs', name: 'Customs',
    tagline: 'Clearance without stories',
    description: 'Documentation and customs clearance handled end to end, so your goods move without stories.',
    photos: [],
  },
  {
    slug: 'construction', name: 'Construction',
    tagline: 'Bridges & civil works',
    description: 'Bridge and civil construction works — concrete, steel reinforcement, marine works and site operations, delivered to spec.',
    photos: [
      ['img/construction/c1.jpg', 'Cable-stayed pedestrian bridge'],
      ['img/construction/c2.jpg', 'Concrete pouring on site'],
      ['img/construction/c3.jpg', 'Steel reinforcement works'],
      ['img/construction/c4.jpg', 'Marine excavation works'],
      ['img/construction/c7.jpg', 'Bridge rehabilitation over water'],
      ['img/construction/c8.jpg', 'Barge operations crew'],
      ['img/construction/c9.jpg', 'Barge concrete operations'],
      ['img/construction/c11.jpg', 'CAT 320C excavator'],
    ],
  },
  {
    slug: 'dam-works', name: 'Dam Works',
    tagline: 'Dams & hydraulic structures',
    description: 'Dam construction and hydraulic structures — embankments, spillways, reinforcement and dam fixtures, built to last.',
    photos: [
      ['img/construction/c5.jpg', 'Riverside dam construction'],
      ['img/construction/c6.jpg', 'Dam and reservoir'],
      ['img/construction/c10.jpg', 'Pile cap reinforcement'],
      ['img/damworks/d1.jpg', 'Aerial view of dam'],
      ['img/damworks/d2.jpg', 'Dam face and spillway'],
      ['img/damworks/d3.jpg', 'Dam fixture installation'],
    ],
  },
  {
    slug: 'solar', name: 'Solar',
    tagline: 'Solar for office & home',
    description: 'Solar installations for offices and homes — panels, inverters and battery storage, installed and working.',
    photos: [
      ['img/solar/s1.jpg', 'Solar panel farm'],
      ['img/solar/s2.jpg', 'Panel rows installation'],
      ['img/solar/s3.jpg', 'Inverter setup'],
      ['img/solar/s4.jpg', 'Battery storage bank'],
      ['img/solar/s5.jpg', 'Hybrid inverter system'],
      ['img/solar/s6.jpg', 'Control and distribution'],
      ['img/solar/s7.jpg', 'Battery rack installation'],
      ['img/solar/s8.jpg', 'Completed solar setup'],
    ],
  },
  {
    slug: 'solar-powered-dam', name: 'Solar Powered Dam',
    tagline: 'Solar-driven water works',
    description: 'Solar-powered dam and water treatment works — clean energy driving water infrastructure.',
    photos: [
      ['img/solar-dam/sd1.jpg', 'Treatment plant overview'],
      ['img/solar-dam/sd2.jpg', 'Clarifier tanks'],
      ['img/solar-dam/sd3.jpg', 'Plant walkway and tanks'],
      ['img/solar-dam/sd4.jpg', 'Sedimentation tanks'],
      ['img/solar-dam/sd5.jpg', 'Tank bridge structure'],
      ['img/solar-dam/sd6.jpg', 'Plant aerial view'],
      ['img/solar-dam/sd7.jpg', 'Dam aerial view'],
    ],
  },
  {
    slug: 'real-estate', name: 'Real Estate',
    tagline: 'Property, made simple',
    description: 'Property sourcing and advisory — we help you find, verify and secure real estate opportunities.',
    photos: [],
  },
  {
    slug: 'staffing', name: 'Staffing',
    tagline: 'Right people, right roles',
    description: 'Recruitment and staffing support for your projects and business — the right people in the right roles.',
    photos: [],
  },
];

/* ---------- Service cards ---------- */
const grid = document.getElementById('service-grid');
SERVICES.forEach((svc) => {
  const card = document.createElement('button');
  card.className = 'service-card reveal';
  card.dataset.service = svc.slug;
  card.setAttribute('aria-label', 'View ' + svc.name + ' gallery');

  const cover = svc.photos.length
    ? `<div class="service-cover"><img src="${svc.photos[0][0]}" alt="${svc.name}" loading="lazy"></div>`
    : `<div class="service-cover-fallback"><span>${svc.name[0]}</span></div>`;
  const count = svc.photos.length
    ? `<span class="photo-count">${svc.photos.length} photos</span>` : '';

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

/* ---------- Quote form service options ---------- */
const serviceSelect = document.getElementById('q-service');
SERVICES.forEach((svc) => {
  const opt = document.createElement('option');
  opt.value = svc.name;
  opt.textContent = svc.name;
  serviceSelect.appendChild(opt);
});

/* ---------- Gallery modal ---------- */
const modal = document.getElementById('gallery-modal');
const lightbox = document.getElementById('lightbox');

function openGallery(svc) {
  document.getElementById('modal-title').textContent = svc.name;
  document.getElementById('modal-desc').textContent = svc.description;
  const gridEl = document.getElementById('modal-grid');
  gridEl.innerHTML = '';

  if (!svc.photos.length) {
    gridEl.innerHTML = '<p class="muted">Photos coming soon — chat with us on WhatsApp for details.</p>';
  } else {
    svc.photos.forEach(([src, cap]) => {
      const fig = document.createElement('figure');
      fig.className = 'g-item';
      const img = document.createElement('img');
      img.src = src; img.alt = cap; img.loading = 'lazy';
      const fc = document.createElement('figcaption');
      fc.textContent = cap;
      fig.appendChild(img); fig.appendChild(fc);
      fig.addEventListener('click', () => openLightbox(src, cap));
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

/* ---------- Quote form → WhatsApp ---------- */
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

/* ---------- Nav scroll effect ---------- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
