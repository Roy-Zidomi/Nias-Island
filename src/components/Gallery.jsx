import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  { id: 1, title: 'Ombak Sorake', location: 'Nias Selatan', gradient: 'from-nias-ocean via-nias-wave to-nias-ocean/80', span: 'md:col-span-2 md:row-span-2' },
  { id: 2, title: 'Desa Bawömataluo', location: 'Nias Selatan', gradient: 'from-nias-moss via-nias-palm to-nias-forest', span: '' },
  { id: 3, title: 'Upacara Adat', location: 'Teluk Dalam', gradient: 'from-nias-gold/80 via-nias-sand to-nias-gold/60', span: '' },
  { id: 4, title: 'Hutan Tropis', location: 'Nias Barat', gradient: 'from-nias-forest via-nias-moss to-nias-palm/80', span: '' },
  { id: 5, title: 'Pantai Lagundri', location: 'Nias Selatan', gradient: 'from-nias-wave via-nias-ocean to-nias-wave/70', span: 'md:row-span-2' },
  { id: 6, title: 'Lompat Batu', location: 'Bawömataluo', gradient: 'from-nias-sand via-nias-gold/60 to-nias-sand/80', span: '' },
  { id: 7, title: 'Rumah Adat', location: 'Desa Hilinawalo', gradient: 'from-nias-palm via-nias-moss to-nias-ocean/50', span: '' },
  { id: 8, title: 'Kepulauan Hinako', location: 'Nias Barat', gradient: 'from-nias-ocean via-nias-wave/60 to-nias-palm/40', span: 'md:col-span-2' },
  { id: 9, title: 'Sunset Nias', location: 'Pantai Sorake', gradient: 'from-nias-gold via-nias-sand/80 to-nias-ocean/60', span: '' },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="galeri"
      className="relative section-padding bg-[#FAFAF8] overflow-hidden"
      aria-label="Galeri Nias"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-nias-orange font-bold mb-4">
            Galeri Visual
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-nias-navy leading-tight">
            Nias Dalam{' '}
            <span className="text-nias-orange">Bingkai</span>
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${item.span}`}
              onClick={() => setSelected(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(item)}
              aria-label={`Lihat ${item.title}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`} />

              {/* Pattern texture */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-nias-night/0 group-hover:bg-nias-night/50 transition-all duration-500 flex items-end p-4">
                <div className="transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-display text-lg text-nias-white font-semibold">{item.title}</p>
                  <p className="font-sans text-xs text-nias-cream/60">{item.location}</p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-nias-night/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-3 h-3 text-nias-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nias-night/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-label={`Gambar ${selected.title}`}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${selected.gradient}`} />

              {/* Pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-nias-night/70 via-transparent to-transparent flex items-end p-6 md:p-10">
                <div>
                  <p className="font-display text-3xl md:text-4xl text-nias-white font-bold mb-2">{selected.title}</p>
                  <p className="font-sans text-nias-cream/70">{selected.location}</p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-nias-night/50 backdrop-blur-sm flex items-center justify-center text-nias-white hover:bg-nias-night/80 transition-colors"
                aria-label="Tutup"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
