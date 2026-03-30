import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-deep-blue text-primary-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Col 1: Logo & Desc */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-4 group w-fit">
              <span className="font-display font-medium text-4xl tracking-tight text-primary-white group-hover:text-secondary-soft-gold transition-colors">
                JB.
              </span>
              <div className="flex flex-col border-l border-primary-white/20 pl-4">
                <span className="font-body text-xs text-primary-white tracking-[0.2em] uppercase leading-tight">Dr. Jean Brustolim</span>
                <span className="font-body text-[10px] text-secondary-silver tracking-[0.1em] uppercase leading-tight mt-1">Implantodontia & Estética</span>
              </div>
            </Link>
            <p className="font-body text-sm text-secondary-silver font-light leading-relaxed max-w-sm">
              Excelência em implantodontia e estética dentária. Transformando sorrisos com precisão, arte e tecnologia em Curitiba.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-secondary-silver hover:text-secondary-soft-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-secondary-silver hover:text-secondary-soft-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Col 2: Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary-soft-gold mb-8">Navegação</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="font-body text-sm text-secondary-silver hover:text-primary-white transition-colors font-light">Home</Link></li>
              <li><Link to="/especialidades" className="font-body text-sm text-secondary-silver hover:text-primary-white transition-colors font-light">Especialidades</Link></li>
              <li><Link to="/sobre" className="font-body text-sm text-secondary-silver hover:text-primary-white transition-colors font-light">Sobre o Dr. Jean</Link></li>
              <li><Link to="/galeria" className="font-body text-sm text-secondary-silver hover:text-primary-white transition-colors font-light">Galeria de Casos</Link></li>
              <li><Link to="/contato" className="font-body text-sm text-secondary-silver hover:text-primary-white transition-colors font-light">Contato</Link></li>
            </ul>
          </div>

          {/* Col 3: Contato */}
          <div className="lg:col-span-3">
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary-soft-gold mb-8">Contato</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 group">
                <MapPin size={18} strokeWidth={1.5} className="text-secondary-silver group-hover:text-secondary-soft-gold transition-colors shrink-0 mt-0.5" />
                <span className="font-body text-sm text-secondary-silver font-light leading-relaxed">Av. Sete de Setembro, 4476<br />Sala 804 - Batel<br />Curitiba/PR</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={18} strokeWidth={1.5} className="text-secondary-silver group-hover:text-secondary-soft-gold transition-colors shrink-0" />
                <a href="https://wa.me/5541987835795?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Jean%20Brustolim." target="_blank" rel="noopener noreferrer" className="font-body text-sm text-secondary-silver hover:text-primary-white transition-colors font-light">
                  (41) 98783-5795
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={18} strokeWidth={1.5} className="text-secondary-silver group-hover:text-secondary-soft-gold transition-colors shrink-0" />
                <a href="mailto:contato@drjeanbrustolim.com.br" className="font-body text-sm text-secondary-silver hover:text-primary-white transition-colors font-light">contato@drjeanbrustolim.com.br</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary-soft-gold mb-8">Newsletter</h3>
            <p className="font-body text-sm text-secondary-silver font-light mb-6 leading-relaxed">
              Receba atualizações exclusivas sobre saúde bucal e estética avançada.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu endereço de e-mail" 
                className="bg-transparent border-b border-primary-white/20 py-2 text-sm text-primary-white placeholder:text-secondary-silver/50 focus:outline-none focus:border-secondary-soft-gold transition-colors font-light"
                required
              />
              <button 
                type="submit"
                className="text-left font-body text-xs font-bold uppercase tracking-[0.2em] text-primary-white hover:text-secondary-soft-gold transition-colors mt-2 w-fit"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-xs text-secondary-silver/70 font-light">
            © {new Date().getFullYear()} Dr. Jean Brustolim. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body text-xs text-secondary-silver/70 font-light">
            <span>CRO-PR: 34200</span>
            <span className="hidden md:inline text-primary-white/20">|</span>
            <Link to="#" className="hover:text-primary-white transition-colors">Política de Privacidade</Link>
            <Link to="#" className="hover:text-primary-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
