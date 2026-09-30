import React from 'react';
import { motion } from 'framer-motion';
import { Radar, ChevronDown, Calendar } from 'lucide-react';
import CursedParticles from '../components/Particles/CursedParticles';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      {/* Background Particles */}
      <CursedParticles count={15} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(67,97,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(67,97,238,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content Container with Left Margin Shift */}
      <div
        className="relative z-10 w-full pt-28 md:pt-0"
        style={{
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(2.5rem, 7vw, 7rem)',
          paddingRight: 'clamp(2.5rem, 7vw, 7rem)',
        }}
      >
        <div className="max-w-2xl md:max-w-3xl">
          
          {/* Top Tagline */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-xs font-mono tracking-widest text-cursed-blue font-black drop-shadow">
              呪術高専
            </span>
            <span className="w-10 h-px bg-cursed-blue/60 shadow-[0_0_8px_#4361ee]" />
            <span className="text-xs font-mono tracking-[0.22em] text-cursed-blue font-extrabold uppercase drop-shadow">
              // CURSED EVENT NETWORK
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-1 mb-8">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]"
              style={{
                textShadow:
                  '0 0 40px rgba(255,255,255,0.08), 0 2px 0 rgba(0,0,0,0.4)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              DISCOVER
            </motion.h1>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]"
              style={{
                textShadow:
                  '0 0 40px rgba(255,255,255,0.08), 0 2px 0 rgba(0,0,0,0.4)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              YOUR NEXT
            </motion.h1>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {/* CURSED RED → CURSED BLUE gradient */}
              <span
                className="text-transparent bg-clip-text relative inline-block"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #ef233c 0%, #c9184a 25%, #7209b7 50%, #4361ee 75%, #4cc9f0 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'cursedGradient 4s ease infinite',
                  filter:
                    'drop-shadow(0 0 20px rgba(239,35,60,0.45)) drop-shadow(0 0 40px rgba(67,97,238,0.35))',
                }}
              >
                MISSION.
              </span>
            </motion.h1>
          </div>

          {/* HIGHLIGHTED SUBTITLE WITH CLEAR GAP BELOW */}
          <motion.p
            className="text-base md:text-lg text-white/95 font-semibold leading-relaxed mb-14 md:mb-16 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            "Every event is a signal. Every gathering is an opportunity.
            <br />
            Every mission begins with discovery."
          </motion.p>

          {/* HIGH-CONTRAST BOLD CTAs WITH SPACIOUS GAP */}
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {/* Primary Button: DETECT MISSIONS */}
            <motion.a
              href="#detection"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-cursed-blue text-white font-mono text-xs sm:text-sm font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_30px_rgba(67,97,238,0.6)] hover:shadow-[0_0_50px_rgba(67,97,238,0.9)] hover:bg-cursed-blue/90 border border-cursed-blue/80 interactive overflow-hidden group"
            >
              {/* Inner Gradient Glow Layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-cursed-blue via-cursed-purple to-cursed-blue opacity-50 group-hover:opacity-100 transition-opacity" />
              <Radar size={16} className="relative z-10 text-white animate-pulse" />
              <span className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                DETECT MISSIONS
              </span>
            </motion.a>

            {/* Secondary Button: VIEW MISSION TIMELINE */}
            <motion.a
              href="#timeline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/80 bg-black/50 backdrop-blur-md text-white font-mono text-xs sm:text-sm font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] hover:border-white hover:bg-white/20 interactive"
            >
              <Calendar size={16} className="text-white" />
              <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                VIEW MISSION TIMELINE
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[9px] font-mono tracking-widest text-white/80 font-bold drop-shadow">
          SCROLL
        </span>
        <ChevronDown size={14} className="text-white/80" />
      </motion.div>

      {/* Coordinates */}
      <div
        className="absolute bottom-8 space-y-1 hidden md:block pointer-events-none"
        style={{ left: 'clamp(2.5rem, 7vw, 7rem)' }}
      >
        <p className="text-[8px] font-mono text-white/50 tracking-wider font-bold">
          LAT: 12.9716°N
        </p>
        <p className="text-[8px] font-mono text-white/50 tracking-wider font-bold">
          LON: 77.5946°E
        </p>
      </div>
    </section>
  );
};

export default HeroSection;