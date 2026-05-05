import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Calculator, Scale, User } from 'lucide-react';

const stats = [
  { icon: Clock, value: '+7', label: 'Anos de experiência' },
  { icon: Calculator, value: '100+', label: 'Cálculos realizados' },
  { icon: Scale, value: '2x', label: 'Advogado e Engenheiro' },
  { icon: User, value: '100%', label: 'Atendimento direto' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre" className="relative bg-background py-24 lg:py-32">
      {/* Subtle ruler line */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-border/50 hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-accent" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-accent font-medium">
              Sobre
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-12 max-w-2xl">
            Quem é <span className="text-accent">Will Sandes</span> de Melo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-sans text-base lg:text-lg text-muted-foreground leading-[1.8] mb-6">
              Will Sandes de Melo é advogado e engenheiro com mais de 7 anos de atuação focada em Liquidação e Cumprimento de Sentença. Sua formação dupla permite unir o rigor técnico da engenharia à precisão do direito — uma combinação que faz diferença real na qualidade dos cálculos e na solidez das fundamentações.
            </p>
            <p className="font-sans text-base lg:text-lg text-muted-foreground leading-[1.8]">
              Ao longo da carreira, analisou centenas de cálculos judiciais e construiu reputação baseada em resultados consistentes, atenção aos detalhes e comprometimento direto com cada caso. Não delega o essencial. Cada trabalho tem sua análise pessoal.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-sm p-6 hover:border-accent/30 transition-colors duration-300"
                >
                  <stat.icon size={20} className="text-accent mb-4" strokeWidth={1.5} />
                  <p className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
