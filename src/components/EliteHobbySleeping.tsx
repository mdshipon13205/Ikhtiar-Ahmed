import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Bed, BatteryCharging, Sparkles, ShieldAlert } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { Card3D } from './Card3D';
import { StaggerWords } from './AnimatedReveal';
import { soundFx } from '../utils/audio';

interface EliteHobbySleepingProps {
  sleepMode: boolean;
  onToggleSleepMode: () => void;
}

export const EliteHobbySleeping: React.FC<EliteHobbySleepingProps> = ({
  sleepMode,
  onToggleSleepMode,
}) => {
  const [zzzCount, setZzzCount] = useState<number>(42);
  const [napMessage, setNapMessage] = useState<string | null>(null);
  const [poppedBubbles, setPoppedBubbles] = useState<Record<number, boolean>>({});

  const bubbles = [
    { id: 1, label: '💭 8h Deep REM', pts: 5 },
    { id: 2, label: '🛌 Cold Brain Reboot', pts: 8 },
    { id: 3, label: '🌙 Midnight Peace', pts: 10 },
    { id: 4, label: '🔋 100% Restored', pts: 12 },
  ];

  const handlePopBubble = (id: number, pts: number, label: string) => {
    soundFx.playClick();
    setZzzCount((prev) => prev + pts);
    setPoppedBubbles((prev) => ({ ...prev, [id]: true }));
    setNapMessage(`✨ ${label} collected! (+${pts} sleep pts)`);
    setTimeout(() => {
      setPoppedBubbles((prev) => ({ ...prev, [id]: false }));
    }, 4000);
  };

  const handleSendZzz = () => {
    soundFx.playSleepChime();
    setZzzCount((prev) => prev + 1);
    const messages = [
      '😴 +1 Hour of High-Bandwidth REM Rest added!',
      '🛌 Brain Cache cleared successfully!',
      '🔋 Battery restored to 100%!',
      '💤 Deep Sleep Protocol engaged!',
    ];
    setNapMessage(messages[Math.floor(Math.random() * messages.length)]);
    setTimeout(() => setNapMessage(null), 3000);
  };

  return (
    <section id="sleeping" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-950/70 border border-indigo-800/40 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
          <span>The Certified Elite Hobby</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight mb-4">
          <StaggerWords
            text="Sleeping = Elite Hobby"
            delay={0.1}
          />
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          <StaggerWords
            text="The pinnacle of neural recovery. A legendary discipline for optimal cognitive performance and software engineering clarity."
            delay={0.25}
          />
        </p>
      </motion.div>

      {/* Main Sleep Chamber Interactive 3D Card */}
      <Card3D glowColor="dual" intensity={10}>
        <div className="p-6 sm:p-10 relative overflow-hidden">
          {/* Ambient Cosmic Sleep Atmosphere */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-950/15 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Floating Dream Bubbles */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="text-[11px] font-mono text-slate-400 mr-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Pop dream bubbles:</span>
            </span>
            {bubbles.map((b) => (
              <button
                key={b.id}
                onClick={() => handlePopBubble(b.id, b.pts, b.label)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer active:scale-90 ${
                  poppedBubbles[b.id]
                    ? 'bg-rose-500 text-white scale-110 shadow-[0_0_15px_rgba(244,63,94,0.6)]'
                    : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700/60 hover:border-rose-400/50'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Humorous Stats & Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-mono">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Do Not Disturb · Elite Zone</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white leading-tight">
                “Sleep is not downtime; it is the ultimate cold-reboot for software engineering intuition.”
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                {PROFILE.hobby.quote}
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="block text-2xl font-bold font-display text-rose-400">99.9%</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Recharge Rate
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="block text-2xl font-bold font-display text-blue-400">{zzzCount}</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Sleep Points
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="block text-2xl font-bold font-display text-emerald-400">0 ms</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Sleep Latency
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    soundFx.playSleepChime();
                    onToggleSleepMode();
                  }}
                  className={`px-5 py-3 rounded-xl font-mono text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    sleepMode
                      ? 'bg-rose-600 text-white shadow-[0_0_20px_rgba(225,29,72,0.5)]'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  <Moon className="w-4 h-4 text-rose-300" />
                  <span>
                    {sleepMode ? 'Wake Up (Deactivate)' : 'Engage Sleep Chamber'}
                  </span>
                </button>

                <button
                  onClick={handleSendZzz}
                  className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white font-mono text-xs transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Send Virtual Sleep (+1 Zzz)</span>
                </button>
              </div>

              {/* Interactive Nap Toast */}
              <AnimatePresence>
                {napMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 rounded-xl bg-rose-950/80 border border-rose-600/50 text-rose-200 text-xs font-mono shadow-lg flex items-center gap-2"
                  >
                    <Bed className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{napMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Visual 3D Bed / Sleep Matrix */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 p-4 border border-slate-800 shadow-2xl flex flex-col items-center justify-center text-center">
                {/* Floating animated Zzz */}
                <div className="absolute top-6 right-8 text-rose-400 font-mono text-lg font-bold animate-bounce delay-100">
                  Z
                </div>
                <div className="absolute top-10 right-14 text-blue-400 font-mono text-sm font-bold animate-bounce delay-300">
                  z
                </div>
                <div className="absolute top-14 right-20 text-indigo-400 font-mono text-xs font-bold animate-bounce delay-500">
                  z
                </div>

                {/* Big Moon Icon */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-600/30 to-blue-600/30 flex items-center justify-center mb-4 border border-white/10 shadow-[0_0_40px_rgba(37,99,235,0.25)]">
                  <Moon className="w-12 h-12 text-rose-300" />
                </div>

                <div className="font-display font-extrabold text-white text-xl">
                  Deep Sleep Protocol
                </div>
                <span className="text-xs font-mono text-slate-400 mt-1">
                  Md. Ikhtiar Ahmed · Elite Tier
                </span>

                <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-800/40">
                  <BatteryCharging className="w-3.5 h-3.5" />
                  <span>Brain Energy: 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card3D>
    </section>
  );
};
