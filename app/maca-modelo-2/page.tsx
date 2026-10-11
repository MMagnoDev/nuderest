'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ScrollReveal';

export default function MacaRoyalePage() {
  const [activeImage, setActiveImage] = useState('/maca2/maca2_1.png');

  const galleryImages = [
    '/maca2/maca2_1.png',
    '/maca2/maca2_2.png',
    '/maca2/maca2_3.png',
    '/maca2/maca2_4.png',
    '/maca2/maca2_5.png'
  ];

  return (
    <main style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1C1A18' }}>
      <Navbar />

      {/* 01 — PRODUCT HERO */}
      <section style={{
        padding: 'clamp(96px, 10vw, 130px) 0 clamp(64px, 8vw, 96px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1.25fr)',
          gap: 'clamp(48px, 6vw, 84px)',
          alignItems: 'center'
        }}>
          {/* Left Info Column */}
          <div>
            <Reveal direction="up" delay={100}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8E867C',
                display: 'block',
                marginBottom: '14px'
              }}>
                ROYALE ANATÓMICA / LUXO & CONFORTO
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h1 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(38px, 4.5vw, 56px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#1C1A18',
                marginBottom: '20px'
              }}>
                Maca Royale
              </h1>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 500, color: '#1C1A18', letterSpacing: '-0.02em' }}>
                  1.090 €
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#8E867C' }}>
                  IVA incluído · Confeção sob medida
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(14.5px, 1.05vw, 15.5px)',
                lineHeight: 1.75,
                color: '#55514B',
                marginBottom: '32px',
                maxWidth: '480px'
              }}>
                A escolha preferida de Lash Designers e especialistas em micropigmentação. O seu estofamento em gomos anatómicos acolhe a cliente sem compressão lombar, aliado a pés metálicos elegantes em acabamento Champagne.
              </p>
            </Reveal>

            {/* Quick Specs Pill Row */}
            <Reveal direction="up" delay={350}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '36px'
              }}>
                <span style={{ fontSize: '11.5px', padding: '6px 14px', backgroundColor: '#F2EFEB', borderRadius: '2px', color: '#3A3632' }}>
                  Canais capitoné anatómicos
                </span>
                <span style={{ fontSize: '11.5px', padding: '6px 14px', backgroundColor: '#F2EFEB', borderRadius: '2px', color: '#3A3632' }}>
                  Pés em X Champagne escovado
                </span>
                <span style={{ fontSize: '11.5px', padding: '6px 14px', backgroundColor: '#F2EFEB', borderRadius: '2px', color: '#3A3632' }}>
                  Almofada cervical com encaixe
                </span>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={400}>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link
                  href="/maca-sculpt-arc"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 32px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#EDE8DF',
                    backgroundColor: '#1C1A18',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'background-color 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#38342F')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1C1A18')}
                >
                  <span>PERSONALIZAR ACABAMENTOS</span>
                  <span>→</span>
                </Link>

                <a
                  href="https://wa.me/351910800000?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20proposta%20para%20a%20Maca%20Royale."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '14px 26px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#1C1A18',
                    border: '1px solid #1C1A18',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'background-color 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(28, 26, 24, 0.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  FALAR COM CONCIERGE
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Main Gallery Viewer */}
          <div>
            <Reveal direction="right" delay={200}>
              <div className="image-hover-zoom" style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(360px, 42vw, 520px)',
                backgroundColor: '#EAE6DF',
                borderRadius: '2px',
                overflow: 'hidden',
                marginBottom: '16px'
              }}>
                <Image
                  src={activeImage}
                  alt="Maca Royale em Alta Definição"
                  fill
                  priority
                  style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </div>
            </Reveal>

            {/* Thumbnails */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  style={{
                    position: 'relative',
                    height: '76px',
                    backgroundColor: '#EAE6DF',
                    border: activeImage === img ? '2px solid #1C1A18' : '1px solid #ECE7DE',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <Image src={img} alt={`Ângulo Royale ${idx + 1}`} fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — DETALHES DE ENGENHARIA & CONFORTO */}
      <section style={{
        padding: 'clamp(80px, 9vw, 120px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(48px, 6vw, 72px)' }}>
            <Reveal direction="up" delay={100}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8E867C',
                display: 'block',
                marginBottom: '14px'
              }}>
                RIGOR CONSTRUTIVO
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h2 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(30px, 3.6vw, 44px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#1C1A18'
              }}>
                Criada para procedimentos de máxima precisão.
              </h2>
            </Reveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(20px, 3vw, 36px)'
          }}>
            <Reveal direction="up" delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca2/maca2_3.png" alt="Gomos anatómicos acolchoados" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>
                  Gomos Capitoné em Alta Densidade
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', lineHeight: 1.6, color: '#55514B' }}>
                  Acolchoamento com canais longitudinais que aliviam a pressão do cóccix e das pernas durante sessões longas.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca2/maca2_2.png" alt="Pés em X metálicos" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>
                  Pés em X Dourado Champagne
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', lineHeight: 1.6, color: '#55514B' }}>
                  Estrutura em aço com pintura eletrostática fosca de alta resistência ao desgaste e estabilidade rígida.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={350}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca2/maca2_4.png" alt="Acabamento e Suporte Cervical" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>
                  Almofada Cervical Ergonómica
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', lineHeight: 1.6, color: '#55514B' }}>
                  Apoio de cabeça milimétrico com canal anatómico integrado para serenidade e estabilidade total.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={450}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/photos/detalhe/detalhe.png" alt="Acabamentos por medida" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>
                  Acabamentos por Medida
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', lineHeight: 1.6, color: '#55514B' }}>
                  Tecidos nobres, cores personalizadas e gravação bordada do logótipo da sua clínica.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — ESPECIFICAÇÕES TÉCNICAS (MINIMALIST CLEAN GRID) */}
      <section style={{
        padding: 'clamp(80px, 9vw, 130px) 0'
      }}>
        <div className="editorial-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1fr) minmax(320px, 1.25fr)',
            gap: 'clamp(48px, 6vw, 84px)',
            alignItems: 'center'
          }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8E867C',
                display: 'block',
                marginBottom: '14px'
              }}>
                FICHA TÉCNICA
              </span>
              <h2 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(28px, 3.4vw, 42px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#1C1A18',
                marginBottom: '32px'
              }}>
                Dimensões e proporções milimétricas.
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                borderTop: '1px solid #ECE7DE',
                paddingTop: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#8E867C' }}>Comprimento Total</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>188 cm</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#8E867C' }}>Largura de Conforto</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>74 cm</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#8E867C' }}>Altura de Trabalho</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>76 cm (ergonomia para sentar/atender)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#8E867C' }}>Capacidade Estrutural</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>Até 250 kg estáticos</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#8E867C' }}>Prazo de Confeção</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>7 a 10 dias úteis</span>
                </div>
              </div>
            </div>

            <div style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(320px, 38vw, 460px)',
              backgroundColor: 'transparent'
            }}>
              <Image src="/maca2/maca2_1.png" alt="Dimensões Maca Royale Anatómica" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Unified Luxury Footer */}
      <Footer />
    </main>
  );
}
