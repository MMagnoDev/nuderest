'use client';

import React from 'react';
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
                ATELIER
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
                marginBottom: '28px'
              }}>
                Onde cada peça ganha forma.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(15px, 1.15vw, 17px)',
                  lineHeight: 1.75,
                  color: '#55514B'
                }}>
                  A NUDE REST não nasce numa linha de produção.<br />
                  Cada peça é construída individualmente, passando por diferentes mãos, materiais e etapas até chegar ao resultado final.
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(15px, 1.15vw, 17px)',
                  lineHeight: 1.75,
                  color: '#55514B'
                }}>
                  Da estrutura ao estofo, do tecido à costura, cada escolha é feita para criar uma peça confortável, consistente e pensada para durar no dia a dia profissional.
                </p>
              </div>
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
                O NOSSO PROCESSO
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
                Feita por etapas. Pensada como um todo.
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
                    alt="01 / Estrutura NUDE REST"
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#8E867C', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  01 / ESTRUTURA
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 500, color: '#1C1A18', marginBottom: '10px' }}>
                  A forma começa por dentro.
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: '#55514B' }}>
                  É aqui que se define a base de cada modelo, respeitando as proporções, as curvas e a estabilidade necessárias para dar forma à peça.
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
                    alt="02 / Conforto NUDE REST"
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#8E867C', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  02 / CONFORTO
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 500, color: '#1C1A18', marginBottom: '10px' }}>
                  Camadas escolhidas para serem sentidas.
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: '#55514B' }}>
                  As espumas são combinadas de forma a criar equilíbrio entre firmeza, conforto e adaptação ao corpo ao longo do atendimento.
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
                    alt="03 / Estofo NUDE REST"
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#8E867C', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  03 / ESTOFO
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 500, color: '#1C1A18', marginBottom: '10px' }}>
                  É aqui que a peça ganha carácter.
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: '#55514B' }}>
                  Cada curva, costura e acabamento é trabalhado com atenção para respeitar o desenho e dar à peça a expressão final que a distingue.
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
                    alt="04 / Acabamento NUDE REST"
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#8E867C', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  04 / ACABAMENTO
                </span>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 500, color: '#1C1A18', marginBottom: '10px' }}>
                  Antes de sair do atelier, tudo é revisto.
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: '#55514B' }}>
                  A peça é verificada nos detalhes finais antes de seguir para o espaço onde vai ser vivida todos os dias.
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
                PERSONALIZAÇÃO
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
                A tua NUDE REST, à tua maneira.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: '#55514B'
                }}>
                  Escolhe entre diferentes tecidos, tonalidades, acabamentos e, nos modelos aplicáveis, opções de estrutura metálica.
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: '#55514B'
                }}>
                  Algumas peças podem ainda receber o logótipo do teu espaço, criando uma presença ainda mais pessoal e integrada no ambiente.
                </p>
              </div>
              <a
                href="https://wa.me/351910800000?text=Ol%C3%A1%2C%20gostaria%20de%20personalizar%20a%20minha%20pe%C3%A7a%20NUDE%20REST."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#EDE8DF',
                  backgroundColor: '#1C1A18',
                  padding: '16px 36px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.3s ease'
                }}
              >
                <span>PERSONALIZAR A MINHA PEÇA</span>
                <span>→</span>
              </a>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              fontFamily: 'var(--font-sans)',
              fontSize: '13.5px',
              color: '#3A3632',
              borderLeft: '1px solid #DCD5C9',
              paddingLeft: 'clamp(20px, 3vw, 36px)'
            }}>
              <div>
                <strong style={{ display: 'block', color: '#1C1A18', marginBottom: '4px', fontSize: '14.5px', fontWeight: 500 }}>
                  Tecidos & Tonalidades
                </strong>
                Diferentes texturas e opções de cor pensadas para harmonizar com a decoração e atmosfera do teu espaço.
              </div>
              <div>
                <strong style={{ display: 'block', color: '#1C1A18', marginBottom: '4px', fontSize: '14.5px', fontWeight: 500 }}>
                  Estruturas & Acabamentos
                </strong>
                Opções de bases e estruturas metálicas em diferentes acabamentos nos modelos aplicáveis.
              </div>
              <div>
                <strong style={{ display: 'block', color: '#1C1A18', marginBottom: '4px', fontSize: '14.5px', fontWeight: 500 }}>
                  Identidade do Teu Espaço
                </strong>
                Integração do teu logótipo para uma presença ainda mais pessoal e integrada no ambiente.
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
