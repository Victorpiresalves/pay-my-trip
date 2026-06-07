import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-canada-red border-b border-canada-red-dark">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/canada-flag.svg" alt="Canada Flag" width={36} height={18} className="rounded-sm shadow-sm" />
          <span className="font-display text-2xl text-white tracking-widest">
            {t('title')}
          </span>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
