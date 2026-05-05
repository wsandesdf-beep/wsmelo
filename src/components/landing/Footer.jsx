import React from 'react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080E1D] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          <div>
            <p className="font-serif text-2xl text-white font-semibold mb-1">Will Sandes de Melo</p>
            <p className="font-sans text-sm text-white/40">Advogado · Engenheiro</p>
          </div>

          <div className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-sans text-sm text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p className="font-serif text-base text-white/50 italic">
            "Cálculos precisos. Resultados reais."
          </p>
          <p className="font-sans text-[11px] tracking-[0.15em] text-white/25 uppercase text-right">
            OAB/GO 72.404
          </p>
        </div>

        <p className="font-sans text-[11px] text-white/20 mt-6 max-w-lg">
          Este site tem caráter informativo e não constitui consulta jurídica. A consulta jurídica requer análise individualizada do caso.
        </p>
      </div>
    </footer>
  );
}
