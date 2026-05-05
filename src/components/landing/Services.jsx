import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    code: 'SERVICE_01',
    title: 'Elaboração de Cálculos de Liquidação',
    description: 'Desenvolvimento completo dos cálculos com base nos parâmetros da decisão judicial — correção monetária, juros de mora, competência e legislação aplicável.',
  },
  {
    code: 'SERVICE_02',
    title: 'Revisão e Impugnação de Cálculos',
    description: 'Análise técnica dos cálculos apresentados pela parte contrária, identificando erros, inconsistências e fundamentos para impugnação.',
  },
  {
    code: 'SERVICE_03',
    title: 'Análise da Condenação',
    description: 'Leitura criteriosa da decisão para identificar omissões, parâmetros mal definidos e pontos que podem afetar o valor final apurado.',
  },
  {
    code: 'SERVICE_04',
    title: 'Fundamentação Técnica',
    description: 'Elaboração de peças fundamentadas para recursos e manifestações, com base técnica sólida que sustenta qualquer questionamento.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="servicos" className="relative bg-secondary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-accent" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-accent font-medium">
              Serviços
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4 max-w-xl">
            O que ofereço
          </h2>
          <p className="font-sans text-base text-muted-foreground mb-14 max-w-lg">
            Soluções técnicas para quem precisa de precisão nos números e segurança no processo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="group relative bg-card border border-border rounded-sm p-8 lg:p-10 hover:border-accent/40 transition-all duration-500 overflow-hidden"
            >
              {/* Blueprint grid on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" style={{
                backgroundImage: 'linear-gradient(rgba(184,150,12,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,12,.6) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />

              <span className="font-sans text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase mb-4 block">
                {service.code}
              </span>
              <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Accent line at bottom */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-accent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
