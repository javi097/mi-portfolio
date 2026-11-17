import { Hero } from "@/portfolio/components/Hero";
import { TechStack } from "@/portfolio/components/TechStack";
import { Projects } from "@/portfolio/components/Projects";
import { About } from "@/portfolio/components/About";

export const HomePage = () => {
  return (
    <div className="min-h-screen text-foreground">
      <Hero />
      <TechStack />
      <Projects />
      <About />
    </div>
  );
};
