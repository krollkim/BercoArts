import type { Metadata } from 'next';
import { Bebas_Neue } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bercoart.netlify.app'),
  title: 'Michal Berco | Artist',
  description: 'Michal Berco - Professional graffiti and street artist. Transforming walls into stories, streets into galleries. View portfolio of urban art, murals, and exhibitions.',
  keywords: ['graffiti artist', 'street art', 'urban art', 'murals', 'portfolio', 'contemporary art', 'spray paint art'],
  authors: [{ name: 'Michal Berco' }],
  openGraph: {
    type: 'website',
    title: 'Michal Berco | Graffiti & Street Art Portfolio',
    description: 'Professional graffiti and street artist. Transforming walls into stories, streets into galleries.',
    images: ['/images/profile/berkoProfile.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michal Berco | Graffiti & Street Art Portfolio',
    description: 'Professional graffiti and street artist. Transforming walls into stories, streets into galleries.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={bebasNeue.variable}>
      <body>{children}</body>
    </html>
  );
}
