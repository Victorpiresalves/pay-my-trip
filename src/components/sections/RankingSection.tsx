import { getTranslations, getLocale } from 'next-intl/server';
import { rankingData } from '@/data/ranking';
import CountryRow from '@/components/ui/CountryRow';
import { createSupabaseClient } from '@/lib/supabase';
import type { Locale } from '@/types';

async function getGoals(): Promise<Record<string, number>> {
  try {
    const supabase = createSupabaseClient();
    const { data } = await supabase.from('countries').select('code, goals');
    if (!data) return {};
    return Object.fromEntries(data.map((r: { code: string; goals: number }) => [r.code, r.goals]));
  } catch {
    return {};
  }
}

export default async function RankingSection() {
  const t = await getTranslations('ranking');
  const locale = (await getLocale()) as Locale;

  const goalsMap = await getGoals();

  const entries = rankingData
    .map((entry) => ({ ...entry, goals: goalsMap[entry.countryCode] ?? 0 }))
    .sort((a, b) => b.goals - a.goals)
    .map((entry, i) => ({ ...entry, rank: i + 1 }));

  const maxGoals = entries[0]?.goals || 1;

  return (
    <section id="ranking" className="py-24">
      <div className="max-w-2xl mx-auto px-4">
        {/* Panel */}
        <div className="bg-white/6 border border-white/10 rounded-3xl p-4 sm:p-8 backdrop-blur-sm">
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
          <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4 mb-3">
            <span className="font-body text-xs text-slate-400 uppercase tracking-wider w-6 sm:w-8 text-center shrink-0">
              {t('rank')}
            </span>
            <span className="font-body text-xs text-slate-400 uppercase tracking-wider flex-1">
              {t('country')}
            </span>
            <span className="font-body text-xs text-slate-400 uppercase tracking-wider w-16 sm:w-auto text-right shrink-0">
              {t('goals')}
            </span>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-2">
            {entries.map((entry, index) => (
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
