import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const PORTRAIT_URL = 'https://media.base44.com/images/public/69fa2e0a0de335702ba3a3bc/80f19105d_Image_azul2.png';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-[#0F172A] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full pt-24 pb-16 lg:pt-0 lg:pb-0">
          
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1">
            
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-accent" />
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-accent font-medium">
                Will Sandes de Melo
              </span>
            </div>

            <p className="text-sm font-sans uppercase tracking-[0.2em] text-white/50 mb-4">Advogado

            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold text-white leading-[1.1] mb-8">
              Precisão técnica onde os números definem o{' '}
              <span className="text-accent">resultado.</span>
            </h1>

            <p className="font-sans text-base lg:text-lg text-white/60 leading-relaxed max-w-lg mb-10">
              Atuação focada em Liquidação e Cumprimento de Sentença. Cálculos judiciais, revisão, impugnação e fundamentação técnica para quem precisa de segurança nos números.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('#contato')}
                className="px-8 py-3.5 bg-accent text-[#0F172A] font-sans font-semibold text-sm tracking-wide rounded-sm hover:bg-accent/90 transition-all duration-300">
                
                Fale Comigo
              </button>
              <button
                onClick={() => scrollTo('#servicos')}
                className="px-8 py-3.5 border border-white/20 text-white font-sans font-medium text-sm tracking-wide rounded-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                
                Conheça os Serviços
              </button>
            </div>
          </motion.div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end">
            
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-accent/30 rounded-sm" />
              <img
                src={PORTRAIT_URL}
                alt="Will Sandes de Melo — Advogado e Engenheiro"
                className="relative w-56 sm:w-64 lg:w-72 xl:w-80 aspect-[3/4] object-cover rounded-sm grayscale-[20%]" />
              
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent p-6 rounded-b-sm">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent">
                  Especialista em Liquidação de Sentença
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/30">Scroll</span>
        <ArrowDown size={16} className="text-white/30" />
      </motion.div>
    </section>);

}
