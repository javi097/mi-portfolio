import { useState, useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { initialProjects } from "@/data/portfolioData";
import { Search, FolderGit2, X } from "lucide-react";

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "Frontend", "Fullstack", "Tools"];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "Todos" || project.category === selectedCategory;

      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !term ||
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Proyectos Destacados
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-lg">
              Aplicaciones desarrolladas con foco en arquitectura, código limpio, testing y experiencia de usuario.
            </p>
          </div>

          {/* Search bar & filter controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por tecnología o nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-8 py-2 text-xs bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 border border-dashed border-border rounded-xl bg-card/40">
            <FolderGit2 className="size-12 mx-auto text-muted-foreground/60 mb-3" />
            <h3 className="text-lg font-semibold text-foreground mb-1">
              No se encontraron proyectos
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm mx-auto">
              No hay proyectos que coincidan con "{searchTerm}" en la categoría "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
              }}
              className="text-xs font-medium text-primary hover:underline cursor-pointer"
            >
              Restablecer filtros de búsqueda
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
