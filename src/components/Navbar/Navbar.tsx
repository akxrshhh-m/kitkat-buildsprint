import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, User, Zap, Sparkles } from 'lucide-react';
import { openPairBHome } from '../../config/pairB';
interface NavbarProps {
  onSearchOpen: () => void;
}

const navLinks = [
  { label: 'MISSION BOARD', href: '#detection' },
  { label: 'CLUBS', href: '#clubs' },
  { label: 'TRENDING', href: '#trending' },
  { label: 'TIMELINE', href: '#timeline' },
  { label: 'ARCHIVE', href: '#evidence' },
];

const Navbar: React.FC<NavbarProps> = ({ onSearchOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to the Inscription Portal section on your site
  const enterDomain = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('inscription');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'inscription';
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[8000] transition-all duration-500 ${
          scrolled
            ? 'glass-strong border-b border-cursed-blue/10 shadow-xl shadow-black/80'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          style={{
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'clamp(2rem, 6vw, 6rem)',
            paddingRight: 'clamp(2rem, 6vw, 6rem)',
          }}
        >
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 interactive shrink-0">
              <div className="flex flex-col">
                <span className="jjk-heading text-base md:text-lg text-white tracking-wider">
                  呪術高専
                </span>
                <span className="jjk-label text-[9px] text-cursed-muted tracking-[0.25em]">
                  MISSION NETWORK
                </span>
              </div>
            </a>

            {/* Center nav links */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-1 py-2 jjk-label text-[11px] text-cursed-muted hover:text-white transition-colors relative group interactive brush-underline tracking-[0.16em]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <div className="hidden md:flex items-center gap-1.5 mr-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[9px] tracking-wider text-cursed-muted">
                  ONLINE
                </span>
              </div>

              <button
                onClick={onSearchOpen}
                className="w-9 h-9 flex items-center justify-center text-cursed-muted hover:text-white transition-colors interactive"
                aria-label="Open search"
              >
                <Search size={16} />
              </button>

              <button
                className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-white/10 jjk-label text-[10px] text-cursed-muted hover:text-white hover:border-cursed-blue/30 transition-all interactive"
                aria-label="Sorcerer profile"
              >
                <User size={12} />
                SORCERER
              </button>

              {/* ================= HIGHLY HIGHLIGHTED ENTER DOMAIN BUTTON ================= */}
              <motion.button
                onClick={openPairBHome}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="relative hidden sm:inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 overflow-hidden border-2 border-cursed-red bg-gradient-to-r from-cursed-red/30 via-cursed-purple/30 to-cursed-red/30 text-white font-mono text-[11px] font-black tracking-[0.2em] uppercase shadow-[0_0_25px_rgba(239,35,60,0.5)] hover:shadow-[0_0_40px_rgba(239,35,60,0.85)] hover:border-white transition-all interactive"
                aria-label="Enter Domain — scroll to Inscription Portal"
              >
                {/* Glowing Background Pulse */}
                <motion.span
                  className="absolute inset-0 bg-cursed-red/20 pointer-events-none"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Lightning & Kanji Accents */}
                <Zap size={14} className="text-white fill-cursed-red animate-bounce" />
                <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  ENTER DOMAIN
                </span>
                <span className="relative z-10 text-cursed-red font-extrabold hidden md:inline ml-0.5">
                  領域展開
                </span>
              </motion.button>

              {/* Mobile: Compact Highlighted Enter Domain Button */}
              <button
                onClick={enterDomain}
                className="sm:hidden w-10 h-10 flex items-center justify-center border-2 border-cursed-red bg-cursed-red/30 text-white shadow-[0_0_15px_rgba(239,35,60,0.6)] interactive"
                aria-label="Enter Domain"
              >
                <Zap size={16} className="text-white fill-cursed-red" />
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center text-cursed-muted hover:text-white transition-colors interactive"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[7999] bg-cursed-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="jjk-heading text-xl text-white/70 hover:text-white transition-colors interactive"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.button
              onClick={(e) => {
                setMobileOpen(false);
                enterDomain(e);
              }}
              className="mt-4 flex items-center gap-2 px-8 py-3.5 border-2 border-cursed-red bg-cursed-red/30 text-white font-mono text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_25px_rgba(239,35,60,0.6)] interactive"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Zap size={14} className="text-white fill-cursed-red" />
              ENTER DOMAIN 領域展開
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;