import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollRevealInit } from './components/ScrollReveal';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#151413',
};

const serifFont = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
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
  title: 'NUDE REST | Macas de Alto Padrão Feitas por Medida — Estética, Lash & Spas',
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
    <html lang="pt-PT" className={`${serifFont.variable} ${jakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#151413" />
      </head>
      <body>
        <SmoothScroll />
        <ScrollRevealInit />
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
