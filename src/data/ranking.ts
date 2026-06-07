import type { CountryEntry } from '@/types';

export const rankingData: Omit<CountryEntry, 'goals'>[] = [
  { rank: 1,  countryCode: 'BR', flag: '🇧🇷', countryName: { en: 'Brazil',         pt: 'Brasil',         es: 'Brasil',         fr: 'Brésil'     }, highlight: true },
  { rank: 2,  countryCode: 'AR', flag: '🇦🇷', countryName: { en: 'Argentina',      pt: 'Argentina',      es: 'Argentina',      fr: 'Argentine'  } },
  { rank: 3,  countryCode: 'FR', flag: '🇫🇷', countryName: { en: 'France',         pt: 'França',         es: 'Francia',        fr: 'France'     } },
  { rank: 4,  countryCode: 'DE', flag: '🇩🇪', countryName: { en: 'Germany',        pt: 'Alemanha',       es: 'Alemania',       fr: 'Allemagne'  } },
  { rank: 5,  countryCode: 'PT', flag: '🇵🇹', countryName: { en: 'Portugal',       pt: 'Portugal',       es: 'Portugal',       fr: 'Portugal'   } },
  { rank: 6,  countryCode: 'ES', flag: '🇪🇸', countryName: { en: 'Spain',          pt: 'Espanha',        es: 'España',         fr: 'Espagne'    } },
  { rank: 7,  countryCode: 'CA', flag: '🇨🇦', countryName: { en: 'Canada',         pt: 'Canadá',         es: 'Canadá',         fr: 'Canada'     } },
  { rank: 8,  countryCode: 'IT', flag: '🇮🇹', countryName: { en: 'Italy',          pt: 'Itália',         es: 'Italia',         fr: 'Italie'     } },
  { rank: 9,  countryCode: 'MX', flag: '🇲🇽', countryName: { en: 'Mexico',         pt: 'México',         es: 'México',         fr: 'Mexique'    } },
  { rank: 10, countryCode: 'US', flag: '🇺🇸', countryName: { en: 'United States',  pt: 'Estados Unidos', es: 'Estados Unidos', fr: 'États-Unis' } },
];
