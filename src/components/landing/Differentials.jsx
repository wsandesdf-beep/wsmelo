import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Target, Eye, TrendingUp } from 'lucide-react';

const items = [
  {
    icon: GraduationCap,
    title: 'Formação dupla — Direito e Engenharia',
    text: 'O jurídico define o que é devido. O técnico define como apurar com precisão. Quando os dois trabalham juntos, o resultado é mais sólido e mais difícil de contestar.',
  },
  {
    icon: Target,
    title: 'Foco, não generalismo',
    text: 'Atuação concentrada em liquidação e cumprimento de sentença. Isso significa profundidade de conhecimento onde realmente importa.',
  },
  {
    icon: Eye,
    title: 'Análise direta',
    text: 'Cada cálculo tem atenção pessoal. Sem repasse, sem terceirização do que é essencial.',
  },
  {
    icon: TrendingUp,
    title: 'Técnica a serviço do resultado',
    text: 'Domínio dos índices de correção, juros de mora e parâmetros aplicáveis — os fatores que realmente definem o valor de uma execução.',
  },
];

export default function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="diferenciais" className="relative bg-background py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-accent" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-accent font-medium">
              Diferenciais
            </span>
            <span className="w-10 h-px bg-accent" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-lg mx-auto">
            Por que faz diferença
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-[#0F172A] flex items-center justify-center">
                <item.icon size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg lg:text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
