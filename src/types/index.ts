import type { routing } from '@/i18n/routing';

export type Locale = (typeof routing.locales)[number];

export interface CountryEntry {
  rank: number;
  countryCode: string;
  flag: string;
  countryName: Record<Locale, string>;
  goals: number;
  highlight?: boolean;
}
