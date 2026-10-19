import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { Card3D } from './Card3D';
import { StaggerWords } from './AnimatedReveal';
import { soundFx } from '../utils/audio';

// SVGs for Facebook, Instagram, LinkedIn
const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const SocialConnect: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const socialsList = [
    {
      name: 'Facebook',
      url: PROFILE.socials.facebook,
      handle: 'ikhtiar13206',
      icon: <FacebookIcon />,
      color: 'blue' as const,
      description: 'Official personal Facebook profile for social updates & discussions.',
    },
    {
      name: 'Instagram',
      url: PROFILE.socials.instagram,
      handle: '@ikhtiar_2003',
      icon: <InstagramIcon />,
      color: 'red' as const,
      description: 'Visual moments, stories, aesthetic photography & vibe.',
    },
    {
      name: 'LinkedIn',
      url: PROFILE.socials.linkedin,
      handle: 'md-ikhtiar-ahmed',
      icon: <LinkedinIcon />,
      color: 'blue' as const,
      description: 'Professional engineering network, internships & SWE projects.',
    },
  ];

  const handleCopyLink = (url: string, name: string) => {
    soundFx.playClick();
    navigator.clipboard.writeText(url);
    setCopied(name);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="connect" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Verified Social Grid</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight mb-4">
          <StaggerWords text="Connect Across Platforms" delay={0.1} />
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          <StaggerWords
            text="Reach out for software discussions, academic collaboration, or just to talk cinema and technology."
            delay={0.25}
          />
        </p>
      </motion.div>

      {/* Social Cards 3D Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {socialsList.map((social) => (
          <Card3D
            key={social.name}
            glowColor={social.color}
            intensity={14}
            className="group"
          >
            <div className="p-6 sm:p-7 flex flex-col justify-between h-full relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-inner text-slate-200 group-hover:text-rose-400 transition-colors">
                    {social.icon}
                  </div>
                  <button
                    onClick={() => handleCopyLink(social.url, social.name)}
                    title="Copy Profile URL"
                    className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
                  >
                    {copied === social.name ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Share2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-1">
                  {social.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-2">{social.handle}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {social.description}
                </p>
              </div>

              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]"
              >
                <span>Visit Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </Card3D>
        ))}
      </div>

      {/* Copy Notification Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-slate-900 border border-emerald-500/50 text-white font-mono text-xs shadow-2xl flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{copied} URL copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
