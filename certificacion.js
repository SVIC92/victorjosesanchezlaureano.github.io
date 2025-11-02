document.addEventListener('DOMContentLoaded', () => {
  const certificaciones = [
    {
      titulo: "Curso de Fundamentos de Linux - Cisco Netacad",
      pdf: "certificaciones/Linux_Essentials_certificate.pdf",
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
      titulo: "Curso de Power BI - Skill",
      pdf: "certificaciones/certificado_POWERBI.pdf",
      resumen: "Curso práctico enfocado en el manejo de datos con Power BI, uso de DAX y publicación de reportes interactivos en Power BI Service y Mobile.",
      descripcion: [
        "1.Modelado de datos avanzado.",
        "2.Transformación de datos con Power Query.",
        "3.Lenguaje DAX Intermedio.",
        "4.Visualizaciones y análisis interactivo avanzado."
      ]
    },
    {
      titulo: "Curso de Excel Avanzado",
      pdf: "certificaciones/certificado_ExcelAvanzado.pdf",
      resumen: "Curso avanzado de Excel, que incluye funciones de base de datos, controles de formularios, grabación de macros avanzadas, programación con Visual Basic para Aplicaciones y trabajo en Power Query.",
      descripcion: [
        "Funciones de Base de datos y Controles de formularios.",
        "Grabación de macros avanzadas.",
        "Programación con Visual Basic para Aplicaciones.",
        "Trabajo en Power Query."
      ]
    },
    {
      titulo: "Curso de Introducción a la IA - Cisco",
      pdf: "certificaciones/certificado_IntroduccionIA.pdf",
      resumen: "Introducción a los conceptos fundamentales de la inteligencia artificial y sus aplicaciones prácticas.",
      descripcion: [
        "Conceptos básicos de IA",
        "Algoritmos de Machine Learning y Deep Learning",
        "Redes neuronales y aprendizaje profundo",
        "Aplicaciones prácticas de IA"
      ]
    },
    {
      titulo: "Curso de Ciencia de Datos - Cisco",
      pdf: "certificaciones/certificado_CienciaDatos.pdf",
      resumen: "Fundamentos de la ciencia de datos, incluyendo análisis estadístico, visualización y técnicas de machine learning.",
      descripcion: [
        "Análisis exploratorio de datos",
        "Visualización de datos con herramientas como Matplotlib y Seaborn",
        "Técnicas de machine learning supervisado y no supervisado",
        "Uso de bibliotecas como Pandas y Scikit-learn"
      ]
    },
    {
      titulo: "Curso de JavaScript - Fundación Telefonica",
      pdf: "certificaciones/certificado_JS.pdf",
      resumen: "Curso completo de JavaScript, desde lo básico hasta conceptos avanzados.",
      descripcion: [
        "Sintaxis y operadores",
        "Estructuras de control",
        "Funciones y objetos",
        "Programación asíncrona"
      ]
    },
    {
      titulo: "Curso de HTML y CSS - Fundación Telefonica",
      pdf: "certificaciones/certificado_HTML5_CSS.pdf",
      resumen: "Curso completo de HTML y CSS, desde lo básico hasta conceptos avanzados.",
      descripcion: [
        "Estructura de documentos HTML",
        "Estilos CSS y diseño responsivo",
        "Frameworks CSS como Bootstrap",
        "Accesibilidad y buenas prácticas"
      ]
    }
  ];

  const params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get("id"), 10);
  if (isNaN(id) || id < 1 || id > certificaciones.length) id = 1;

  function mostrarCertificacion() {
    const cert = certificaciones[id - 1];
    const titleEl = document.getElementById("cert-title");
    const pdfEl = document.getElementById("cert-pdf");
    const resumenEl = document.getElementById("cert-resumen");
    const descEl = document.getElementById("cert-desc");

    if (!titleEl || !pdfEl || !resumenEl || !descEl) return;

    titleEl.textContent = cert.titulo;
    pdfEl.src = cert.pdf;
    resumenEl.textContent = cert.resumen || "";

    descEl.innerHTML = "";
    if (Array.isArray(cert.descripcion) && cert.descripcion.length) {
      const ul = document.createElement("ul");
      ul.className = "desc-list";
      cert.descripcion.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      descEl.appendChild(ul);
    } else if (typeof cert.descripcion === "string" && cert.descripcion.trim()) {
      const p = document.createElement("p");
      p.textContent = cert.descripcion;
      descEl.appendChild(p);
    }

    const prev = document.getElementById("prev-cert");
    const next = document.getElementById("next-cert");
    if (prev && next) {
      prev.href = `certificacion.html?id=${(id - 1) < 1 ? certificaciones.length : id - 1}`;
      next.href = `certificacion.html?id=${(id + 1) > certificaciones.length ? 1 : id + 1}`;
    }
  }

  mostrarCertificacion();
});