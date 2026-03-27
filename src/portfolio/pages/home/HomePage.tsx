
import { About } from '@/portfolio/components/About';

import { Hero } from '@/portfolio/components/Hero';
import { Projects } from '@/portfolio/components/Proyects';
import { TechStack } from '@/portfolio/components/TechStack';

// ... otros componentes

export const HomePage = () => {
  return (
    <div className="min-h-screen  text-white">
      <Hero />
      <TechStack />
      <Projects />
      <About />
    </div>
  );
};