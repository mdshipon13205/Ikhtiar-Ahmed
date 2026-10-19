import React from 'react';
import { motion } from 'motion/react';

interface AnimatedRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 35, x: 0 };
      case 'down':
        return { y: -35, x: 0 };
      case 'left':
        return { x: 40, y: 0 };
      case 'right':
        return { x: -40, y: 0 };
      default:
        return { y: 35, x: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}

export const StaggerWords: React.FC<StaggerWordsProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
}) => {
  const words = text.split(' ');

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 16, filter: 'blur(3px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                duration: 0.45,
                ease: 'easeOut',
              },
            },
          }}
          className={`inline-block mr-[0.28em] ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
