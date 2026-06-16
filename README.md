# Portafolio Personal — Victor José Sánchez Laureano

Portafolio personal donde presento mi perfil profesional, experiencia laboral, habilidades,
proyectos y certificaciones. Construido con **Astro** (SSR), una base de datos **Neon (PostgreSQL)**
y un panel de administración privado para editar todo el contenido desde la web.

## ✨ Características

- Diseño responsive y moderno (paleta azul corporativo + cian).
- Secciones: perfil, **experiencia laboral**, habilidades (con filtros), proyectos y certificaciones.
- Detalle de proyecto con galería de imágenes y visor de certificaciones en PDF.
- Respaldo automático: si la base de datos no está disponible, las páginas usan datos locales.

## 🛠 Tecnologías

- **[Astro](https://astro.build/)** en modo servidor (SSR).
- **[Neon](https://neon.tech/)** — PostgreSQL serverless.
- **GitHub OAuth** + sesión firmada (JWT) para la autenticación del panel.
- Desplegado en **[Vercel](https://vercel.com/)**.

## 📂 Estructura

```
src/
  data/         Datos iniciales (seed) y constantes
  layouts/      Layout base (head, nav, footer)
  components/   Nav y Footer reutilizables
  lib/          db (acceso a Neon), auth (OAuth/sesión), content (carga con respaldo)
  pages/
    index.astro              Página principal
    proyectos.astro          Listado de proyectos
    proyecto/[id].astro      Detalle de proyecto
    certificacion/[id].astro Visor de certificación
    admin/                   Panel privado
    api/auth/                Login, callback y logout de GitHub OAuth
    api/admin/               Endpoints CRUD protegidos
  middleware.ts   Protege /admin y /api/admin
  styles/         Hojas de estilo
db/
  schema.sql    Esquema de la base de datos
  seed.mjs      Migra los datos iniciales a Neon
public/         Imágenes y certificados (PDF)
```

## 🚀 Desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env   # y rellena los valores (Neon, GitHub OAuth, AUTH_SECRET)

# 3. Crear las tablas (ejecuta db/schema.sql en el SQL Editor de Neon)
#    y sembrar los datos iniciales:
node db/seed.mjs

# 4. Arrancar el servidor de desarrollo
npm run dev
```

- Sitio: http://localhost:4321
- Panel: http://localhost:4321/admin

> La configuración detallada (Neon, OAuth y despliegue paso a paso) está en `.env.example`
> y en la documentación interna del proyecto.

## ☁️ Despliegue

El proyecto se despliega en **Vercel** importando el repositorio. Hay que añadir las variables
de entorno en el panel de Vercel y configurar la URL de callback en la app OAuth de GitHub.

## 👤 Autor

**Victor José Sánchez Laureano**
📧 victorjosesanchezlaureano@gmail.com
🔗 [github.com/SVIC92](https://github.com/SVIC92)
