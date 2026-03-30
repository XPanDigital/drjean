import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Especialidades", path: "/especialidades" },
  { name: "Sobre", path: "/sobre" },
  { name: "Galeria", path: "/galeria" },
  { name: "Contato", path: "/contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled 
          ? "bg-primary-white/90 backdrop-blur-md border-primary-deep-blue/10 py-4" 
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-display font-medium text-3xl tracking-tight text-primary-deep-blue group-hover:text-secondary-soft-gold transition-colors">
            JB.
          </span>
          <div className="hidden sm:flex flex-col border-l border-primary-deep-blue/20 pl-3">
            <span className="font-body text-[10px] text-primary-deep-blue tracking-[0.2em] uppercase leading-tight">Dr. Jean Brustolim</span>
            <span className="font-body text-[9px] text-secondary-medium-gray tracking-[0.1em] uppercase leading-tight mt-0.5">Implantodontia & Estética</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    "font-body text-xs tracking-[0.1em] uppercase transition-colors hover:text-secondary-soft-gold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-secondary-soft-gold hover:after:w-full after:transition-all after:duration-300",
                    location.pathname === link.path ? "text-primary-deep-blue font-semibold after:w-full" : "text-secondary-medium-gray"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild size="sm" variant="outline" className="border-primary-deep-blue/20">
            <Link to="/contato">Agendar Consulta</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary-deep-blue p-2 hover:text-secondary-soft-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 right-0 bg-primary-white md:hidden overflow-hidden border-t border-primary-deep-blue/10"
          >
            <nav className="container mx-auto px-6 py-12 flex flex-col gap-8 h-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "font-display text-4xl transition-colors",
                      location.pathname === link.path ? "text-primary-deep-blue italic" : "text-secondary-medium-gray hover:text-primary-deep-blue"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Button asChild className="w-full" size="lg">
                  <Link to="/contato">Agendar Consulta</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
