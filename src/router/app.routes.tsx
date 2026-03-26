import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { HomePage } from '../pages/HomePage';
// Importa aquí otras páginas si las separas

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Aquí podrás añadir /projects o /about más adelante */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};