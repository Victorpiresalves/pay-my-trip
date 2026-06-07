import { useTranslations } from 'next-intl';
import GlowButton from '@/components/ui/GlowButton';

export default function CtaSection() {
  const t = useTranslations('cta');

  return (
    <section
      id="buy"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(22,163,74,0.12) 0%, transparent 70%)',
      }}
    >
      <div className="max-w-2xl mx-auto px-4 text-center flex flex-col items-center gap-6">
        <h2 className="font-display text-5xl sm:text-6xl text-white leading-tight">
          {t('title')}
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed font-body">
          {t('description')}
        </p>

        <GlowButton href="#buy" className="mt-2">
          {t('button')}
        </GlowButton>

        <p className="text-slate-600 text-sm font-body mt-2">{t('note')}</p>
      </div>
    </section>
  );
}
