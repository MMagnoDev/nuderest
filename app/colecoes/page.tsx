'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ScrollReveal';

export default function ColecoesPage() {
  return (
    <main style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1C1A18' }}>
      <Navbar />

      {/* 01 — HERO HEADER */}
      <section style={{
        padding: 'clamp(96px, 11vw, 140px) 0 clamp(48px, 6vw, 72px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '780px' }}>
            <Reveal direction="up" delay={100}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8E867C',
                display: 'block',
                marginBottom: '18px'
              }}>
                COLEÇÕES EXCLUSIVAS
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h1 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(38px, 4.8vw, 64px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#1C1A18',
                marginBottom: '24px'
              }}>
                Duas silhuetas. O mesmo rigor.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.15vw, 17px)',
                lineHeight: 1.75,
                color: '#55514B',
                maxWidth: '640px'
              }}>
                Desenvolvidas para atender às exigências de clínicas de alto padrão, spas e consultórios de estética avançada. Escolha a curvatura contínua da Sculpt ou o estofamento acolchoado da Royale.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — MODELO 01: MACA SCULPT WAVE */}
      <section style={{
        padding: 'clamp(80px, 9vw, 130px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div className="editorial-split-grid">
            {/* Visual */}
            <Reveal direction="left" delay={150}>
              <div className="image-hover-zoom" style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(380px, 44vw, 560px)',
                borderRadius: '2px',
                overflow: 'hidden',
                backgroundColor: '#EAE6DF'
              }}>
                <Image
                  src="/maca1/maca1_1.webp"
                  alt="Maca Sculpt Wave em Bouclé Marfim"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </div>
            </Reveal>

            {/* Info */}
            <div>
              <Reveal direction="up" delay={200}>
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
                  MODELO 01 / ASSINATURA
                </span>
              </Reveal>

              <Reveal direction="up" delay={250}>
                <h2 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(32px, 3.8vw, 46px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#1C1A18',
                  marginBottom: '20px'
                }}>
                  Maca Sculpt Wave
                </h2>
              </Reveal>

              <Reveal direction="up" delay={300}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: '#55514B',
                  marginBottom: '28px'
                }}>
                  Linha em arco contínuo orgânico inspirada na escultura contemporânea. O seu design fluido elimina arestas duras e acolhe o corpo em relaxamento espontâneo, sendo a peça central de clínicas que valorizam a serenidade visual.
                </p>
              </Reveal>

              <Reveal direction="up" delay={350}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13.5px',
                  color: '#1C1A18',
                  marginBottom: '36px',
                  borderTop: '1px solid #ECE7DE',
                  paddingTop: '20px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#8E867C' }}>Estrutura</span>
                    <span>Arco contínuo sem emendas aparentes</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#8E867C' }}>Espuma</span>
                    <span>D33 Ultra Soft com memória postural</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#8E867C' }}>Dimensões</span>
                    <span>192 cm × 76 cm × 78 cm</span>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={400}>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link
                    href="/maca-modelo-1"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#EDE8DF',
                      backgroundColor: '#1C1A18',
                      padding: '14px 30px',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      transition: 'background-color 0.25s ease'
                    }}
                  >
                    EXPLORAR SCULPT →
                  </Link>
                  <Link
                    href="/maca-sculpt-arc"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#1C1A18',
                      border: '1px solid #1C1A18',
                      padding: '14px 26px',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      transition: 'background-color 0.25s ease'
                    }}
                  >
                    PERSONALIZAR
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — MODELO 02: MACA ROYALE ANATÓMICA */}
      <section style={{
        padding: 'clamp(80px, 9vw, 130px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div className="editorial-split-grid">
            {/* Info */}
            <div>
              <Reveal direction="up" delay={200}>
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
                  MODELO 02 / SOFISTICAÇÃO
                </span>
              </Reveal>

              <Reveal direction="up" delay={250}>
                <h2 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(32px, 3.8vw, 46px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#1C1A18',
                  marginBottom: '20px'
                }}>
                  Maca Royale Anatómica
                </h2>
              </Reveal>

              <Reveal direction="up" delay={300}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: '#55514B',
                  marginBottom: '28px'
                }}>
                  Estofamento com gomos anatómicos pespontados e suporte lombar ativo. Desenhada para procedimentos de longa duração (lash design, micropigmentação e estética facial), oferecendo ergonomia impecável e pés metálicos em acabamento nobre.
                </p>
              </Reveal>

              <Reveal direction="up" delay={350}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13.5px',
                  color: '#1C1A18',
                  marginBottom: '36px',
                  borderTop: '1px solid #ECE7DE',
                  paddingTop: '20px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#8E867C' }}>Estofo</span>
                    <span>Canais anatómicos acolchoados em alta densidade</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#8E867C' }}>Base</span>
                    <span>Pés em X em aço Champagne escovado</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#8E867C' }}>Dimensões</span>
                    <span>188 cm × 74 cm × 76 cm</span>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={400}>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link
                    href="/maca-modelo-2"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#EDE8DF',
                      backgroundColor: '#1C1A18',
                      padding: '14px 30px',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      transition: 'background-color 0.25s ease'
                    }}
                  >
                    EXPLORAR ROYALE →
                  </Link>
                  <Link
                    href="/maca-sculpt-arc"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#1C1A18',
                      border: '1px solid #1C1A18',
                      padding: '14px 26px',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      transition: 'background-color 0.25s ease'
                    }}
                  >
                    PERSONALIZAR
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Visual */}
            <Reveal direction="right" delay={150}>
              <div className="image-hover-zoom" style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(380px, 44vw, 560px)',
                borderRadius: '2px',
                overflow: 'hidden',
                backgroundColor: '#EAE6DF'
              }}>
                <Image
                  src="/photos/pecasdeassinatura/_C1M0299.webp"
                  alt="Maca Royale Anatómica"
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 50%', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — SIDE-BY-SIDE COMPARATIVE SECTION */}
      <section style={{
        padding: 'clamp(96px, 11vw, 140px) 0'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '640px', margin: '0 auto clamp(56px, 7vw, 80px) auto', textAlign: 'center' }}>
            <Reveal direction="up" delay={100}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8E867C',
                display: 'block',
                marginBottom: '16px'
              }}>
                GUIA DE ESCOLHA
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h2 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(32px, 3.8vw, 46px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#1C1A18',
                marginBottom: '18px'
              }}>
                Sculpt Wave ou Royale Anatómica?
              </h2>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#55514B'
              }}>
                Ambos os modelos partilham o mesmo nível de exigência na escolha de materiais e acabamento. Compare as características principais para o perfil da sua clínica.
              </p>
            </Reveal>
          </div>

          {/* Cards Comparison Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)'
          }}>
            {/* Sculpt Card */}
            <Reveal direction="up" delay={200}>
              <div style={{
                borderTop: '1px solid #ECE7DE',
                paddingTop: '32px'
              }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF', marginBottom: '24px' }}>
                  <Image src="/maca1/maca1_1.webp" alt="Maca Sculpt Wave" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 500, color: '#1C1A18', marginBottom: '8px' }}>
                  Maca Sculpt Wave
                </h3>
                <p style={{ fontSize: '13.5px', color: '#6E6860', marginBottom: '24px', lineHeight: 1.6 }}>
                  Ideal para clínicas de estética facial avançada, dermatologia, spas e ambientes com foco em design escultural minimalista.
                </p>
                <div style={{ borderTop: '1px solid #ECE7DE', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#3A3632' }}>
                  <div>✓ Apoio lombar contínuo em curva fluida</div>
                  <div>✓ Silhueta orgânica sem emendas</div>
                  <div>✓ Opção de base cilíndrica ou madeira</div>
                </div>
              </div>
            </Reveal>

            {/* Royale Card */}
            <Reveal direction="up" delay={300}>
              <div style={{
                borderTop: '1px solid #ECE7DE',
                paddingTop: '32px'
              }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF', marginBottom: '24px' }}>
                  <Image src="/maca2/maca2_1.webp" alt="Maca Royale Anatómica" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 500, color: '#1C1A18', marginBottom: '8px' }}>
                  Maca Royale Anatómica
                </h3>
                <p style={{ fontSize: '13.5px', color: '#6E6860', marginBottom: '24px', lineHeight: 1.6 }}>
                  Ideal para procedimentos minuciosos de longa duração, lash designers e micropigmentação com máximo aconchego.
                </p>
                <div style={{ borderTop: '1px solid #ECE7DE', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#3A3632' }}>
                  <div>✓ Estofo capitoné com gomos anatómicos</div>
                  <div>✓ Pés em X em aço dourado Champagne</div>
                  <div>✓ Almofada cervical com encaixe integrada</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Unified Luxury Footer */}
      <Footer />
    </main>
  );
}
