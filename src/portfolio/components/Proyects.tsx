import { ProjectCard, type Project } from "./ProyectCard";


const projects: Project[] = [
  {
    title: "Task Manager App",
    description:
      "Aplicación de gestión de tareas con drag & drop, filtros avanzados y persistencia local. Implementa patrones de diseño y testing exhaustivo.",
    technologies: ["React", "TypeScript", "Jest", "Tailwind"],
    githubUrl: "https://github.com/tu-usuario/task-manager",
    demoUrl: "https://task-manager-demo.vercel.app",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Panel de administración para tienda online con métricas en tiempo real, gestión de productos y análisis de ventas.",
    technologies: ["React", "TypeScript", "Vitest", "Chart.js"],
    githubUrl: "https://github.com/tu-usuario/ecommerce-dashboard",
    demoUrl: "https://ecommerce-dash-demo.vercel.app",
  },
  {
    title: "Weather App",
    description:
      "Aplicación de clima con geolocalización, pronóstico extendido y temas dinámicos según las condiciones meteorológicas.",
    technologies: ["React", "TypeScript", "API REST", "CSS Modules"],
    githubUrl: "https://github.com/tu-usuario/weather-app",
    demoUrl: "https://weather-app-demo.vercel.app",
  },
  {
    title: "Notes App",
    description:
      "Aplicación de notas con soporte markdown, categorización por tags, búsqueda instantánea y sincronización.",
    technologies: ["React", "TypeScript", "Jest", "LocalStorage"],
    githubUrl: "https://github.com/tu-usuario/notes-app",
    demoUrl: "https://notes-app-demo.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Proyectos Destacados
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
