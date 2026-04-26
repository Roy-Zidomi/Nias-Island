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
  const [activeLink, setActiveLink] = useState('#beranda');

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

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry?.target?.id) {
          setActiveLink(`#${activeEntry.target.id}`);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
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
            isScrolled ? 'h-[58px]' : 'h-[72px]'
          }`}>
            {/* Logo */}
            <a
              href="#beranda"
              onClick={(e) => handleNavClick(e, '#beranda')}
              className="flex flex-shrink-0 items-center justify-center gap-2 group"
              aria-label="Kembali ke beranda"
            >
              <img
                src="/logo.svg"
                alt="Nias Logo"
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled ? 'h-7' : 'h-8'
                }`}
              />
              <span className="font-display font-bold text-2xl tracking-wide text-nias-dark group-hover:text-nias-orange transition-colors duration-200">
                NIAS
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8 ml-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative pb-2 font-sans text-sm font-semibold transition-colors duration-300 ${
                    activeLink === link.href
                      ? 'text-nias-orange'
                      : 'text-nias-dark hover:text-nias-orange'
                  }`}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="desktop-nav-indicator"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      className="absolute left-0 right-0 -bottom-[2px] h-[3px] rounded-full bg-gradient-to-r from-nias-orange to-nias-gold shadow-[0_0_14px_rgba(223,122,73,0.45)]"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="text-nias-dark hover:text-nias-orange transition-colors lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
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
                    className={`font-sans text-xl font-bold transition-all duration-300 ${
                      activeLink === link.href
                        ? 'text-nias-orange border-l-2 border-nias-orange pl-3 bg-nias-orange/5 rounded-r-md'
                        : 'text-nias-dark hover:text-nias-orange'
                    }`}
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
