import { motion } from 'framer-motion';

const cultures = [
  {
    title: 'Hombo Batu',
    subtitle: 'Lompat Batu',
    image: '/lompatbatunias.jpg',
    description:
      'Tradisi lompat batu setinggi 2 meter yang menjadi simbol kedewasaan pemuda Nias. Ritual kuno ini menguji keberanian, kekuatan, dan kesiapan seorang pemuda untuk menjadi pejuang sejati desa.',
  },
  {
    title: 'Tari Faluaya',
    subtitle: 'Tarian Perang',
    image: '/upacaraadatnias.jpg',
    description:
      'Tarian perang tradisional yang menggambarkan keberanian dan kekuatan prajurit Nias. Setiap gerakan menyimbolkan strategi pertempuran dan semangat juang yang tak tergoyahkan dari Ono Niha.',
  },
  {
    title: 'Omo Niha',
    subtitle: 'Rumah Adat',
    image: '/rumahadatnias.JPG',
    description:
      'Arsitektur tradisional megah yang dibangun tanpa paku — hanya pasak kayu. Rumah adat ini bertahan dari gempa karena struktur panggungnya yang fleksibel, sebuah kejeniusan teknik nenek moyang.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Culture() {
  return (
    <section
      id="budaya"
      className="relative section-padding bg-[#FAFAF8] overflow-hidden"
      aria-label="Kekayaan Budaya Nias"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-t from-nias-orange/5 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] mix-blend-multiply topo-pattern pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-nias-orange font-bold mb-4">
            Kekayaan Budaya
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-nias-navy leading-tight mb-4">
            Warisan yang{' '}
            <span className="text-nias-orange">Tak Lekang</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-xl mx-auto text-lg">
            Tiga pilar budaya yang menjadikan Nias unik di antara peradaban nusantara.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cultures.map((item, i) => (
            <motion.article
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="group relative bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              <div className="relative -mx-8 -mt-8 mb-6 h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>
              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-nias-navy mb-1 relative inline-block">
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nias-orange transition-all duration-300 group-hover:w-full" />
              </h3>
              <p className="font-sans text-sm font-semibold text-nias-orange mb-4 tracking-wide mt-2">
                {item.subtitle}
              </p>
              <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Bottom link */}
              <div className="pt-4 border-t border-gray-100">
                <span className="inline-flex items-center gap-2 font-sans text-sm font-bold text-nias-orange group-hover:gap-3 transition-all duration-300 cursor-pointer">
                  Pelajari Lebih
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
