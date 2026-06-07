'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

const locales = [
  { code: 'en', flagCode: 'us', label: 'EN' },
  { code: 'pt', flagCode: 'br', label: 'PT' },
  { code: 'es', flagCode: 'es', label: 'ES' },
  { code: 'fr', flagCode: 'fr', label: 'FR' },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(newLocale: string) {
    if (newLocale === locale) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/') || `/${newLocale}`;
    startTransition(() => {
      router.replace(newPath);
    });
  }

  return (
    <div className={`flex items-center gap-1 ${isPending ? 'opacity-50' : ''}`}>
      {locales.map(({ code, flagCode, label }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          className={`flex items-center gap-1.5 p-2 min-h-[40px] rounded text-xs font-body transition-all ${
            locale === code
              ? 'bg-pitch-light/20 text-pitch-light border border-pitch-light/40'
              : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
        >
          <Image
            src={`https://flagcdn.com/w40/${flagCode}.png`}
            alt={label}
            width={20}
            height={14}
            className="rounded-sm object-cover"
          />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
