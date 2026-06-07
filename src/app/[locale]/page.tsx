import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ConceptSection from '@/components/sections/ConceptSection';
import RankingSection from '@/components/sections/RankingSection';
import PricingSection from '@/components/sections/PricingSection';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="py-8 bg-canada-red border-t border-canada-red-dark text-center">
      <div className="flex justify-center mb-3">
        <Image src="/canada-flag.svg" alt="Canada Flag" width={48} height={24} className="rounded-sm shadow-sm opacity-90" />
      </div>
      <p className="text-white text-sm font-body">{t('made_by')}</p>
      <p className="text-white/90 text-xs mt-1 font-body">{t('location')}</p>
    </footer>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  return (
    <main className="min-h-screen bg-navy-800">
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <RankingSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
