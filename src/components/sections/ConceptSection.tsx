import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import SoccerBall from '@/components/icons/SoccerBall';

export default function ConceptSection() {
  const t = useTranslations('concept');

  const steps = [
    {
      num: '01',
      icon: '🌎',
      label: t('step1_label'),
      desc: t('step1_desc'),
    },
    {
      num: '02',
      icon: null,
      label: t('step2_label'),
      desc: t('step2_desc'),
    },
    {
      num: '03',
      icon: '⚽',
      label: t('step3_label'),
      desc: t('step3_desc'),
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/soccer-goal.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-900/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px flex-1 max-w-16 bg-pitch-light/40" />
          <span className="inline-flex items-center gap-2 bg-pitch-light/10 border border-pitch-light/40 text-pitch-light font-body font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
            {t('title')}
          </span>
          <div className="h-px flex-1 max-w-16 bg-pitch-light/40" />
        </div>

        {/* Main rule */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
          {t('rule')}
        </h2>

        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-16 font-body">
          {t('description')}
        </p>

        {/* 3-step flow with cards + arrows */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              {/* Step card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
                {/* Number */}
                <span className="font-display text-5xl text-pitch-light leading-none">
                  {step.num}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-full border border-pitch-light/30 bg-pitch-light/10 flex items-center justify-center">
                  {step.icon === null ? (
                    <SoccerBall size={28} className="text-pitch-light" />
                  ) : (
                    <span className="text-2xl">{step.icon}</span>
                  )}
                </div>

                <div>
                  <p className="font-display text-xl text-white tracking-wide mb-1">
                    {step.label}
                  </p>
                  <p className="text-white/70 text-sm font-body">{step.desc}</p>
                </div>
              </div>

              {/* Arrow connector (desktop only, between cards) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-2">
                  <span className="text-pitch-light/50 text-3xl font-display">→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
