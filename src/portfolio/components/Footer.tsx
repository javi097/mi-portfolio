import { Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: personalInfo.github,
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
    },
    {
      name: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer
      id="contact"
      className="py-16 px-6 border-t border-border bg-secondary/20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Contacto
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              ¿Hablamos de tu próximo proyecto?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md text-sm">
              Si quieres discutir un proyecto, colaborar o simplemente saludar, siempre estoy abierto a nuevas oportunidades.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Ir a la página de contacto &rarr;
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:text-right flex flex-col md:items-end justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm">
                Encuéntrame en la red
              </h3>
              <div className="flex md:justify-end gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.name !== "Email" ? "_blank" : undefined}
                      rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="group p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all flex items-center gap-2"
                      aria-label={link.name}
                      title={link.name}
                    >
                      <Icon className="size-4" />
                      <span className="text-xs font-medium hidden sm:inline">
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-primary hover:text-primary/80 transition-colors font-medium font-mono"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="mt-6 md:mt-0">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-2 rounded-lg hover:bg-secondary"
                aria-label="Volver arriba"
              >
                <span>Volver arriba</span>
                <ArrowUp className="size-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} {personalInfo.fullName}. Todos los derechos reservados.
          </p>
          <p>
            Construido con{" "}
            <span className="text-primary font-medium">React 19</span>,{" "}
            <span className="text-primary font-medium">TypeScript</span> y{" "}
            <span className="text-primary font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
