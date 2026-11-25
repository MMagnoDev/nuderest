import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import { SmoothScroll } from './components/SmoothScroll';
import { ScrollRevealInit } from './components/ScrollReveal';
import { CookieConsent } from './components/CookieConsent';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#151413',
};

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nuderest.com.br'),
  title: 'NUDE REST | Macas de Alto Padrão Feitas por Medida | Estética, Lash & Spas',
  description: 'Atelier de macas ergonómicas personalizadas por medida com gravação da sua marca. Espuma D33 multi-densidade, revestimento nobre hospitalar e 5 anos de garantia estrutural.',
  keywords: [
    'macas personalizadas',
    'maca para estética',
    'maca lash designer',
    'maca ergonomica',
    'maca clinica de luxo',
    'nude rest macas'
  ],
  openGraph: {
    title: 'NUDE REST | Macas de Alto Padrão por Medida',
    description: 'Eleve o posicionamento e a autoridade do seu espaço com macas ergonómicas feitas por medida.',
    url: 'https://nuderest.com.br',
    siteName: 'NUDE REST',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 600,
        alt: 'NUDE REST Macas de Luxo'
      }
    ],
    locale: 'pt_PT',
    type: 'website'
  },
  icons: {
    icon: '/logotipo.webp'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#151413" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SmoothScroll />
        <ScrollRevealInit />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
