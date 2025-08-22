document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('proyectos-grid');
  if (!grid || !window.PROJECTS) return;

  grid.innerHTML = window.PROJECTS.map(p => `
    <a class="proyecto-card" href="proyecto.html?id=${p.id}">
      ${p.cover ? `
      <div class="proyecto-media">
        <img src="${p.cover}" alt="${p.title}">
      </div>` : ``}
      <div class="proyecto-body">
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="proyecto-tags">
          ${(p.tech||[]).slice(0,9).map(t=>`<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </a>
  `).join('');
});