import { useState } from "react";
import { ArrowRight, Terminal, Copy, Check, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.role}",
  specialties: ["React", "TypeScript", "Testing"],
  methodology: "Clean Code & TDD",
  status: "${personalInfo.statusText}"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center px-6 py-12 md:py-20 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
              <Sparkles className="size-3.5" />
              <span>Desarrollador Frontend & Entusiasta de Testing</span>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground font-medium text-lg">
                Hola, soy
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
                {personalInfo.name}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                  García
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-foreground/90 font-semibold pt-1">
                {personalInfo.role} <span className="text-primary">|</span> {personalInfo.subRole}
              </p>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              {personalInfo.bio.short}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20">
                <Link to="/projects">
                  Ver Proyectos
                  <ArrowRight size={18} />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/contact">
                  <Send size={16} />
                  Contactar
                </Link>
              </Button>
            </div>

            {/* Social Links & Quick stats */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-all"
                  aria-label="Perfil de GitHub de Javier"
                  title="GitHub"
                >
                  <GithubIcon className="size-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-all"
                  aria-label="Perfil de LinkedIn de Javier"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              </div>

              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-primary" />
                  <span>React 19 & TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span>Vitest & Jest</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Terminal / Code Window */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden backdrop-blur-sm group">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
                  <div className="ml-2 flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                    <Terminal className="size-3.5" />
                    <span>developer.config.ts</span>
                  </div>
                </div>

                <button
                  onClick={copyCode}
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded transition-colors cursor-pointer"
                  title="Copiar código"
                  aria-label="Copiar código"
                >
                  {copied ? (
                    <Check className="size-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                </button>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-background/50">
                <div className="text-muted-foreground">// Perfil y configuración</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-foreground/80">name:</span>{" "}
                  <span className="text-emerald-400">"{personalInfo.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-foreground/80">role:</span>{" "}
                  <span className="text-emerald-400">"{personalInfo.role}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-foreground/80">specialties:</span> [
                  <span className="text-primary">"React"</span>,{" "}
                  <span className="text-primary">"TypeScript"</span>,{" "}
                  <span className="text-primary">"Testing"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-foreground/80">methodology:</span>{" "}
                  <span className="text-emerald-400">"Clean Code & TDD"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-foreground/80">course:</span>{" "}
                  <span className="text-sky-400">"React Fernando Herrera"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-foreground/80">status:</span>{" "}
                  <span className="text-emerald-400">"🟢 {personalInfo.statusText}"</span>
                </div>
                <div>&#125;;</div>

                {/* Live interactive pills */}
                <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-2 font-sans">
                  <a
                    href="#tech"
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    # Tecnologías
                  </a>
                  <a
                    href="#projects"
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    # Proyectos
                  </a>
                  <a
                    href="#about"
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    # Sobre mí
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
