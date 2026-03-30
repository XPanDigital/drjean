import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Editorial Split */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-primary-light-gray">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <FadeIn>
              <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase mb-6 block">
                Odontologia de Alta Performance
              </span>
              <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[100px] leading-[0.9] text-primary-deep-blue mb-8 tracking-tight">
                Precisão <br />
                <span className="italic text-secondary-medium-gray">encontra</span> Arte.
              </h1>
              <p className="font-body text-lg text-secondary-medium-gray max-w-md mb-12 font-light leading-relaxed">
                Transforme seu sorriso com a tecnologia mais avançada e o profissionalismo de referência em Curitiba.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Button size="lg" asChild>
                  <Link to="/contato">Agendar Consulta</Link>
                </Button>
                <Button size="lg" variant="link" asChild>
                  <Link to="/especialidades" className="flex items-center gap-2">
                    Nossos Tratamentos <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 relative hidden md:block">
            <FadeIn delay={0.3} direction="left">
              <div className="aspect-[3/4] clip-arch overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
                  alt="Consultório Odontológico Moderno"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetrical */}
      <section className="py-24 md:py-40 bg-primary-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <FadeIn direction="right">
                <div className="aspect-square clip-oval overflow-hidden relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
                    alt="Dr. Jean Brustolim"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 vertical-text font-body text-[10px] tracking-[0.3em] uppercase text-secondary-medium-gray hidden md:block">
                  CRO-PR 34200 • Top Of Mind
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-7 flex flex-col">
              <FadeIn direction="left">
                <h2 className="font-display font-light text-4xl md:text-6xl text-primary-deep-blue mb-8">
                  Dr. Jean Brustolim
                </h2>
                <p className="font-body text-lg md:text-xl text-secondary-medium-gray leading-relaxed mb-8 font-light">
                  Com uma abordagem que une precisão cirúrgica e visão artística, dedico-me a transformar vidas através de sorrisos perfeitos. Nossa clínica oferece um ambiente sofisticado onde a tecnologia de ponta encontra o cuidado humano excepcional.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-primary-deep-blue/10">
                  <div>
                    <span className="block font-display text-4xl text-secondary-soft-gold mb-2">15+</span>
                    <span className="font-body text-xs uppercase tracking-widest text-secondary-medium-gray">Anos de Experiência</span>
                  </div>
                  <div>
                    <span className="block font-display text-4xl text-secondary-soft-gold mb-2">3D</span>
                    <span className="font-body text-xs uppercase tracking-widest text-secondary-medium-gray">Planejamento Digital</span>
                  </div>
                </div>
                
                <div>
                  <Button variant="link" asChild>
                    <Link to="/sobre" className="flex items-center gap-2">
                      Conhecer Trajetória Completa <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Highlight - Editorial List */}
      <section className="py-24 md:py-40 bg-primary-deep-blue text-primary-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <FadeIn className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase mb-4 block">
                Expertise
              </span>
              <h2 className="font-display font-light text-4xl md:text-6xl mb-6">Nossas Especialidades</h2>
            </div>
            <p className="font-body text-lg text-primary-white/70 max-w-md font-light">
              Procedimentos de excelência realizados com as técnicas mais avançadas da odontologia mundial.
            </p>
          </FadeIn>
          
          <div className="border-t border-primary-white/20">
            {[
              { title: "Implantes Dentários", desc: "Reabilitação completa com implantes de última geração." },
              { title: "Prótese Protocolo", desc: "Solução fixa definitiva para reabilitação total da arcada." },
              { title: "Estética Dentária", desc: "Transformação estética com lentes de contato e facetas." },
              { title: "Rinomodelação", desc: "Harmonização do perfil facial sem cirurgia." },
            ].map((spec, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link to="/especialidades" className="group border-b border-primary-white/20 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 hover:bg-primary-white/5 transition-colors px-4 md:px-8">
                  <span className="font-display text-4xl md:text-5xl text-secondary-soft-gold group-hover:text-primary-white transition-colors">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl flex-1 group-hover:translate-x-4 transition-transform duration-500">
                    {spec.title}
                  </h3>
                  <p className="font-body text-sm max-w-xs text-primary-white/60 group-hover:text-primary-white/90 transition-colors">
                    {spec.desc}
                  </p>
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight size={24} className="text-secondary-soft-gold" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Minimalist */}
      <section className="py-24 md:py-40 bg-primary-light-gray">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <FadeIn className="text-center mb-20">
            <h2 className="font-display font-light text-4xl md:text-6xl text-primary-deep-blue mb-6">O Que Dizem</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {[
              { name: "Mariana Silva", text: "O Dr. Jean é um profissional excepcional. Meu implante ficou perfeito e o atendimento foi impecável do início ao fim." },
              { name: "Roberto Costa", text: "Recomendo muito! Profissionalismo e qualidade em cada detalhe. A clínica é linda e a equipe muito atenciosa." },
              { name: "Ana Paula Mendes", text: "Transformou meu sorriso completamente. Muito satisfeita com o resultado das minhas lentes de contato." }
            ].map((test, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center text-center">
                <Quote className="text-secondary-soft-gold/40 mb-8" size={40} strokeWidth={1} />
                <p className="font-display text-xl md:text-2xl text-primary-deep-blue italic leading-relaxed mb-8 flex-1">
                  "{test.text}"
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-secondary-soft-gold fill-secondary-soft-gold" />
                  ))}
                </div>
                <h4 className="font-body text-xs font-bold uppercase tracking-widest text-secondary-medium-gray">{test.name}</h4>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Large Typography */}
      <section className="py-32 md:py-48 bg-primary-white text-center px-6">
        <FadeIn className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-display font-light text-5xl md:text-7xl lg:text-[90px] text-primary-deep-blue mb-12 leading-[0.9] tracking-tight">
            Pronto para <br />
            <span className="italic text-secondary-soft-gold">Transformar</span> Seu Sorriso?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/contato">Agendar Avaliação</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a href="https://wa.me/5541987835795?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Jean%20Brustolim." target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
