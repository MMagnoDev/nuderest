import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollRevealInit } from './components/ScrollReveal';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuderest.com.br'),
  title: 'NUDE REST | Macas de Alto Padrão Feitas por Medida — Estética, Lash & Spas',
  description: 'Atelier de macas ergonómicas personalizadas por medida com gravação da sua marca. Espuma D33 multi-densidade, revestimento nobre hospitalar, 5 anos de garantia estrutural e 5% de desconto.',
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
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'NUDE REST Macas de Luxo'
      }
    ],
    locale: 'pt_PT',
    type: 'website'
  },
  icons: {
    icon: '/logotipo.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
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
