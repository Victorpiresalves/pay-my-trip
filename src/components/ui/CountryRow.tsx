'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { CountryEntry, Locale } from '@/types';

interface CountryRowProps {
  entry: CountryEntry;
  locale: Locale;
  maxGoals: number;
  index: number;
}

const rankColors: Record<number, string> = {
  1: 'text-yellow-400',
  2: 'text-slate-300',
  3: 'text-amber-600',
};

export default function CountryRow({ entry, locale, maxGoals, index }: CountryRowProps) {
  const barWidth = Math.round((entry.goals / maxGoals) * 100);
  const rankColor = rankColors[entry.rank] ?? 'text-slate-500';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3 rounded-lg ${
        entry.highlight
          ? 'bg-yellow-400/5 border border-yellow-400/20'
          : 'border border-white/5 hover:bg-white/5'
      } transition-colors`}
    >
      {/* Rank */}
      <span className={`font-display text-lg sm:text-2xl w-6 sm:w-8 text-center shrink-0 ${rankColor}`}>
        {entry.rank}
      </span>

      {/* Flag + Country */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
        <Image
          src={`https://flagcdn.com/w40/${entry.countryCode.toLowerCase()}.png`}
          alt={entry.countryName.en}
          width={28}
          height={20}
          className="rounded-sm object-cover shrink-0"
        />
        <span className="text-xs sm:text-sm text-slate-300 font-body truncate">
          {entry.countryName[locale]}
        </span>
      </div>

      {/* Progress bar + goals */}
      <div className="w-16 sm:flex-1 flex items-center gap-2 sm:gap-3 shrink-0">
        <div className="hidden sm:block flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${barWidth}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.06 + 0.2 }}
            className="h-full bg-pitch-light rounded-full"
          />
        </div>
        <span className="font-display text-lg sm:text-xl text-pitch-light w-8 sm:w-10 text-right shrink-0">
          {entry.goals}
        </span>
      </div>
    </motion.div>
  );
}
