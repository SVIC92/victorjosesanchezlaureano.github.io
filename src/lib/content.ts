// Capa de contenido para las páginas públicas.
// Intenta leer de la base de datos (Neon); si no está configurada o falla,
// usa los datos locales de src/data/*.js como respaldo. Así el sitio nunca se cae.
import * as q from './db';
import type { Profile, Experience, Skill, Certification, Project } from './db';
import { profile as seedProfile } from '../data/profile.js';
import { experience as seedExperience } from '../data/experience.js';
import { skills as seedSkills } from '../data/skills.js';
import { certifications as seedCertifications } from '../data/certifications.js';
import { projects as seedProjects } from '../data/projects.js';

const fallbackProfile: Profile = { id: 1, ...seedProfile };

const fallbackExperiences: Experience[] = seedExperience.map((e, i) => ({
  id: i + 1, role: e.role, company: e.company, location: e.location || '',
  period: e.period, tasks: e.tasks || [], tags: e.tags || [], sort_order: i,
}));

const fallbackSkills: Skill[] = seedSkills.map((s, i) => ({
  id: i + 1, name: s.name, icon: s.icon, category: s.category,
  level: s.level ?? null, bar: typeof s.bar === 'number' ? s.bar : null, sort_order: i,
}));

const fallbackCertifications: Certification[] = seedCertifications.map((c, i) => ({
  id: c.id, titulo: c.titulo, mini: c.mini, pdf: c.pdf, resumen: c.resumen,
  descripcion: c.descripcion || [], sort_order: i,
}));

const fallbackProjects: Project[] = seedProjects.map((p, i) => ({
  id: p.id, title: p.title, summary: p.summary, cover: p.cover, gallery: p.gallery || [],
  description: p.description, features: p.features || [], tech: p.tech || [],
  repo: p.repo || '', demo: p.demo || '', sort_order: i,
}));

async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch {
    return fallback;
  }
}

export const loadProfile = () =>
  safe(async () => (await q.getProfile()) ?? fallbackProfile, fallbackProfile);

export const loadExperiences = () => safe(q.getExperiences, fallbackExperiences);
export const loadSkills = () => safe(q.getSkills, fallbackSkills);
export const loadCertifications = () => safe(q.getCertifications, fallbackCertifications);
export const loadProjects = () => safe(q.getProjects, fallbackProjects);

export const loadCertification = (id: number) =>
  safe(async () => await q.getCertification(id), fallbackCertifications.find((c) => c.id === id) ?? null);

export const loadProject = (id: number) =>
  safe(async () => await q.getProject(id), fallbackProjects.find((p) => p.id === id) ?? null);
