import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2, Calendar } from 'lucide-react';
import { EDUCATION_TIMELINE } from '../data/profileData';
import { Card3D } from './Card3D';
import { StaggerWords } from './AnimatedReveal';
import { soundFx } from '../utils/audio';

export const EducationTimeline: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('diu');

  const getIcon = (type: string) => {
    switch (type) {
      case 'university':
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'college':
        return <Award className="w-5 h-5 text-rose-400" />;
      case 'school':
      default:
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header with staggered animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight mb-4">
          <StaggerWords
            text="From Foundation Roots to Software Engineering"
            delay={0.1}
          />
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          <StaggerWords
            text="Tracing the educational progression from Shyamkur ML High School to Keshabpur Govt. Degree College, and actively pursuing B.Sc. in Software Engineering at Daffodil International University."
            delay={0.25}
          />
        </p>
      </motion.div>

      {/* Timeline Grid */}
      <div className="relative">
        {/* Glowing vertical connector line */}
        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-500 via-rose-500 to-slate-800 -translate-x-1/2 opacity-40 shadow-[0_0_15px_rgba(225,29,72,0.5)]" />

        <div className="space-y-8 md:space-y-12">
          {EDUCATION_TIMELINE.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isSelected = selectedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-center justify-between gap-6 relative ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Card */}
                <div className="w-full md:w-[46%]">
                  <Card3D
                    glowColor={item.id === 'diu' ? 'blue' : item.id === 'hsc' ? 'red' : 'none'}
                    intensity={12}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedId(item.id);
                    }}
                    className={`cursor-pointer transition-all duration-300 ${
                      isSelected ? 'ring-2 ring-rose-500/50 bg-slate-900/90' : ''
                    }`}
                  >
                    <div className="p-6 sm:p-7 relative overflow-hidden">
                      {/* Top indicator badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-xl bg-slate-800/90 border border-slate-700/60 shadow-inner">
                            {getIcon(item.iconType)}
                          </div>
                          <span className="text-xs font-mono font-semibold tracking-wide text-rose-400 uppercase">
                            {item.id === 'diu' ? 'Current / Active' : 'Completed'}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/40 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-rose-400" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1 group-hover:text-rose-400 transition-colors">
                        {item.institution}
                      </h3>

                      <p className="text-sm font-semibold text-blue-400 mb-2">
                        {item.level}
                      </p>

                      {item.department && (
                        <div className="text-xs font-mono text-slate-300 bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80 mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item.department}</span>
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card3D>
                </div>

                {/* Central Node Badge */}
                <div className="relative z-20 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm shadow-xl transition-all duration-300 border ${
                      item.id === 'diu'
                        ? 'bg-gradient-to-br from-blue-600 to-rose-700 text-white border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.5)] scale-110'
                        : 'bg-slate-900 text-slate-300 border-slate-700'
                    }`}
                  >
                    0{index + 1}
                  </div>
                </div>

                {/* Placeholder balance side */}
                <div className="w-full md:w-[46%] hidden md:block">
                  <div className={`p-4 rounded-xl border border-dashed border-slate-800/60 text-xs font-mono text-slate-400 flex items-center gap-2 ${
                    isLeft ? 'justify-end text-right' : 'justify-start text-left'
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.institution}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
