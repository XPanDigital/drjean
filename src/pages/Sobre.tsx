import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React from "react";

export function Sobre() {
  return (
    <div className="flex flex-col">
      {/* Hero - Editorial */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-primary-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-7 z-10">
              <FadeIn>
                <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase mb-6 block">
                  O Profissional
                </span>
                <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[100px] leading-[0.9] text-primary-deep-blue mb-8 tracking-tight">
                  Dr. Jean <br />
                  <span className="italic text-secondary-medium-gray">Brustolim</span>
                </h1>
                <p className="font-body text-lg text-secondary-medium-gray max-w-xl mb-12 font-light leading-relaxed">
                  Especialista em Implantodontia e Estética Dentária, reconhecido por sua precisão técnica e visão artística na reconstrução de sorrisos. Com mais de 15 anos de dedicação exclusiva à odontologia de alta performance, tornou-se referência em casos complexos de reabilitação oral.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <Button size="lg" asChild>
                    <Link to="/contato">Agendar Consulta</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-5 relative">
              <FadeIn delay={0.3} direction="left">
                <div className="aspect-[3/4] clip-arch overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
                    alt="Dr. Jean Brustolim"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 vertical-text font-body text-[10px] tracking-[0.3em] uppercase text-secondary-medium-gray hidden md:block">
                  CRO-PR 34200 • Curitiba, PR
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Minimalist */}
      <section className="py-24 md:py-40 bg-primary-deep-blue text-primary-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <QuoteIcon className="mx-auto text-secondary-soft-gold/30 mb-12 w-16 h-16" />
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.2] font-light italic mb-12">
              "Minha filosofia baseia-se no Minimalismo Sofisticado, onde cada intervenção é planejada para ser o menos invasiva possível, garantindo resultados naturais e em perfeita harmonia com a face."
            </p>
            <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase">
              Dr. Jean Brustolim
            </span>
          </FadeIn>
        </div>
      </section>

      {/* Credentials - Editorial List */}
      <section className="py-24 md:py-40 bg-primary-light-gray">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <FadeIn>
                <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase mb-6 block">
                  Reconhecimento
                </span>
                <h2 className="font-display font-light text-4xl md:text-6xl text-primary-deep-blue mb-8">
                  Credenciais & <br />
                  <span className="italic text-secondary-medium-gray">Prêmios</span>
                </h2>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-8">
              <div className="border-t border-primary-deep-blue/10">
                {[
                  { title: "Top Of Mind Brasil", desc: "Reconhecimento nacional em excelência odontológica (2025/2026)." },
                  { title: "Mentor HOF", desc: "Palestrante e mentor em Harmonização Orofacial avançada." },
                  { title: "Especialista em Implantodontia", desc: "Formação rigorosa e atualização constante nas melhores técnicas mundiais." },
                  { title: "Referência em Rinomodelação", desc: "Técnicas exclusivas e minimamente invasivas para resultados naturais." }
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="border-b border-primary-deep-blue/10 py-8 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 group">
                      <h3 className="font-display text-2xl md:text-3xl text-primary-deep-blue md:w-1/2 group-hover:text-secondary-soft-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-body text-base text-secondary-medium-gray md:w-1/2 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Gallery - Asymmetrical */}
      <section className="py-24 md:py-40 bg-primary-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <FadeIn className="mb-20">
            <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase mb-6 block">
              O Espaço
            </span>
            <h2 className="font-display font-light text-4xl md:text-6xl text-primary-deep-blue mb-8">
              Nossa <span className="italic text-secondary-medium-gray">Clínica</span>
            </h2>
            <p className="font-body text-lg text-secondary-medium-gray max-w-2xl font-light leading-relaxed">
              Localizada no Batel, o coração nobre de Curitiba, nossa clínica foi projetada para oferecer uma experiência premium. Ambientes sofisticados, tecnologia de ponta e um atendimento exclusivo aguardam por você.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <FadeIn delay={0.1} className="md:col-span-8 aspect-[16/9] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop" 
                alt="Recepção da Clínica" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                referrerPolicy="no-referrer" 
              />
            </FadeIn>
            <FadeIn delay={0.2} className="md:col-span-4 aspect-square md:aspect-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" 
                alt="Detalhe da Clínica" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                referrerPolicy="no-referrer" 
              />
            </FadeIn>
            <FadeIn delay={0.3} className="md:col-span-12 aspect-[21/9] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop" 
                alt="Consultório" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
                referrerPolicy="no-referrer" 
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}
