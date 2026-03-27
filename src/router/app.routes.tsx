import { createBrowserRouter, Navigate } from "react-router";

import { HomePage } from "@/portfolio/pages/home/HomePage";

import { AboutPage } from "@/portfolio/pages/about/AboutPage";
import { PortfolioLayout } from "@/portfolio/layouts/PorfolioLayout";
import { ProjectPage } from '@/portfolio/pages/projects/ProjectPage';
import { ContactPage } from "@/portfolio/pages/contact/ContactPage";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'projects',
        element: <ProjectPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      // Comodín para redirigir si la ruta no existe
      {
        path: '*',
        element: <Navigate to="/" />
      },
    ]
  }
]);