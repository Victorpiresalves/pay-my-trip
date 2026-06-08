'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import GlowButton from '@/components/ui/GlowButton';

interface PricingPackage {
  goals: number;
  price: number;
  image: string;
  nameKey: 'pkg1_name' | 'pkg2_name' | 'pkg3_name';
  descKey: 'pkg1_desc' | 'pkg2_desc' | 'pkg3_desc';
  popular: boolean;
  stripeUrl: string;
}

const packages: PricingPackage[] = [
  { goals: 1, price: 10, image: '/1-goal.png', nameKey: 'pkg1_name', descKey: 'pkg1_desc', popular: false, stripeUrl: 'https://donate.stripe.com/28E3cw756bjrdPPfxM6Zy00' },
  { goals: 2, price: 15, image: '/2-goal.png', nameKey: 'pkg2_name', descKey: 'pkg2_desc', popular: true, stripeUrl: 'https://donate.stripe.com/eVq7sM0GIgDL4ffbhw6Zy01' },
  { goals: 3, price: 20, image: '/3-goal.png', nameKey: 'pkg3_name', descKey: 'pkg3_desc', popular: false, stripeUrl: 'https://donate.stripe.com/cNi5kE3SUafncLL71g6Zy02' },
];

const COUNTRIES = [
  { code: 'BR', flag: '🇧🇷', name: 'Brazil' },
  { code: 'AR', flag: '🇦🇷', name: 'Argentina' },
  { code: 'FR', flag: '🇫🇷', name: 'France' },
  { code: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: 'PT', flag: '🇵🇹', name: 'Portugal' },
  { code: 'ES', flag: '🇪🇸', name: 'Spain' },
  { code: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: 'IT', flag: '🇮🇹', name: 'Italy' },
  { code: 'MX', flag: '🇲🇽', name: 'Mexico' },
  { code: 'US', flag: '🇺🇸', name: 'United States' },
];

export default function PricingSection() {
  const t = useTranslations('pricing');
  const [selectedCountry, setSelectedCountry] = useState('BR');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = COUNTRIES.find((c) => c.code === selectedCountry)!;

  return (
    <section
      id="buy"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 120% 80% at 50% 100%, rgba(22,163,74,0.10) 0%, transparent 65%)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center gap-2 bg-pitch-light/10 border border-pitch-light/40 text-pitch-light font-body font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
              {t('subtitle')}
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white">{t('title')}</h2>
        </div>

        {/* Country selector */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <p className="font-display text-sm tracking-[0.2em] text-slate-300 uppercase">
            {t('select_country')}
          </p>
          <div className="relative w-56" ref={dropdownRef}>
            {/* Trigger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="w-full flex items-center gap-2.5 bg-white/8 border border-white/15 hover:border-pitch-light/60 text-white font-body px-3 py-2.5 rounded-xl focus:outline-none focus:border-pitch-light transition-colors cursor-pointer"
            >
              <img
                src={`https://flagcdn.com/w40/${selected.code.toLowerCase()}.png`}
                alt={selected.name}
                width={24}
                height={16}
                className="rounded-sm object-cover shrink-0"
              />
              <span className="flex-1 text-left text-sm">{selected.name}</span>
              <span className={`text-slate-400 text-xs transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {/* Dropdown list */}
            {open && (
              <ul className="absolute z-30 mt-1 w-full bg-navy-800 border border-white/15 rounded-xl overflow-hidden shadow-2xl">
                {COUNTRIES.map((c) => (
                  <li key={c.code}>
                    <button
                      onClick={() => { setSelectedCountry(c.code); setOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm font-body hover:bg-white/10 transition-colors cursor-pointer ${
                        c.code === selectedCountry ? 'bg-pitch-light/15 text-pitch-light' : 'text-white'
                      }`}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                        alt={c.name}
                        width={22}
                        height={14}
                        className="rounded-sm object-cover shrink-0"
                      />
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.goals}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col items-center text-center rounded-2xl p-6 gap-4 ${
                pkg.popular
                  ? 'bg-pitch-light/12 border-2 border-pitch-light shadow-glow md:scale-105'
                  : 'bg-white/7 border border-white/10'
              }`}
            >
              {/* Most popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-pitch-light text-navy-900 font-display text-xs tracking-widest px-4 py-1 rounded-full">
                    {t('popular')}
                  </span>
                </div>
              )}

              {/* Product image */}
              <div className="relative w-full aspect-square max-w-[220px]">
                <Image
                  src={pkg.image}
                  alt={`${pkg.goals} ${pkg.goals === 1 ? 'goal' : 'goals'} polaroid`}
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 768px) 60vw, 220px"
                />
              </div>

              {/* Package name */}
              <p className="font-display text-lg tracking-widest text-slate-200 uppercase">
                {t(pkg.nameKey)}
              </p>

              {/* Goals */}
              <div className="flex flex-col items-center gap-1">
                <span className="font-display text-7xl leading-none text-pitch-light">
                  {pkg.goals}
                </span>
                <span className="font-display text-xl tracking-[0.2em] text-white/70">
                  {pkg.goals === 1 ? t('goal') : t('goals')}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-start gap-1">
                <span className="font-body text-slate-200 text-sm mt-2">CAD</span>
                <span className="font-display text-5xl text-white leading-none">
                  ${pkg.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm font-body leading-relaxed">{t(pkg.descKey)}</p>

              {/* CTA */}
              <GlowButton
                href={pkg.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant={pkg.popular ? 'primary' : 'ghost'}
                className="w-full text-center justify-center"
              >
                {t('buy')}
              </GlowButton>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
