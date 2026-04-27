import { motion } from 'framer-motion';

const foods = [
  {
    name: 'Hambae Nititi',
    category: 'Hidangan Utama',
    image: '/hambaenititi.webp',
    description:
      'Ikan segar yang dibumbui dengan rempah khas Nias — kunyit, lengkuas, dan cabai — lalu dipanggang di atas arang kelapa. Aroma rempah yang menyatu dengan asap memberikan cita rasa yang tak terlupakan.',
    ingredients: ['Ikan Segar', 'Kunyit', 'Lengkuas', 'Cabai Nias'],
    gradient: 'from-nias-gold/30 via-nias-sand/20 to-nias-gold/10',
    accentClass: 'text-nias-gold',
  },
  {
    name: 'Gowi Nifufu',
    category: 'Makanan Pokok',
    image: '/Gowinifufu.jpg',
    description:
      'Talas yang ditumbuk halus hingga menjadi adonan kenyal, disajikan dengan kuah daging babi atau ikan. Makanan pokok yang menjadi identitas kuliner masyarakat Ono Niha sejak berabad-abad.',
    ingredients: ['Talas', 'Kelapa Parut', 'Garam Laut', 'Rempah Lokal'],
    gradient: 'from-nias-cream/20 via-nias-sand/15 to-nias-cream/10',
    accentClass: 'text-nias-sand',
  },
  {
    name: 'Babae',
    category: 'Hidangan Istimewa',
    image: '/Babae.webp',
    description:
      'Sup krim legendaris khas Nias Selatan berbahan kacang putih yang ditumbuk halus. Teksturnya lembut dan gurih, melambangkan ketulusan dan penghormatan tinggi kepada tamu dalam pesta adat.',
    ingredients: ['Kacang Putih (Harita Fakhe)', 'Santan Kental', 'Telur Ayam Kampung', 'Kunyit'],
    gradient: 'from-nias-moss/20 via-nias-palm/15 to-nias-forest/10',
    accentClass: 'text-nias-palm',
  },
  {
    name: 'Tuak Nias',
    category: 'Minuman Tradisional',
    image: '/tuaknias.jpg',
    description:
      'Minuman fermentasi dari sadapan pohon enau yang telah menjadi bagian tak terpisahkan dari kehidupan sosial dan ritual adat Nias. Rasanya manis alamiah dengan sedikit sentuhan asam.',
    ingredients: ['Nira Enau', 'Fermentasi Alami', 'Ragi Tradisional'],
    gradient: 'from-nias-ocean/20 via-nias-wave/15 to-nias-ocean/10',
    accentClass: 'text-nias-wave',
  },
];

export default function Culinary() {
  return (
    <section
      id="kuliner"
      className="relative section-padding bg-[#FAFAF8] overflow-hidden"
      aria-label="Kuliner Nias"
    >
      {/* Lighter inner area */}
      <div className="absolute inset-x-0 top-[15%] bottom-[15%] bg-white/50" />

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
            Gastronomi Nias
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-nias-navy leading-tight mb-4">
            Cita Rasa{' '}
            <span className="text-nias-orange">Ono Niha</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-xl mx-auto text-lg">
            Kekayaan rasa dari dapur tradisional yang telah diturunkan lintas generasi.
          </p>
        </motion.div>

        {/* Food items — alternating layout */}
        <div className="space-y-8 md:space-y-12">
          {foods.map((food, i) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-6 md:gap-10 items-center bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100`}
            >
              {/* Visual card */}
              <div className="w-full md:w-2/5 flex-shrink-0">
                <div
                  className={`relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden bg-gradient-to-br ${food.gradient} border border-white/50 group`}
                >
                  {food.image && (
                    <img
                      src={food.image}
                      alt={food.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {food.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  )}
                  {/* Pattern texture */}
                  <div className={`absolute inset-0 ${food.image ? 'opacity-10' : 'opacity-20'}`}
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/50 shadow-xl">
                      <span className="font-display text-3xl">
                        {food.category === 'Minuman Tradisional' ? '🍶' : food.category === 'Hidangan Istimewa' ? '🔥' : food.category === 'Makanan Pokok' ? '🌿' : '🐟'}
                      </span>
                    </div>
                  </div>
                  {/* Category label */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-sans font-bold bg-white shadow-sm ${food.accentClass}`}>
                      {food.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="w-full md:w-3/5">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-nias-navy mb-3">
                  {food.name}
                </h3>
                <p className="font-sans text-base text-gray-600 leading-relaxed mb-6">
                  {food.description}
                </p>
                {/* Ingredients */}
                <div className="flex flex-wrap gap-2">
                  {food.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-3 py-1.5 rounded-full bg-orange-50 text-nias-orange border border-orange-100 text-xs font-sans font-semibold"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
