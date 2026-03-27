export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
              Sobre mí
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Mi Trayectoria
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Soy un desarrollador apasionado por crear interfaces accesibles y
              experiencias digitales de alta calidad. Mi trabajo se encuentra en
              la intersección del diseño y el desarrollo, creando experiencias
              que no solo lucen bien sino que están meticulosamente construidas
              para el rendimiento y la usabilidad.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Actualmente soy{" "}
              <span className="text-foreground font-medium">
                estudiante avanzado del curso MERN
              </span>{" "}
              de{" "}
              <span className="text-primary font-medium">Fernando Herrera</span>
              , donde he profundizado en el desarrollo full-stack con MongoDB,
              Express, React y Node.js.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque principal está en{" "}
              <span className="text-foreground font-medium">React</span> y{" "}
              <span className="text-foreground font-medium">TypeScript</span>,
              con un fuerte énfasis en las prácticas de testing utilizando{" "}
              <span className="text-foreground font-medium">Jest</span> y{" "}
              <span className="text-foreground font-medium">Vitest</span>. Creo
              firmemente que el código bien testeado es código de calidad.
            </p>

            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">
                Lo que me define:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Pasión por el código limpio y las buenas prácticas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Enfoque en testing y calidad del software
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Aprendizaje continuo y mejora constante
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Colaboración y trabajo en equipo
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
