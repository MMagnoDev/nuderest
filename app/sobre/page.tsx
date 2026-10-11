'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ScrollReveal';

export default function SobrePage() {
  return (
    <main style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1C1A18' }}>
      <Navbar />

      {/* 01 — EDITORIAL HERO HEADER */}
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
                A NOSSA HISTÓRIA
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
                A redefinição da experiência do cuidado.
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
                A NUDE REST nasceu da vivência diária no setor da estética avançada e da convicção de que a peça central de atendimento merecia uma abordagem escultórica, ergonómica e arquitetónica.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — ASYMMETRIC STORY SPLIT (FOTO OFICIAL SOBRE + NARRATIVA) */}
      <section style={{
        padding: 'clamp(80px, 9vw, 120px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.25fr) minmax(300px, 1fr)',
            gap: 'clamp(48px, 7vw, 96px)',
            alignItems: 'flex-start'
          }}>
            {/* Left Photo: Curated Brand Asset */}
            <Reveal direction="left" delay={150}>
              <div className="image-hover-zoom" style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(380px, 42vw, 560px)',
                borderRadius: '2px',
                overflow: 'hidden',
                backgroundColor: '#EAE6DF'
              }}>
                <Image
                  src="/photos/sobre/sobre2.png"
                  alt="Atelier e Filosofia NUDE REST"
                  fill
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 55%',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>
            </Reveal>

            {/* Right Text Column */}
            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '8px' }}>
              <Reveal direction="up" delay={200}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#8E867C',
                  display: 'block',
                  marginBottom: '16px'
                }}>
                  ORIGEM & PROPÓSITO
                </span>
              </Reveal>

              <Reveal direction="up" delay={250}>
                <h2 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(28px, 3.2vw, 40px)',
                  fontWeight: 400,
                  lineHeight: 1.18,
                  letterSpacing: '-0.025em',
                  color: '#1C1A18',
                  marginBottom: '24px'
                }}>
                  Do desconforto da prática ao desenho da peça perfeita.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={300}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(14.5px, 1.05vw, 15.5px)',
                  lineHeight: 1.8,
                  color: '#55514B',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  marginBottom: '36px'
                }}>
                  <p>
                    Durante anos de prática com tratamentos estéticos, percebemos uma contradição comum: clínicas de arquitetura deslumbrante equipadas com macas genéricas, ruidosas ou desconfortáveis, que comprometiam tanto o relaxamento da cliente quanto a saúde postural da profissional.
                  </p>
                  <p>
                    A NUDE REST foi criada para eliminar essa distância. Cada modelo é desenhado a partir da biomecânica do corpo humano, eliminando pontos de pressão na coluna lombar e nas pernas, ao mesmo tempo em que eleva visualmente a estética do espaço.
                  </p>
                  <p>
                    Trabalhamos com tapeceiros artesanais e engenharia estrutural de topo para criar peças que duram décadas, vestidas com tecidos bouclé e revestimentos selecionados sob medida.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={350}>
                <div style={{
                  borderLeft: '2px solid #1C1A18',
                  paddingLeft: '20px',
                  marginBottom: '36px'
                }}>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                    color: '#1C1A18'
                  }}>
                    &ldquo;Acreditamos que aquilo que nos rodeia faz parte ativa do acolhimento. A beleza de uma clínica começa no respeito pelo corpo.&rdquo;
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={400}>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link
                    href="/atelie"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#1C1A18',
                      textDecoration: 'none',
                      borderBottom: '1px solid #1C1A18',
                      paddingBottom: '3px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <span>CONHECER O ATELIER</span>
                    <span>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — MANIFESTO SECTION (DARK EDITORIAL ACCENT) */}
      <section style={{
        backgroundColor: '#161514',
        color: '#EDE8DF',
        padding: 'clamp(96px, 11vw, 140px) 0'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(56px, 7vw, 84px)' }}>
            <Reveal direction="up" delay={100}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#A39D93',
                display: 'block',
                marginBottom: '16px'
              }}>
                OS NOSSOS PILARES
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h2 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(32px, 3.8vw, 48px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#EDE8DF'
              }}>
                Rigor em cada detalhe, do núcleo à costura.
              </h2>
            </Reveal>
          </div>

          {/* 3 Editorial Value Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)'
          }}>
            <Reveal direction="up" delay={150}>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '28px' }}>
                <span style={{ fontSize: '11px', color: '#A39D93', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                  01 / POSTURA
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 500, color: '#EDE8DF', marginBottom: '14px' }}>
                  Ergonomia Ativa
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: '#A39D93' }}>
                  Curvaturas calculadas para acomodar a anatomia em posição de relaxamento muscular espontâneo, evitando dormência e garantindo horas de atendimento com serenidade total.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '28px' }}>
                <span style={{ fontSize: '11px', color: '#A39D93', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                  02 / MATÉRIA
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 500, color: '#EDE8DF', marginBottom: '14px' }}>
                  Matéria-Prima Cirúrgica
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: '#A39D93' }}>
                  Espuma D33 de alta densidade e retorno elástico, estruturada em madeira nobre naval e vestida com tecidos nobres impermeabilizados e resistentes a assepsia frequente.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={350}>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '28px' }}>
                <span style={{ fontSize: '11px', color: '#A39D93', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                  03 / IDENTIDADE
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 500, color: '#EDE8DF', marginBottom: '14px' }}>
                  Presença Arquitetónica
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: '#A39D93' }}>
                  Cada peça funciona como uma escultura que valoriza o projeto de interiores da clínica. Cores, bordados e acabamentos afinados ao milímetro de acordo com o seu espaço.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — GALLERY ACCENT (AS MACAS EM HARMONIA) */}
      <section style={{
        padding: 'clamp(80px, 9vw, 120px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(24px, 3.5vw, 48px)',
            alignItems: 'center'
          }}>
            <Reveal direction="up" delay={150}>
              <div className="image-hover-zoom" style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(320px, 36vw, 460px)',
                borderRadius: '2px',
                overflow: 'hidden',
                backgroundColor: '#EAE6DF'
              }}>
                <Image
                  src="/maca1/maca1_1.png"
                  alt="Maca Sculpt em Ambiente"
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </div>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div className="image-hover-zoom" style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(320px, 36vw, 460px)',
                borderRadius: '2px',
                overflow: 'hidden',
                backgroundColor: '#EAE6DF'
              }}>
                <Image
                  src="/maca2/maca2_1.png"
                  alt="Maca Royale em Ambiente"
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </div>
            </Reveal>
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Reveal direction="up" delay={300}>
              <Link
                href="/colecoes"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#1C1A18',
                  textDecoration: 'none',
                  borderBottom: '1.5px solid #1C1A18',
                  paddingBottom: '3px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>EXPLORAR TODAS AS COLEÇÕES</span>
                <span>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Unified Luxury Footer */}
      <Footer />
    </main>
  );
}
