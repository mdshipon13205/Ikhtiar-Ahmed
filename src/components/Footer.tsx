import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Cake } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const [bdTime, setBdTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setBdTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-900 bg-slate-950/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-display font-extrabold text-lg text-white">
              {PROFILE.name}
            </span>
            <span className="text-xs font-mono text-rose-400 font-bold">· 2004</span>
          </div>
          <p className="text-xs font-mono text-slate-400">
            {PROFILE.department} · {PROFILE.university}
          </p>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-rose-300/80 mt-1">
            <Cake className="w-3 h-3 text-rose-400" />
            <span>Born: {PROFILE.birthDateFormatted} (20 Nov 2004)</span>
          </div>
        </div>

        {/* Live BST Clock */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-inner">
          <Clock className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          <span>Dhaka, BD (BST):</span>
          <span className="text-white font-bold">{bdTime || 'Loading...'}</span>
        </div>

        {/* Right back to top */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-slate-500">
            Aesthetic 3D Showcase
          </span>
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all shadow-md group cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2 text-center">
        <span>© {new Date().getFullYear()} Md. Ikhtiar Ahmed. All rights reserved.</span>
        <span className="flex items-center gap-1.5">
          <span>Rooted in Manirampur, Jashore · Crafted with Dark Blue & Dark Red</span>
        </span>
      </div>
    </footer>
  );
};
