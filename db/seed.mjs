// Siembra la base de datos con los datos actuales del portafolio.
// Uso:  node db/seed.mjs    (necesita DATABASE_URL definido en .env o en el entorno)
// Es idempotente: vacía las tablas y las vuelve a llenar.
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { profile } from '../src/data/profile.js';
import { experience } from '../src/data/experience.js';
import { skills } from '../src/data/skills.js';
import { certifications } from '../src/data/certifications.js';
import { projects } from '../src/data/projects.js';

const url = process.env.DATABASE_URL;
if (!url) {
  console.error('❌ Falta DATABASE_URL. Crea un archivo .env con tu cadena de conexión de Neon.');
  process.exit(1);
}

const sql = neon(url);

async function main() {
  console.log('Vaciando tablas…');
  await sql`TRUNCATE profile, experiences, skills, certifications, projects RESTART IDENTITY`;

  console.log('Sembrando perfil…');
  await sql`
    INSERT INTO profile (id, name, role, summary, avatar_url, email, linkedin_url, linkedin_label, github_url, github_label)
    VALUES (1, ${profile.name}, ${profile.role}, ${profile.summary}, ${profile.avatar_url}, ${profile.email},
            ${profile.linkedin_url}, ${profile.linkedin_label}, ${profile.github_url}, ${profile.github_label})
  `;

  console.log(`Sembrando ${experience.length} experiencias…`);
  for (let i = 0; i < experience.length; i++) {
    const e = experience[i];
    await sql`
      INSERT INTO experiences (role, company, location, period, tasks, tags, sort_order)
      VALUES (${e.role}, ${e.company}, ${e.location || ''}, ${e.period},
              ${JSON.stringify(e.tasks || [])}, ${JSON.stringify(e.tags || [])}, ${i})
    `;
  }

  console.log(`Sembrando ${skills.length} habilidades…`);
  for (let i = 0; i < skills.length; i++) {
    const s = skills[i];
    await sql`
      INSERT INTO skills (name, icon, category, level, bar, sort_order)
      VALUES (${s.name}, ${s.icon}, ${s.category}, ${s.level ?? null},
              ${typeof s.bar === 'number' ? s.bar : null}, ${i})
    `;
  }

  console.log(`Sembrando ${certifications.length} certificaciones…`);
  for (let i = 0; i < certifications.length; i++) {
    const c = certifications[i];
    await sql`
      INSERT INTO certifications (titulo, mini, pdf, resumen, descripcion, sort_order)
      VALUES (${c.titulo}, ${c.mini}, ${c.pdf}, ${c.resumen},
              ${JSON.stringify(c.descripcion || [])}, ${i})
    `;
  }

  console.log(`Sembrando ${projects.length} proyectos…`);
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    await sql`
      INSERT INTO projects (title, summary, cover, gallery, description, features, tech, repo, demo, sort_order)
      VALUES (${p.title}, ${p.summary}, ${p.cover}, ${JSON.stringify(p.gallery || [])},
              ${p.description}, ${JSON.stringify(p.features || [])}, ${JSON.stringify(p.tech || [])},
              ${p.repo || ''}, ${p.demo || ''}, ${i})
    `;
  }

  console.log('✅ Listo. Base de datos sembrada.');
}

main().catch((err) => {
  console.error('❌ Error al sembrar:', err);
  process.exit(1);
});
