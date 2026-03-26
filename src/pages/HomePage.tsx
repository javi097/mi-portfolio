import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
// ... otros componentes

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Aquí vas pegando las secciones de la IA */}
      </main>
    </div>
  );
};