import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animateTrail = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          width: isHovered ? '8px' : '5px',
          height: isHovered ? '8px' : '5px',
          backgroundColor: isHovered ? '#f43f5e' : '#38bdf8',
          boxShadow: isHovered
            ? '0 0 12px 2px rgba(244, 63, 94, 0.8)'
            : '0 0 10px 2px rgba(56, 189, 248, 0.8)',
        }}
        aria-hidden="true"
      />

      {/* Smooth Ambient Dual Halo */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          border: isHovered ? '1.5px solid rgba(244, 63, 94, 0.6)' : '1px solid rgba(56, 189, 248, 0.4)',
          background: isHovered
            ? 'radial-gradient(circle, rgba(244, 63, 94, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
          boxShadow: isHovered ? '0 0 20px rgba(244, 63, 94, 0.3)' : 'none',
        }}
        aria-hidden="true"
      />
    </>
  );
};
