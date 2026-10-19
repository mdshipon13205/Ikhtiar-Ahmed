import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Moon, BookOpen } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  sleepMode: boolean;
  onToggleSleepMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  onToggleSound,
  sleepMode,
  onToggleSleepMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Overview' },
    { href: '#education', label: 'Education' },
    { href: '#origins', label: 'Roots & Path' },
    { href: '#vault', label: 'Favorites' },
    { href: '#wisdom', label: '100 Hadiths & Quotes' },
    { href: '#sleeping', label: 'Elite Hobby' },
    { href: '#connect', label: 'Connect' },
  ];

  const handleNavClick = () => {
    soundFx.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-8">
      <div className="max-w-6xl mx-auto rounded-2xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl shadow-2xl px-4 py-2.5 flex items-center justify-between transition-all">
        {/* Brand identity */}
        <a
          href="#hero"
          onClick={() => soundFx.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-rose-600 to-blue-700 p-[1.5px] shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
              <span className="font-mono text-xs font-bold bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">
                IA
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-white group-hover:text-rose-400 transition-colors">
              Md. Ikhtiar Ahmed
            </span>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DIU · Software Eng.</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => soundFx.playClick()}
              className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-900/90 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Sleep Mode Trigger */}
          <button
            onClick={() => {
              soundFx.playSleepChime();
              onToggleSleepMode();
            }}
            title={sleepMode ? 'Deactivate Sleep Mode' : 'Engage Elite Sleep Chamber'}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
              sleepMode
                ? 'bg-rose-950/80 border border-rose-500/60 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">{sleepMode ? 'Sleep Active' : 'Sleep Mode'}</span>
          </button>

          {/* Sound Mute/Unmute */}
          <button
            onClick={() => {
              onToggleSound();
              soundFx.playClick();
            }}
            title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-blue-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-slate-600 font-mono text-xs">➔</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
