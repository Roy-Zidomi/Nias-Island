import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const destinations = [
  {
    name: 'Pulau Tello',
    tag: 'Island',
    tagColor: 'bg-nias-wave/20 text-nias-wave',
    image: '/PulauTELLO.jpg',
    description: 'Pulau Tello di Nias Selatan adalah surga tersembunyi yang menawarkan keindahan alam asri, eksotis, dan tenang',
    gradient: 'from-nias-ocean via-nias-wave/70 to-nias-ocean/90',
  },
  {
    name: 'Pantai Sorake',
    tag: 'Surfing',
    tagColor: 'bg-nias-wave/20 text-nias-wave',
    image: '/ombaksorake.jpg',
    description: 'Ombak legendaris setinggi 8 meter yang menarik peselancar dari seluruh dunia. Salah satu right-hand break terbaik di planet ini.',
    gradient: 'from-nias-ocean via-nias-wave/70 to-nias-ocean/90',
  },
  {
    name: 'Pantai Lagundri',
    tag: 'Surfing',
    tagColor: 'bg-nias-wave/20 text-nias-wave',
    image: '/lagundripantai.png',
    description: 'Teluk yang tenang di sebelah Sorake, sempurna untuk peselancar pemula dan penikmat pantai berpasir putih.',
    gradient: 'from-nias-wave/80 via-nias-ocean to-nias-forest/70',
  },
  {
    name: 'Desa Bawömataluo',
    tag: 'Budaya',
    tagColor: 'bg-nias-gold/20 text-nias-gold',
    image: '/Bawomataluo.jpg',
    description: 'Desa megalitik terbesar di Nias Selatan. Rumah-rumah adat berusia ratusan tahun berdiri megah di atas bukit.',
    gradient: 'from-nias-moss via-nias-palm/70 to-nias-forest',
  },
  {
    name: 'Pulau-Pulau Hinako',
    tag: 'Alam',
    tagColor: 'bg-nias-palm/20 text-nias-palm',
    image: '/kepulauanhinako.jpg',
    description: 'Gugusan pulau kecil dengan terumbu karang pristine. Surga snorkeling dan diving yang masih tersembunyi.',
    gradient: 'from-nias-ocean/80 via-nias-wave to-nias-palm/50',
  },
  {
    name: 'Teluk Dalam',
    tag: 'Budaya',
    tagColor: 'bg-nias-gold/20 text-nias-gold',
    image: '/telukdalam.jpg',
    description: 'Pusat kebudayaan Nias Selatan. Gerbang menuju desa-desa adat dan tradisi megalitik yang masih lestari.',
    gradient: 'from-nias-forest via-nias-moss/70 to-nias-ocean/60',
  },
  {
    name: 'Gunung Sitoli',
    tag: 'Kota',
    tagColor: 'bg-nias-sand/20 text-nias-sand',
    image: '/gunungsitoli.jpg',
    description: 'Ibu kota Kabupaten Nias. Kota pelabuhan yang menjadi titik awal petualangan menjelajahi seluruh pulau.',
    gradient: 'from-nias-night via-nias-forest to-nias-moss/80',
  },
];

// Duplicate for seamless infinite loop
const extendedDestinations = [...destinations, ...destinations];

export default function Tourism() {
  const scrollRef = useRef(null);
  const pauseAutoUntilRef = useRef(0);

  const pauseAutoScroll = (duration = 4500) => {
    pauseAutoUntilRef.current = Date.now() + duration;
  };

  const scrollByCard = (direction) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const card = scrollContainer.querySelector('article');
    if (!card) return;

    const styles = getComputedStyle(scrollContainer);
    const gap = parseFloat(styles.gap || '0');
    const step = card.getBoundingClientRect().width + gap;
    const halfWidth = scrollContainer.scrollWidth / 2;

    pauseAutoScroll();

    if (direction < 0 && scrollContainer.scrollLeft <= step * 0.6) {
      scrollContainer.scrollLeft += halfWidth;
    }
    if (direction > 0 && scrollContainer.scrollLeft >= halfWidth - step * 0.6) {
      scrollContainer.scrollLeft -= halfWidth;
    }

    scrollContainer.scrollBy({
      left: step * direction,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    scrollContainer.scrollLeft = 1;

    let animationFrameId;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;

    const normalizeScroll = () => {
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollContainer.scrollLeft >= halfWidth) {
        scrollContainer.scrollLeft -= halfWidth;
      }
    };

    const scrollStep = () => {
      const shouldAutoScroll =
        !isDragging &&
        Date.now() > pauseAutoUntilRef.current;

      if (shouldAutoScroll) {
        scrollContainer.scrollLeft += 1.2;
        normalizeScroll();
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    const handleTouchStart = () => pauseAutoScroll(5500);
    const handleTouchEnd = () => pauseAutoScroll(2500);
    const handleScroll = () => normalizeScroll();

    const handlePointerDown = (event) => {
      if (event.pointerType !== 'mouse') return;
      isDragging = true;
      dragStartX = event.clientX;
      dragStartScrollLeft = scrollContainer.scrollLeft;
      pauseAutoScroll(6000);
      scrollContainer.classList.add('cursor-grabbing');
      scrollContainer.style.scrollBehavior = 'auto';
    };

    const handlePointerMove = (event) => {
      if (!isDragging) return;
      const deltaX = event.clientX - dragStartX;
      scrollContainer.scrollLeft = dragStartScrollLeft - deltaX;
      normalizeScroll();
    };

    const handlePointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      scrollContainer.classList.remove('cursor-grabbing');
      scrollContainer.style.scrollBehavior = '';
    };

    const handlePointerCancel = () => {
      isDragging = false;
      scrollContainer.classList.remove('cursor-grabbing');
      scrollContainer.style.scrollBehavior = '';
    };

    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchend', handleTouchEnd);
    scrollContainer.addEventListener('pointerdown', handlePointerDown);
    scrollContainer.addEventListener('pointercancel', handlePointerCancel);
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
      scrollContainer.removeEventListener('pointerdown', handlePointerDown);
      scrollContainer.removeEventListener('pointercancel', handlePointerCancel);
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <section
      id="wisata"
      className="relative section-padding bg-nias-bg overflow-hidden"
      aria-label="Wisata Nias"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-nias-orange font-bold mb-4">
            Destinasi Unggulan
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-nias-navy leading-tight mb-4">
            Destinasi Yang{' '}
            <span className="text-nias-orange">Menanti</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-xl text-lg">
            Dari ombak yang menantang hingga desa purba yang memikat — setiap sudut Nias menyimpan cerita.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-20 hidden md:flex items-center pl-4 lg:pl-6">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="h-11 w-11 rounded-full bg-white/90 text-nias-navy shadow-lg shadow-black/10 border border-white/80 backdrop-blur hover:bg-white hover:text-nias-orange transition-colors"
            aria-label="Geser wisata ke kiri"
          >
            <svg className="mx-auto h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 z-20 hidden md:flex items-center pr-4 lg:pr-6">
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="h-11 w-11 rounded-full bg-white/90 text-nias-navy shadow-lg shadow-black/10 border border-white/80 backdrop-blur hover:bg-white hover:text-nias-orange transition-colors"
            aria-label="Geser wisata ke kanan"
          >
            <svg className="mx-auto h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 px-4 sm:px-6 lg:px-[calc((100vw-80rem)/2+2rem)] pb-4 overflow-x-auto hide-scrollbar cursor-grab select-none"
        >
          {extendedDestinations.map((dest, i) => (
            <motion.article
              key={`${dest.name}-${i}`}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % destinations.length) * 0.1 }}
              className="group relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-gray-200/50"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dest.gradient}`} />
              {dest.image && (
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-sans font-medium mb-3 ${dest.tagColor}`}>
                  {dest.tag}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-nias-orange transition-colors duration-300">
                  {dest.name}
                </h3>
                <p className="font-sans text-sm text-white/70 line-clamp-2 group-hover:text-white transition-colors duration-300">
                  {dest.description}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 group-hover:bg-nias-orange flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Scroll hint fade */}
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-nias-bg to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
