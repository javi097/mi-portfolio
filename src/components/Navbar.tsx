import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/portfolioData";

interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/projects" },
  { label: "Sobre mí", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-foreground transition-colors"
        >
          <span className="text-primary font-mono group-hover:scale-105 transition-transform">
            {"<"}
          </span>
          <span>{personalInfo.name}</span>
          <span className="text-primary font-mono group-hover:scale-105 transition-transform">
            {"/>"}
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium transition-all relative py-1",
                      isActive
                        ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                        : "text-muted-foreground hover:text-foreground"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-border" />

          {/* Availability pill & Theme toggle */}
          <div className="flex items-center gap-3">
            {personalInfo.availableForWork && (
              <NavLink
                to="/contact"
                className="hidden lg:flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
              >
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Disponible</span>
              </NavLink>
            )}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-transparent hover:border-border transition-all cursor-pointer"
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              title={theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
            >
              {theme === "dark" ? (
                <Sun className="size-4.5 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="size-4.5 text-slate-700 hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border transition-all"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <Sun className="size-4 text-amber-400" />
            ) : (
              <Moon className="size-4 text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors border border-border rounded-lg bg-card"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block text-base font-medium py-2 px-3 rounded-lg transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {personalInfo.availableForWork && (
            <div className="pt-2 border-t border-border">
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 text-xs font-medium w-full py-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
              >
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalInfo.statusText}</span>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
