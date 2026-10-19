/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { soundFx } from './utils/audio';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EducationTimeline } from './components/EducationTimeline';
import { OriginsJourney } from './components/OriginsJourney';
import { PersonalVault } from './components/PersonalVault';
import { WisdomHub } from './components/WisdomHub';
import { EliteHobbySleeping } from './components/EliteHobbySleeping';
import { SocialConnect } from './components/SocialConnect';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Moon } from 'lucide-react';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [sleepMode, setSleepMode] = useState<boolean>(false);

  // Initialize soundFx enabled state
  React.useEffect(() => {
    soundFx.enabled = soundEnabled;
  }, [soundEnabled]);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundFx.enabled = nextState;
  };

  const toggleSleepMode = () => {
    setSleepMode((prev) => !prev);
  };

  return (
    <div className={`relative min-h-screen text-slate-100 overflow-hidden transition-colors duration-1000 ${
      sleepMode ? 'bg-[#02040a]' : 'bg-[#030712]'
    }`}>
      {/* Precision Dual-Color Custom Cursor for desktop */}
      <CustomCursor />

      {/* 3D WebGL Background Canvas with dual-color lighting & starfield */}
      <ThreeCanvas sleepMode={sleepMode} />

      {/* Atmospheric Ambient Radiance gradients */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse duration-1000" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Sleep Mode Floating Banner if engaged */}
      {sleepMode && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-rose-950/90 border border-rose-500/50 backdrop-blur-xl shadow-[0_0_30px_rgba(225,29,72,0.4)] flex items-center gap-3 animate-bounce">
          <Moon className="w-4 h-4 text-rose-300 animate-spin" />
          <span className="text-xs font-mono text-rose-200">
            Sleep Mode Active · Elite Brain Recharge
          </span>
          <button
            onClick={toggleSleepMode}
            className="px-2.5 py-0.5 rounded-full bg-rose-600 hover:bg-rose-500 text-[10px] font-mono text-white transition-colors cursor-pointer"
          >
            Wake Up
          </button>
        </div>
      )}

      {/* Sticky Navigation Bar */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        sleepMode={sleepMode}
        onToggleSleepMode={toggleSleepMode}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('education');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSleepClick={() => {
            const el = document.getElementById('sleeping');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <EducationTimeline />

        <OriginsJourney />

        <PersonalVault />

        {/* 100 Authentic Sahih Hadiths (Bangla) & 100 Renowned Global Quotes */}
        <WisdomHub />

        <EliteHobbySleeping
          sleepMode={sleepMode}
          onToggleSleepMode={toggleSleepMode}
        />

        <SocialConnect />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
