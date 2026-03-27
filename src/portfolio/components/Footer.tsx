import { Mail } from "lucide-react";
import { Link } from "react-router";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/tu-usuario",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tu-usuario",
  },
  {
    name: "Email",
    href: "mailto:tu-email@ejemplo.com",
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="py-16 px-6 border-t border-border bg-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
              Contacto
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
              {"¿Hablamos?"}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Si quieres discutir un proyecto o simplemente saludar, siempre
              estoy abierto a conversar.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h3 className="font-semibold text-foreground mb-4">
              Encuéntrame en
            </h3>
            <div className="flex md:justify-end gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >

                  <span className="text-sm hidden sm:inline">{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="mailto:tu-email@ejemplo.com"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                tu-email@ejemplo.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tu Nombre. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con{" "}
            <span className="text-primary">React</span>,{" "}
            <span className="text-primary">TypeScript</span> y{" "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
