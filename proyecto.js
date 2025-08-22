document.addEventListener('DOMContentLoaded', () => {
  const qs = new URLSearchParams(location.search);
  const id = parseInt(qs.get('id'),10);
  const arr = window.PROJECTS || [];
  const p = arr.find(x => x.id === id) || arr[0];

  if (!p){ location.href = 'proyectos.html'; return; }

  const $ = (s) => document.querySelector(s);
  document.title = `${p.title} | Victor José Sánchez Laureano`;
  $('#p-title').textContent = p.title;
  $('#p-summary').textContent = p.summary;

  const cover = document.querySelector('.project-cover img');
  if (cover) { cover.src = p.cover || ''; cover.alt = p.title; }

  const gal = document.querySelector('.project-gallery');
  if (gal && Array.isArray(p.gallery) && p.gallery.length) {
    const per = 4;
    const pages = [];
    for (let i = 0; i < p.gallery.length; i += per) {
      pages.push(p.gallery.slice(i, i + per));
    }

    gal.innerHTML = `
      <button class="pg-arrow prev" aria-label="Anterior">‹</button>
      <div class="pg-viewport">
        <div class="pg-track">
          ${pages.map((page, pi) => `
            <div class="pg-page">
              ${page.map((src, idx) => `
                <button class="pg-item" data-src="${src}" data-index="${pi*per + idx}" aria-label="Imagen ${pi*per + idx + 1}">
                  <img src="${src}" alt="${p.title} ${pi*per + idx + 1}">
                </button>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>
      <button class="pg-arrow next" aria-label="Siguiente">›</button>
    `;

    const track = gal.querySelector('.pg-track');
    const prevBtn = gal.querySelector('.pg-arrow.prev');
    const nextBtn = gal.querySelector('.pg-arrow.next');
    let pageIndex = 0;

    function updateArrows(){
      prevBtn.classList.toggle('is-disabled', pageIndex <= 0);
      nextBtn.classList.toggle('is-disabled', pageIndex >= pages.length - 1);
    }
    function goToPage(i){
      pageIndex = Math.max(0, Math.min(pages.length - 1, i));
      track.style.transform = `translateX(-${pageIndex * 100}%)`;
      updateArrows();
    }
    prevBtn.addEventListener('click', () => goToPage(pageIndex - 1));
    nextBtn.addEventListener('click', () => goToPage(pageIndex + 1));
    updateArrows();

    const items = Array.from(gal.querySelectorAll('.pg-item'));
    function setActiveBySrc(src){
      items.forEach(b => b.classList.toggle('is-active', b.dataset.src === src));
    }
    items.forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.dataset.src;
        if (!cover) return;
        cover.style.opacity = '0';
        const onLoad = () => { cover.style.opacity = '1'; cover.removeEventListener('load', onLoad); };
        cover.addEventListener('load', onLoad);
        cover.src = src;
        cover.alt = `${p.title} - vista ${parseInt(btn.dataset.index,10) + 1}`;
        setActiveBySrc(src);
      });
    });

    setActiveBySrc(cover?.src || p.cover);
  } else if (gal) {
    gal.remove();
  }

  $('#p-desc').textContent = p.description || '';

  const feats = document.querySelector('.project-features');
  if (feats) feats.innerHTML = (p.features||[]).map(f=>`<li>${f}</li>`).join('');

  const tech = document.querySelector('.project-tags');
  if (tech) tech.innerHTML = (p.tech||[]).map(t=>`<span class="tag">${t}</span>`).join('');

  const idx = arr.findIndex(x=>x.id===p.id);
  const prev = arr[(idx - 1 + arr.length) % arr.length];
  const next = arr[(idx + 1) % arr.length];
  const prevA = document.querySelector('.proj-prev');
  const nextA = document.querySelector('.proj-next');
  if (prevA && nextA) {
    prevA.href = `proyecto.html?id=${prev.id}`;
    nextA.href = `proyecto.html?id=${next.id}`;
  }

  const links = document.querySelector('.project-links');
  if (links) {
    const btns = [];
    if (p.repo) btns.push(`<a class="btn-link" href="${p.repo}" target="_blank" rel="noopener">Código</a>`);
    if (p.demo) btns.push(`<a class="btn-link" href="${p.demo}" target="_blank" rel="noopener">Demo</a>`);
    links.innerHTML = btns.join('') || '<span class="muted">Próximamente enlaces</span>';
  }
});