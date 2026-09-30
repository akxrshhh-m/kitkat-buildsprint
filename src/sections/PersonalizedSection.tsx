import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Check, Plus } from 'lucide-react';
import { events, userInterests as defaultInterests } from '../data/events';
import { Event, UserInterest } from '../types/event';
import MissionCard from '../components/MissionCard/MissionCard';
import { fadeUp, staggerContainer } from '../animations/variants';

interface PersonalizedSectionProps {
  onSelectEvent: (event: Event) => void;
}

const PersonalizedSection: React.FC<PersonalizedSectionProps> = ({
  onSelectEvent,
}) => {
  const [interests, setInterests] = useState<UserInterest[]>(defaultInterests);

  const selectedTags = interests
    .filter((i) => i.selected)
    .map((i) => i.tag.toLowerCase());

  const recommendations = useMemo(() => {
    if (selectedTags.length === 0) return [];

    return events
      .map((event) => {
        const matchingTags = event.tags.filter((t) =>
          selectedTags.includes(t.toLowerCase())
        );
        const matchScore = matchingTags.length / selectedTags.length;
        return { event, matchScore, matchingTags };
      })
      .filter((r) => r.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 6);
  }, [selectedTags]);

  const toggleInterest = (id: string) => {
    setInterests((prev) =>
      prev.map((i) => (i.id === id ? { ...i, selected: !i.selected } : i))
    );
  };

  return (
    <section className="relative py-20 md:py-28" id="personalized">
      <div className="page-shell max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="jjk-label text-cursed-purple text-[10px] font-bold">
              呪力分析
            </span>
            <span className="w-8 h-px bg-cursed-purple/40" />
            <span className="jjk-label text-cursed-muted text-[10px]">
              // CURSED ENERGY ANALYSIS
            </span>
          </div>
          <h2 className="jjk-heading text-3xl md:text-5xl text-white mb-3 drop-shadow-md">
            YOUR CURSED ENERGY MATCH
          </h2>
          <p className="jjk-body text-sm md:text-base text-white/90 font-medium max-w-xl drop-shadow">
            "Mission suggestions dynamically matched to your technique and interests."
          </p>
        </motion.div>

        {/* TRANSPARENT TAG SELECTION (NO BLACK BACKGROUND CONTAINER) */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain size={16} className="text-cursed-purple" />
            <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-cursed-purple uppercase drop-shadow">
              SELECT YOUR SPECIALIZATION TAGS:
            </span>
          </div>

          {/* BOLD HIGH-CONTRAST CHIPS WITH SEMI-TRANSPARENT BACKGROUND */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {interests.map((interest) => {
              const isSelected = interest.selected;
              return (
                <motion.button
                  key={interest.id}
                  onClick={() => toggleInterest(interest.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-2.5 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase border transition-all duration-200 interactive ${
                    isSelected
                      ? 'border-cursed-purple bg-cursed-purple/40 text-white shadow-[0_0_20px_rgba(114,9,183,0.6)] backdrop-blur-md'
                      : 'border-white/30 text-white bg-black/30 backdrop-blur-sm hover:border-cursed-purple hover:bg-cursed-purple/20'
                  }`}
                >
                  {isSelected ? (
                    <Check size={14} className="text-purple-300 stroke-[3]" />
                  ) : (
                    <Plus size={14} className="text-white/60" />
                  )}
                  <span>{interest.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* RECOMMENDATIONS GRID / PROMPT STATE */}
        <AnimatePresence mode="wait">
          {recommendations.length > 0 ? (
            <motion.div
              key="results"
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center gap-2 mb-4 bg-cursed-purple/20 px-3.5 py-1.5 border border-cursed-purple/50 backdrop-blur-sm w-fit">
                <Sparkles size={14} className="text-cursed-purple" />
                <span className="font-mono text-xs font-bold tracking-wider text-purple-300">
                  {recommendations.length} MATCHING MISSIONS DETECTED
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.map(({ event, matchScore, matchingTags }, i) => (
                  <div key={event.id} className="relative">
                    {/* Glowing Match Percentage Badge */}
                    <div className="absolute -top-2.5 -right-2.5 z-20 px-3 py-1 bg-cursed-purple text-white font-mono text-[10px] font-black tracking-widest border border-white/30 shadow-[0_0_15px_rgba(114,9,183,0.7)]">
                      {Math.round(matchScore * 100)}% MATCH
                    </div>

                    <MissionCard
                      event={event}
                      onSelect={onSelectEvent}
                      index={i}
                    />

                    {/* Matched tags pills */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5 px-1">
                      <span className="font-mono text-[10px] text-white/70 tracking-wider font-semibold">
                        MATCHED:
                      </span>
                      {matchingTags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] font-bold text-purple-200 bg-cursed-purple/30 px-2 py-0.5 border border-cursed-purple/50 tracking-wider backdrop-blur-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : selectedTags.length > 0 ? (
            <motion.div
              key="no-results"
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="font-mono text-sm text-white font-bold tracking-wider uppercase mb-1 drop-shadow">
                NO MATCHING CURSED SIGNALS DETECTED
              </p>
              <p className="jjk-body text-xs text-white/70">
                Try selecting different specialization tags above
              </p>
            </motion.div>
          ) : (
            /* CLEAN PROMPT WITHOUT BLACK BOX */
            <motion.div
              key="prompt"
              className="text-center py-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles size={22} className="text-cursed-purple mx-auto mb-2.5 animate-pulse" />
              <p className="font-mono text-xs sm:text-sm text-white font-bold tracking-widest uppercase mb-1 drop-shadow-md">
                SELECT SPECIALIZATION TAGS ABOVE
              </p>
              <p className="jjk-body text-xs text-white/80 font-medium drop-shadow">
                Choose your interests to filter and calculate cursed energy mission matches.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PersonalizedSection;