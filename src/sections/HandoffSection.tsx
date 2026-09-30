import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Radar, ShieldCheck, Ticket, Zap } from 'lucide-react';
import { openPairBInscription } from '../config/pairB';
const PAIR_B_URL =
  (import.meta as ImportMeta & { env?: { VITE_PAIR_B_URL?: string } }).env
    ?.VITE_PAIR_B_URL || '/inscription';

const HandoffSection: React.FC = () => {
  const handleProceed = () => {
  openPairBInscription();
};

  return (
    <section
      className="relative pt-20 pb-28 md:pt-28 md:pb-40 mb-12 md:mb-20 overflow-hidden"
      id="inscription"
    >
      <div className="page-shell relative z-10 text-center max-w-4xl mx-auto">
        {/* Background seal */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <motion.div
            className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-cursed-blue/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute text-[7rem] md:text-[11rem] jjk-jp text-white/[0.03] select-none">
            登録
          </div>
        </div>

        {/* Header */}
        <motion.div
          className="mb-12 text-center flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="jjk-label text-cursed-blue text-[10px] font-bold">登録</span>
            <span className="w-8 h-px bg-cursed-blue/40" />
            <span className="jjk-label text-cursed-muted text-[10px]">
              // INSCRIPTION PORTAL
            </span>
          </div>

          <h2 className="jjk-heading text-3xl md:text-5xl text-white mb-4 drop-shadow-md text-center">
            READY TO ACCEPT?
          </h2>

          <p className="jjk-body text-sm md:text-base text-white/90 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] max-w-xl text-center mx-auto leading-relaxed">
            You've detected your mission. Proceed to inscription to lock your seat,
            generate your pass, and join the operation.
          </p>
        </motion.div>

        {/* Flow steps */}
        <div className="flex flex-col items-center gap-3 mb-16">
          {[
            { label: 'DISCOVER', icon: <Radar size={14} /> },
            { label: 'INVESTIGATE', icon: <ShieldCheck size={14} /> },
            { label: 'ACCEPT', icon: <Ticket size={14} /> },
            { label: 'PARTICIPATE', icon: <Zap size={14} /> },
          ].map((step, i) => {
            const isBlueStep = i < 3;
            const isParticipate = step.label === 'PARTICIPATE';

            return (
              <React.Fragment key={step.label}>
                {isParticipate ? (
                  <motion.button
                    type="button"
                    onClick={handleProceed}
                    className="flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs sm:text-sm font-black tracking-[0.22em] uppercase border-2 border-white/70 text-white bg-white/20 backdrop-blur-md shadow-[0_0_28px_rgba(255,255,255,0.35)] hover:bg-white/30 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all interactive"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    aria-label="Participate — open inscription portal"
                  >
                    {step.icon}
                    <span className="drop-shadow-md">{step.label}</span>
                    <ArrowRight size={14} className="ml-0.5 opacity-90" />
                  </motion.button>
                ) : (
                  <motion.div
                    className={`flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs sm:text-sm font-black tracking-[0.22em] uppercase border transition-all duration-300 ${
                      isBlueStep
                        ? 'border-cursed-blue/70 text-cursed-blue bg-cursed-blue/25 backdrop-blur-md shadow-[0_0_20px_rgba(67,97,238,0.4)]'
                        : 'border-white/60 text-white bg-white/20 backdrop-blur-md'
                    }`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {step.icon}
                    <span className="drop-shadow-md">{step.label}</span>
                  </motion.div>
                )}

                {i < 3 && (
                  <ArrowDown
                    size={16}
                    className="text-cursed-blue animate-pulse my-1"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Brand Header */}
        <div className="mb-8 text-center">
          <h3 className="jjk-heading text-3xl md:text-5xl text-white mb-2 drop-shadow-md">
            CURSED EVENT
          </h3>
          <p className="jjk-label text-cursed-muted text-xs tracking-[0.3em] mb-4">
            NETWORK
          </p>
          <p className="jjk-label text-cursed-blue text-[10px] tracking-[0.25em] font-bold">
            DISCOVER → ACCEPT → PARTICIPATE
          </p>
        </div>

        {/* Main CTA */}
        <div className="mb-6">
          <motion.button
            onClick={handleProceed}
            className="inline-flex items-center gap-2 px-8 py-4 bg-cursed-blue text-white font-mono text-xs sm:text-sm font-black tracking-[0.2em] uppercase hover:bg-cursed-blue/85 transition-all interactive shadow-[0_0_30px_rgba(67,97,238,0.5)] hover:shadow-[0_0_45px_rgba(67,97,238,0.8)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            PROCEED TO INSCRIPTION
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Subtext */}
        <p className="font-mono text-[11px] text-white/70 font-semibold tracking-wider drop-shadow pb-4">
          Secure your seat · Generate pass · Join the mission
        </p>
      </div>
    </section>
  );
};

export default HandoffSection;