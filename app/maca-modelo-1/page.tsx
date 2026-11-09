'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ScrollReveal';

export default function MacaSculptPage() {
  const [activeImage, setActiveImage] = useState('/photos/sculpt.webp');

  const galleryImages = [
    '/photos/sculpt.webp',
    '/maca1/maca1_2.webp',
    '/maca1/maca1_3.webp'
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
                SCULPT / DESIGN DE ASSINATURA
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
                SCULPT
              </h1>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 500, color: '#1C1A18', letterSpacing: '-0.02em' }}>
                  750€
                </span>
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
                <p style={{
                  fontWeight: 500,
                  color: '#1C1A18',
                  fontSize: 'clamp(15px, 1.1vw, 16.5px)'
                }}>
                  Uma peça que muda a forma como se sente e como se vê um espaço.
                </p>
                <p>
                  A SCULPT foi desenhada para receber o corpo de forma natural, criando uma sensação de conforto desde o momento em que a cliente se deita. As suas curvas contínuas acompanham a silhueta enquanto dão à peça a presença escultórica que a distingue.
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  color: '#1C1A18',
                  fontWeight: 500,
                  lineHeight: 1.6
                }}>
                  Conforto pensado ao detalhe.<br />
                  Design que não passa despercebido.
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
                  Curvas pensadas para o corpo
                </span>
                <span style={{ fontSize: '11.5px', padding: '6px 14px', backgroundColor: '#F2EFEB', borderRadius: '2px', color: '#3A3632' }}>
                  Espuma de alta densidade
                </span>
                <span style={{ fontSize: '11.5px', padding: '6px 14px', backgroundColor: '#F2EFEB', borderRadius: '2px', color: '#3A3632' }}>
                  Produção artesanal
                </span>
                <span style={{ fontSize: '11.5px', padding: '6px 14px', backgroundColor: '#F2EFEB', borderRadius: '2px', color: '#3A3632' }}>
                  Personalização à escolha
                </span>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={400}>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/351910800000?text=Ol%C3%A1%2C%20gostaria%20de%20criar%20a%20minha%20SCULPT%20sob%20medida."
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
                  <span>CRIAR A MINHA SCULPT</span>
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
                  FALE CONNOSCO
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
                  alt="Maca Sculpt em Alta Definição"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 55vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </div>
            </Reveal>

            {/* Thumbnails */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  style={{
                    position: 'relative',
                    height: '84px',
                    backgroundColor: '#EAE6DF',
                    border: activeImage === img ? '2px solid #1C1A18' : '1px solid #ECE7DE',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <Image src={img} alt={`Ângulo Sculpt ${idx + 1}`} fill sizes="120px" style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* 02 — POR DENTRO DA SCULPT */}
      <section style={{
        padding: 'clamp(80px, 9vw, 120px) 0',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container">
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(48px, 6vw, 72px)' }}>
            <Reveal direction="up" delay={200}>
              <h2 style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(30px, 3.8vw, 46px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#1C1A18'
              }}>
                POR DENTRO DA SCULPT
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
                  <Image src="/maca1/maca1_3.webp" alt="Curvas que acompanham o corpo" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#1C1A18', marginBottom: '8px' }}>
                  Curvas que acompanham o corpo
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.65, color: '#55514B' }}>
                  A forma da SCULPT foi pensada para que o corpo encontre naturalmente uma posição confortável e permaneça nela ao longo do atendimento.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca1/maca1_2.webp" alt="Estabilidade que se sente" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#1C1A18', marginBottom: '8px' }}>
                  Estabilidade que se sente
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.65, color: '#55514B' }}>
                  A estrutura foi desenvolvida para transmitir segurança e firmeza, sem retirar leveza à forma da peça.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={350}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca1/maca1_4.webp" alt="Texturas que convidam ao toque" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#1C1A18', marginBottom: '8px' }}>
                  Texturas que convidam ao toque
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.65, color: '#55514B' }}>
                  Tecidos escolhidos não apenas pela estética, mas também pelo conforto, resistência e facilidade de manutenção no dia a dia profissional.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={450}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/photos/sculpt.webp" alt="Feita para pertencer ao teu espaço" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 600, color: '#1C1A18', marginBottom: '8px' }}>
                  Feita para pertencer ao teu espaço
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.65, color: '#55514B' }}>
                  Escolhe o revestimento, o tom e os acabamentos para criar uma SCULPT alinhada com a identidade do teu espaço.
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
                gap: '14px',
                fontFamily: 'var(--font-sans)',
                fontSize: '14.5px',
                borderTop: '1px solid #ECE7DE',
                paddingTop: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #F0ECE5' }}>
                  <span style={{ color: '#8E867C' }}>Comprimento</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>190 cm</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #F0ECE5' }}>
                  <span style={{ color: '#8E867C' }}>Largura</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>62 cm</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #F0ECE5' }}>
                  <span style={{ color: '#8E867C' }}>Altura</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>80 cm*</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #F0ECE5' }}>
                  <span style={{ color: '#8E867C' }}>Capacidade estrutural</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>150 kg</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #F0ECE5' }}>
                  <span style={{ color: '#8E867C' }}>Prazo de confeção</span>
                  <span style={{ fontWeight: 500, color: '#1C1A18' }}>15 a 20 dias</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #F0ECE5' }}>
                  <span style={{ color: '#8E867C' }}>Valor</span>
                  <span style={{ fontWeight: 600, color: '#1C1A18' }}>750€</span>
                </div>
              </div>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12.5px',
                color: '#8E867C',
                marginTop: '16px',
                lineHeight: 1.6
              }}>
                *Altura pensada para facilitar o trabalho da profissional durante o atendimento.
              </p>

              <div style={{
                marginTop: '32px',
                padding: '22px 26px',
                backgroundColor: '#F3F1EC',
                borderRadius: '2px',
                borderLeft: '2px solid #1C1A18'
              }}>
                <p style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(15px, 1.15vw, 17px)',
                  fontStyle: 'italic',
                  lineHeight: 1.65,
                  color: '#1C1A18',
                  margin: 0
                }}>
                  &ldquo;Uma marquesa pode ser confortável. Pode ser funcional. Pode ser bonita. Nós não vimos razão para ter de escolher.&rdquo;
                </p>
              </div>
            </div>

            <div style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(320px, 38vw, 460px)',
              backgroundColor: 'transparent'
            }}>
              <Image src="/photos/sculpt.webp" alt="Dimensões SCULPT" fill sizes="(max-width: 900px) 100vw, 800px" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Unified Luxury Footer */}
      <Footer />
    </main>
  );
}
