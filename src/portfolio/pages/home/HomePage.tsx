import { Navbar } from '@/components/Navbar';
import { About } from '@/portfolio/components/About';
import { Footer } from '@/portfolio/components/Footer';
import { Hero } from '@/portfolio/components/Hero';
import { Projects } from '@/portfolio/components/Proyects';
import { TechStack } from '@/portfolio/components/TechStack';

// ... otros componentes

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};