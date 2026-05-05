import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const WHATSAPP_NUMBER = '5562992511491';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error('Por favor, preencha nome e mensagem.');
      return;
    }
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setForm({ name: '', subject: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contato" className="relative bg-[#0F172A] py-24 lg:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-accent" />
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-accent font-medium">
                Contato
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              Vamos conversar sobre o seu caso
            </h2>

            <p className="font-sans text-base lg:text-lg text-white/50 leading-relaxed mb-10 max-w-md">
              Tem uma decisão com valores a receber ou a impugnar? Entre em contato. A análise do seu caso começa com uma conversa.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-accent text-[#0F172A] font-sans font-semibold text-sm rounded-sm hover:bg-accent/90 transition-colors duration-300 mb-8"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0F172A]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>

            <div className="space-y-3">
              <a
                href="mailto:contato@willsandes.com.br"
                className="flex items-center gap-3 font-sans text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-accent" />
                contato@willsandes.com.br
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-2 block">Nome</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-white/15 text-white font-sans text-base py-3 focus:border-accent focus:outline-none transition-colors placeholder:text-white/20"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-2 block">Assunto</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-white/15 text-white font-sans text-base py-3 focus:border-accent focus:outline-none transition-colors placeholder:text-white/20"
                  placeholder="Ex: Revisão de cálculo"
                />
              </div>
              <div>
                <label className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-2 block">Mensagem</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-white/15 text-white font-sans text-base py-3 focus:border-accent focus:outline-none transition-colors resize-none placeholder:text-white/20"
                  placeholder="Descreva brevemente o seu caso..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="flex items-center gap-3 px-8 py-3.5 bg-accent text-[#0F172A] font-sans font-semibold text-sm rounded-sm hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50"
              >
                <Send size={16} />
                {sending ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
