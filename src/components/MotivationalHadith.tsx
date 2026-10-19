import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookMarked, Sparkles, ChevronRight, ChevronLeft, Shuffle, Copy, Check, Play, Pause, Bookmark, Quote } from 'lucide-react';
import { MOTIVATIONAL_HADITHS, HadithItem } from '../data/hadithData';
import { Card3D } from './Card3D';
import { soundFx } from '../utils/audio';

interface MotivationalHadithProps {
  lang: 'en' | 'bn';
}

export const MotivationalHadith: React.FC<MotivationalHadithProps> = ({ lang }) => {
  const isBn = lang === 'bn';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1);
  const [showArabic, setShowArabic] = useState<boolean>(false);

  // Filter hadiths by category
  const filteredHadiths = selectedCategory === 'all'
    ? MOTIVATIONAL_HADITHS
    : MOTIVATIONAL_HADITHS.filter((h) => h.category === selectedCategory);

  const activeHadith: HadithItem = filteredHadiths[currentIndex % filteredHadiths.length];

  // Auto-play infinite rotation
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % filteredHadiths.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlay, filteredHadiths.length]);

  const handleNext = () => {
    soundFx.playClick();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredHadiths.length);
  };

  const handlePrev = () => {
    soundFx.playClick();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredHadiths.length) % filteredHadiths.length);
  };

  const handleShuffle = () => {
    soundFx.playWhoosh();
    let randomIndex = Math.floor(Math.random() * filteredHadiths.length);
    if (randomIndex === currentIndex && filteredHadiths.length > 1) {
      randomIndex = (randomIndex + 1) % filteredHadiths.length;
    }
    setDirection(1);
    setCurrentIndex(randomIndex);
  };

  const handleCopy = () => {
    soundFx.playClick();
    const copyText = `${activeHadith.textBn}\n\n[${activeHadith.reference}]`;
    navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const categories = [
    { id: 'all', labelBn: 'সকল হাদিস (অনন্ত সংকলন)', labelEn: 'All Hadiths (Infinite)' },
    { id: 'knowledge', labelBn: 'জ্ঞান ও শিক্ষা', labelEn: 'Knowledge & Study' },
    { id: 'effort', labelBn: 'পরিশ্রম ও নিয়ত', labelEn: 'Effort & Intentions' },
    { id: 'patience', labelBn: 'ধৈর্য ও সহিষ্ণুতা', labelEn: 'Patience & Strength' },
    { id: 'character', labelBn: 'উত্তম চরিত্র ও মানবকল্যাণ', labelEn: 'Character & Kindness' },
    { id: 'hope', labelBn: 'আশা ও ভরসা', labelEn: 'Hope & Optimism' },
  ];

  return (
    <section id="hadith" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header with animated text reveal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/70 border border-rose-800/50 text-rose-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(225,29,72,0.25)]">
          <BookMarked className="w-3.5 h-3.5 text-rose-400" />
          <span>{isBn ? 'অনুপ্রেরণা ও জীবনদর্শন' : 'Spiritual & Motivational Hadiths'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          {isBn ? 'অনুপ্রেরণামূলক সহীহ হাদিস' : 'Motivational Prophetic Hadiths'}
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {isBn
            ? 'জ্ঞানার্জন, সততা, কঠোর মেহনত ও ধৈর্যের নিখুঁত দিকনির্দেশনা — বিশুদ্ধ রেফারেন্সসহ একের পর এক অফুরন্ত হাদিসের সংকলন।'
            : 'Authentic prophetic wisdom guiding software engineering grit, character, and lifelong pursuit of knowledge.'}
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundFx.playClick();
              setSelectedCategory(cat.id);
              setCurrentIndex(0);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs transition-all duration-300 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-rose-600 text-white font-bold shadow-[0_0_20px_rgba(225,29,72,0.4)] border border-rose-500'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {isBn ? cat.labelBn : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Main 3D Hadith Showcase Card */}
      <Card3D glowColor="dual" intensity={12}>
        <div className="p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle Islamic Calligraphic Pattern Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-4 right-6 opacity-10 text-rose-400 select-none pointer-events-none text-8xl font-serif">
            ﷽
          </div>

          {/* Top Bar: Counter & Topic */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-rose-950/70 border border-rose-800/40 text-rose-300 text-xs font-mono font-bold">
                {isBn ? `হাদিস নং ${String(activeHadith.id).padStart(2, '০')}` : `Hadith #${String(activeHadith.id).padStart(2, '0')}`}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{activeHadith.topicBn}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Auto play toggle */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  setIsAutoPlay(!isAutoPlay);
                }}
                title={isAutoPlay ? 'স্বয়ংক্রিয় পরিবর্তন বন্ধ করুন' : 'স্বয়ংক্রিয় পরিবর্তন চালু করুন (অটো-প্লে)'}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  isAutoPlay
                    ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isAutoPlay ? 'Auto-Playing' : 'Auto Play'}</span>
              </button>

              {/* Copy button */}
              <button
                onClick={handleCopy}
                title="হাদিস কপি করুন"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Animated Hadith Content Block */}
          <div className="min-h-[220px] flex flex-col justify-center my-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHadith.id}
                initial={{ opacity: 0, x: direction * 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -direction * 40, scale: 0.98 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="space-y-6"
              >
                {/* Main Bengali Hadith Text */}
                <div className="relative pl-6 sm:pl-8 border-l-4 border-rose-600">
                  <Quote className="absolute -left-3 -top-2 w-6 h-6 text-rose-500/40 fill-rose-500/20" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-100 leading-relaxed sm:leading-relaxed select-all">
                    “{activeHadith.textBn}”
                  </p>
                </div>

                {/* Optional Arabic Quote accordion */}
                {activeHadith.arabic && (
                  <div className="pt-1">
                    <button
                      onClick={() => setShowArabic(!showArabic)}
                      className="text-[11px] font-mono text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{showArabic ? '▼ আরবি মূলপাঠ লুকান' : '▶ আরবি মূলপাঠ দেখুন (Original Arabic)'}</span>
                    </button>
                    {showArabic && (
                      <p
                        className="mt-2 text-right text-base sm:text-xl text-rose-300/90 leading-loose tracking-wide select-all bg-slate-950/60 p-3 rounded-xl border border-slate-800"
                        style={{ fontFamily: "'Amiri', serif" }}
                        dir="rtl"
                      >
                        « {activeHadith.arabic} »
                      </p>
                    )}
                  </div>
                )}

                {/* Reference & Life Lesson Box */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-rose-400 bg-rose-950/60 px-3 py-1 rounded-md border border-rose-900/60">
                      📖 {activeHadith.reference}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 italic">
                    <span className="font-semibold text-blue-400">মূল শিক্ষা: </span>
                    <span>{activeHadith.lessonBn}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Interactive Controls ("clic system thakbe , infinity hadis add kor") */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{isBn ? 'পূর্ববর্তী' : 'Previous'}</span>
              </button>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-bold shadow-[0_0_20px_rgba(225,29,72,0.35)] flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
              >
                <span>{isBn ? 'পরবর্তী হাদিস' : 'Next Hadith'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleShuffle}
                className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                title="এলোমেলো অন্য একটি হাদিস দেখুন"
              >
                <Shuffle className="w-3.5 h-3.5 text-blue-400" />
                <span>{isBn ? 'র‌্যান্ডম হাদিস' : 'Shuffle'}</span>
              </button>
            </div>

            <div className="text-xs font-mono text-slate-400">
              {isBn ? `মোট ${filteredHadiths.length}টি হাদিস থেকে ব্রাউজ করছেন` : `Browsing ${filteredHadiths.length} authentic hadiths`}
            </div>
          </div>
        </div>
      </Card3D>
    </section>
  );
};
