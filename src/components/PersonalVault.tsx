import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clapperboard, Palette, Utensils, Plane, Flame, Heart, Sparkles, CheckCircle2, Volume2 } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { Card3D } from './Card3D';
import { StaggerWords } from './AnimatedReveal';
import { soundFx } from '../utils/audio';

export const PersonalVault: React.FC = () => {
  const [activeMovie, setActiveMovie] = useState<number>(0);
  const [actionPulse, setActionPulse] = useState<boolean>(false);
  const [checkedLandmarks, setCheckedLandmarks] = useState<Record<string, boolean>>({
    'Hagia Sophia & Bosphorus Strait': true,
    'Cappadocia Hot Air Balloons': true,
  });

  const toggleLandmark = (item: string) => {
    soundFx.playClick();
    setCheckedLandmarks((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const triggerCinematicAction = () => {
    soundFx.playCinematicHit();
    setActionPulse(true);
    setTimeout(() => setActionPulse(false), 800);
  };

  return (
    <section id="vault" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-rose-950/60 border border-rose-800/40 text-rose-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Heart className="w-3.5 h-3.5" />
          <span>Aesthetic DNA & Desires</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight mb-4">
          <StaggerWords
            text="Cinema, Palettes & Dreamscapes"
            delay={0.1}
          />
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          <StaggerWords
            text="From the visceral action of Salaar & KGF to the intensity of Dark Blue and Dark Red, savoring Beef and dreaming of Turkey."
            delay={0.25}
          />
        </p>
      </motion.div>

      {/* Grid Layout for Personal Vault */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* 1. Cinema Universe: Salaar & KGF (Span 7) */}
        <div className="lg:col-span-7">
          <Card3D glowColor="red" intensity={12} className="h-full">
            <div className={`p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 ${
              actionPulse ? 'ring-2 ring-rose-500 shadow-[0_0_50px_rgba(225,29,72,0.6)]' : ''
            }`}>
              {/* Cinematic embers glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-rose-400">
                    <Clapperboard className="w-5 h-5" />
                    <span className="text-xs font-mono font-bold tracking-widest uppercase">
                      Favorite Cinema Universe
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
                    <span className="text-xs font-mono text-orange-400 font-bold">Prashanth Neel</span>
                  </div>
                </div>

                <div className="flex gap-2 mb-6">
                  {PROFILE.favorites.movies.map((movie, idx) => (
                    <button
                      key={movie.title}
                      onClick={() => {
                        soundFx.playClick();
                        setActiveMovie(idx);
                      }}
                      className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        activeMovie === idx
                          ? 'bg-rose-600 text-white font-bold shadow-[0_0_15px_rgba(225,29,72,0.5)]'
                          : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      <span>{movie.title.split(':')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Active Movie Showcase */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-950/90 to-rose-950/40 border border-rose-900/50 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-rose-400 tracking-wider uppercase font-semibold">
                      {PROFILE.favorites.movies[activeMovie].tagline}
                    </span>
                    <button
                      onClick={triggerCinematicAction}
                      className="px-2.5 py-1 rounded-lg bg-rose-900/60 hover:bg-rose-800 border border-rose-600/40 text-rose-200 text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-md"
                      title="Play Blockbuster Action Anthem SFX"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                      <span>Bass Pulse</span>
                    </button>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
                    {PROFILE.favorites.movies[activeMovie].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {PROFILE.favorites.movies[activeMovie].directorStyle}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Rating: ★★★★★ Blockbuster</span>
                <span className="text-rose-400 font-bold">Mass Cinematic Grandeur</span>
              </div>
            </div>
          </Card3D>
        </div>

        {/* 2. Color Aesthetics: Dark Blue & Dark Red (Span 5) */}
        <div className="lg:col-span-5">
          <Card3D glowColor="dual" intensity={12} className="h-full">
            <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Palette className="w-5 h-5" />
                    <span className="text-xs font-mono font-bold tracking-widest uppercase">
                      Signature Palette
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Dark Blue & Red
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  Dark Blue signifies depth, clarity, and tech intellect; Dark Red commands power, cinematic fervor, and courage.
                </p>

                <div className="space-y-4">
                  {PROFILE.favorites.colors.map((color) => (
                    <div
                      key={color.name}
                      className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-all cursor-pointer group"
                      onClick={() => soundFx.playClick()}
                    >
                      <div
                        className="w-12 h-12 rounded-xl shrink-0 shadow-lg border border-white/10 flex items-center justify-center font-mono text-[10px] text-white font-bold transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: color.hex,
                          boxShadow: `0 0 25px ${color.hex}bb`,
                        }}
                      >
                        {color.name === 'Dark Blue' ? 'BLUE' : 'RED'}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                            {color.name}
                          </h4>
                          <span className="font-mono text-xs text-slate-400">{color.hex}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">{color.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 text-center flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>The core aesthetic harmony powering this entire website UI</span>
              </div>
            </div>
          </Card3D>
        </div>

        {/* 3. Favorite Meat: Beef (Span 5) */}
        <div className="lg:col-span-5">
          <Card3D glowColor="red" intensity={12} className="h-full">
            <div className="p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-rose-400">
                    <Utensils className="w-5 h-5" />
                    <span className="text-xs font-mono font-bold tracking-widest uppercase">
                      Culinary Favorite
                    </span>
                  </div>
                  <span className="text-xs font-mono text-rose-400 bg-rose-950/70 border border-rose-800/40 px-3 py-1 rounded-full">
                    Top Food Pick
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950/50 via-slate-950 to-slate-950 border border-rose-900/50 mb-4 relative overflow-hidden">
                  <div className="text-4xl mb-3 animate-bounce">🥩</div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
                    {PROFILE.favorites.meat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {PROFILE.favorites.meat.subtitle}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Preference: Slow-Cooked & Spiced</span>
                <span className="text-rose-400 font-bold">100% Authentic Connoisseur</span>
              </div>
            </div>
          </Card3D>
        </div>

        {/* 4. Dream Country: Turkey (Span 7) */}
        <div className="lg:col-span-7">
          <Card3D glowColor="blue" intensity={12} className="h-full">
            <div className="p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              {/* Cappadocia Hot Air Balloon Animated Graphic in background */}
              <div className="absolute top-2 right-4 pointer-events-none opacity-20">
                <svg width="90" height="120" viewBox="0 0 100 130" className="animate-pulse">
                  <path d="M50 10 C20 10 10 40 10 60 C10 80 40 100 45 108 L55 108 C60 100 90 80 90 60 C90 40 80 10 50 10 Z" fill="#e11d48" />
                  <rect x="42" y="114" width="16" height="12" rx="2" fill="#38bdf8" />
                  <line x1="45" y1="108" x2="43" y2="114" stroke="#ffffff" strokeWidth="2" />
                  <line x1="55" y1="108" x2="57" y2="114" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Plane className="w-5 h-5 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest uppercase">
                      Dream Travel Country
                    </span>
                  </div>
                  <span className="text-xs font-mono text-rose-400 flex items-center gap-1.5 bg-rose-950/60 px-2.5 py-1 rounded-md border border-rose-800/40">
                    <span className="text-base">🇹🇷</span>
                    <span>Republic of Türkiye</span>
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950/30 border border-slate-800 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                      {PROFILE.favorites.dreamCountry.country}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                      Destination #1
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic mb-4 leading-relaxed">
                    “{PROFILE.favorites.dreamCountry.motto}”
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block">
                      Must-Visit Milestones (Click to check):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PROFILE.favorites.dreamCountry.landmarks.map((landmark) => {
                        const isChecked = !!checkedLandmarks[landmark];
                        return (
                          <button
                            key={landmark}
                            onClick={() => toggleLandmark(landmark)}
                            className={`flex items-center gap-2 text-xs font-mono p-2.5 rounded-lg border transition-all text-left cursor-pointer ${
                              isChecked
                                ? 'bg-rose-950/60 border-rose-600/50 text-white'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isChecked ? 'text-rose-400' : 'text-slate-600'}`} />
                            <span>{landmark}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Passports ready for Istanbul & Cappadocia</span>
                <span className="text-blue-400 font-bold">Future Journey ✈️</span>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};
