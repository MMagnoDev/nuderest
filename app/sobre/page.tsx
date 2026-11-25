'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ScrollReveal';

export default function SobrePage() {
  return (
    <main style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1C1A18' }}>
      <Navbar />

      {/* 01 — HERO & HISTÓRIA */}
      <section style={{
        padding: 'clamp(96px, 11vw, 150px) 0 clamp(64px, 8vw, 100px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container" style={{ maxWidth: '1280px' }}>
          <div className="sobre-hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
            alignItems: 'center',
            gap: 'clamp(40px, 6vw, 84px)'
          }}>
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
                  marginBottom: '20px'
                }}>
                  A NOSSA HISTÓRIA
                </span>
              </Reveal>

              <Reveal direction="up" delay={200}>
                <h1 style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(34px, 4.2vw, 56px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#1C1A18',
                  marginBottom: '32px'
                }}>
                  Nasceu da prática.<br />
                  Cresceu da vontade de fazer diferente.
                </h1>
              </Reveal>

              <Reveal direction="up" delay={300}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(15px, 1.1vw, 16.5px)',
                  lineHeight: 1.85,
                  color: '#55514B',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}>
                  <p>
                    A NUDE REST nasceu da minha experiência enquanto lash designer e de anos passados a trabalhar diariamente com clientes, espaços e marquesas.
                  </p>
                  <p>
                    Ao longo desse percurso, fui percebendo que cuidamos de quase tudo: da técnica, da luz, da decoração, da experiência, dos pequenos detalhes.
                  </p>
                  <p>
                    Mas havia uma peça essencial que muitas vezes ficava para segundo plano: a marquesa.
                  </p>
                  <p>
                    É nela que a cliente passa grande parte do atendimento. É à volta dela que a profissional trabalha durante horas. E, ainda assim, nem sempre é pensada com o cuidado que esse papel merece.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={400}>
                <div style={{
                  marginTop: '36px',
                  paddingLeft: '24px',
                  borderLeft: '2px solid #1C1A18'
                }}>
                  <p style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: 'clamp(18px, 1.6vw, 24px)',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                    color: '#1C1A18'
                  }}>
                    Foi daí que nasceu a vontade de fazer diferente.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Image a-marca.webp */}
            <Reveal direction="left" delay={250}>
              <div
                className="image-hover-zoom"
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  boxShadow: '0 20px 48px -12px rgba(28, 26, 24, 0.08)'
                }}
              >
                <Image
                  src="/photos/sobre/a-marca.webp"
                  alt="NUDE REST — A Nossa História"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 45vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 — ORIGEM & PROPÓSITO */}
      <section style={{
        padding: 'clamp(80px, 9vw, 130px) 0',
        backgroundColor: '#F3F1EC',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
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
                ORIGEM & PROPÓSITO
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h2 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                color: '#1C1A18',
                marginBottom: '28px'
              }}>
                Uma marca criada por uma profissional, para profissionais.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.15vw, 17px)',
                lineHeight: 1.85,
                color: '#55514B',
                display: 'flex',
                flexDirection: 'column',
                gap: '22px'
              }}>
                <p>
                  A NUDE REST nasce de uma necessidade real: repensar a peça que está no centro de tantos atendimentos.
                </p>
                <p>
                  Quisemos criar marquesas que não fossem apenas bonitas, mas que fizessem sentido para os dois lados da experiência: para quem se deita e para quem trabalha.
                </p>
                <p>
                  Conforto, proporção, materiais, ergonomia e presença no espaço passaram a ser pensados como partes da mesma peça.
                </p>
                <p style={{
                  color: '#1C1A18',
                  fontWeight: 500,
                  fontSize: 'clamp(16px, 1.2vw, 18px)'
                }}>
                  Porque uma marquesa não deve simplesmente ocupar um lugar. Deve fazer parte da forma como esse lugar é vivido.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — OS NOSSOS PILARES (DARK LUXURY EDITORIAL) */}
      <section style={{
        backgroundColor: '#161514',
        color: '#EDE8DF',
        padding: 'clamp(96px, 11vw, 150px) 0'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '820px', margin: '0 auto clamp(56px, 7vw, 84px) auto' }}>
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
                CRIADA POR UMA PROFISSIONAL. PENSADA PARA PROFISSIONAIS.
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h2 style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#EDE8DF',
                marginBottom: '16px'
              }}>
                OS NOSSOS PILARES
              </h2>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.1vw, 17px)',
                color: '#A39D93',
                lineHeight: 1.6
              }}>
                Pensada para quem recebe. Criada por quem trabalha.
              </p>
            </Reveal>
          </div>

          {/* 4 Pillars Grid (2x2) */}
          <div style={{
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(36px, 5vw, 64px)'
          }}>
            {/* 01 / CONFORTO */}
            <Reveal direction="up" delay={150}>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '28px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#A39D93',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  01 / CONFORTO
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#EDE8DF',
                  marginBottom: '14px'
                }}>
                  Conforto que se sente.
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14.5px',
                  lineHeight: 1.75,
                  color: '#A39D93'
                }}>
                  A forma, as curvas e as diferentes camadas de espuma são pensadas para que a cliente encontre uma posição confortável e consiga permanecer nela ao longo do atendimento.
                </p>
              </div>
            </Reveal>

            {/* 02 / PROFISSIONAL */}
            <Reveal direction="up" delay={250}>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '28px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#A39D93',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  02 / PROFISSIONAL
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#EDE8DF',
                  marginBottom: '14px'
                }}>
                  Pensada também para quem trabalha.
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14.5px',
                  lineHeight: 1.75,
                  color: '#A39D93'
                }}>
                  A NUDE REST nasce da experiência diária de uma profissional. Por isso, cada decisão de desenho tem em conta os movimentos, a proximidade e as horas que passamos à volta da marquesa.
                </p>
              </div>
            </Reveal>

            {/* 03 / MATERIAIS */}
            <Reveal direction="up" delay={350}>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '28px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#A39D93',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  03 / MATERIAIS
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#EDE8DF',
                  marginBottom: '14px'
                }}>
                  O que está por dentro também importa.
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14.5px',
                  lineHeight: 1.75,
                  color: '#A39D93'
                }}>
                  Da estrutura às espumas e aos revestimentos, selecionamos materiais pela sua qualidade, toque, resistência e capacidade de acompanhar uma utilização profissional diária.
                </p>
              </div>
            </Reveal>

            {/* 04 / IDENTIDADE */}
            <Reveal direction="up" delay={450}>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '28px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#A39D93',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  04 / IDENTIDADE
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#EDE8DF',
                  marginBottom: '14px'
                }}>
                  Uma peça que faz parte do espaço.
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14.5px',
                  lineHeight: 1.75,
                  color: '#A39D93'
                }}>
                  Não queríamos criar uma marquesa que simplesmente se coloca numa sala. Cada modelo é desenhado para ter presença e integrar-se naturalmente na identidade do espaço.
                </p>
              </div>
            </Reveal>
          </div>

          {/* CTA at Bottom of Pillars */}
          <div style={{ marginTop: 'clamp(56px, 7vw, 84px)', textAlign: 'center' }}>
            <Reveal direction="up" delay={300}>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/colecoes"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#161514',
                    backgroundColor: '#EDE8DF',
                    padding: '14px 32px',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'opacity 0.25s ease'
                  }}
                >
                  <span>CONHECER AS COLEÇÕES</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/contato"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#EDE8DF',
                    border: '1px solid rgba(237, 232, 223, 0.4)',
                    padding: '14px 32px',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'border-color 0.25s ease'
                  }}
                >
                  <span>CONTACTAR</span>
                </Link>
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
