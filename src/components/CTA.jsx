import { motion } from 'framer-motion';

export default function CTA() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      aria-label="Ajakan bertindak"
    >
      {/* Deep navy gradient background for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-nias-navy via-nias-dark to-[#0f172a]" />

      {/* Radial accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(223,122,73,0.4), transparent 70%)' }}
        />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)' }}
        />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Wave SVG top (matches gallery bg) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="#FAFAF8"
          />
        </svg>
      </div>

      {/* Wave SVG bottom (matches footer bg) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16 animate-wave">
          <path
            d="M0,30 C200,70 400,10 600,40 C800,70 1000,10 1200,40 C1320,55 1400,25 1440,30 L1440,80 L0,80 Z"
            fill="#1F2937"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6"
          >
            Nias{' '}
            <span className="text-shimmer">Menantimu</span>
          </motion.h2>

          <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mulailah perjalananmu menuju pulau yang menyimpan keajaiban di setiap sudutnya.
            Nias bukan sekadar destinasi — ia adalah pengalaman yang mengubahmu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#kontak"
              onClick={(e) => handleClick(e, '#kontak')}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-nias-orange text-white font-sans font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-nias-orange/30"
            >
              <span className="relative z-10">Rencanakan Perjalanan</span>
              <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#kontak"
              onClick={(e) => handleClick(e, '#kontak')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-sans font-medium text-lg rounded-full hover:border-nias-orange hover:text-nias-orange hover:bg-white/5 transition-all duration-300 hover:scale-[1.02]"
            >
              Hubungi Kami
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
