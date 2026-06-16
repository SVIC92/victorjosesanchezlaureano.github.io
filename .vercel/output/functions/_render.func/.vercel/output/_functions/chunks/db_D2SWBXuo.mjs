import { neon } from '@neondatabase/serverless';

let _sql = null;
function db() {
  if (_sql) return _sql;
  const url = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_Q9ZFhN3sJRlm@ep-round-hat-ady5rro1-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
  _sql = neon(url);
  return _sql;
}
async function getProfile() {
  const rows = await db()`SELECT * FROM profile WHERE id = 1`;
  return rows[0] ?? null;
}
async function updateProfile(p) {
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
async function getExperiences() {
  return await db()`SELECT * FROM experiences ORDER BY sort_order, id`;
}
async function createExperience(e) {
  await db()`
    INSERT INTO experiences (role, company, location, period, tasks, tags, sort_order)
    VALUES (${e.role}, ${e.company}, ${e.location}, ${e.period},
            ${JSON.stringify(e.tasks)}, ${JSON.stringify(e.tags)}, ${e.sort_order})
  `;
}
async function updateExperience(id, e) {
  await db()`
    UPDATE experiences SET role = ${e.role}, company = ${e.company}, location = ${e.location},
      period = ${e.period}, tasks = ${JSON.stringify(e.tasks)}, tags = ${JSON.stringify(e.tags)},
      sort_order = ${e.sort_order}
    WHERE id = ${id}
  `;
}
async function deleteExperience(id) {
  await db()`DELETE FROM experiences WHERE id = ${id}`;
}
async function getSkills() {
  return await db()`SELECT * FROM skills ORDER BY sort_order, id`;
}
async function createSkill(s) {
  await db()`
    INSERT INTO skills (name, icon, category, level, bar, sort_order)
    VALUES (${s.name}, ${s.icon}, ${s.category}, ${s.level}, ${s.bar}, ${s.sort_order})
  `;
}
async function updateSkill(id, s) {
  await db()`
    UPDATE skills SET name = ${s.name}, icon = ${s.icon}, category = ${s.category},
      level = ${s.level}, bar = ${s.bar}, sort_order = ${s.sort_order}
    WHERE id = ${id}
  `;
}
async function deleteSkill(id) {
  await db()`DELETE FROM skills WHERE id = ${id}`;
}
async function getCertifications() {
  return await db()`SELECT * FROM certifications ORDER BY sort_order, id`;
}
async function createCertification(c) {
  await db()`
    INSERT INTO certifications (titulo, mini, pdf, resumen, descripcion, sort_order)
    VALUES (${c.titulo}, ${c.mini}, ${c.pdf}, ${c.resumen}, ${JSON.stringify(c.descripcion)}, ${c.sort_order})
  `;
}
async function updateCertification(id, c) {
  await db()`
    UPDATE certifications SET titulo = ${c.titulo}, mini = ${c.mini}, pdf = ${c.pdf},
      resumen = ${c.resumen}, descripcion = ${JSON.stringify(c.descripcion)}, sort_order = ${c.sort_order}
    WHERE id = ${id}
  `;
}
async function deleteCertification(id) {
  await db()`DELETE FROM certifications WHERE id = ${id}`;
}
async function getProjects() {
  return await db()`SELECT * FROM projects ORDER BY sort_order, id`;
}
async function createProject(p) {
  await db()`
    INSERT INTO projects (title, summary, cover, gallery, description, features, tech, repo, demo, sort_order)
    VALUES (${p.title}, ${p.summary}, ${p.cover}, ${JSON.stringify(p.gallery)}, ${p.description},
            ${JSON.stringify(p.features)}, ${JSON.stringify(p.tech)}, ${p.repo}, ${p.demo}, ${p.sort_order})
  `;
}
async function updateProject(id, p) {
  await db()`
    UPDATE projects SET title = ${p.title}, summary = ${p.summary}, cover = ${p.cover},
      gallery = ${JSON.stringify(p.gallery)}, description = ${p.description},
      features = ${JSON.stringify(p.features)}, tech = ${JSON.stringify(p.tech)},
      repo = ${p.repo}, demo = ${p.demo}, sort_order = ${p.sort_order}
    WHERE id = ${id}
  `;
}
async function deleteProject(id) {
  await db()`DELETE FROM projects WHERE id = ${id}`;
}

export { getExperiences as a, getSkills as b, getCertifications as c, getProjects as d, deleteCertification as e, createCertification as f, getProfile as g, deleteExperience as h, updateExperience as i, createExperience as j, updateProfile as k, deleteProject as l, updateProject as m, createProject as n, deleteSkill as o, updateSkill as p, createSkill as q, updateCertification as u };
