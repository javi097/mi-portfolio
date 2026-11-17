export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'Fullstack' | 'Frontend' | 'Testing' | 'Tools';
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  highlights?: string[];
}

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  category: 'Frontend' | 'Lenguaje' | 'Testing' | 'Herramientas' | 'Estilos';
  experience?: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  username?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
