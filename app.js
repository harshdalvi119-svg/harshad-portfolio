/* ============================================================
   APP LOGIC
   Renders project & certification cards from data.js, and
   handles switching between the list view and detail view.
   ============================================================ */

const projectsGrid = document.getElementById('projectsGrid');
const certGrid = document.getElementById('certGrid');
const detailView = document.getElementById('detailView');
const mainContent = document.getElementById('mainContent');
const detailBody = document.getElementById('detailBody');
const backBtn = document.getElementById('backBtn');

/* ---------- RENDER: PROJECT CARDS ---------- */
function renderProjectCards() {
  projectsGrid.innerHTML = PROJECTS.map(p => `
    <div class="project-card reveal" data-project="${p.id}" tabindex="0" role="button" aria-label="View ${p.title} case study">
      <div class="project-num">${p.num} / ${p.category}</div>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.summary}</div>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
      ${p.gallery.length ? `
        <div class="project-gallery ${p.gallery.length === 1 ? 'single' : ''}">
          ${p.gallery.slice(0, 3).map(g => `<img src="${g.src}" alt="${g.caption}">`).join('')}
        </div>` : ''}
      <div class="project-cta">View case study →</div>
    </div>
  `).join('');

  projectsGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openProject(card.dataset.project));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(card.dataset.project); }
    });
  });
}

/* ---------- RENDER: CERTIFICATION CARDS ---------- */
function renderCertCards() {
  certGrid.innerHTML = CERTIFICATIONS.map(c => `
    <div class="cert-card reveal" data-cert="${c.id}" tabindex="0" role="button" aria-label="View ${c.name} details">
      <div class="cert-icon">${c.icon}</div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
      </div>
      <div class="cert-arrow">→</div>
    </div>
  `).join('');

  certGrid.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => openCert(card.dataset.cert));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCert(card.dataset.cert); }
    });
  });
}

/* ---------- DETAIL VIEW: PROJECT ---------- */
function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  detailBody.innerHTML = `
    <div class="detail-eyebrow">${p.category}</div>
    <h2 class="detail-title">${p.title}</h2>
    <div class="project-tech" style="margin-bottom:2.5rem;">
      ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
    </div>

    ${p.gallery.length ? `
      <div class="detail-gallery">
        ${p.gallery.map(g => `
          <figure class="detail-gallery-item">
            <img src="${g.src}" alt="${g.caption}">
            <figcaption>${g.caption}</figcaption>
          </figure>
        `).join('')}
      </div>` : ''}

    <div class="detail-block">
      <h3>Problem Statement</h3>
      <p>${p.problem}</p>
    </div>

    <div class="detail-block">
      <h3>Approach</h3>
      <ul class="detail-list">
        ${p.approach.map(a => `<li>${a}</li>`).join('')}
      </ul>
    </div>

    <div class="detail-grid-2">
      <div class="detail-block">
        <h3>Tools & Technologies</h3>
        <ul class="detail-list">
          ${p.tools.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
      <div class="detail-block">
        <h3>Key Highlights</h3>
        <ul class="detail-list">
          ${p.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="detail-block detail-outcome">
      <h3>Result / Outcome</h3>
      <p>${p.outcome}</p>
    </div>
  `;

  showDetail();
}

/* ---------- DETAIL VIEW: CERTIFICATION ---------- */
function openCert(id) {
  const c = CERTIFICATIONS.find(x => x.id === id);
  if (!c) return;

  detailBody.innerHTML = `
    <div class="detail-eyebrow">Certification</div>
    <h2 class="detail-title">${c.icon} &nbsp;${c.name}</h2>
    <div class="detail-block">
      <h3>Issuer</h3>
      <p>${c.issuer}</p>
    </div>
    <div class="detail-block">
      <h3>About this Certification</h3>
      <p>${c.description}</p>
    </div>
    <div class="detail-block">
      <h3>What it Covers</h3>
      <ul class="detail-list">
        ${c.covers.map(x => `<li>${x}</li>`).join('')}
      </ul>
    </div>
    <div class="detail-block detail-outcome">
      <h3>Relevance to My Work</h3>
      <p>${c.relevance}</p>
    </div>
  `;

  showDetail();
}

/* ---------- VIEW SWITCHING ---------- */
function showDetail() {
  mainContent.classList.add('hidden');
  detailView.classList.add('visible');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function showMain() {
  detailView.classList.remove('visible');
  mainContent.classList.remove('hidden');
}

backBtn.addEventListener('click', showMain);

/* ---------- INIT ---------- */
renderProjectCards();
renderCertCards();

/* Custom cursor */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();

/* Scroll reveal (re-run whenever new cards are rendered) */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
}
initReveal();
