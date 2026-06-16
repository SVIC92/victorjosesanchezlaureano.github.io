import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_CezLyfyQ.mjs';
import 'kleur/colors';
import { d as loadProjects, $ as $$Layout } from '../chunks/content_CGZ5lOhH.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await loadProjects();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos | Victor Jos\xE9 S\xE1nchez Laureano" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h2>Proyectos</h2> <div class="proyectos-grid"> ${projects.map((p) => renderTemplate`<a class="proyecto-card"${addAttribute(`/proyecto/${p.id}`, "href")}> ${p.cover && renderTemplate`<div class="proyecto-media"> <img${addAttribute(p.cover, "src")}${addAttribute(p.title, "alt")}> </div>`} <div class="proyecto-body"> <h3>${p.title}</h3> <p>${p.summary}</p> <div class="proyecto-tags"> ${(p.tech || []).slice(0, 9).map((t) => renderTemplate`<span class="tag">${t}</span>`)} </div> </div> </a>`)} </div> </section> ` })}`;
}, "C:/Users/VJSL/Downloads/portafolio_vjsl/src/pages/proyectos.astro", void 0);

const $$file = "C:/Users/VJSL/Downloads/portafolio_vjsl/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
