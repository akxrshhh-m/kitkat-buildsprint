import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Calendar,
  X,
  ChevronRight,
  Shield,
  Eye,
  Swords,
  Moon,
  ScrollText,
  HeartPulse,
  Scale,
  type LucideIcon,
} from 'lucide-react';
import { clubs } from '../data/events';
import { Club } from '../types/event';
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants';

/** Map club.logo keys → Lucide SVG icons */
const CLUB_ICONS: Record<string, LucideIcon> = {
  eye: Eye,
  swords: Swords,
  moon: Moon,
  scroll: ScrollText,
  'heart-pulse': HeartPulse,
  scale: Scale,
};

const ClubIcon: React.FC<{ name: string; color?: string; size?: number }> = ({
  name,
  color = '#7209b7',
  size = 22,
}) => {
  const Icon = CLUB_ICONS[name] ?? Shield;
  return (
    <div
      className="w-11 h-11 flex items-center justify-center border border-white/10 bg-black/40 group-hover:border-cursed-purple/50 transition-colors"
      style={{
        boxShadow: `0 0 18px ${color}33`,
      }}
    >
      <Icon
        size={size}
        strokeWidth={1.75}
        style={{ color }}
        className="drop-shadow-[0_0_8px_rgba(114,9,183,0.45)]"
      />
    </div>
  );
};

const ClubsSection: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  return (
    <section className="relative py-20 md:py-28" id="clubs">
      <div className="page-shell max-w-7xl mx-auto">
        {/* Header with High-Contrast Bold Subtitle */}
        <motion.div
          className="mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top Tagline */}
          <div className="flex items-center gap-3 mb-3">
            <span className="jjk-label text-cursed-purple text-xs font-black tracking-widest drop-shadow">
              組織
            </span>
            <span className="w-10 h-px bg-cursed-purple/60 shadow-[0_0_8px_#7209b7]" />
            <span className="jjk-label text-cursed-purple font-extrabold text-xs tracking-[0.22em] uppercase drop-shadow">
              // SORCERER NETWORK
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="jjk-heading text-3xl md:text-5xl text-white mb-2 drop-shadow-md">
            SORCERER ORGANIZATIONS
          </h2>

          {/* HIGHLIGHTED BOLD SUBTITLE */}
          <p className="jjk-body text-sm md:text-base text-white/90 font-semibold leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-xl">
            "Discover the elite sorcerer groups shaping campus operations."
          </p>
        </motion.div>

        {/* Club Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clubs.map((club, idx) => (
            <motion.div
              key={club.id}
              className="glass p-5 cursor-pointer group relative overflow-hidden interactive border border-white/10 hover:border-cursed-purple/50 bg-[#0d0d16]/80 backdrop-blur-md transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedClub(club)}
            >
              {/* HUD corners on hover */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-transparent group-hover:border-cursed-purple transition-all duration-300" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-transparent group-hover:border-cursed-purple transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-transparent group-hover:border-cursed-purple transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-transparent group-hover:border-cursed-purple transition-all duration-300" />

              {/* Top energy line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: club.color || '#7209b7' }}
              />

              {/* Icon + guild id */}
              <div className="flex items-center justify-between mb-4">
                <ClubIcon name={club.logo} color={club.color} />
                <span className="font-mono text-[9px] font-extrabold tracking-[0.2em] text-cursed-purple bg-cursed-purple/10 px-2 py-0.5 border border-cursed-purple/30 uppercase">
                  GUILD // 0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="jjk-heading text-lg text-white mb-1 group-hover:text-purple-300 transition-colors tracking-wide">
                {club.name}
              </h3>

              {/* Specialization */}
              <p className="font-mono text-[10px] font-bold tracking-[0.18em] text-cursed-purple/90 mb-3 uppercase">
                {club.specialization}
              </p>

              {/* Description */}
              <p className="jjk-body text-xs text-white/70 mb-5 line-clamp-2 leading-relaxed">
                {club.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5 font-mono text-[10px] tracking-wider text-cursed-muted">
                <span className="flex items-center gap-1.5 group-hover:text-white transition-colors">
                  <Users size={12} className="text-cursed-purple shrink-0" />
                  <strong className="text-white font-bold">{club.memberCount}</strong>{' '}
                  SORCERERS
                </span>
                <span className="flex items-center gap-1.5 group-hover:text-white transition-colors">
                  <Calendar size={12} className="text-cursed-purple shrink-0" />
                  <strong className="text-white font-bold">{club.upcomingEvents}</strong>{' '}
                  MISSIONS
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedClub && (
          <motion.div
            className="fixed inset-0 z-[8500] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedClub(null)}
            />
            <motion.div
              className="relative glass-strong max-w-md w-full p-6 md:p-8 z-10 border border-cursed-purple/40 bg-[#0d0d16] shadow-[0_0_40px_rgba(114,9,183,0.3)]"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              role="dialog"
              aria-modal="true"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cursed-purple" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cursed-purple" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cursed-purple" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cursed-purple" />

              <button
                onClick={() => setSelectedClub(null)}
                className="absolute top-4 right-4 text-cursed-muted hover:text-white border border-white/10 bg-black/50 p-1.5 interactive"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <ClubIcon
                  name={selectedClub.logo}
                  color={selectedClub.color}
                  size={26}
                />
                <div>
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-cursed-purple uppercase">
                    GUILD DOSSIER
                  </span>
                  <h3 className="jjk-heading text-xl text-white">
                    {selectedClub.name}
                  </h3>
                </div>
              </div>

              <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-purple-300 uppercase mb-3 border-b border-white/10 pb-2">
                SPECIALIZATION // {selectedClub.specialization}
              </p>

              <p className="jjk-body text-xs text-white/80 leading-relaxed mb-6">
                {selectedClub.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 bg-black/40 p-3 border border-white/10 font-mono text-center">
                <div>
                  <p className="text-xl font-bold text-white">
                    {selectedClub.memberCount}
                  </p>
                  <p className="text-[9px] text-cursed-muted tracking-widest uppercase">
                    SORCERERS
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold text-cursed-purple">
                    {selectedClub.upcomingEvents}
                  </p>
                  <p className="text-[9px] text-cursed-muted tracking-widest uppercase">
                    UPCOMING
                  </p>
                </div>
              </div>

              <button
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-cursed-purple hover:bg-cursed-purple/85 text-white font-mono text-xs font-bold tracking-[0.2em] uppercase transition-colors interactive shadow-[0_0_15px_rgba(114,9,183,0.4)]"
                onClick={() => setSelectedClub(null)}
              >
                <Shield size={14} />
                VIEW GUILD MISSIONS
                <ChevronRight size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClubsSection;