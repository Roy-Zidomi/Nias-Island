import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 5625, suffix: ' km²', label: 'Luas Pulau' },
  { value: 756000, suffix: '+', label: 'Jumlah Penduduk' },
  { value: 3000, suffix: '+', label: 'Tahun Sejarah Megalitik' },
  { value: 8, suffix: 'm', label: 'Tinggi Ombak Sorake' },
];

function AnimatedCounter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * end);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-nias-navy tabular-nums">
      {count.toLocaleString('id-ID')}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative bg-white border-y border-gray-100 overflow-hidden" aria-label="Statistik Nias">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-nias-orange/5 via-transparent to-nias-navy/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center group"
            >
              {/* Separator — show on left of items after first on large screens */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    className="w-full h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent origin-top"
                  />
                </div>
              )}

              <div className="flex flex-col items-center gap-3">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span className="font-sans text-xs sm:text-sm text-gray-500 font-semibold tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
