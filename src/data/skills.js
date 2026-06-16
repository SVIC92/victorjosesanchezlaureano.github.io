// category: lenguajes | datos | herramientas
// level: avanzado | intermedio | basico (controla el color del badge)
// bar: porcentaje 0-100 (opcional; omítelo para ocultar la barra)
export const skills = [
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

export const skillFilters = [
  { key: "all",          label: "Todas" },
  { key: "lenguajes",    label: "Lenguajes" },
  { key: "datos",        label: "Datos" },
  { key: "herramientas", label: "Herramientas" }
];

export const levelLabels = {
  avanzado:   "Avanzado",
  intermedio: "Intermedio",
  basico:     "Básico"
};
