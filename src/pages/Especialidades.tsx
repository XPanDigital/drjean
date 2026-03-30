import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const specialties = [
  {
    id: "implantes",
    title: "Implantes Dentários",
    desc: "Reabilitação completa com implantes de última geração. Utilizamos materiais biocompatíveis de altíssima qualidade para garantir durabilidade, estética natural e função mastigatória perfeita.",
    number: "01"
  },
  {
    id: "protocolo",
    title: "Prótese Protocolo",
    desc: "A solução definitiva para quem perdeu todos os dentes. Uma prótese fixa sobre implantes que devolve a segurança para sorrir, falar e mastigar com total conforto.",
    number: "02"
  },
  {
    id: "estetica",
    title: "Estética Dentária",
    desc: "Transformação do sorriso com lentes de contato dental e facetas de porcelana ultra-finas. Planejamento digital para resultados harmônicos e naturais.",
    number: "03"
  },
  {
    id: "removiveis",
    title: "Próteses Removíveis",
    desc: "Alternativas confortáveis e funcionais, desenhadas sob medida para se adaptarem perfeitamente à sua anatomia, garantindo estética e estabilidade.",
    number: "04"
  },
  {
    id: "cirurgias",
    title: "Cirurgias da Face",
    desc: "Procedimentos cirúrgicos faciais avançados realizados com precisão, visando a harmonia orofacial e a resolução de complexidades anatômicas.",
    number: "05"
  },
  {
    id: "rinomodelacao",
    title: "Rinomodelação",
    desc: "Modelação do nariz sem cirurgia. Procedimento minimamente invasivo que corrige imperfeições e harmoniza o perfil facial com resultados imediatos.",
    number: "06"
  }
];

export function Especialidades() {
  return (
    <div className="flex flex-col">
      {/* Header - Editorial */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-primary-light-gray">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <FadeIn className="max-w-4xl">
            <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase mb-6 block">
              Nossos Tratamentos
            </span>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[90px] text-primary-deep-blue mb-8 leading-[0.9] tracking-tight">
              Especialidades <br />
              <span className="italic text-secondary-medium-gray">Clínicas</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-secondary-medium-gray max-w-2xl font-light leading-relaxed">
              Oferecemos tratamentos odontológicos de alto padrão, combinando tecnologia de ponta, materiais premium e expertise técnica para resultados excepcionais.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* List - Editorial */}
      <section className="py-24 md:py-40 bg-primary-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="border-t border-primary-deep-blue/10">
            {specialties.map((spec, i) => (
              <FadeIn key={spec.id} delay={i * 0.1}>
                <div className="group border-b border-primary-deep-blue/10 py-12 md:py-16 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 hover:bg-primary-light-gray/50 transition-colors px-4 md:px-8">
                  <span className="font-display text-5xl md:text-6xl text-secondary-soft-gold/50 group-hover:text-secondary-soft-gold transition-colors">
                    {spec.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-4xl text-primary-deep-blue mb-6 group-hover:translate-x-2 transition-transform duration-500">
                      {spec.title}
                    </h3>
                    <p className="font-body text-lg text-secondary-medium-gray leading-relaxed max-w-2xl font-light">
                      {spec.desc}
                    </p>
                  </div>
                  <div className="lg:self-center mt-6 lg:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
                    <Button variant="outline" asChild>
                      <Link to="/contato">Agendar Avaliação</Link>
                    </Button>
                  </div>
                  <div className="lg:hidden mt-6">
                    <Button variant="link" asChild>
                      <Link to="/contato" className="flex items-center gap-2">
                        Agendar Avaliação <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Minimalist */}
      <section className="py-24 md:py-40 bg-primary-deep-blue text-primary-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <FadeIn className="mb-24 md:mb-32">
            <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase mb-6 block">
              Metodologia
            </span>
            <h2 className="font-display font-light text-4xl md:text-6xl lg:text-[80px] leading-[0.9] tracking-tight">
              Nosso <span className="italic text-primary-white/60">Processo</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { step: "01", title: "Avaliação Inicial", desc: "Análise clínica completa e escaneamento digital de alta precisão." },
              { step: "02", title: "Planejamento 3D", desc: "Simulação digital do resultado final esperado para aprovação." },
              { step: "03", title: "Procedimento", desc: "Execução com precisão cirúrgica e conforto máximo ao paciente." },
              { step: "04", title: "Acompanhamento", desc: "Suporte contínuo e revisões periódicas para garantir o sucesso." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative">
                <div className="font-display text-6xl text-primary-white/10 mb-6">{item.step}</div>
                <div className="w-full h-[1px] bg-primary-white/20 mb-8 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary-soft-gold" />
                </div>
                <h4 className="font-display text-2xl mb-4">{item.title}</h4>
                <p className="font-body text-sm text-primary-white/60 font-light leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
