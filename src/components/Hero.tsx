import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Sparkles, ArrowDown, ExternalLink, Moon, Cake, BookOpen } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { Card3D } from './Card3D';
import { StaggerWords, AnimatedReveal } from './AnimatedReveal';
import { soundFx } from '../utils/audio';

interface HeroProps {
  onExploreClick: () => void;
  onSleepClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSleepClick }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        {/* Step 1: Status Pill with subtle glow */}
        <AnimatedReveal delay={0.1} direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-[0_0_20px_rgba(37,99,235,0.2)] mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <span className="text-xs font-mono tracking-wide text-slate-300">
              Daffodil International University · Software Engineering
            </span>
          </div>
        </AnimatedReveal>

        {/* Step 2: Main Heading with staggered words and dual gradient */}
        <div className="relative">
          {/* Subtle Ambient Backlight in Dark Blue & Dark Red */}
          <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-blue-700/20 via-rose-700/25 to-blue-700/20 blur-3xl opacity-60 -z-10 rounded-full" />

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-3">
            <StaggerWords
              text={PROFILE.name}
              className="text-slate-100 font-display"
              delay={0.2}
            />
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-slate-200 to-blue-400 mb-8 leading-relaxed">
            <StaggerWords
              text="Software Engineering Undergraduate — weaving code, cinematic intensity, and boundless curiosity."
              delay={0.35}
            />
          </p>
        </div>

        {/* Step 3: Interactive 3D Holographic Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="w-full max-w-2xl mb-8"
        >
          <Card3D glowColor="dual" intensity={15} className="w-full">
            <div className="p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden">
              {/* Subtle watermarked 04 badge for 2004 */}
              <div className="absolute -right-4 -bottom-6 text-slate-800/25 text-9xl font-black select-none pointer-events-none font-display">
                04
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                {/* 3D Profile Avatar Monogram */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-rose-950 via-slate-900 to-blue-950 p-[2px] shadow-2xl relative group">
                    <div className="w-full h-full rounded-[14px] bg-slate-950/90 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-radial from-rose-600/20 via-transparent to-transparent opacity-60" />
                      <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-blue-300 font-display">
                        IA
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 tracking-widest mt-1">
                        2004
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-rose-600/90 text-[10px] font-mono text-white border border-rose-400/40 shadow-lg font-bold">
                    NOV 2004
                  </div>
                </div>

                {/* Profile Overview Details */}
                <div className="flex-1 w-full space-y-3">
                  <div>
                    <h2 className="text-xl font-bold text-white flex items-center justify-between">
                      <span>{PROFILE.name}</span>
                      <span className="text-xs font-mono text-rose-400 bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-800/40 font-bold">
                        DIU SWE
                      </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-1.5 mt-0.5">
                      <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{PROFILE.department}</span>
                    </p>
                  </div>

                  {/* Birthday Highlight Banner */}
                  <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-800/50 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-rose-300">
                      <Cake className="w-3.5 h-3.5 text-rose-400 shrink-0 animate-pulse" />
                      <span className="font-semibold">Birthday:</span>
                      <span className="text-white font-bold">{PROFILE.birthDateFormatted}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                      20 November 2004
                    </span>
                  </div>

                  {/* Origins Route Badge */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{PROFILE.homeAddress}</span>
                    </div>
                    <ArrowDown className="w-3.5 h-3.5 text-slate-400 -rotate-90 shrink-0" />
                    <div className="flex items-center gap-2 text-blue-300">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{PROFILE.presentAddress}</span>
                    </div>
                  </div>

                  {/* Micro Quick Tags */}
                  <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-400">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-300">
                      🌐 Languages: English & Bengali
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-rose-950/40 border border-rose-900/50 text-rose-300">
                      🔥 Cinema: Salaar & KGF
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-950/40 border border-blue-900/50 text-blue-300">
                      🎨 Signature: Dark Blue & Dark Red
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>

        {/* Step 4: Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4"
        >
          <a
            href="#education"
            onClick={() => {
              soundFx.playClick();
              onExploreClick();
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-medium text-sm shadow-[0_0_25px_rgba(225,29,72,0.4)] hover:shadow-[0_0_35px_rgba(225,29,72,0.6)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Academic Journey</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <a
            href="#wisdom"
            onClick={() => soundFx.playClick()}
            className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-rose-700/50 text-rose-300 hover:text-white font-medium text-sm shadow-lg transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-rose-400" />
            <span>100 Hadiths & Quotes</span>
          </a>

          <button
            onClick={() => {
              soundFx.playSleepChime();
              onSleepClick();
            }}
            className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white font-medium text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <Moon className="w-4 h-4 text-blue-400" />
            <span>Elite Hobby (Sleeping)</span>
          </button>

          <a
            href="#connect"
            onClick={() => soundFx.playClick()}
            className="px-5 py-3 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 border border-slate-800 text-slate-400 hover:text-slate-200 font-medium text-sm transition-all flex items-center gap-2"
          >
            <span>Social Profiles</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
