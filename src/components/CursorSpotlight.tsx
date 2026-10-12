import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface CursorSpotlightProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  color?: string;
}

export const CursorSpotlight: React.FC<CursorSpotlightProps> = ({
  children,
  className = '',
  size = 600,
  color = 'rgba(255,255,255,0.06)',
}) => {
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-9999);
    mouseY.set(-9999);
  };

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 80%)`;

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`relative ${className}`}>
      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ background }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
