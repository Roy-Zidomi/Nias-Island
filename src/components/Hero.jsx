import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};

function SearchBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="absolute -bottom-16 left-4 right-4 md:left-[10%] md:right-[10%] max-w-[1100px] mx-auto bg-white rounded-2xl shadow-xl z-20 flex flex-col md:flex-row overflow-hidden"
    >
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 p-2 md:p-0">
        
        {/* Destination */}
        <div className="px-6 py-4 md:py-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <svg className="w-6 h-6 text-nias-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <div className="flex-1">
            <h5 className="font-sans font-bold text-sm text-nias-dark">Destinasi</h5>
            <p className="font-sans text-xs text-gray-400 mt-1">Ke mana tujuan Anda?</p>
          </div>
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
        </div>

        {/* Activity */}
        <div className="px-6 py-4 md:py-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
           <svg className="w-6 h-6 text-nias-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          <div className="flex-1">
            <h5 className="font-sans font-bold text-sm text-nias-dark">Aktivitas</h5>
            <p className="font-sans text-xs text-gray-400 mt-1">Semua Aktivitas</p>
          </div>
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
        </div>

        {/* When */}
        <div className="px-6 py-4 md:py-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <svg className="w-6 h-6 text-nias-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <div className="flex-1">
            <h5 className="font-sans font-bold text-sm text-nias-dark">Kapan</h5>
            <p className="font-sans text-xs text-gray-400 mt-1">Pilih tanggal</p>
          </div>
        </div>

        {/* Guests */}
        <div className="px-6 py-4 md:py-6 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <svg className="w-6 h-6 text-nias-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          <div className="flex-1">
            <h5 className="font-sans font-bold text-sm text-nias-dark">Tamu</h5>
            <p className="font-sans text-xs text-gray-400 mt-1">0 Orang</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="bg-nias-orange hover:bg-[#d46d3e] text-white font-sans font-bold text-lg px-8 py-5 md:py-auto flex items-center justify-center gap-2 transition-colors duration-300 min-w-[200px]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        Mulai Cari
      </button>
    </motion.div>
  );
}

export default function Hero() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-[90vh] md:min-h-[800px] flex items-center max-w-[1920px] mx-auto bg-nias-bg pt-[90px]"
      aria-label="Hero — Selamat datang di Nias"
    >
      {/* Full Background with Zoom-out Effect */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
           initial={{ scale: 1.15 }}
           animate={{ scale: 1 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="w-full h-full"
        >
          <img 
            src="/hero-bg.png" 
            alt="Pemandangan indah Pulau Nias" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-nias-navy/90 via-nias-navy/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20 topo-pattern pointer-events-none mix-blend-overlay" />
      </div>

      {/* Main Content container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl py-20 pb-32 w-full flex flex-col items-center"
        >
          {/* Script Text */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="font-script text-3xl md:text-5xl lg:text-6xl italic text-nias-orange drop-shadow-lg">
              Keindahan alam
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="font-sans text-5xl sm:text-6xl md:text-[72px] lg:text-[84px] font-extrabold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-xl"
          >
            Jelajahi surga dunia di Nias
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-white/80 max-w-2xl font-light mb-10 drop-shadow-md"
          >
            Temukan pengalaman tak terlupakan melalui ombak epik, budaya megalitik, dan kehangatan masyarakat pesisir di surga tersembunyi Sumatera.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#wisata"
              onClick={(e) => handleClick(e, '#wisata')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-nias-orange text-white font-sans font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-nias-orange/30 group"
            >
               Mulai Petualangan 
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#budaya"
              onClick={(e) => handleClick(e, '#budaya')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-sans font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
            >
               Tonton Video 
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Overlapping Bottom Search Bar */}
      <SearchBar />

    </section>
  );
}
