import { BookOpen, CheckCircle2, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { personalInfo } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Intro & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
                Sobre mí
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Mi Trayectoria & Filosofía
              </h2>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {personalInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors"
                >
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-foreground mt-1">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap gap-3">
              <Button asChild className="gap-2">
                <Link to="/contact">
                  <Send className="size-4" />
                  Hablemos de tu proyecto
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a
                  href="#projects"
                  className="cursor-pointer"
                >
                  <FileText className="size-4" />
                  Ver mis trabajos
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Detailed Story & Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              {personalInfo.bio.detailed.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Trait list */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="size-5 text-primary" />
                Lo que me define como desarrollador:
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {personalInfo.traits.map((trait, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground bg-secondary/30 p-3 rounded-lg border border-border/50"
                  >
                    <span className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Milestones Timeline */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="size-5 text-primary" />
                Hitos & Aprendizaje
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-border">
                {personalInfo.milestones.map((milestone, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 pl-8 group">
                    <div className="absolute left-2.5 top-1.5 -translate-x-1/2 size-3 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-primary font-mono">
                          {milestone.period}
                        </span>
                        <Badge variant="secondary" className="text-[10px] py-0 px-2">
                          {milestone.badge}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-foreground text-base">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
