import { c as createComponent, e as renderComponent, b as renderTemplate, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_CezLyfyQ.mjs';
import 'kleur/colors';
import { l as loadCertifications, $ as $$Layout } from '../../chunks/content_CGZ5lOhH.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = parseInt(Astro2.params.id ?? "", 10);
  const certifications = await loadCertifications();
  const len = certifications.length;
  const idx = certifications.findIndex((c) => c.id === id);
  if (idx === -1) {
    return Astro2.redirect("/");
  }
  const cert = certifications[idx];
  const prevId = certifications[(idx - 1 + len) % len].id;
  const nextId = certifications[(idx + 1) % len].id;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${cert.titulo} | Certificaci\xF3n`, "description": cert.resumen }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="cert-viewer"> <h2 id="cert-title">${cert.titulo}</h2> <div class="cert-layout"> <div class="viewer-pane"> <iframe id="cert-pdf"${addAttribute(cert.pdf, "src")}${addAttribute(cert.titulo, "title")}></iframe> </div> <aside class="sidebar-pane"> <div class="desc-card"> <h3>Descripción de la certificación</h3> <p id="cert-resumen" class="desc-intro">${cert.resumen}</p> <div id="cert-desc"> ${Array.isArray(cert.descripcion) && cert.descripcion.length > 0 && renderTemplate`<ul class="desc-list"> ${cert.descripcion.map((item) => renderTemplate`<li>${item}</li>`)} </ul>`} </div> </div> </aside> </div> <div class="nav-buttons"> <a id="prev-cert"${addAttribute(`/certificacion/${prevId}`, "href")}>Anterior</a> <a id="next-cert"${addAttribute(`/certificacion/${nextId}`, "href")}>Siguiente</a> <a href="/">Volver</a> </div> </div> ` })}`;
}, "C:/Users/VJSL/Downloads/portafolio_vjsl/src/pages/certificacion/[id].astro", void 0);

const $$file = "C:/Users/VJSL/Downloads/portafolio_vjsl/src/pages/certificacion/[id].astro";
const $$url = "/certificacion/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
