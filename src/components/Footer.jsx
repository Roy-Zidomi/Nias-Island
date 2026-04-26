import { motion } from 'framer-motion';

const footerNav = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Budaya', href: '#budaya' },
  { label: 'Wisata', href: '#wisata' },
  { label: 'Kuliner', href: '#kuliner' },
  { label: 'Galeri', href: '#galeri' },
];

const socials = [
  { name: 'Instagram', icon: 'M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm4.5 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.1-2.7a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z' },
  { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="kontak"
      className="relative bg-[#1F2937] overflow-hidden"
      aria-label="Footer"
    >
      {/* Decorative top border */}
      <div className="h-px w-full"
        style={{
          background: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(223,122,73,0.3) 20px, rgba(223,122,73,0.3) 21px, transparent 21px, transparent 60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#beranda" onClick={(e) => handleClick(e, '#beranda')} className="inline-block mb-4">
              <span className="font-display text-3xl font-bold text-white tracking-wider">NIAS</span>
              <div className="w-8 h-[2px] bg-nias-orange mt-1" />
            </a>
            <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-xs">
              Surga tersembunyi di barat Sumatera. Tempat budaya megalitik bertemu
              ombak kelas dunia.
            </p>
          </motion.div>

          {/* Navigasi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-sans text-sm font-semibold text-nias-orange tracking-wider uppercase mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="font-sans text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-sans text-sm font-semibold text-nias-orange tracking-wider uppercase mb-5">
              Kontak
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-nias-orange/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Gunung Sitoli, Nias<br />Sumatera Utara 22811</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-nias-orange/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@visitnias.id</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-nias-orange/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 822 xxxx xxxx</span>
              </li>
            </ul>
          </motion.div>

          {/* Sosial Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-sans text-sm font-semibold text-nias-orange tracking-wider uppercase mb-5">
              Sosial Media
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-nias-orange hover:bg-nias-orange/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="mt-6 font-sans text-xs text-gray-500 leading-relaxed">
              Ikuti kami untuk update terbaru tentang wisata, budaya, dan event di Pulau Nias.
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-gray-500">
              © {new Date().getFullYear()} Visit Nias. Semua hak dilindungi.
            </p>
            <p className="font-sans text-xs text-gray-500">
              Made with <span className="text-red-400">❤️</span> for Nias
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
