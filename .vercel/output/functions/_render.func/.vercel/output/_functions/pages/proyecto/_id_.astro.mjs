import { c as createComponent, e as renderComponent, b as renderTemplate, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_CezLyfyQ.mjs';
import 'kleur/colors';
import { d as loadProjects, $ as $$Layout } from '../../chunks/content_CGZ5lOhH.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = parseInt(Astro2.params.id ?? "", 10);
  const projects = await loadProjects();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) {
    return Astro2.redirect("/proyectos");
  }
  const project = projects[idx];
  const prevId = projects[(idx - 1 + projects.length) % projects.length].id;
  const nextId = projects[(idx + 1) % projects.length].id;
  const links = [];
  if (project.repo) links.push({ href: project.repo, label: "C\xF3digo" });
  if (project.demo) links.push({ href: project.demo, label: "Demo" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project.title} | Victor Jos\xE9 S\xE1nchez Laureano`, "description": project.summary }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="project-viewer"> <div class="project-header"> <h2 id="p-title">${project.title}</h2> <p id="p-summary" class="muted">${project.summary}</p> </div> <div class="project-layout"> <div class="project-left"> <div class="project-cover"> <img${addAttribute(project.cover, "src")}${addAttribute(project.title, "alt")}> </div> <div class="project-gallery"${addAttribute(project.title, "data-title")}${addAttribute(JSON.stringify(project.gallery || []), "data-gallery")}></div> </div> <aside class="project-right"> <div class="desc-card"> <h3>Descripción</h3> <p id="p-desc">${project.description}</p> <h4>Características</h4> <ul class="project-features"> ${(project.features || []).map((f) => renderTemplate`<li>${f}</li>`)} </ul> <h4>Tecnologías</h4> <div class="project-tags"> ${(project.tech || []).map((t) => renderTemplate`<span class="tag">${t}</span>`)} </div> <div class="project-links" style="margin-top:.6rem;"> ${links.length > 0 ? links.map((l) => renderTemplate`<a class="btn-link"${addAttribute(l.href, "href")} target="_blank" rel="noopener">${l.label}</a>`) : renderTemplate`<span class="muted">Próximamente enlaces</span>`} </div> </div> <div class="project-nav"> <a class="btn-link proj-prev"${addAttribute(`/proyecto/${prevId}`, "href")}>‹ Anterior</a> <a class="btn-link proj-next"${addAttribute(`/proyecto/${nextId}`, "href")}>Siguiente ›</a> </div> </aside> </div> </section> ` })} `;
}, "C:/Users/VJSL/Downloads/portafolio_vjsl/src/pages/proyecto/[id].astro", void 0);

const $$file = "C:/Users/VJSL/Downloads/portafolio_vjsl/src/pages/proyecto/[id].astro";
const $$url = "/proyecto/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
