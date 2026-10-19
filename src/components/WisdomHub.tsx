import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Quote,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Shuffle,
  Copy,
  Check,
  Play,
  Pause,
  Heart,
  Search,
  BookmarkCheck,
  ShieldAlert,
  GraduationCap,
  Briefcase,
  Flame,
  UserCheck
} from 'lucide-react';
import { HADITHS_100, AuthenticHadith } from '../data/hadiths100';
import { QUOTES_100, RenownedQuote } from '../data/quotes100';
import { Card3D } from './Card3D';
import { StaggerWords } from './AnimatedReveal';
import { soundFx } from '../utils/audio';

type ActiveTab = 'hadiths' | 'quotes';

export const WisdomHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('hadiths');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hadithIndex, setHadithIndex] = useState<number>(0);
  const [quoteIndex, setQuoteIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1);
  const [bookmarkedHadiths, setBookmarkedHadiths] = useState<number[]>([]);
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState<number[]>([]);

  // Filter Hadiths
  const filteredHadiths = useMemo(() => {
    return HADITHS_100.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.textBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lesson.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Filter Quotes
  const filteredQuotes = useMemo(() => {
    return QUOTES_100.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lesson.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Active item
  const currentHadith: AuthenticHadith | undefined =
    filteredHadiths[hadithIndex % Math.max(1, filteredHadiths.length)];
  const currentQuote: RenownedQuote | undefined =
    filteredQuotes[quoteIndex % Math.max(1, filteredQuotes.length)];

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setDirection(1);
      if (activeTab === 'hadiths' && filteredHadiths.length > 0) {
        setHadithIndex((prev) => (prev + 1) % filteredHadiths.length);
      } else if (activeTab === 'quotes' && filteredQuotes.length > 0) {
        setQuoteIndex((prev) => (prev + 1) % filteredQuotes.length);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlay, activeTab, filteredHadiths.length, filteredQuotes.length]);

  const handleNext = () => {
    soundFx.playClick();
    setDirection(1);
    if (activeTab === 'hadiths' && filteredHadiths.length > 0) {
      setHadithIndex((prev) => (prev + 1) % filteredHadiths.length);
    } else if (activeTab === 'quotes' && filteredQuotes.length > 0) {
      setQuoteIndex((prev) => (prev + 1) % filteredQuotes.length);
    }
  };

  const handlePrev = () => {
    soundFx.playClick();
    setDirection(-1);
    if (activeTab === 'hadiths' && filteredHadiths.length > 0) {
      setHadithIndex((prev) => (prev - 1 + filteredHadiths.length) % filteredHadiths.length);
    } else if (activeTab === 'quotes' && filteredQuotes.length > 0) {
      setQuoteIndex((prev) => (prev - 1 + filteredQuotes.length) % filteredQuotes.length);
    }
  };

  const handleShuffle = () => {
    soundFx.playWhoosh();
    setDirection(1);
    if (activeTab === 'hadiths' && filteredHadiths.length > 1) {
      setHadithIndex(Math.floor(Math.random() * filteredHadiths.length));
    } else if (activeTab === 'quotes' && filteredQuotes.length > 1) {
      setQuoteIndex(Math.floor(Math.random() * filteredQuotes.length));
    }
  };

  const handleCopy = () => {
    soundFx.playClick();
    let textToCopy = '';
    if (activeTab === 'hadiths' && currentHadith) {
      textToCopy = `“${currentHadith.textBn}”\n\n— ${currentHadith.reference}\n[শিক্ষা: ${currentHadith.lesson}]`;
    } else if (activeTab === 'quotes' && currentQuote) {
      textToCopy = `“${currentQuote.quote}”\n\n— ${currentQuote.author} (${currentQuote.role})\n[Core Wisdom: ${currentQuote.lesson}]`;
    }
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleBookmark = () => {
    soundFx.playClick();
    if (activeTab === 'hadiths' && currentHadith) {
      setBookmarkedHadiths((prev) =>
        prev.includes(currentHadith.id)
          ? prev.filter((id) => id !== currentHadith.id)
          : [...prev, currentHadith.id]
      );
    } else if (activeTab === 'quotes' && currentQuote) {
      setBookmarkedQuotes((prev) =>
        prev.includes(currentQuote.id)
          ? prev.filter((id) => id !== currentQuote.id)
          : [...prev, currentQuote.id]
      );
    }
  };

  const isCurrentBookmarked =
    activeTab === 'hadiths' && currentHadith
      ? bookmarkedHadiths.includes(currentHadith.id)
      : activeTab === 'quotes' && currentQuote
      ? bookmarkedQuotes.includes(currentQuote.id)
      : false;

  const categories = [
    { id: 'all', label: 'All Wisdom (100+)', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'despair', label: 'Overcoming Despair & Anxiety', icon: <Flame className="w-3.5 h-3.5" /> },
    { id: 'career', label: 'Career, Code & Mastery', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { id: 'perseverance', label: 'Patience & Unstoppable Grit', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { id: 'backbiting', label: 'Avoiding Gossip & Slander', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
    { id: 'character', label: 'Excellence & Humility', icon: <UserCheck className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="wisdom" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-800/50 text-rose-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(225,29,72,0.25)]">
          <BookOpen className="w-3.5 h-3.5 text-rose-400" />
          <span>Wisdom & Inspiration Sanctuary</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          <StaggerWords text="Timeless Guidance & Life Philosophy" delay={0.1} />
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          <StaggerWords
            text="Explore 100 authentic Sahih Hadiths in pristine Bengali with verified citations alongside 100 iconic quotes from the world's greatest thinkers on overcoming despair, building careers, perseverance, and guarding speech."
            delay={0.25}
          />
        </p>
      </motion.div>

      {/* Main Tab Switcher: 100 Hadiths vs 100 Renowned Quotes */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
        <div className="p-1 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl flex items-center">
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('hadiths');
              setSelectedCategory('all');
            }}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === 'hadiths'
                ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-[0_0_25px_rgba(225,29,72,0.4)] border border-rose-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>100 Authentic Sahih Hadiths</span>
            <span className="px-2 py-0.5 rounded-md text-[10px] bg-rose-950/80 border border-rose-800/50 text-rose-300 font-mono font-bold">
              Sahih (100)
            </span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('quotes');
              setSelectedCategory('all');
            }}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activeTab === 'quotes'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] border border-blue-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Quote className="w-4 h-4" />
            <span>100 Renowned Global Quotes</span>
            <span className="px-2 py-0.5 rounded-md text-[10px] bg-blue-950/80 border border-blue-800/50 text-blue-300 font-mono">
              EN
            </span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder={activeTab === 'hadiths' ? 'Search hadiths, topics, refs...' : 'Search quotes, authors, topics...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedCategory(cat.id);
                if (activeTab === 'hadiths') setHadithIndex(0);
                else setQuoteIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat.id
                  ? activeTab === 'hadiths'
                    ? 'bg-rose-950/80 border border-rose-500 text-rose-300 font-bold shadow-[0_0_15px_rgba(225,29,72,0.3)]'
                    : 'bg-blue-950/80 border border-blue-500 text-blue-300 font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                  : 'bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800/80'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3D Showcase Presentation Card */}
      <Card3D glowColor={activeTab === 'hadiths' ? 'red' : 'blue'} intensity={10}>
        <div className="p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Subtle Ambient Backlight */}
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
              activeTab === 'hadiths' ? 'bg-rose-600/15' : 'bg-blue-600/15'
            }`}
          />
          <div
            className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${
              activeTab === 'hadiths' ? 'bg-blue-600/10' : 'bg-rose-600/10'
            }`}
          />

          {/* Top Bar: Counter, Topic, and Utilities */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80 relative z-10">
            <div className="flex items-center gap-3">
              <span
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wide border ${
                  activeTab === 'hadiths'
                    ? 'bg-rose-950/80 border-rose-700/50 text-rose-300'
                    : 'bg-blue-950/80 border-blue-700/50 text-blue-300'
                }`}
              >
                {activeTab === 'hadiths'
                  ? `Hadith ${currentHadith ? String(currentHadith.id).padStart(3, '0') : '000'} / 100`
                  : `Quote ${currentQuote ? String(currentQuote.id).padStart(3, '0') : '000'} / 100`}
              </span>

              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {activeTab === 'hadiths'
                    ? currentHadith?.topic
                    : currentQuote?.category.toUpperCase()}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Bookmark Button */}
              <button
                onClick={toggleBookmark}
                title={isCurrentBookmarked ? 'Remove Bookmark' : 'Bookmark this item'}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  isCurrentBookmarked
                    ? 'bg-rose-600 border-rose-500 text-white'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isCurrentBookmarked ? 'fill-current text-white' : ''}`} />
              </button>

              {/* Auto play toggle */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  setIsAutoPlay(!isAutoPlay);
                }}
                title={isAutoPlay ? 'Pause Auto-Stream' : 'Start Auto-Stream (7s interval)'}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  isAutoPlay
                    ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isAutoPlay ? 'Auto-Stream' : 'Auto Stream'}</span>
              </button>

              {/* Copy button */}
              <button
                onClick={handleCopy}
                title="Copy text & reference"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Dynamic Content Display */}
          <div className="min-h-[260px] flex flex-col justify-center my-4 relative z-10">
            <AnimatePresence mode="wait">
              {activeTab === 'hadiths' && currentHadith ? (
                <motion.div
                  key={`hadith-${currentHadith.id}`}
                  initial={{ opacity: 0, x: direction * 50, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -direction * 50, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* Hadith Bengali Text */}
                  <div className="relative pl-6 sm:pl-8 border-l-4 border-rose-600">
                    <Quote className="absolute -left-3 -top-3 w-6 h-6 text-rose-500/30 fill-rose-500/20" />
                    <p
                      className="text-xl sm:text-2xl md:text-3xl text-slate-100 leading-relaxed sm:leading-relaxed select-all"
                      style={{ fontFamily: "'Hind Siliguri', 'Times New Roman', serif" }}
                    >
                      “{currentHadith.textBn}”
                    </p>
                  </div>

                  {/* Reference & Life Lesson */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-rose-300 bg-rose-950/70 px-3.5 py-1.5 rounded-lg border border-rose-900/60 font-mono">
                        📖 {currentHadith.reference}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-300 italic flex items-center gap-2">
                      <span className="font-semibold text-blue-400">মূল শিক্ষা:</span>
                      <span style={{ fontFamily: "'Hind Siliguri', 'Times New Roman', serif" }}>
                        {currentHadith.lesson}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : activeTab === 'quotes' && currentQuote ? (
                <motion.div
                  key={`quote-${currentQuote.id}`}
                  initial={{ opacity: 0, x: direction * 50, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -direction * 50, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* Quote English Text */}
                  <div className="relative pl-6 sm:pl-8 border-l-4 border-blue-600">
                    <Quote className="absolute -left-3 -top-3 w-6 h-6 text-blue-500/30 fill-blue-500/20" />
                    <p className="text-xl sm:text-2xl md:text-3xl text-slate-100 font-medium leading-relaxed sm:leading-relaxed select-all">
                      “{currentQuote.quote}”
                    </p>
                  </div>

                  {/* Author & Core Wisdom */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        <span>— {currentQuote.author}</span>
                      </h4>
                      <p className="text-xs font-mono text-blue-400">{currentQuote.role}</p>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-300 italic flex items-center gap-2">
                      <span className="font-semibold text-rose-400">Core Wisdom:</span>
                      <span>{currentQuote.lesson}</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-12 text-slate-400 text-sm">
                  No items match your search. Try resetting the category filter.
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Interactive Navigation ("Next option a clic korle arekta asbe") */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                className={`px-6 py-2.5 rounded-xl text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer active:scale-95 shadow-xl ${
                  activeTab === 'hadiths'
                    ? 'bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 shadow-[0_0_25px_rgba(225,29,72,0.4)]'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.4)]'
                }`}
              >
                <span>{activeTab === 'hadiths' ? 'Next Hadith' : 'Next Quote'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleShuffle}
                className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                title="Random Shuffle"
              >
                <Shuffle className="w-3.5 h-3.5 text-amber-400" />
                <span>Shuffle</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span>
                {activeTab === 'hadiths'
                  ? `Browsing ${filteredHadiths.length} Authentic Hadiths`
                  : `Browsing ${filteredQuotes.length} Renowned Quotes`}
              </span>
              {isCurrentBookmarked && (
                <span className="flex items-center gap-1 text-rose-400">
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span>Saved</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </Card3D>
    </section>
  );
};
