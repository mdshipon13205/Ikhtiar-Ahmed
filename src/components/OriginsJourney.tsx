import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, Globe2, Languages, Sparkles, ArrowRight, Route } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { Card3D } from './Card3D';
import { StaggerWords } from './AnimatedReveal';

export const OriginsJourney: React.FC = () => {
  return (
    <section id="origins" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-rose-950/60 border border-rose-800/40 text-rose-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Origins & Present Base</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight mb-4">
          <StaggerWords
            text="The Geographic Trajectory"
            delay={0.1}
          />
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          <StaggerWords
            text="Bridging the peaceful green soil of Manirampur, Jashore with the bustling tech-centric capital of Dhaka, Bangladesh."
            delay={0.25}
          />
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Geographic Trajectory Visualizer (Span 7) */}
        <div className="lg:col-span-7">
          <Card3D glowColor="dual" intensity={12} className="h-full">
            <div className="p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-rose-400">
                    <Navigation className="w-5 h-5 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest uppercase">
                      Trajectory Vector
                    </span>
                  </div>
                  <span className="text-xs font-mono text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50 flex items-center gap-1.5">
                    <Route className="w-3 h-3" />
                    <span>~200 km Route</span>
                  </span>
                </div>

                {/* Roots: Manirampur */}
                <div className="relative pl-8 pb-8 border-l-2 border-rose-600/60">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.8)] border-2 border-slate-900" />
                  <span className="text-xs font-mono text-rose-400 font-semibold tracking-wider uppercase block mb-1">
                    Permanent Origin (Roots)
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
                    {PROFILE.homeAddress}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Peaceful landscapes, family heritage, and foundational upbringing in southern Bangladesh.
                  </p>
                </div>

                {/* Destination: Dhaka */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] border-2 border-slate-900 animate-pulse" />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
                      Present Base (Active Hub)
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] font-mono text-emerald-400">Live Now</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
                    {PROFILE.presentAddress}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    The vibrant capital metropolis hosting Daffodil International University and academic growth.
                  </p>
                </div>
              </div>

              {/* Graphical Distance Route Bar */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 text-rose-400">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>Manirampur</span>
                  </span>
                  <span className="text-slate-500">Padma Bridge Corridor</span>
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Dhaka</span>
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden relative">
                  <div className="h-full bg-gradient-to-r from-rose-500 via-indigo-500 to-blue-500 w-full animate-pulse" />
                </div>
              </div>
            </div>
          </Card3D>
        </div>

        {/* Linguistic Fluency & Culture (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {/* Languages */}
          <Card3D glowColor="blue" intensity={12}>
            <div className="p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <div className="p-2 rounded-xl bg-blue-950/80 border border-blue-800/50">
                    <Languages className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">Linguistic Fluency</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Bilingual Proficiency</span>
              </div>

              <div className="space-y-4">
                {PROFILE.languages.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{item.name}</span>
                        <span className="text-xs font-mono text-slate-400">({item.native})</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">{item.level}</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-blue-900/40 border border-blue-700/40 text-blue-300 text-xs font-mono">
                      {item.name === 'Bangla' ? 'Native Language' : 'Professional Fluent'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card3D>

          {/* Cultural Identity Card */}
          <Card3D glowColor="red" intensity={12}>
            <div className="p-6 sm:p-7 bg-gradient-to-br from-rose-950/30 via-slate-950 to-slate-950">
              <div className="flex items-center gap-2 text-rose-400 mb-2">
                <Globe2 className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Core Identity
                </span>
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                “Rooted firmly in timeless heritage while scaling the frontiers of modern software engineering.”
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <span>Manirampur</span>
                  <ArrowRight className="w-3 h-3 text-rose-400" />
                  <span>Dhaka</span>
                </span>
                <span className="text-rose-400 font-bold">Md. Ikhtiar Ahmed</span>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};
