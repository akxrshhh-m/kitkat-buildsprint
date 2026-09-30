import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  MapPin,
  Calendar,
  CheckCircle,
  X,
  ArrowRight,
  Eye,
  Fingerprint,
} from 'lucide-react';
import { evidenceFiles, events } from '../data/events';
import { EvidenceFile, Event } from '../types/event';
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants';

interface EvidenceSectionProps {
  onSelectEvent: (event: Event) => void;
}

const EvidenceSection: React.FC<EvidenceSectionProps> = ({ onSelectEvent }) => {
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceFile | null>(null);

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8" id="evidence">
      <div className="page-shell max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="jjk-label text-cursed-blue text-[10px] font-bold">情報</span>
            <span className="w-8 h-px bg-cursed-blue/40" />
            <span className="jjk-label text-cursed-muted text-[10px]">
              // FIELD INTELLIGENCE
            </span>
          </div>

          <h2 className="jjk-heading text-3xl md:text-5xl text-white mb-3 drop-shadow-md">
            CAMPUS INTELLIGENCE
          </h2>

          {/* BOLD & LARGER HIGH-CONTRAST SUBTITLE */}
          <p className="jjk-body text-sm md:text-base text-white/90 font-semibold max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Verified signals collected from the real campus — posters, venues, and notice boards converted into mission intelligence.
          </p>
        </motion.div>

        {/* Evidence Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {evidenceFiles.map((file) => (
            <EvidenceCard
              key={file.id}
              file={file}
              onClick={() => setSelectedEvidence(file)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedEvidence && (
          <EvidenceModal
            file={selectedEvidence}
            onClose={() => setSelectedEvidence(null)}
            onSelectEvent={onSelectEvent}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

interface EvidenceCardProps {
  file: EvidenceFile;
  onClick: () => void;
}

const EvidenceCard: React.FC<EvidenceCardProps> = ({ file, onClick }) => {
  const [scanned, setScanned] = useState(false);

  // Auto-tries .jpeg / .png if .jpg 404s
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (target.src.endsWith('.jpg')) {
      target.src = target.src.replace('.jpg', '.jpeg');
    } else if (target.src.endsWith('.jpeg')) {
      target.src = target.src.replace('.jpeg', '.png');
    } else {
      target.src =
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80';
    }
  };

  return (
    <motion.div
      className="relative glass overflow-hidden cursor-pointer group interactive border border-white/10 hover:border-cursed-blue/40 transition-colors"
      variants={staggerItem}
      whileHover={{ y: -4 }}
      onClick={onClick}
      onViewportEnter={() => {
        setTimeout(() => setScanned(true), 600);
      }}
    >
      {/* Image Container */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-cursed-charcoal">
        <img
          src={file.image}
          alt={file.title}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Scan line overlay */}
        <AnimatePresence>
          {!scanned && (
            <motion.div className="absolute inset-0 bg-cursed-dark/50" exit={{ opacity: 0 }}>
              <motion.div
                className="absolute left-0 right-0 h-0.5 bg-cursed-blue/70 shadow-[0_0_12px_#4361ee]"
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 1.2, ease: 'linear' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-cursed-charcoal via-transparent to-transparent" />

        {/* HUD corners */}
        <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity">
          <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-cursed-blue/60" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-cursed-blue/60" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-cursed-blue/60" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-cursed-blue/60" />
        </div>

        {/* File Number Label */}
        <div className="absolute top-3 left-3 z-10">
          <span className="font-mono text-[9px] tracking-wider text-cursed-blue bg-cursed-dark/85 px-2 py-1 border border-cursed-blue/30 font-bold">
            EVIDENCE FILE // {file.fileNumber}
          </span>
        </div>

        {/* Verification Status */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="flex items-center gap-1 font-mono text-[9px] tracking-wider text-green-400 bg-cursed-dark/80 px-2 py-1 border border-green-500/20 font-bold">
            <CheckCircle size={10} />
            {file.status}
          </span>
        </div>

        {scanned && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, delay: 0.15 }}
          >
            <span className="font-mono text-xs tracking-widest text-cursed-blue font-bold">
              SIGNAL DETECTED
            </span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Camera size={12} className="text-cursed-blue" />
          <span className="jjk-label text-[10px] text-cursed-muted font-semibold">
            {file.type.replace('_', ' ')}
          </span>
        </div>
        <h3 className="jjk-body font-bold text-white text-sm leading-snug">
          {file.title}
        </h3>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/80 font-medium">
          <MapPin size={9} className="text-cursed-blue" />
          <span className="truncate">{file.location}</span>
        </div>
      </div>
    </motion.div>
  );
};

interface EvidenceModalProps {
  file: EvidenceFile;
  onClose: () => void;
  onSelectEvent: (event: Event) => void;
}

const EvidenceModal: React.FC<EvidenceModalProps> = ({
  file,
  onClose,
  onSelectEvent,
}) => {
  const connectedEvent = file.connectedEventId
    ? events.find((e) => e.id === file.connectedEventId)
    : null;

  return (
    <motion.div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative glass-strong max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 border border-white/10"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-cursed-muted hover:text-white border border-white/10 bg-cursed-dark/80 interactive"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Photo Container */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-cursed-charcoal">
          <img
            src={file.image}
            alt={file.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cursed-charcoal to-transparent" />
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cursed-blue/50" />
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cursed-blue/50" />
          <div className="absolute bottom-4 left-4">
            <span className="font-mono text-xs tracking-widest text-cursed-blue font-bold">
              EVIDENCE FILE // {file.fileNumber}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Fingerprint size={14} className="text-cursed-blue" />
              <span className="jjk-label text-[10px] text-cursed-muted font-bold">
                CLASSIFIED FIELD REPORT
              </span>
            </div>
            <h3 className="jjk-heading text-xl md:text-2xl text-white mb-2">
              {file.title}
            </h3>
            <p className="jjk-body text-sm text-white/80 leading-relaxed font-medium">
              {file.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="glass p-3 border border-white/10">
              <span className="text-[9px] font-mono text-cursed-muted tracking-wider flex items-center gap-1 font-bold">
                <Camera size={10} /> TYPE
              </span>
              <p className="text-sm text-white mt-1 font-semibold">{file.type.replace('_', ' ')}</p>
            </div>
            <div className="glass p-3 border border-white/10">
              <span className="text-[9px] font-mono text-cursed-muted tracking-wider flex items-center gap-1 font-bold">
                <MapPin size={10} /> LOCATION
              </span>
              <p className="text-sm text-white mt-1 font-semibold">{file.location}</p>
            </div>
            <div className="glass p-3 border border-white/10">
              <span className="text-[9px] font-mono text-cursed-muted tracking-wider flex items-center gap-1 font-bold">
                <Calendar size={10} /> DATE
              </span>
              <p className="text-sm text-white mt-1 font-semibold">
                {new Date(file.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 border border-green-500/30 bg-green-500/10">
            <CheckCircle size={14} className="text-green-400" />
            <span className="font-mono text-xs tracking-wider text-green-400 font-bold">
              VERIFICATION STATUS: {file.status}
            </span>
          </div>

          {connectedEvent && (
            <div className="space-y-3">
              <span className="font-mono text-[10px] tracking-widest text-cursed-muted font-bold">
                // DETECTED EVENT CONNECTION
              </span>
              <button
                className="w-full glass p-4 flex items-center justify-between border border-white/10 hover:border-cursed-blue/50 transition-all interactive"
                onClick={() => {
                  onSelectEvent(connectedEvent);
                  onClose();
                }}
              >
                <div className="flex items-center gap-3">
                  <Eye size={14} className="text-cursed-blue" />
                  <div className="text-left">
                    <p className="text-sm font-bold text-white">
                      {connectedEvent.title}
                    </p>
                    <p className="text-[10px] font-mono text-cursed-muted font-medium">
                      {connectedEvent.category} •{' '}
                      {new Date(connectedEvent.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <ArrowRight size={14} className="text-cursed-blue" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EvidenceSection;