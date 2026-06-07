import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ConceptSection from '@/components/sections/ConceptSection';
import RankingSection from '@/components/sections/RankingSection';
import PricingSection from '@/components/sections/PricingSection';
import { useTranslations } from 'next-intl';

function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="py-8 bg-canada-red border-t border-canada-red-dark text-center">
      <p className="text-white/80 text-sm font-body">{t('made_by')}</p>
      <p className="text-white/60 text-xs mt-1 font-body">{t('location')}</p>
    </footer>
  );
}

export default function HomePage() {
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
