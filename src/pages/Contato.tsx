import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contato() {
  return (
    <div className="flex flex-col">
      {/* Header - Editorial */}
      <section className="pt-40 pb-24 md:pt-56 md:pb-32 bg-primary-light-gray">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <FadeIn className="max-w-4xl">
            <span className="font-body text-xs font-bold tracking-[0.2em] text-secondary-soft-gold uppercase mb-6 block">
              Atendimento Exclusivo
            </span>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[90px] text-primary-deep-blue mb-8 leading-[0.9] tracking-tight">
              Agende sua <br />
              <span className="italic text-secondary-medium-gray">Consulta</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-secondary-medium-gray max-w-2xl font-light leading-relaxed">
              Estamos prontos para recebê-lo em nossa clínica no Batel. Preencha o formulário abaixo ou entre em contato diretamente para iniciarmos a transformação do seu sorriso.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content - Split Layout */}
      <section className="py-24 md:py-40 bg-primary-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <h2 className="font-display font-light text-3xl md:text-4xl text-primary-deep-blue mb-12">
                  Informações de <span className="italic text-secondary-medium-gray">Contato</span>
                </h2>
                
                <div className="flex flex-col gap-10 mb-16">
                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 text-secondary-soft-gold group-hover:scale-110 transition-transform">
                      <MapPin size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary-deep-blue mb-3">Endereço</h4>
                      <p className="font-body text-base text-secondary-medium-gray font-light leading-relaxed">
                        Av. Sete de Setembro, 4476<br />Sala 804 - Batel<br />Curitiba/PR
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 text-secondary-soft-gold group-hover:scale-110 transition-transform">
                      <Phone size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary-deep-blue mb-3">Telefone / WhatsApp</h4>
                      <a href="https://wa.me/5541987835795?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Jean%20Brustolim." target="_blank" rel="noopener noreferrer" className="font-body text-base text-secondary-medium-gray font-light leading-relaxed hover:text-secondary-soft-gold transition-colors block">
                        (41) 98783-5795
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 text-secondary-soft-gold group-hover:scale-110 transition-transform">
                      <Mail size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary-deep-blue mb-3">E-mail</h4>
                      <p className="font-body text-base text-secondary-medium-gray font-light leading-relaxed">
                        contato@drjeanbrustolim.com.br
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 text-secondary-soft-gold group-hover:scale-110 transition-transform">
                      <Clock size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary-deep-blue mb-3">Horário de Atendimento</h4>
                      <p className="font-body text-base text-secondary-medium-gray font-light leading-relaxed">
                        Segunda a Sexta: 08:00 às 18:00
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-square md:aspect-video lg:aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.868739943632!2d-49.282500000000006!3d-25.4426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46e8b4e8e8b%3A0x8b8b8b8b8b8b8b8b!2sAv.%20Sete%20de%20Setembro%2C%204476%20-%20Batel%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa do Consultório"
                  ></iframe>
                </div>
              </FadeIn>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="left" className="bg-primary-light-gray p-8 md:p-16">
                <h2 className="font-display font-light text-3xl md:text-4xl text-primary-deep-blue mb-12">
                  Envie uma <span className="italic text-secondary-medium-gray">Mensagem</span>
                </h2>
                
                <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="font-body text-xs font-bold text-primary-deep-blue uppercase tracking-[0.2em]">Nome Completo</label>
                    <input type="text" id="name" className="bg-transparent border-b border-primary-deep-blue/20 py-3 focus:outline-none focus:border-secondary-soft-gold transition-colors font-body text-primary-deep-blue placeholder:text-secondary-medium-gray/50" placeholder="Como prefere ser chamado?" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="email" className="font-body text-xs font-bold text-primary-deep-blue uppercase tracking-[0.2em]">E-mail</label>
                      <input type="email" id="email" className="bg-transparent border-b border-primary-deep-blue/20 py-3 focus:outline-none focus:border-secondary-soft-gold transition-colors font-body text-primary-deep-blue placeholder:text-secondary-medium-gray/50" placeholder="seu@email.com" required />
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <label htmlFor="phone" className="font-body text-xs font-bold text-primary-deep-blue uppercase tracking-[0.2em]">Telefone / WhatsApp</label>
                      <input type="tel" id="phone" className="bg-transparent border-b border-primary-deep-blue/20 py-3 focus:outline-none focus:border-secondary-soft-gold transition-colors font-body text-primary-deep-blue placeholder:text-secondary-medium-gray/50" placeholder="(41) 90000-0000" required />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label htmlFor="subject" className="font-body text-xs font-bold text-primary-deep-blue uppercase tracking-[0.2em]">Assunto</label>
                    <select id="subject" className="bg-transparent border-b border-primary-deep-blue/20 py-3 focus:outline-none focus:border-secondary-soft-gold transition-colors font-body text-primary-deep-blue appearance-none rounded-none" required>
                      <option value="" disabled selected className="text-secondary-medium-gray/50">Selecione o motivo do contato</option>
                      <option value="agendamento">Agendamento de Consulta</option>
                      <option value="duvida">Dúvida sobre Tratamento</option>
                      <option value="orcamento">Orçamento</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label htmlFor="message" className="font-body text-xs font-bold text-primary-deep-blue uppercase tracking-[0.2em]">Mensagem</label>
                    <textarea id="message" rows={5} className="bg-transparent border-b border-primary-deep-blue/20 py-3 focus:outline-none focus:border-secondary-soft-gold transition-colors font-body text-primary-deep-blue placeholder:text-secondary-medium-gray/50 resize-none" placeholder="Como podemos ajudar a transformar seu sorriso?" required></textarea>
                  </div>
                  
                  <div className="flex items-start gap-4 mt-4">
                    <input type="checkbox" id="newsletter" className="mt-1 accent-secondary-soft-gold" />
                    <label htmlFor="newsletter" className="font-body text-sm text-secondary-medium-gray font-light leading-relaxed">
                      Concordo em receber comunicações sobre tratamentos e novidades da clínica Dr. Jean Brustolim.
                    </label>
                  </div>
                  
                  <div className="mt-8">
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
