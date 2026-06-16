import { neon } from '@neondatabase/serverless';

// Cliente perezoso: se crea en la primera consulta, no al importar el módulo
// (así `astro build` no falla aunque DATABASE_URL no esté presente).
let _sql: ReturnType<typeof neon> | null = null;
function db() {
  if (_sql) return _sql;
  const url = process.env.DATABASE_URL || import.meta.env.DATABASE_URL;
  if (!url) throw new Error('Falta DATABASE_URL en el entorno.');
  _sql = neon(url);
  return _sql;
}

// ---------- Tipos ----------
export interface Profile {
  id: number;
  name: string;
  role: string;
  summary: string;
  avatar_url: string;
  email: string;
  linkedin_url: string;
  linkedin_label: string;
  github_url: string;
  github_label: string;
}
export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  tasks: string[];
  tags: string[];
  sort_order: number;
}
export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
  level: string | null;
  bar: number | null;
  sort_order: number;
}
export interface Certification {
  id: number;
  titulo: string;
  mini: string;
  pdf: string;
  resumen: string;
  descripcion: string[];
  sort_order: number;
}
export interface Project {
  id: number;
  title: string;
  summary: string;
  cover: string;
  gallery: string[];
  description: string;
  features: string[];
  tech: string[];
  repo: string;
  demo: string;
  sort_order: number;
}

// ---------- Perfil ----------
export async function getProfile(): Promise<Profile | null> {
  const rows = (await db()`SELECT * FROM profile WHERE id = 1`) as Profile[];
  return rows[0] ?? null;
}
export async function updateProfile(p: Omit<Profile, 'id'>): Promise<void> {
  await db()`
    INSERT INTO profile (id, name, role, summary, avatar_url, email, linkedin_url, linkedin_label, github_url, github_label)
    VALUES (1, ${p.name}, ${p.role}, ${p.summary}, ${p.avatar_url}, ${p.email},
            ${p.linkedin_url}, ${p.linkedin_label}, ${p.github_url}, ${p.github_label})
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name, role = EXCLUDED.role, summary = EXCLUDED.summary,
      avatar_url = EXCLUDED.avatar_url, email = EXCLUDED.email,
      linkedin_url = EXCLUDED.linkedin_url, linkedin_label = EXCLUDED.linkedin_label,
      github_url = EXCLUDED.github_url, github_label = EXCLUDED.github_label
  `;
}

// ---------- Experiencias ----------
export async function getExperiences(): Promise<Experience[]> {
  return (await db()`SELECT * FROM experiences ORDER BY sort_order, id`) as Experience[];
}
export async function createExperience(e: Omit<Experience, 'id'>): Promise<void> {
  await db()`
    INSERT INTO experiences (role, company, location, period, tasks, tags, sort_order)
    VALUES (${e.role}, ${e.company}, ${e.location}, ${e.period},
            ${JSON.stringify(e.tasks)}, ${JSON.stringify(e.tags)}, ${e.sort_order})
  `;
}
export async function updateExperience(id: number, e: Omit<Experience, 'id'>): Promise<void> {
  await db()`
    UPDATE experiences SET role = ${e.role}, company = ${e.company}, location = ${e.location},
      period = ${e.period}, tasks = ${JSON.stringify(e.tasks)}, tags = ${JSON.stringify(e.tags)},
      sort_order = ${e.sort_order}
    WHERE id = ${id}
  `;
}
export async function deleteExperience(id: number): Promise<void> {
  await db()`DELETE FROM experiences WHERE id = ${id}`;
}

// ---------- Habilidades ----------
export async function getSkills(): Promise<Skill[]> {
  return (await db()`SELECT * FROM skills ORDER BY sort_order, id`) as Skill[];
}
export async function createSkill(s: Omit<Skill, 'id'>): Promise<void> {
  await db()`
    INSERT INTO skills (name, icon, category, level, bar, sort_order)
    VALUES (${s.name}, ${s.icon}, ${s.category}, ${s.level}, ${s.bar}, ${s.sort_order})
  `;
}
export async function updateSkill(id: number, s: Omit<Skill, 'id'>): Promise<void> {
  await db()`
    UPDATE skills SET name = ${s.name}, icon = ${s.icon}, category = ${s.category},
      level = ${s.level}, bar = ${s.bar}, sort_order = ${s.sort_order}
    WHERE id = ${id}
  `;
}
export async function deleteSkill(id: number): Promise<void> {
  await db()`DELETE FROM skills WHERE id = ${id}`;
}

// ---------- Certificaciones ----------
export async function getCertifications(): Promise<Certification[]> {
  return (await db()`SELECT * FROM certifications ORDER BY sort_order, id`) as Certification[];
}
export async function getCertification(id: number): Promise<Certification | null> {
  const rows = (await db()`SELECT * FROM certifications WHERE id = ${id}`) as Certification[];
  return rows[0] ?? null;
}
export async function createCertification(c: Omit<Certification, 'id'>): Promise<void> {
  await db()`
    INSERT INTO certifications (titulo, mini, pdf, resumen, descripcion, sort_order)
    VALUES (${c.titulo}, ${c.mini}, ${c.pdf}, ${c.resumen}, ${JSON.stringify(c.descripcion)}, ${c.sort_order})
  `;
}
export async function updateCertification(id: number, c: Omit<Certification, 'id'>): Promise<void> {
  await db()`
    UPDATE certifications SET titulo = ${c.titulo}, mini = ${c.mini}, pdf = ${c.pdf},
      resumen = ${c.resumen}, descripcion = ${JSON.stringify(c.descripcion)}, sort_order = ${c.sort_order}
    WHERE id = ${id}
  `;
}
export async function deleteCertification(id: number): Promise<void> {
  await db()`DELETE FROM certifications WHERE id = ${id}`;
}

// ---------- Proyectos ----------
export async function getProjects(): Promise<Project[]> {
  return (await db()`SELECT * FROM projects ORDER BY sort_order, id`) as Project[];
}
export async function getProject(id: number): Promise<Project | null> {
  const rows = (await db()`SELECT * FROM projects WHERE id = ${id}`) as Project[];
  return rows[0] ?? null;
}
export async function createProject(p: Omit<Project, 'id'>): Promise<void> {
  await db()`
    INSERT INTO projects (title, summary, cover, gallery, description, features, tech, repo, demo, sort_order)
    VALUES (${p.title}, ${p.summary}, ${p.cover}, ${JSON.stringify(p.gallery)}, ${p.description},
            ${JSON.stringify(p.features)}, ${JSON.stringify(p.tech)}, ${p.repo}, ${p.demo}, ${p.sort_order})
  `;
}
export async function updateProject(id: number, p: Omit<Project, 'id'>): Promise<void> {
  await db()`
    UPDATE projects SET title = ${p.title}, summary = ${p.summary}, cover = ${p.cover},
      gallery = ${JSON.stringify(p.gallery)}, description = ${p.description},
      features = ${JSON.stringify(p.features)}, tech = ${JSON.stringify(p.tech)},
      repo = ${p.repo}, demo = ${p.demo}, sort_order = ${p.sort_order}
    WHERE id = ${id}
  `;
}
export async function deleteProject(id: number): Promise<void> {
  await db()`DELETE FROM projects WHERE id = ${id}`;
}
