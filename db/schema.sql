-- Esquema de la base de datos del portafolio (Neon / PostgreSQL)
-- Cómo usar: abre el SQL Editor de tu proyecto en neon.tech, pega este archivo y ejecútalo.
-- Luego siembra los datos iniciales con:  node db/seed.mjs   (requiere DATABASE_URL en .env)

-- Perfil: una sola fila (id = 1)
CREATE TABLE IF NOT EXISTS profile (
  id              INTEGER PRIMARY KEY DEFAULT 1,
  name            TEXT NOT NULL DEFAULT '',
  role            TEXT NOT NULL DEFAULT '',
  summary         TEXT NOT NULL DEFAULT '',
  avatar_url      TEXT NOT NULL DEFAULT '',
  email           TEXT NOT NULL DEFAULT '',
  linkedin_url    TEXT NOT NULL DEFAULT '',
  linkedin_label  TEXT NOT NULL DEFAULT '',
  github_url      TEXT NOT NULL DEFAULT '',
  github_label    TEXT NOT NULL DEFAULT '',
  CONSTRAINT profile_single_row CHECK (id = 1)
);

CREATE TABLE IF NOT EXISTS experiences (
  id          SERIAL PRIMARY KEY,
  role        TEXT NOT NULL DEFAULT '',
  company     TEXT NOT NULL DEFAULT '',
  location    TEXT NOT NULL DEFAULT '',
  period      TEXT NOT NULL DEFAULT '',
  tasks       JSONB NOT NULL DEFAULT '[]'::jsonb,
  tags        JSONB NOT NULL DEFAULT '[]'::jsonb,
  sort_order  INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS skills (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL DEFAULT '',
  icon        TEXT NOT NULL DEFAULT '',
  category    TEXT NOT NULL DEFAULT 'herramientas',
  level       TEXT,            -- avanzado | intermedio | basico | NULL
  bar         INTEGER,         -- 0-100 | NULL (sin barra)
  sort_order  INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS certifications (
  id          SERIAL PRIMARY KEY,
  titulo      TEXT NOT NULL DEFAULT '',
  mini        TEXT NOT NULL DEFAULT '',
  pdf         TEXT NOT NULL DEFAULT '',
  resumen     TEXT NOT NULL DEFAULT '',
  descripcion JSONB NOT NULL DEFAULT '[]'::jsonb,
  sort_order  INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS projects (
  id          SERIAL PRIMARY KEY,
  title       TEXT NOT NULL DEFAULT '',
  summary     TEXT NOT NULL DEFAULT '',
  cover       TEXT NOT NULL DEFAULT '',
  gallery     JSONB NOT NULL DEFAULT '[]'::jsonb,
  description TEXT NOT NULL DEFAULT '',
  features    JSONB NOT NULL DEFAULT '[]'::jsonb,
  tech        JSONB NOT NULL DEFAULT '[]'::jsonb,
  repo        TEXT NOT NULL DEFAULT '',
  demo        TEXT NOT NULL DEFAULT '',
  sort_order  INTEGER NOT NULL DEFAULT 0
);
