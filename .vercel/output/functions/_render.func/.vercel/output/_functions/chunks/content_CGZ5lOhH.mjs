import { c as createComponent, m as maybeRenderHead, a as addAttribute, b as renderTemplate, g as renderSlot, r as renderHead, e as renderComponent, d as createAstro } from './astro/server_CezLyfyQ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */
import { g as getProfile, a as getExperiences, b as getSkills, d as getProjects, c as getCertifications } from './db_D2SWBXuo.mjs';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/#perfil", label: "Perfil" },
    { href: "/#experiencia", label: "Experiencia" },
    { href: "/#habilidades", label: "Habilidades" },
    { href: "/#certificaciones", label: "Certificaciones" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/#contacto", label: "Contacto" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="hero"> <button class="menu-toggle" aria-label="Abrir menú">☰</button> <nav class="nav-menu-container"> <ul class="nav-menu"> ${links.map((l) => renderTemplate`<li><a${addAttribute(l.href, "href")}>${l.label}</a></li>`)} </ul> </nav> </header>`;
}, "C:/Users/VJSL/Downloads/portafolio_vjsl/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = 2025;
  return renderTemplate`${maybeRenderHead()}<footer> <p>© ${year} Victor José Sánchez Laureano</p> </footer>`;
}, "C:/Users/VJSL/Downloads/portafolio_vjsl/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Portafolio - Victor Jos\xE9 S\xE1nchez Laureano",
    description = "Portafolio de Victor Jos\xE9 S\xE1nchez Laureano, estudiante de Ingenier\xEDa de Sistemas Computacionales: proyectos, habilidades y certificaciones."
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/VJSL/Downloads/portafolio_vjsl/src/layouts/Layout.astro", void 0);

// Datos del perfil (valores iniciales para sembrar la base de datos).
// Tras migrar, se editan desde el panel /admin.
const profile = {
  name: "Victor José Sánchez Laureano",
  role: "Estudiante 8vo ciclo de Ingeniería de Sistemas Computacionales",
  summary: "Soy un estudiante de Ingeniería de Sistemas Computacionales en la Universidad Privada del Norte (tercio superior), con interés en desarrollo de software, análisis de datos y gestión de bases de datos. Puntual, proactivo, cooperativo y de rápido aprendizaje.",
  avatar_url: "/images/Img_perfil.png",
  email: "victorjosesanchezlaureano@gmail.com",
  linkedin_url: "https://www.linkedin.com/in/victor-jose-sanchez-laureano-a79baa261",
  linkedin_label: "Victor José Sánchez Laureano",
  github_url: "https://github.com/SVIC92",
  github_label: "github.com/SVIC92"
};

// ▼ PLANTILLA EDITABLE ▼
// Añade, elimina o reordena entradas. Cada objeto es una tarjeta de la línea de tiempo.
// Reemplaza los textos de ejemplo con tus datos reales.
const experience = [
  {
    role: "Cargo o puesto",
    company: "Nombre de la empresa",
    location: "Ciudad, País",
    period: "Mes Año — Mes Año",
    tasks: [
      "Describe tu responsabilidad o logro principal en este puesto.",
      "Otra función relevante, idealmente con un resultado medible."
    ],
    tags: ["Habilidad", "Herramienta"]
  },
  {
    role: "Cargo o puesto",
    company: "Nombre de la empresa",
    location: "Ciudad, País",
    period: "Mes Año — Mes Año",
    tasks: [
      "Describe tu responsabilidad o logro principal en este puesto.",
      "Otra función relevante, idealmente con un resultado medible."
    ],
    tags: ["Habilidad", "Herramienta"]
  },
  {
    role: "Cargo o puesto",
    company: "Nombre de la empresa",
    location: "Ciudad, País",
    period: "Mes Año — Mes Año",
    tasks: [
      "Describe tu responsabilidad o logro principal en este puesto.",
      "Otra función relevante, idealmente con un resultado medible."
    ],
    tags: ["Habilidad", "Herramienta"]
  }
];

// category: lenguajes | datos | herramientas
// level: avanzado | intermedio | basico (controla el color del badge)
// bar: porcentaje 0-100 (opcional; omítelo para ocultar la barra)
const skills = [
  { name: "Python",          icon: "/images/tech/python.png",        category: "lenguajes",    level: "intermedio", bar: 55 },
  { name: "JavaScript",      icon: "/images/tech/javascript.png",    category: "lenguajes",    level: "intermedio", bar: 70 },
  { name: "SQL Server",      icon: "/images/tech/sql.png",           category: "datos",        level: "intermedio", bar: 75 },
  { name: "Power BI",        icon: "/images/tech/powerbi.png",       category: "datos",        level: "intermedio", bar: 70 },
  { name: "C#/C++",          icon: "/images/tech/cpp.png",           category: "lenguajes",    level: "basico",     bar: 45 },
  { name: "MongoDB",         icon: "/images/tech/mongodb.png",       category: "datos",        level: "basico",     bar: 40 },
  { name: "Java",            icon: "/images/tech/java.png",          category: "lenguajes",    level: "intermedio", bar: 70 },
  { name: "Excel",           icon: "/images/tech/excel.png",         category: "herramientas", level: "avanzado",   bar: 70 },
  { name: "Git/GitHub",      icon: "/images/tech/github.png",        category: "herramientas" },
  { name: "Android Studio",  icon: "/images/tech/androidstudio.png", category: "herramientas" }
];

const skillFilters = [
  { key: "all",          label: "Todas" },
  { key: "lenguajes",    label: "Lenguajes" },
  { key: "datos",        label: "Datos" },
  { key: "herramientas", label: "Herramientas" }
];

const levelLabels = {
  avanzado:   "Avanzado",
  intermedio: "Intermedio",
  basico:     "Básico"
};

const certifications = [
  {
    id: 0,
    titulo: "Curso de Fundamentos de Linux - RedHat Academy",
    mini: "/certificaciones/mini_cert_REDHAT.png",
    pdf: "/certificaciones/CERTIFICADO_REDHAT.pdf",
    resumen: "Curso introductorio sobre los fundamentos del sistema operativo Red Hat Enterprise Linux, incluyendo comandos básicos RHEL, gestión de archivos y permisos.",
    descripcion: [
      "1. Introducción a Red Hat Enterprise Linux y su diferencia con otras distribuciones.",
      "2. Usuarios y grupos, Permisos.",
      "3. DNF (paquetes), Servicios (Apache, DNS, MySQL y PHP).",
      "4. Journalctl (logs), Red con nmcli, FirewallD.",
      "5. SELinux, LVM, Sistemas de archivos.",
      "6. SSH, Backup, Monitoreo (top, ps)"
    ]
  },
  {
    id: 1,
    titulo: "Curso de Fundamentos de Linux - Cisco Netacad",
    mini: "/certificaciones/mini_cert_Linux.png",
    pdf: "/certificaciones/Linux_Essentials_certificate.pdf",
    resumen: "Curso introductorio sobre los fundamentos del sistema operativo Linux, incluyendo comandos básicos, gestión de archivos y permisos.",
    descripcion: [
      "1. Introducción a Linux y su historia.",
      "2. Instalación y configuración del sistema.",
      "3. Comandos básicos de la terminal.",
      "4. Gestión de archivos y permisos.",
      "5. Administración de usuarios y grupos.",
      "6. Introducción a scripts de shell."
    ]
  },
  {
    id: 2,
    titulo: "Curso CCNA Introducción a Redes - Cisco Netacad",
    mini: "/certificaciones/mini_cert_CCNA.png",
    pdf: "/certificaciones/certificado_CCNA.pdf",
    resumen: "Curso introductorio sobre los fundamentos de redes, incluyendo conceptos básicos, protocolos y configuración de dispositivos.",
    descripcion: [
      "1. Introducción a las Redes IPv4.",
      "2. Configuración de dispositivos de red.",
      "3. Routers y switches.",
      "4. Hosts y dispositivos finales.",
      "5. Servidores",
      "6. Simulación en Packet Tracer."
    ]
  },
  {
    id: 3,
    titulo: "Curso de Power BI - Skill",
    mini: "/certificaciones/mini_cert_POWERBI.png",
    pdf: "/certificaciones/certificado_POWERBI.pdf",
    resumen: "Curso práctico enfocado en el manejo de datos con Power BI, uso de DAX y publicación de reportes interactivos en Power BI Service y Mobile.",
    descripcion: [
      "1. Modelado de datos avanzado.",
      "2. Transformación de datos con Power Query.",
      "3. Lenguaje DAX Intermedio.",
      "4. Visualizaciones y análisis interactivo avanzado."
    ]
  },
  {
    id: 4,
    titulo: "Curso de Excel Avanzado - Interbank",
    mini: "/certificaciones/mini_cert_ExcelAvanzado.png",
    pdf: "/certificaciones/certificado_ExcelAvanzado.pdf",
    resumen: "Curso avanzado de Excel, que incluye funciones de base de datos, controles de formularios, grabación de macros avanzadas, programación con Visual Basic para Aplicaciones y trabajo en Power Query.",
    descripcion: [
      "Funciones de Base de datos y Controles de formularios.",
      "Grabación de macros avanzadas.",
      "Programación con Visual Basic para Aplicaciones.",
      "Trabajo en Power Query."
    ]
  },
  {
    id: 5,
    titulo: "Curso de Introducción a la IA - Cisco Netacad",
    mini: "/certificaciones/mini_cert_IntroduccionIA.png",
    pdf: "/certificaciones/certificado_IntroduccionIA.pdf",
    resumen: "Introducción a los conceptos fundamentales de la inteligencia artificial y sus aplicaciones prácticas.",
    descripcion: [
      "Conceptos básicos de IA",
      "Algoritmos de Machine Learning y Deep Learning",
      "Redes neuronales y aprendizaje profundo",
      "Aplicaciones prácticas de IA"
    ]
  },
  {
    id: 6,
    titulo: "Curso de Ciencia de Datos - Cisco Netacad",
    mini: "/certificaciones/mini_cert_CienciaDatos.png",
    pdf: "/certificaciones/certificado_CienciaDatos.pdf",
    resumen: "Fundamentos de la ciencia de datos, incluyendo análisis estadístico, visualización y técnicas de machine learning.",
    descripcion: [
      "Análisis exploratorio de datos",
      "Visualización de datos con herramientas como Matplotlib y Seaborn",
      "Técnicas de machine learning supervisado y no supervisado",
      "Uso de bibliotecas como Pandas y Scikit-learn"
    ]
  },
  {
    id: 7,
    titulo: "Curso de JavaScript - Fundación Telefónica",
    mini: "/certificaciones/mini_cert_JS.png",
    pdf: "/certificaciones/certificado_JS.pdf",
    resumen: "Curso completo de JavaScript, desde lo básico hasta conceptos avanzados.",
    descripcion: [
      "Sintaxis y operadores",
      "Estructuras de control",
      "Funciones y objetos",
      "Programación asíncrona"
    ]
  },
  {
    id: 8,
    titulo: "Curso de HTML y CSS - Fundación Telefónica",
    mini: "/certificaciones/mini_cert_HTMLCSS.png",
    pdf: "/certificaciones/certificado_HTML5_CSS.pdf",
    resumen: "Curso completo de HTML y CSS, desde lo básico hasta conceptos avanzados.",
    descripcion: [
      "Estructura de documentos HTML",
      "Estilos CSS y diseño responsivo",
      "Frameworks CSS como Bootstrap",
      "Accesibilidad y buenas prácticas"
    ]
  }
];

const projects = [
  {
    id: 1,
    title: "Aplicación Móvil en Android Studio",
    summary: "Gestión de usuarios, pedidos y stock, con análisis de negocio real.",
    cover: "/images/proyectos/proy2_1.jpg",
    gallery: [
      "/images/proyectos/proy2_1.jpg", "/images/proyectos/proy2_2.jpg", "/images/proyectos/proy2_3.jpg", "/images/proyectos/proy2_4.jpg",
      "/images/proyectos/proy2_5.jpg", "/images/proyectos/proy2_6.jpg", "/images/proyectos/proy2_7.jpg", "/images/proyectos/proy2_8.jpg",
      "/images/proyectos/proy2_9.jpg", "/images/proyectos/proy2_10.jpg", "/images/proyectos/proy2_11.jpg", "/images/proyectos/proy2_12.jpg",
      "/images/proyectos/proy2_13.jpg", "/images/proyectos/proy2_14.jpg", "/images/proyectos/proy2_15.jpg", "/images/proyectos/proy2_16.jpg",
      "/images/proyectos/proy2_17.jpg", "/images/proyectos/proy2_18.jpg", "/images/proyectos/proy2_19.jpg", "/images/proyectos/proy2_20.jpg",
      "/images/proyectos/proy2_21.jpg", "/images/proyectos/proy2_22.jpg", "/images/proyectos/proy2_23.jpg", "/images/proyectos/proy2_24.jpg",
      "/images/proyectos/proy2_25.jpg", "/images/proyectos/proy2_26.jpg"
    ],
    description: "Una aplicación móvil (desarrollo colaborativo) diseñada para optimizar la gestión de repuestos y el control de operaciones en un entorno automotriz, integrando tres roles clave: Administrador, Jefe de Almacén y Mecánico. Con una interfaz moderna y flujos intuitivos, garantiza un manejo eficiente de usuarios, inventarios y procesos internos.",
    features: [
      "Gestión de roles: Diferenciación clara entre Administrador, Jefe de Almacén y Mecánico, con permisos específicos para cada uno.",
      "Registro y autenticación segura: Validación de credenciales, control de contraseñas y correos únicos.",
      "Gestión de usuarios y datos asociados: Alta, modificación y baja de cuentas con validaciones integradas.",
      "Administración de inventario: Control de repuestos y productos (disponibilidad, actualización, ingreso).",
      "Interfaz intuitiva: Basada en principios de Material Design con navegación mediante menú deslizable.",
      "Persistencia local: Base de datos SQLite para operar sin conexión.",
      "Escalabilidad: Arquitectura modular para añadir más roles o funciones en el futuro."
    ],
    tech: ["Android Studio", "Java", "XML", "SQLite", "Material Design Components", "Intents y Activities", "RecyclerView", "Trabajo en equipo"],
    repo: "https://github.com/SVIC92/Aplicacion_de_Euroshop",
    demo: ""
  },
  {
    id: 2,
    title: "Base de datos en SQL Server Management",
    summary: "Modelo relacional para planilla de colaboradores.",
    cover: "/images/proyectos/proy3_1.png",
    gallery: ["/images/proyectos/proy3_1.png"],
    description: "Proyecto universitario con análisis de negocio real (organigrama de una empresa farmacéutica). Diseño y normalización de modelo de base de datos (planilla de pagos a colaboradores) con consultas T-SQL.",
    features: [
      "Diagrama entidad–relación normalizado.",
      "Modelo relacional con tablas, claves primarias y foráneas.",
      "Procedimientos almacenados y vistas.",
      "Triggers para auditoría y control.",
      "Transacciones para asegurar la integridad de datos.",
      "Consultas optimizadas para reportes."
    ],
    tech: ["SQL Server", "T‑SQL", "Modelo Relacional", "Stored Procedures", "Triggers y Transacciones"],
    repo: "",
    demo: ""
  },
  {
    id: 3,
    title: "Dashboard de ventas en Power BI",
    summary: "Dashboard de análisis de ventas",
    cover: "/images/proyectos/proy1_1.png",
    gallery: ["/images/proyectos/proy1_1.png"],
    description: "Proyecto de curso Power BI, ofrece una vista integral del rendimiento comercial mediante gráficos dinámicos y métricas clave. Muestra el total de ventas, la distribución por categorías, la tendencia mensual y la segmentación por región y tienda, permitiendo un análisis claro y visual de los datos.",
    features: [
      "Gráficos dinámicos",
      "Segmentación por región y tienda",
      "Diseño intuitivo",
      "Datos transformados"
    ],
    tech: ["Power BI", "Power Query", "DAX", "Excel/CSV"],
    repo: "",
    demo: ""
  }
];

const fallbackProfile = { id: 1, ...profile };
const fallbackExperiences = experience.map((e, i) => ({
  id: i + 1,
  role: e.role,
  company: e.company,
  location: e.location || "",
  period: e.period,
  tasks: e.tasks || [],
  tags: e.tags || [],
  sort_order: i
}));
const fallbackSkills = skills.map((s, i) => ({
  id: i + 1,
  name: s.name,
  icon: s.icon,
  category: s.category,
  level: s.level ?? null,
  bar: typeof s.bar === "number" ? s.bar : null,
  sort_order: i
}));
const fallbackCertifications = certifications.map((c, i) => ({
  id: c.id,
  titulo: c.titulo,
  mini: c.mini,
  pdf: c.pdf,
  resumen: c.resumen,
  descripcion: c.descripcion || [],
  sort_order: i
}));
const fallbackProjects = projects.map((p, i) => ({
  id: p.id,
  title: p.title,
  summary: p.summary,
  cover: p.cover,
  gallery: p.gallery || [],
  description: p.description,
  features: p.features || [],
  tech: p.tech || [],
  repo: p.repo || "",
  demo: p.demo || "",
  sort_order: i
}));
async function safe(fn, fallback) {
  try {
    return await fn();
  } catch {
    return fallback;
  }
}
const loadProfile = () => safe(async () => await getProfile() ?? fallbackProfile, fallbackProfile);
const loadExperiences = () => safe(getExperiences, fallbackExperiences);
const loadSkills = () => safe(getSkills, fallbackSkills);
const loadCertifications = () => safe(getCertifications, fallbackCertifications);
const loadProjects = () => safe(getProjects, fallbackProjects);

export { $$Layout as $, loadProfile as a, loadExperiences as b, loadSkills as c, loadProjects as d, levelLabels as e, loadCertifications as l, skillFilters as s };
