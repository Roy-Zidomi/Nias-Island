import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Budaya', href: '#budaya' },
  { label: 'Wisata', href: '#wisata' },
  { label: 'Kuliner', href: '#kuliner' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-[70px]' : 'h-[90px]'
          }`}>
            {/* Logo */}
            <a
              href="#beranda"
              onClick={(e) => handleNavClick(e, '#beranda')}
              className="flex flex-shrink-0 items-center justify-center gap-2 group"
              aria-label="Kembali ke beranda"
            >
              <svg className="w-8 h-8 text-nias-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" strokeDasharray="4 2" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M8 8l8 8M16 8l-8 8" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              <span className="font-display font-bold text-2xl tracking-wide text-nias-dark group-hover:text-nias-orange transition-colors duration-200">
                triply
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8 ml-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative font-sans text-sm font-semibold text-nias-dark hover:text-nias-orange transition-colors duration-200 flex items-center gap-1 group"
                >
                  {link.label}
                  <div className="w-[3px] h-[3px] bg-nias-orange rounded-full opacity-0 group-hover:opacity-100 mt-[8px]"></div>
                </a>
              ))}
            </div>

            {/* Right Side: Phone & Icons */}
            <div className="flex items-center gap-6 md:gap-8 ml-auto">
              <div className="hidden md:flex items-center gap-2">
                <svg className="w-4 h-4 text-nias-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  <rect x="5" y="3" width="2" height="2" />
                  <rect x="5" y="7" width="2" height="2" />
                  <rect x="9" y="3" width="2" height="2" />
                </svg>
                <a href="tel:+628113335578" className="font-sans font-bold text-[15px] text-nias-dark hover:text-nias-orange transition-colors">
                  1800 - 333 5578
                </a>
              </div>

              <div className="flex items-center gap-4 text-nias-dark">
                {/* User Icon */}
                <button aria-label="User account" className="hover:text-nias-orange transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                {/* Menu Hamburger */}
                <button 
                  aria-label="Open menu" 
                  className="hover:text-nias-orange transition-colors"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Same as before but light theme updated) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-nias-dark/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col items-start pt-10 px-8 gap-6">
                <button className="self-end hover:text-nias-orange" onClick={() => setMobileOpen(false)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="font-sans text-xl font-bold text-nias-dark hover:text-nias-orange transition-colors duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
