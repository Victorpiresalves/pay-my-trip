import Image from 'next/image';
import { useTranslations } from 'next-intl';
import GlowButton from '@/components/ui/GlowButton';
import PolaroidCard from '@/components/ui/PolaroidCard';

const COPA_IMAGE = 'https://maquinadoesporte.com.br/wp-content/uploads/2025/07/copa-do-mundo-2026.jpg';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-14">
      {/* Background: Copa do Mundo image */}
      <Image
        src={COPA_IMAGE}
        alt="Copa do Mundo 2026"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay para manter legibilidade */}
      <div className="absolute inset-0 bg-navy-900/68 pointer-events-none" />

      {/* Green radial glow no centro */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(34,197,94,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col items-start gap-6">
          <span className="text-pitch-light font-display tracking-[0.3em] text-sm uppercase">
            {t('eyebrow')}
          </span>

          <h1
            className="font-display text-6xl sm:text-7xl xl:text-8xl leading-none text-white"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}
          >
            {t('headline')}
          </h1>

          <p
            className="text-slate-100 text-lg leading-relaxed max-w-md font-body"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
          >
            {t('subheadline')}
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <GlowButton href="#buy">{t('cta')}</GlowButton>
            <GlowButton href="#ranking" variant="ghost">
              {t('scroll')}
            </GlowButton>
          </div>
        </div>

        {/* Polaroid stack */}
        <div className="relative flex justify-center items-center h-80 lg:h-96">
          <div className="absolute" style={{ top: '10%', left: '5%' }}>
            <PolaroidCard
              caption="🇨🇦 Victoria"
              rotation={-8}
              animationClass="animate-float"
              imageSrc="https://www.ncl.com/sites/default/files/NTB.Victoria1.jpg"
              imageAlt="Victoria, BC"
            />
          </div>
          <div className="absolute" style={{ top: '15%', left: '28%', zIndex: 10 }}>
            <PolaroidCard
              caption="⚽ World Cup 2026"
              rotation={3}
              animationClass="animate-float-delayed"
              imageSrc={COPA_IMAGE}
              imageAlt="Copa do Mundo 2026"
            />
          </div>
          <div className="absolute" style={{ top: '25%', left: '52%' }}>
            <PolaroidCard
              caption="🇧🇷 Victor"
              rotation={-4}
              animationClass="animate-float-slow"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0e1a)' }}
      />
    </section>
  );
}
