import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";
import { Button } from "@/components/Button";

const cases = [
  {
    id: 1,
    category: "implantes",
    title: "Reabilitação Total Superior",
    desc: "Prótese protocolo sobre implantes.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "estetica",
    title: "Lentes de Contato Dental",
    desc: "Transformação estética com 10 lentes.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "implantes",
    title: "Implante Unitário Anterior",
    desc: "Reposição de dente perdido com estética natural.",
    image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "rinomodelacao",
    title: "Rinomodelação",
    desc: "Harmonização do perfil facial sem cirurgia.",
    image: "https://images.unsplash.com/photo-1512496015851-a1dc8f40781c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "estetica",
    title: "Clareamento a Laser",
    desc: "Resultados imediatos e duradouros.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "implantes",
    title: "Reabilitação Inferior",
    desc: "Implantes múltiplos para devolver a mastigação.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  }
];

export function Galeria() {
  const [filter, setFilter] = useState("todos");

  const filteredCases = filter === "todos" ? cases : cases.filter(c => c.category === filter);

  return (
    <div className="flex flex-col">
      {/* Header - Editorial */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-primary-light-gray">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <FadeIn className="max-w-4xl">
            <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase mb-6 block">
              Portfólio
            </span>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[90px] text-primary-deep-blue mb-8 leading-[0.9] tracking-tight">
              Casos <br />
              <span className="italic text-secondary-medium-gray">Clínicos</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-secondary-medium-gray max-w-2xl font-light leading-relaxed">
              Resultados reais que transformam vidas. Explore alguns dos nossos casos de sucesso em implantodontia e estética, onde a precisão encontra a arte.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery - Minimalist Grid */}
      <section className="py-24 md:py-40 bg-primary-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <FadeIn className="flex flex-wrap gap-8 mb-20 border-b border-primary-deep-blue/10 pb-8">
            {[
              { id: "todos", label: "Todos os Casos" },
              { id: "implantes", label: "Implantes" },
              { id: "estetica", label: "Estética" },
              { id: "rinomodelacao", label: "Rinomodelação" }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`font-body text-xs font-bold uppercase tracking-[0.2em] transition-colors relative pb-2 ${
                  filter === f.id 
                    ? "text-primary-deep-blue" 
                    : "text-secondary-medium-gray hover:text-primary-deep-blue"
                }`}
              >
                {f.label}
                {filter === f.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary-soft-gold" />
                )}
              </button>
            ))}
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredCases.map((c, i) => (
              <FadeIn key={c.id} delay={i * 0.1} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary-deep-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-soft-gold mb-3">
                    {c.category}
                  </span>
                  <h3 className="font-display text-2xl text-primary-deep-blue mb-2 group-hover:text-secondary-soft-gold transition-colors">
                    {c.title}
                  </h3>
                  <p className="font-body text-sm text-secondary-medium-gray font-light">
                    {c.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          {filteredCases.length === 0 && (
            <div className="text-center py-32">
              <p className="font-body text-lg text-secondary-medium-gray font-light">Nenhum caso encontrado para esta categoria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
