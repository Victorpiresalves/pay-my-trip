import { useTranslations, useLocale } from 'next-intl';
import { rankingData } from '@/data/ranking';
import CountryRow from '@/components/ui/CountryRow';
import type { Locale } from '@/types';

export default function RankingSection() {
  const t = useTranslations('ranking');
  const locale = useLocale() as Locale;
  const maxGoals = rankingData[0]?.goals ?? 1;

  return (
    <section id="ranking" className="py-24">
      <div className="max-w-2xl mx-auto px-4">
        {/* Panel */}
        <div className="bg-white/6 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px flex-1 bg-yellow-400/20" />
              <p className="font-display text-sm tracking-[0.3em] text-pitch-light uppercase">
                {t('subtitle')}
              </p>
              <div className="h-px flex-1 bg-yellow-400/20" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white">
              🏆 {t('title')}
            </h2>
          </div>

          {/* Column headers */}
          <div className="flex items-center gap-4 px-4 mb-3">
            <span className="font-body text-xs text-slate-400 uppercase tracking-wider w-8 text-center shrink-0">
              {t('rank')}
            </span>
            <span className="font-body text-xs text-slate-400 uppercase tracking-wider w-44 shrink-0">
              {t('country')}
            </span>
            <span className="font-body text-xs text-slate-400 uppercase tracking-wider flex-1 text-right">
              {t('goals')}
            </span>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-2">
            {rankingData.map((entry, index) => (
              <CountryRow
                key={entry.countryCode}
                entry={entry}
                locale={locale}
                maxGoals={maxGoals}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
