import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="tentang"
      className="relative section-padding bg-nias-bg overflow-hidden"
      aria-label="Tentang Nias"
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-nias-orange/5 via-transparent to-nias-navy/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, var(--color-nias-navy) 40px, var(--color-nias-navy) 41px)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-nias-orange font-bold mb-4">
              Tentang Nias
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-nias-navy mb-8 leading-tight">
              Tanah Para{' '}
              <span className="text-nias-orange">Ono Niha</span>
            </h2>

            <div className="space-y-5 font-sans text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                Pulau Nias terletak di lepas pantai barat Sumatera Utara, sebuah daratan seluas
                5.625 km² yang menyimpan salah satu peradaban megalitik tertua di Asia Tenggara.
                Masyarakatnya, yang menamakan diri &ldquo;Ono Niha&rdquo; — Anak Manusia — telah
                mendiami pulau ini selama lebih dari tiga milenium.
              </p>
              <p>
                Di sini, desa-desa kuno dengan arsitektur kayu monumental masih berdiri kokoh.
                Tradisi lompat batu (<em>hombo batu</em>) tak sekadar pertunjukan — ia adalah
                ujian kedewasaan yang telah berlangsung sejak zaman nenek moyang. Setiap ukiran,
                setiap tarian, setiap nyanyian menyimpan makna kosmologis yang mendalam.
              </p>
              <p>
                Namun Nias bukan hanya tentang masa lalu. Ombak setinggi delapan meter di Pantai
                Sorake menjadikannya surga bagi para peselancar dunia, sementara terumbu karang
                di Kepulauan Hinako menawarkan dunia bawah laut yang masih perawan. Nias adalah
                perpaduan sempurna antara warisan dan keajaiban alam.
              </p>
            </div>

            {/* Decorative quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 pl-6 border-l-4 border-nias-orange/30"
            >
              <p className="font-serif text-xl md:text-2xl italic text-nias-navy/80 leading-relaxed font-medium">
                &ldquo;Nias bukan sekadar pulau — ia adalah peradaban yang hidup.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Visual Column — Card Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative h-[500px] md:h-[600px]"
          >
            {/* Card 1 — large back */}
            <div className="absolute top-0 right-0 w-[75%] h-[65%] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
              <div className="w-full h-full bg-gradient-to-br from-[#0D4F6E] via-[#1A8FA0]/60 to-[#0D4F6E]/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-sans text-xs text-white/80 tracking-wider uppercase">Pantai Sorake</span>
                <p className="font-display text-lg text-white mt-1">Ombak Legendaris</p>
              </div>
            </div>

            {/* Card 2 — medium middle */}
            <div className="absolute top-[30%] left-0 w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 z-10">
              <div className="w-full h-full bg-gradient-to-br from-[#2D5016] via-[#4A7C2F]/70 to-[#1A2E22]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-sans text-xs text-white/80 tracking-wider uppercase">Desa Bawömataluo</span>
                <p className="font-display text-lg text-white mt-1">Warisan Megalitik</p>
              </div>
            </div>

            {/* Card 3 — small front */}
            <div className="absolute bottom-0 right-[5%] w-[50%] h-[40%] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 z-20">
              <div className="w-full h-full bg-gradient-to-br from-[#E8B84B]/80 via-[#C4A882] to-[#E8B84B]/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-sans text-xs text-white/90 tracking-wider uppercase">Tari Tradisional</span>
                <p className="font-display text-lg text-white mt-1">Jiwa Ono Niha</p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[15%] left-[5%] z-30 px-4 py-2 rounded-full bg-white text-xs font-sans text-nias-navy font-bold tracking-wide shadow-xl flex items-center gap-2"
            >
               <svg className="w-4 h-4 text-nias-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" /></svg>
              Warisan Dunia UNESCO
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
