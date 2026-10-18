'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ScrollReveal';

export default function MacaRoyalePage() {
  const [activeImage, setActiveImage] = useState('/maca2/maca2_1.webp');

  const galleryImages = [
    '/maca2/maca2_1.webp',
    '/photos/pecasdeassinatura/_C1M0299.webp',
    '/maca2/maca2_2.webp',
    '/maca2/maca2_3.webp',
    '/maca2/maca2_4.webp',
    '/maca2/maca2_5.webp'
  ];

  return (
    <main style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1C1A18' }}>
      <Navbar />

      {/* 01 — PRODUCT HERO */}
      <section style={{
        padding: 'clamp(96px, 10vw, 130px) 0 clamp(64px, 8vw, 96px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div className="editorial-product-grid">
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
                PURE / EQUILÍBRIO &amp; PERSONALIZAÇÃO
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
                PURE
              </h1>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#1C1A18',
                  padding: '5px 12px',
                  backgroundColor: '#EAE6DF',
                  borderRadius: '2px'
                }}>
                  Feita por encomenda
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#8E867C' }}>
                  · Personalizável
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(14.5px, 1.05vw, 15.5px)',
                lineHeight: 1.75,
                color: '#55514B',
                marginBottom: '32px',
                maxWidth: '520px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <p>
                  A PURE é o segundo modelo da coleção NUDE REST. Uma peça de linhas mais depuradas, onde o estofo e a estrutura metálica trabalham em conjunto para criar uma presença elegante e versátil.
                </p>
                <p>
                  Cada PURE pode ser adaptada ao espaço através da escolha do tecido, da técnica de estofo e do acabamento dos pés metálicos.
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  color: '#1C1A18',
                  fontWeight: 500,
                  fontSize: 'clamp(15px, 1.1vw, 16.5px)',
                  lineHeight: 1.6
                }}>
                  Uma base. Diferentes formas de a tornar tua.
                </p>
              </div>
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
                  Diferentes técnicas de estofo
                </span>
                <span style={{ fontSize: '11.5px', padding: '6px 14px', backgroundColor: '#F2EFEB', borderRadius: '2px', color: '#3A3632' }}>
                  Estrutura metálica em X
                </span>
                <span style={{ fontSize: '11.5px', padding: '6px 14px', backgroundColor: '#F2EFEB', borderRadius: '2px', color: '#3A3632' }}>
                  Acabamentos metálicos à escolha
                </span>
                <span style={{ fontSize: '11.5px', padding: '6px 14px', backgroundColor: '#F2EFEB', borderRadius: '2px', color: '#3A3632' }}>
                  Produção por encomenda
                </span>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={400}>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/351910800000?text=Ol%C3%A1%2C%20gostaria%20de%20criar%20a%20minha%20PURE%20sob%20medida."
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <span>CRIAR A MINHA PURE</span>
                  <span>→</span>
                </a>

                <Link
                  href="/contato"
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
                </Link>
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
                  alt="Maca Pure em Alta Definição"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 55vw"
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
                  <Image src={img} alt={`Ângulo Pure ${idx + 1}`} fill sizes="120px" style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* 02 — POR DENTRO DA PURE */}
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
                OS DETALHES FAZEM A DIFERENÇA
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h2 style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(30px, 3.8vw, 46px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#1C1A18'
              }}>
                POR DENTRO DA PURE
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
                  <Image src="/maca2/maca2_2.webp" alt="Estrutura metálica em X" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#1C1A18', marginBottom: '8px' }}>
                  Estrutura metálica em X
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.65, color: '#55514B' }}>
                  A estrutura dá leveza visual à peça e pode ser personalizada em diferentes acabamentos metálicos, incluindo champagne escovado, entre outras tonalidades disponíveis.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca2/maca2_3.webp" alt="Estofo com diferentes expressões" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#1C1A18', marginBottom: '8px' }}>
                  Estofo com diferentes expressões
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.65, color: '#55514B' }}>
                  A PURE pode ser produzida com diferentes técnicas de estofo, permitindo alterar a linguagem da peça — de uma leitura mais limpa a um acabamento mais marcado e texturado.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={350}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca2/maca2_4.webp" alt="Tecidos escolhidos para o teu espaço" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#1C1A18', marginBottom: '8px' }}>
                  Tecidos escolhidos para o teu espaço
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.65, color: '#55514B' }}>
                  Seleciona o tecido, a textura e o tom que melhor se integram na identidade do teu espaço.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={450}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/photos/detalhe/detalhe.webp" alt="Feita para ser tua" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#1C1A18', marginBottom: '8px' }}>
                  Feita para ser tua
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.65, color: '#55514B' }}>
                  Cada combinação de estofo, tecido e acabamento metálico cria uma PURE diferente, perfeitamente alinhada com o teu espaço.
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
          <div className="editorial-specs-grid">
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
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(28px, 3.4vw, 42px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#1C1A18',
                marginBottom: '32px'
              }}>
                Tudo o que precisas de saber.
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
              <Image src="/photos/pecasdeassinatura/_C1M0299.webp" alt="Dimensões Maca Pure Anatómica" fill sizes="(max-width: 900px) 100vw, 800px" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Unified Luxury Footer */}
      <Footer />
    </main>
  );
}
