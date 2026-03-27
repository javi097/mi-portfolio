import { ArrowDown } from 'lucide-react'; // Ahora ya no dará error
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from 'react-router';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Hola, soy
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Javier
            </h1>
            <p className="text-xl sm:text-2xl text-primary font-medium">
              React Developer | TypeScript & Testing Enthusiast
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Desarrollo interfaces accesibles, pixel-perfect y experiencias
              digitales que combinan diseño cuidado con ingeniería robusta.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => navigate('/projects')} asChild size="lg" className="gap-2">
                <a href="/projects">
                  Ver Proyectos
                  <ArrowDown size={18} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <NavLink to="/contact">Contactar</NavLink>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >

              </a>
              <a
                href="https://linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >

              </a>
            </div>
          </div>

          {/* Right Column - Navigation */}
          <div className="hidden lg:flex flex-col items-start gap-4 pl-12 border-l border-border">
            <a
              href="#about"
              className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-12 h-px bg-muted-foreground group-hover:bg-primary group-hover:w-16 transition-all" />
              <span className="uppercase tracking-widest text-xs font-medium">
                Sobre mí
              </span>
            </a>
            <a
              href="#tech"
              className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-12 h-px bg-muted-foreground group-hover:bg-primary group-hover:w-16 transition-all" />
              <span className="uppercase tracking-widest text-xs font-medium">
                Tech Stack
              </span>
            </a>
            <a
              href="#projects"
              className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-12 h-px bg-muted-foreground group-hover:bg-primary group-hover:w-16 transition-all" />
              <span className="uppercase tracking-widest text-xs font-medium">
                Proyectos
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
