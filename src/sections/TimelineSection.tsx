import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { timelineEvents } from '../data/events';
import { TimelineEvent } from '../types/event';
import { getCategoryIcon } from '../data/events';

type DayFilter = 'TODAY' | 'TOMORROW' | 'THIS_WEEK' | 'NEXT_WEEK';

const dayLabels: { label: string; value: DayFilter }[] = [
  { label: 'TODAY', value: 'TODAY' },
  { label: 'TOMORROW', value: 'TOMORROW' },
  { label: 'THIS WEEK', value: 'THIS_WEEK' },
  { label: 'NEXT WEEK', value: 'NEXT_WEEK' },
];

const TimelineSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<DayFilter>('TODAY');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = timelineEvents.filter((e) => e.day === activeDay);

  return (
    <section className="relative py-24 md:py-32" id="timeline">
      <div className="page-shell max-w-3xl mx-auto">
        
        {/* CENTER-ALIGNED HEADER WITH BALANCED GAPS */}
        <div className="mb-8 text-center flex flex-col items-center justify-center">
          {/* Top Tagline */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="jjk-label text-cursed-blue text-[10px] font-bold">任務</span>
            <span className="w-8 h-px bg-cursed-blue/40" />
            <span className="jjk-label text-cursed-muted text-[10px]">
              // MISSION ROUTING
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="jjk-heading text-3xl md:text-5xl text-white mb-3 drop-shadow-md text-center">
            MISSION TIMELINE
          </h2>

          {/* CENTER-ALIGNED SUBTITLE WITH SMALL GAP */}
          <p className="jjk-body text-sm md:text-base text-white/90 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-lg text-center mx-auto leading-relaxed">
            "Upcoming campus missions, chronologically mapped."
          </p>
        </div>

        {/* DAY FILTER BUTTONS WITH SMALL GAP FROM SUBTITLE */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-16">
          {dayLabels.map((d) => {
            const isActive = activeDay === d.value;
            return (
              <motion.button
                key={d.value}
                onClick={() => setActiveDay(d.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3.5 sm:px-8 sm:py-4 font-mono text-xs sm:text-sm font-black tracking-[0.2em] uppercase border transition-all duration-300 interactive ${
                  isActive
                    ? 'border-cursed-blue text-white bg-cursed-blue/30 shadow-[0_0_25px_rgba(67,97,238,0.6)] backdrop-blur-md z-10'
                    : 'border-white/30 text-white/80 hover:text-white hover:border-cursed-blue/60 hover:bg-cursed-blue/15 bg-black/40 backdrop-blur-sm'
                }`}
              >
                {/* Active Indicator Pulse Ring */}
                {isActive && (
                  <>
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cursed-blue animate-ping" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cursed-blue shadow-[0_0_10px_#4361ee]" />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cursed-blue to-transparent" />
                  </>
                )}
                {d.label}
              </motion.button>
            );
          })}
        </div>

        {/* LINE DIAGRAM */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            className="relative"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {/* Main vertical line */}
            <div className="absolute left-[4.5rem] md:left-[6rem] top-4 bottom-4 w-px bg-white/20">
              <motion.div
                className="absolute left-0 top-0 w-full bg-gradient-to-b from-cursed-blue via-cursed-purple to-cursed-red shadow-[0_0_10px_#4361ee]"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              />
            </div>

            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <p className="font-mono text-xs tracking-widest text-white/80 uppercase font-bold drop-shadow">
                  NO MISSIONS SCHEDULED
                </p>
              </div>
            )}

            <ul className="space-y-4">
              {filtered.map((event, i) => (
                <TimelineRow
                  key={event.id}
                  event={event}
                  index={i}
                  isLast={i === filtered.length - 1}
                  isHovered={hoveredId === event.id}
                  onHover={() => setHoveredId(event.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

interface TimelineRowProps {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const TimelineRow: React.FC<TimelineRowProps> = ({
  event,
  index,
  isLast,
  isHovered,
  onHover,
  onLeave,
}) => {
  return (
    <motion.li
      className="relative grid grid-cols-[4.5rem_1rem_1fr] md:grid-cols-[6rem_1rem_1fr] gap-0 items-start py-8 md:py-12 border-b border-white/15"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* TIME (Left of line) */}
      <div className="pr-4 pt-1 text-right">
        <div
          className={`inline-flex items-center justify-end gap-1.5 font-mono text-sm md:text-base font-bold tracking-wider transition-colors drop-shadow ${
            isHovered ? 'text-cursed-blue' : 'text-white'
          }`}
        >
          <Clock size={12} className="opacity-70 hidden sm:inline" />
          {event.time}
        </div>
      </div>

      {/* NODE on the line */}
      <div className="relative flex justify-center pt-1.5">
        <motion.div
          className="w-3.5 h-3.5 rounded-full border-2 border-[#0a0a0f] z-10"
          style={{
            backgroundColor: isHovered ? '#7209b7' : '#4361ee',
          }}
          animate={{
            scale: isHovered ? 1.4 : 1,
            boxShadow: isHovered
              ? '0 0 16px rgba(67,97,238,0.9)'
              : '0 0 6px rgba(67,97,238,0.5)',
          }}
        />
        {/* Horizontal stub from node to content */}
        <div
          className={`absolute left-1/2 top-[0.8rem] h-px w-5 md:w-6 transition-colors ${
            isHovered ? 'bg-cursed-blue' : 'bg-white/30'
          }`}
        />
      </div>

      {/* CONTENT BLOCK */}
      <div
        className={`pl-6 md:pl-8 transition-all duration-200 ${
          isHovered ? 'translate-x-1.5' : ''
        }`}
      >
        {/* Category Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-cursed-blue text-xs">
            {getCategoryIcon(event.category)}
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] text-white/70 uppercase font-bold drop-shadow">
            {event.category}
          </span>
        </div>

        {/* Title */}
        <h4
          className={`jjk-body font-bold text-base md:text-xl leading-snug mb-3.5 transition-colors drop-shadow-md ${
            isHovered ? 'text-cursed-blue' : 'text-white'
          }`}
        >
          {event.title}
        </h4>

        {/* Venue */}
        <div className="flex items-center gap-2 text-xs font-mono text-white/80 font-medium">
          <MapPin size={13} className="text-cursed-blue shrink-0" />
          <span className="truncate">{event.venue}</span>
        </div>
      </div>
    </motion.li>
  );
};

export default TimelineSection;