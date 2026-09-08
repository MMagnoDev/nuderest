import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { SiteFooter } from '../components/SiteFooter';
import { PRODUCTS_CATALOG } from '@/data/products';

export default function ColecoesPage() {
  return (
    <main className="page-container">
      <Navbar />

      {/* Page Title */}
      <section className="section-page-title border-b">
        <h1 className="page-title">
          <span className="quote-mark">‘</span>Nossas <span className="italic">Coleções de Assinatura</span><span className="quote-mark">’</span>
        </h1>
      </section>

      {/* Hero Intro */}
      <section className="section-hero border-b">
        <div className="hero-col-left border-r">
          <img
            src="/assets/maca1/maca1_angle2.png"
            alt="Coleções NUDE REST — Modelo 1 e Modelo 2"
          />
        </div>
        <div className="hero-col-right">
          <h2 className="hero-quote">
            Dois modelos,<br />
            infinitas opções de<br />
            personalização sob medida<br />
            <span className="line-italic">NUDE REST</span>
          </h2>
        </div>
      </section>

      {/* 2 Models Grid Comparison */}
      <section className="section-archive border-b">
        <div className="section-archive-header border-b">
          <h2 className="archive-header-title">Modelos <span className="italic">Disponíveis</span></h2>
          <span className="archive-header-index">Ateliê 2026</span>
        </div>

        <div className="section-archive-grid" style={{ minHeight: '520px' }}>
          {PRODUCTS_CATALOG.map((product, index) => (
            <div
              key={product.id}
              className={`archive-card ${index === 0 ? 'border-r' : ''}`}
              style={{ flex: 1, padding: '48px 40px' }}
            >
              <div className="archive-card-image" style={{ aspectRatio: '4/3', marginBottom: '28px' }}>
                <img src={product.image} alt={product.name} />
              </div>

              <span className="archive-card-meta">{product.category === 'anatomica' ? 'Linha Anatômica' : 'Linha Curva'}</span>
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '26px', fontWeight: 300, color: 'var(--text-main)', marginBottom: '12px' }}>
                {product.name}
              </h3>
              <p className="archive-card-desc" style={{ marginBottom: '24px', lineHeight: 1.7 }}>
                {product.description}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--nude-taupe)', textTransform: 'uppercase' }}>A partir de</div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '24px', fontWeight: 300, color: 'var(--text-main)' }}>
                    {(product.price * 0.95).toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €
                  </div>
                </div>

                <Link
                  href={`/${product.slug}`}
                  className="btn-primary-nude"
                  style={{
                    padding: '12px 24px',
                    fontSize: '11.5px'
                  }}
                >
                  Personalizar →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="section-quote-statement border-b">
        <blockquote className="statement-quote">
          “Cada peça que sai do nosso ateliê carrega a identidade única da profissional que a idealizou.”
        </blockquote>
        <span className="statement-author">— NUDE REST Coleções</span>
      </section>

      <SiteFooter />
    </main>
  );
}
