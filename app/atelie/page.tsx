'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ScrollReveal';

export default function AteliePage() {
  return (
    <main style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1C1A18' }}>
      <Navbar />

      {/* 01 — HERO HEADER */}
      <section style={{
        padding: 'clamp(96px, 11vw, 140px) 0 clamp(48px, 6vw, 72px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '820px' }}>
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
                ATELIER DE MANUFATURA
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
                A arte da proporção e do detalhe milimétrico.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.15vw, 17px)',
                lineHeight: 1.75,
                color: '#55514B',
                maxWidth: '660px'
              }}>
                Não produzimos em massa. Cada peça é confeccionada unitariamente por mestres tapeceiros, combinando espumas ortopédicas de alta resiliência e acabamentos sob medida.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — HERO BANNER WITH DETALHE PHOTO */}
      <section style={{
        padding: 'clamp(48px, 6vw, 80px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <Reveal direction="up" delay={150}>
            <div className="image-hover-zoom" style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(360px, 42vw, 560px)',
              borderRadius: '2px',
              overflow: 'hidden',
              backgroundColor: '#EAE6DF'
            }}>
              <Image
                src="/photos/detalhe/detalhe.webp"
                alt="Processo Criativo e Manufatura no Atelier NUDE REST"
                fill
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — 4 STAGES OF CRAFTSMANSHIP (EDITORIAL FLOW) */}
      <section style={{
        padding: 'clamp(80px, 9vw, 130px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '600px', marginBottom: 'clamp(48px, 6vw, 72px)' }}>
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
                MÉTODO DE PRODUÇÃO
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
                Quatro etapas rigorosas de confeção artesanal.
              </h2>
            </Reveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(32px, 4vw, 56px)'
          }}>
            {/* Step 1 */}
            <Reveal direction="up" delay={150}>
              <div>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  marginBottom: '20px'
                }}>
                  <Image
                    src="/maca1/maca1_2.webp"
                    alt="Desenho Anatómico Maca 1"
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#8E867C', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  01 / ESTRUTURA & CURVATURA
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 500, color: '#1C1A18', marginBottom: '10px' }}>
                  Chassi em Madeira Naval
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', lineHeight: 1.7, color: '#55514B' }}>
                  Modelado com curvatura contínua que distribui uniformemente o peso corporal e anula oscilações, garantindo solidez estrutural e alívio das articulações da cliente.
                </p>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal direction="up" delay={250}>
              <div>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  marginBottom: '20px'
                }}>
                  <Image
                    src="/maca1/maca1_4.webp"
                    alt="Textura Bouclé e Espuma Ortopédica"
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#8E867C', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  02 / ALCOCHOAMENTO
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 500, color: '#1C1A18', marginBottom: '10px' }}>
                  Espuma D33 Multi-Densidade
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', lineHeight: 1.7, color: '#55514B' }}>
                  Camadas de alta densidade combinadas com memória elástica suave. Mantém a postura neutra mesmo em procedimentos de 3 horas sem deformação com o uso.
                </p>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal direction="up" delay={350}>
              <div>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  marginBottom: '20px'
                }}>
                  <Image
                    src="/maca2/maca2_3.webp"
                    alt="Tapeçaria e Canais em Alta Definição"
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#8E867C', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  03 / TAPEÇARIA
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 500, color: '#1C1A18', marginBottom: '10px' }}>
                  Costura Manual & Pesponto
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', lineHeight: 1.7, color: '#55514B' }}>
                  Alinhamento milimétrico em gomos capitoné ou bouclé liso. Fios técnicos reforçados que resistem a produtos de assepsia e atrito constante.
                </p>
              </div>
            </Reveal>

            {/* Step 4 */}
            <Reveal direction="up" delay={450}>
              <div>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  marginBottom: '20px'
                }}>
                  <Image
                    src="/maca2/maca2_5.webp"
                    alt="Rigor de Acabamento e Testes Finais"
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#8E867C', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  04 / RIGOR
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 500, color: '#1C1A18', marginBottom: '10px' }}>
                  Controlo & Entrega Assegurada
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', lineHeight: 1.7, color: '#55514B' }}>
                  Cada marquesa é montada, inspecionada sob luz de ateliê e protegida com embalagem estruturada reforçada para entrega direta no seu espaço.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — BESPOKE CUSTOMIZATION CALLOUT */}
      <section style={{
        padding: 'clamp(96px, 10vw, 130px) 0'
      }}>
        <div className="editorial-container">
          <div style={{
            backgroundColor: '#F2EFEB',
            padding: 'clamp(48px, 6vw, 84px) clamp(32px, 5vw, 72px)',
            borderRadius: '2px',
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(280px, 1fr)',
            gap: 'clamp(36px, 5vw, 64px)',
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
                PERSONALIZAÇÃO EXCLUSIVA
              </span>
              <h2 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(28px, 3.4vw, 42px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#1C1A18',
                marginBottom: '20px'
              }}>
                A sua marca bordada com distinção.
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14.5px',
                lineHeight: 1.75,
                color: '#55514B',
                marginBottom: '28px'
              }}>
                Adapte as cores de revestimento ao projeto de arquitetura do seu espaço, adicione o logótipo bordado em fios nobres e escolha bases cilíndricas ou douradas.
              </p>
              <Link
                href="/maca-sculpt-arc"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#EDE8DF',
                  backgroundColor: '#1C1A18',
                  padding: '14px 32px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.3s ease'
                }}
              >
                <span>CONFIGURAR A SUA PEÇA</span>
                <span>→</span>
              </Link>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontFamily: 'var(--font-sans)',
              fontSize: '13.5px',
              color: '#3A3632',
              borderLeft: '1px solid #DCD5C9',
              paddingLeft: 'clamp(20px, 3vw, 36px)'
            }}>
              <div>
                <strong style={{ display: 'block', color: '#1C1A18', marginBottom: '4px' }}>Bordado Personalizado</strong>
                Monogramas e logótipos vetorizados aplicados com fios acetinados nobres.
              </div>
              <div>
                <strong style={{ display: 'block', color: '#1C1A18', marginBottom: '4px' }}>Paleta de Cores Signature</strong>
                Tons de Alabaster, Linen Nude, Taupe Greige e Mocha Noir.
              </div>
              <div>
                <strong style={{ display: 'block', color: '#1C1A18', marginBottom: '4px' }}>Acessórios Anatómicos</strong>
                Almofada cervical com encaixe magnético e capas em cristal náutico flexível.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Luxury Footer */}
      <Footer />
    </main>
  );
}
