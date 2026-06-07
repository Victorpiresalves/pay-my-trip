import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './[locale]/globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HELP MY DREAM | Brazilians at the 2026 World Cup',
  description:
    '1 Polaroid = 1 Goal for your team. Help Brazilians living in Canada be at the 2026 World Cup games.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
