import { Navbar } from "@/components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";

export const PortfolioLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* El main tiene un padding-top para que el navbar fijo no lo tape */}
      <main className="pt-20">
        <Outlet /> {/* <-- Aquí es donde aparecerá el HomePage, ProjectsPage, etc. */}
      </main>
      <Footer />
    </div>
  );
};