import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons/SocialIcons";
import type { Project } from "@/portfolio/types/portfolio.types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-primary uppercase">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mt-0.5">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary transition-all"
              aria-label={`Ver código de ${project.title} en GitHub`}
              title="Código en GitHub"
            >
              <GithubIcon className="size-4" />
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary transition-all"
              aria-label={`Ver demo en vivo de ${project.title}`}
              title="Demo en vivo"
            >
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights if present */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-5 space-y-1.5 text-xs text-muted-foreground/90">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary/80" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
        {project.technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="text-[11px] font-medium px-2 py-0.5 bg-secondary/80 hover:bg-secondary"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </article>
  );
}

// Re-export type for backward compatibility
export type { Project };
