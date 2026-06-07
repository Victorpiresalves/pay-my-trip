'use client';

import { motion } from 'framer-motion';

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
}

export default function GlowButton({
  children,
  href,
  target,
  rel,
  onClick,
  variant = 'primary',
  className = '',
}: GlowButtonProps) {
  const base =
    'inline-block font-display tracking-widest text-lg px-10 py-4 transition-all duration-300 cursor-pointer select-none';
  const primary =
    'bg-pitch-light text-navy-900 hover:bg-pitch hover:shadow-glow';
  const ghost =
    'border-2 border-pitch-light text-pitch-light hover:bg-pitch-light hover:text-navy-900 hover:shadow-glow-sm';

  const classes = `${base} ${variant === 'primary' ? primary : ghost} ${className}`;

  const el = href ? (
    <a href={href} target={target} rel={rel} className={classes}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      {el}
    </motion.div>
  );
}
