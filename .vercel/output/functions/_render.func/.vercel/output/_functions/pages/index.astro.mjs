import { c as createComponent, e as renderComponent, b as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_CezLyfyQ.mjs';
import 'kleur/colors';
import { a as loadProfile, b as loadExperiences, c as loadSkills, l as loadCertifications, d as loadProjects, $ as $$Layout, s as skillFilters, e as levelLabels } from '../chunks/content_CGZ5lOhH.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const [profile, experience, skills, certifications, projects] = await Promise.all([
    loadProfile(),
    loadExperiences(),
    loadSkills(),
    loadCertifications(),
    loadProjects()
  ]);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="perfil" class="intro"> <div class="intro-grid"> <div class="intro-left"> <img${addAttribute(profile.avatar_url, "src")}${addAttribute(`Foto de ${profile.name}`, "alt")} class="avatar"> <h1>${profile.name}</h1> <p>${profile.role}</p> </div> <div class="intro-right"> <h2>Perfil Profesional</h2> <p>${profile.summary}</p> </div> </div> </section> <section id="experiencia" class="experiencia"> <h2>Experiencia Laboral</h2> <p class="section-intro">Trayectoria profesional y prácticas más relevantes.</p> <div class="exp-timeline"> ${experience.map((e) => renderTemplate`<article class="exp-item"> <div class="exp-dot" aria-hidden="true"></div> <div class="exp-card"> <div class="exp-head"> <h3 class="exp-role">${e.role}</h3> <span class="exp-date">${e.period}</span> </div> <p class="exp-company">${e.company}${e.location ? ` \xB7 ${e.location}` : ""}</p> <ul class="exp-tasks"> ${e.tasks.map((t) => renderTemplate`<li>${t}</li>`)} </ul> ${e.tags && e.tags.length > 0 && renderTemplate`<div class="exp-tags"> ${e.tags.map((tag) => renderTemplate`<span class="exp-tag">${tag}</span>`)} </div>`} </div> </article>`)} </div> </section> <section> <h2 id="proyectos">Proyectos Institucionales</h2> <div class="proyectos-grid"> ${projects.map((p) => renderTemplate`<a class="proyecto-card"${addAttribute(`/proyecto/${p.id}`, "href")}> ${p.cover && renderTemplate`<div class="proyecto-media"> <img${addAttribute(p.cover, "src")}${addAttribute(p.title, "alt")}> </div>`} <div class="proyecto-body"> <h3>${p.title}</h3> <p>${p.summary}</p> </div> </a>`)} </div> </section> <section> <h2 id="habilidades">Habilidades</h2> <div class="skill-filters" role="tablist" aria-label="Filtros de habilidades"> ${skillFilters.map((f, i) => renderTemplate`<button${addAttribute(`chip${i === 0 ? " is-active" : ""}`, "class")}${addAttribute(f.key, "data-filter")} role="tab"${addAttribute(i === 0 ? "true" : "false", "aria-selected")}>${f.label}</button>`)} </div> <div class="skills-grid"> ${skills.map((s) => renderTemplate`<div class="skill"${addAttribute(s.category, "data-category")}> <div class="skill-header"> <div class="skill-name"> <span class="skill-icon"> <img${addAttribute(s.icon, "src")}${addAttribute(s.name, "alt")}> </span> <span>${s.name}</span> </div> ${s.level && renderTemplate`<span${addAttribute(`level-badge lvl-${s.level}`, "class")}>${levelLabels[s.level]}</span>`} </div> ${typeof s.bar === "number" && renderTemplate`<div class="skill-bar"${addAttribute(`--level: ${s.bar}%;`, "style")}${addAttribute(`Nivel ${s.bar}%`, "aria-label")}><span></span></div>`} </div>`)} </div> </section> <section> <h2 id="certificaciones">Certificaciones</h2> <div class="cert-carousel"> <button class="cert-arrow prev" aria-label="Anterior">‹</button> <div class="cert-viewport"> <div class="cert-track"> ${certifications.map((c) => renderTemplate`<a${addAttribute(`/certificacion/${c.id}`, "href")} class="cert-card"> <img${addAttribute(c.mini, "src")}${addAttribute(c.titulo, "alt")}> <h3>${c.titulo}</h3> </a>`)} </div> </div> <button class="cert-arrow next" aria-label="Siguiente">›</button> </div> </section> <section> <h2 id="contacto">Contacto</h2> <div class="contacto-grid"> <a class="contacto-item"${addAttribute(`mailto:${profile.email}`, "href")} target="_blank" aria-label="Correo electrónico"> <img src="/images/email-icon.png" alt="Correo" class="contacto-icon"> <div class="contacto-info"> <span class="contacto-titulo">Correo</span> <span class="contacto-descripcion">${profile.email}</span> </div> </a> <a class="contacto-item"${addAttribute(profile.linkedin_url, "href")} target="_blank" aria-label="LinkedIn"> <img src="/images/linkedin-icon.png" alt="LinkedIn" class="contacto-icon"> <div class="contacto-info"> <span class="contacto-titulo">LinkedIn</span> <span class="contacto-descripcion">${profile.linkedin_label}</span> </div> </a> <a class="contacto-item"${addAttribute(profile.github_url, "href")} target="_blank" aria-label="GitHub"> <img src="/images/github-icon.png" alt="GitHub" class="contacto-icon"> <div class="contacto-info"> <span class="contacto-titulo">GitHub</span> <span class="contacto-descripcion">${profile.github_label}</span> </div> </a> </div> </section> ` })} `;
}, "C:/Users/VJSL/Downloads/portafolio_vjsl/src/pages/index.astro", void 0);

const $$file = "C:/Users/VJSL/Downloads/portafolio_vjsl/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
