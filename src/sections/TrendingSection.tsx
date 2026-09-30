import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { events } from '../data/events';
import { Event } from '../types/event';
import MissionGrade from '../components/MissionGrade/MissionGrade';
import { fadeUp } from '../animations/variants';

interface TrendingSectionProps {
  onSelectEvent: (event: Event) => void;
}

const TrendingSection: React.FC<TrendingSectionProps> = ({ onSelectEvent }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trendingEvents = events.filter((e) => e.trending);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="trending">
      <div className="page-shell max-w-7xl mx-auto">
        {/* LEFT-ALIGNED HEADER WITH HIGH-CONTRAST BOLD SUBTITLE */}
        <motion.div
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            {/* Top Tagline */}
            <div className="flex items-center gap-3 mb-3">
              <span className="jjk-label text-cursed-red text-xs font-black tracking-widest drop-shadow">
                呪力
              </span>
              <span className="w-10 h-px bg-cursed-red/60 shadow-[0_0_8px_#ef233c]" />
              <span className="jjk-label text-cursed-red font-extrabold text-xs tracking-[0.22em] uppercase drop-shadow">
                // ABNORMAL ACTIVITY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="jjk-heading text-3xl md:text-5xl text-white mb-2 drop-shadow-md">
              HIGH-PRIORITY MISSIONS
            </h2>

            {/* HIGHLIGHTED BOLD SUBTITLE */}
            <p className="jjk-body text-sm md:text-base text-white/90 font-semibold leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-xl">
              "Abnormal cursed-energy activity detected."
            </p>
          </div>

          {/* Scroll Controls on the Right */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 flex items-center justify-center border border-white/20 bg-black/40 text-white/80 hover:text-white hover:border-cursed-red/60 hover:bg-cursed-red/10 transition-all interactive backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 flex items-center justify-center border border-white/20 bg-black/40 text-white/80 hover:text-white hover:border-cursed-red/60 hover:bg-cursed-red/10 transition-all interactive backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* CARDS CONTAINER */}
        <div
          ref={scrollRef}
          className="flex justify-start gap-6 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trendingEvents.map((event, i) => (
            <motion.div
              key={event.id}
              className="flex-shrink-0 w-80 md:w-96 glass overflow-hidden cursor-pointer group interactive border border-white/10 hover:border-cursed-red/50 transition-colors"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectEvent(event)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-cursed-charcoal">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cursed-charcoal via-cursed-dark/30 to-transparent" />

                {/* Trending badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-cursed-red/20 border border-cursed-red/40 backdrop-blur-sm">
                  <Zap size={10} className="text-cursed-red animate-pulse" />
                  <span className="text-[9px] font-mono tracking-wider text-cursed-red font-bold">
                    HIGH ACTIVITY
                  </span>
                </div>

                {/* Grade */}
                <div className="absolute top-3 right-3">
                  <MissionGrade rank={event.rank} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <h3 className="jjk-heading text-lg text-white group-hover:text-cursed-red transition-colors truncate">
                  {event.title}
                </h3>

                {/* Cursed energy bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-white/70 font-semibold tracking-wider uppercase">
                      CURSED ENERGY LEVEL
                    </span>
                    <span className="text-sm font-mono text-cursed-red font-bold">
                      {event.cursedEnergyLevel}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cursed-purple to-cursed-red shadow-[0_0_8px_#ef233c]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${event.cursedEnergyLevel}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Live interest */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono text-green-400 font-bold">
                      +{event.liveInterest}% LIVE INTEREST
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-white/60 group-hover:text-cursed-red transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;