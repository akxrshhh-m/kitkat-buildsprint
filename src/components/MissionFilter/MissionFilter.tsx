import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { EventCategory } from '../../types/event';

type FilterCategory = 'ALL' | EventCategory;

interface MissionFilterProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categories: { label: string; value: FilterCategory }[] = [
  { label: 'ALL', value: 'ALL' },
  { label: 'RECONNAISSANCE', value: 'RECONNAISSANCE' },
  { label: 'COMBAT TRAINING', value: 'COMBAT TRAINING' },
  { label: 'ADVANCED COMBAT', value: 'ADVANCED COMBAT' },
  { label: 'THEORY', value: 'THEORY' },
  { label: 'HEALING ARTS', value: 'HEALING ARTS' },
  { label: 'DIPLOMACY', value: 'DIPLOMACY' },
  { label: 'FIELD MISSION', value: 'FIELD MISSION' },
];

const placeholders = [
  'Search domain expansion...',
  'Search cursed tools...',
  'Search shikigami...',
  'Search healing arts...',
  'Search field missions...',
];

const MissionFilter: React.FC<MissionFilterProps> = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}) => {
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Defocus on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFocused(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* FULL-PAGE BACKDROP BLUR OVERLAY WHEN SEARCHING */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="fixed inset-0 z-[6000] bg-black/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => {
              setIsFocused(false);
              inputRef.current?.blur();
            }}
          />
        )}
      </AnimatePresence>

      <div className="space-y-6">
        {/* SEARCH BAR CONTAINER */}
        <div className={`relative w-full max-w-xl ${isFocused ? 'z-[6001]' : 'z-10'}`}>
          {isFocused && (
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cursed-blue via-cursed-purple to-cursed-red opacity-80 blur-[2px] pointer-events-none" />
          )}

          <div
            className={`relative flex items-center h-12 border transition-all duration-300 ${
              isFocused
                ? 'bg-[#0c0c16] border-cursed-blue shadow-[0_0_30px_rgba(67,97,238,0.35)]'
                : 'bg-black/50 border-white/20 hover:border-white/35 backdrop-blur-sm'
            }`}
          >
            {/* Centered Magnifying Lens Icon */}
            <div className="w-12 h-full flex items-center justify-center shrink-0">
              <Search
                size={16}
                className={`transition-colors duration-300 ${
                  isFocused ? 'text-cursed-blue' : 'text-white/70'
                }`}
              />
            </div>

            {/* Input Field */}
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder={placeholders[placeholderIdx]}
              className="w-full h-full bg-transparent pr-3 text-white font-mono text-xs font-bold tracking-wider placeholder:text-white/40 focus:outline-none"
              aria-label="Search campus missions"
            />

            {/* Clear Button */}
            {searchQuery.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  onSearchChange('');
                  inputRef.current?.focus();
                }}
                className="mr-3 text-white/60 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Escape hint when focused */}
          <AnimatePresence>
            {isFocused && (
              <motion.p
                className="absolute -bottom-5 left-0 font-mono text-[9px] font-bold tracking-widest text-cursed-blue"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
              >
                PRESS ESC OR CLICK OUTSIDE TO CLOSE
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* HIGH-CONTRAST BOLD CATEGORY CHIPS */}
        <div className="flex flex-wrap gap-2.5 relative z-10">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.value;
            return (
              <motion.button
                key={cat.value}
                onClick={() => onFilterChange(cat.value)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-4 py-2.5 sm:px-5 sm:py-3 font-mono text-[11px] sm:text-xs font-black tracking-[0.16em] uppercase border transition-all duration-200 interactive ${
                  isActive
                    ? 'border-cursed-blue text-white bg-cursed-blue/30 shadow-[0_0_22px_rgba(67,97,238,0.5)] backdrop-blur-md z-10'
                    : 'border-white/25 text-white/80 hover:text-white hover:border-cursed-blue/60 hover:bg-cursed-blue/15 bg-black/40 backdrop-blur-sm'
                }`}
              >
                {isActive && (
                  <>
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cursed-blue animate-pulse shadow-[0_0_8px_#4361ee]" />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cursed-blue to-transparent" />
                  </>
                )}
                {cat.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MissionFilter;