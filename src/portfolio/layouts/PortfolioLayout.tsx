import { Navbar } from "@/components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";
import { ScrollToTop } from "@/components/ScrollToTop";

export const PortfolioLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
