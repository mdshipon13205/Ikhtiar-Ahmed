import React, { useRef, useState } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'red' | 'dual' | 'none';
  intensity?: number;
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  glowColor = 'dual',
  intensity = 15,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotation({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.22 });
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowStyles = {
    blue: 'hover:shadow-[0_0_35px_-5px_rgba(37,99,235,0.35)] hover:border-blue-500/40',
    red: 'hover:shadow-[0_0_35px_-5px_rgba(225,29,72,0.35)] hover:border-rose-500/40',
    dual: 'hover:shadow-[0_0_40px_-5px_rgba(225,29,72,0.25),0_0_45px_-10px_rgba(37,99,235,0.25)] hover:border-rose-500/30',
    none: '',
  };

  return (
    <div
      style={{ perspective: '1100px' }}
      className="w-full transition-all duration-300"
    >
      <div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={onClick}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
          transformStyle: 'preserve-3d',
        }}
        className={`relative rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl transition-colors duration-300 overflow-hidden ${glowStyles[glowColor]} ${className}`}
      >
        {/* Dynamic Specular Glare Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle 380px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.25), transparent 75%)`,
          }}
          aria-hidden="true"
        />

        {/* Inner Content with 3D Depth */}
        <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
