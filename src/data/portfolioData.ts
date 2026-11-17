import type { Project } from "@/portfolio/types/portfolio.types";

export const personalInfo = {
  name: "Javier",
  fullName: "Javier González",
  role: "React Developer",
  subRole: "TypeScript & Testing Enthusiast",
  email: "devjaviergarcia@gmail.com",
  location: "España",
  availableForWork: true,
  statusText: "Disponible para nuevas oportunidades",
  github: "https://github.com/javi097",
  linkedin: "https://www.linkedin.com/in/javier-garc%C3%ADa-gonz%C3%A1lez-8b666a20b/",
  bio: {
    short: "Desarrollo interfaces accesibles, pixel-perfect y experiencias digitales que combinan diseño cuidado con ingeniería robusta.",
    detailed: [
      "Soy un desarrollador apasionado por crear interfaces accesibles y experiencias digitales de alta calidad. Mi trabajo se encuentra en la intersección del diseño y el desarrollo, creando aplicaciones que no solo lucen bien sino que están meticulosamente construidas para el rendimiento, la accesibilidad y la usabilidad.",
      "Estudiante avanzado del curso React de Fernando Herrera, profundizando en arquitecturas escalables, gestión de estado y full-stack con React, TypeScript, Node.js y bases de datos modernas.",
      "Mi especialidad es el ecosistema React moderno (React 19, hooks, router, queries) con TypeScript estricto y un fuerte enfoque en calidad mediante testing unitario y de integración con Vitest y Jest.",
    ],
  },
  stats: [
    { label: "Especialidad", value: "React & TS" },
    { label: "Enfoque", value: "Testing & Clean Code" },
    { label: "Proyectos", value: "10+ Completados" },
    { label: "Metodología", value: "Agile & TDD" },
  ],
  traits: [
    "Pasión por el código limpio, tipado estricto y componentes desacoplados.",
    "Fuerte enfoque en testing (TDD, unit tests y testing de integración).",
    "Interfaces accesibles (a11y), responsive y optimizadas en rendimiento.",
    "Mentalidad de aprendizaje continuo y evolución tecnológica constante.",
  ],
  milestones: [
    {
      period: "2024 - Presente",
      title: "Desarrollo Frontend & React Avanzado",
      description: "Especialización intensiva en React, TypeScript, Tailwind CSS, TanStack Query y backend Node/Express con Fernando Herrera.",
      badge: "Formación Activa",
    },
    {
      period: "2023 - 2024",
      title: "Profundización en Testing & Arquitectura",
      description: "Implementación de suites de pruebas con Vitest, Jest y React Testing Library, garantizando cobertura y robustez.",
      badge: "Especialización",
    },
    {
      period: "2023",
      title: "Fundamentos Web & JavaScript Moderno",
      description: "Dominio de ES6+, manipulación del DOM, programación asíncrona, diseño responsive y consumo de APIs REST.",
      badge: "Base Técnica",
    },
  ],
};

export const initialProjects: Project[] = [
  {
    id: "kanban-board",
    title: "Interactive Kanban Board",
    description: "Tablero ágil con arquitectura modular por dominios, drag & drop intuitivo y persistencia de tareas en localStorage.",
    longDescription: "Tablero ágil con arquitectura modular por dominios (feature-driven) construida bajo metodología SDD. Integra drag & drop, CRUD completo de tareas y persistencia defensiva.",
    technologies: ["React", "TypeScript", "Tailwind", "Vitest", "@dnd-kit", "Zustand", "Base UI"],
    category: "Frontend",
    githubUrl: "https://github.com/javi097/kanban",
    demoUrl: "https://kanban-smoky-eight.vercel.app/",
    featured: true,
    highlights: ["Drag & drop a 60 FPS con commit atómico",
      "Búsqueda con normalización NFD",
      "46 tests unitarios en Vitest",
      "Accesible WAI-ARIA (@base-ui/react)"],
  },

];
