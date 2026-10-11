'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Reveal } from './components/ScrollReveal';

export default function HomePage() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <main className="editorial-page" style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1C1A18' }}>
      
      {/* 01 — NAVBAR COM SOBREPOSIÇÃO 100% TRANSPARENTE NA HERO */}
      <Navbar transparent={true} />

      {/* 02 — HERO SECTION FULL SCREEN (100% DA TELA COM IMAGEM COBRINDO TUDO) */}
      <section className="editorial-hero" style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Full Bleed Background Video */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden'
        }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            suppressHydrationWarning
            poster="/photos/hero.png"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 35%'
            }}
          >
            <source src="/videohero.mp4" type="video/mp4" />
          </video>
          {/* Subtle Luminous Gradient Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(18, 17, 16, 0.75) 0%, rgba(18, 17, 16, 0.42) 45%, rgba(18, 17, 16, 0.05) 100%)'
          }} />
        </div>

        {/* Hero Content Overlay */}
        <div className="editorial-container" style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingTop: 'clamp(80px, 10vh, 120px)',
          paddingBottom: 'clamp(48px, 6vh, 80px)'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <Reveal direction="up" delay={150}>
              <h1 style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(42px, 5.2vw, 70px)',
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: '#EDE8DF',
                marginBottom: '26px'
              }}>
                Uma nova forma<br />
                de olhar para<br />
                os espaços de beleza.
              </h1>
            </Reveal>

            {/* Subtle Divider Line */}
            <Reveal direction="up" delay={250}>
              <div style={{
                width: '38px',
                height: '1px',
                backgroundColor: 'rgba(237, 232, 223, 0.5)',
                marginBottom: '26px'
              }} />
            </Reveal>

            <Reveal direction="up" delay={350}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.15vw, 16.5px)',
                lineHeight: 1.75,
                color: '#C8C2B7',
                maxWidth: '520px',
                marginBottom: '36px'
              }}>
                A NUDE REST nasceu da vivência prática no setor e da decisão de redesenhar a peça central do atendimento, integrando ergonomia ativa, conforto e identidade espacial.
              </p>
            </Reveal>

            <Reveal direction="up" delay={450}>
              <div>
                <Link
                  href="/sobre"
                  className="editorial-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '13px 32px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#EDE8DF',
                    border: '1px solid rgba(237, 232, 223, 0.6)',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: 'rgba(18, 17, 16, 0.4)',
                    backdropFilter: 'blur(8px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#EDE8DF';
                    e.currentTarget.style.backgroundColor = 'rgba(237, 232, 223, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(237, 232, 223, 0.6)';
                    e.currentTarget.style.backgroundColor = 'rgba(18, 17, 16, 0.4)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>A NOSSA HISTÓRIA</span>
                  <span>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — REFERENCE SECTION 1: ARCHIVE / COLLECTION GALLERY ROW (3 PROPORTIONAL CARDS) */}
      <section style={{
        padding: 'clamp(64px, 7vw, 100px) 0',
        backgroundColor: '#FAF9F6'
      }}>
        <div className="editorial-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 0.7fr) minmax(320px, 3.3fr)',
            gap: 'clamp(24px, 3vw, 48px)',
            alignItems: 'start'
          }}>
            {/* Left Column: Intro text */}
            <div>


              <Reveal direction="up" delay={200}>
                <h2 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(24px, 2.4vw, 32px)',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: '#1C1A18',
                  marginBottom: '14px'
                }}>
                  Peças de Assinatura
                </h2>
              </Reveal>

              <Reveal direction="up" delay={300}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  lineHeight: 1.65,
                  color: '#6E6860',
                  marginBottom: '24px',
                  maxWidth: '220px'
                }}>
                  Ergonomia precisa e acabamentos por medida para clínicas de alto padrão.
                </p>
              </Reveal>

              <Reveal direction="up" delay={400}>
                <Link
                  href="/colecoes"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#1C1A18',
                    textDecoration: 'none',
                    borderBottom: '1px solid #1C1A18',
                    paddingBottom: '2px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>VER TODAS</span>
                  <span>→</span>
                </Link>
              </Reveal>
            </div>

            {/* Right Column: 3 Portrait Image Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(16px, 2.5vw, 32px)'
            }}>
              {/* Card 1: Maca Sculpt */}
              <Reveal direction="up" delay={150}>
                <Link href="/maca-modelo-1" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                  <div className="image-hover-zoom" style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3/4.2',
                    backgroundColor: '#EAE6DF',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    marginBottom: '14px'
                  }}>
                    <Image
                      src="/photos/pecasdeassinatura/_C1M0021.jpg"
                      alt="Maca Sculpt Wave"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center 45%', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    color: '#1C1A18',
                    marginBottom: '4px'
                  }}>
                    Maca Sculpt Wave
                  </h3>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    color: '#8E867C'
                  }}>
                    Design em Arco Contínuo
                  </span>
                </Link>
              </Reveal>

              {/* Card 2: Maca Royale */}
              <Reveal direction="up" delay={250}>
                <Link href="/maca-modelo-2" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                  <div className="image-hover-zoom" style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3/4.2',
                    backgroundColor: '#EAE6DF',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    marginBottom: '14px'
                  }}>
                    <Image
                      src="/photos/pecasdeassinatura/_C1M0299.jpg"
                      alt="Maca Royale Anatómica"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center 50%', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    color: '#1C1A18',
                    marginBottom: '4px'
                  }}>
                    Maca Royale Anatómica
                  </h3>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    color: '#8E867C'
                  }}>
                    Capitoné & Pés em X
                  </span>
                </Link>
              </Reveal>

              {/* Card 3: Atelier Custom */}
              <Reveal direction="up" delay={350}>
                <Link href="/maca-sculpt-arc" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                  <div className="image-hover-zoom" style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3/4.2',
                    backgroundColor: '#EAE6DF',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    marginBottom: '14px'
                  }}>
                    <Image
                      src="/photos/pecasdeassinatura/_C1M0362.jpg"
                      alt="Personalização Sob Medida"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center 45%', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    color: '#1C1A18',
                    marginBottom: '4px'
                  }}>
                    Personalização Sob Medida
                  </h3>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    color: '#8E867C'
                  }}>
                    Tecidos, Cores & Gravação
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — REFERENCE SECTION 2: ASYMMETRIC RIGHT-BLEED HERO EDITORIAL SHOT */}
      <section style={{
        padding: 'clamp(56px, 6vw, 96px) 0',
        backgroundColor: '#FAF9F6',
        overflow: 'hidden',
        width: '100%'
      }}>
        <div className="editorial-bleed-right">
          {/* Left Text Block (1/3 da seção) - distribuído na altura da imagem */}
          {/* Left Text Block (1/3 da seção) - texto diretamente abaixo do título */}
          <div className="editorial-bleed-text-col">
            <Reveal direction="up" delay={150}>
              <h2 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#1C1A18',
                marginBottom: '20px'
              }}>
                Da experiência<br />
                à visão.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(14px, 1.05vw, 15.5px)',
                lineHeight: 1.75,
                color: '#55514B',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '28px'
              }}>
                <p>
                  A NUDE REST nasceu da prática diária no setor da estética e da perceção clara de que o conforto da marquesa dita a experiência de quem cuida e de quem é cuidada.
                </p>
                <p>
                  Criamos peças com presença arquitetónica que transformam os espaços em ambientes de puro acolhimento.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={350}>
              <Link
                href="/sobre"
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
                <span>A NOSSA HISTÓRIA</span>
                <span>→</span>
              </Link>
            </Reveal>
          </div>

          {/* Right Large Landscape Image (2/3 da seção, encostada na borda) */}
          <Reveal direction="right" delay={200}>
            <div className="image-hover-zoom editorial-bleed-right-image">
              <Image
                src="/photos/sobre/sobre.png"
                alt="NUDE REST - Da experiência à visão"
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

      {/* 05 — REFERENCE SECTION 3: ASYMMETRIC LEFT-BLEED EDITORIAL SHOT */}
      <section style={{
        padding: 'clamp(56px, 6vw, 96px) 0',
        backgroundColor: '#FAF9F6',
        overflow: 'hidden',
        width: '100%'
      }}>
        <div className="editorial-bleed-left">
          {/* Left Large Landscape Image (2/3 da seção, encostada na borda) */}
          <Reveal direction="left" delay={200}>
            <div className="image-hover-zoom editorial-bleed-left-image">
              <Image
                src="/photos/detalhe/detalhe.png"
                alt="NUDE REST - Do desenho ao detalhe"
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

          {/* Right Text Block (1/3 da seção) - texto diretamente abaixo do título */}
          <div className="editorial-bleed-text-col">
            <Reveal direction="up" delay={150}>
              <h2 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#1C1A18',
                marginBottom: '20px'
              }}>
                Do desenho<br />
                ao detalhe.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(14px, 1.05vw, 15.5px)',
                lineHeight: 1.75,
                color: '#55514B',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '28px'
              }}>
                <p>
                  Cada marquesa é concebida com um olhar atento à proporção, à costura e à matéria-prima selecionada com rigor cirúrgico.
                </p>
                <p>
                  A união entre espuma de alta densidade e revestimentos nobres garante uma postura equilibrada e durabilidade incomparável.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={350}>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 — PROCESS HIGHLIGHTS: 4 MINIMALIST REFINED TILES */}
      <section style={{
        padding: 'clamp(56px, 6vw, 84px) 0',
        backgroundColor: '#FAF9F6'
      }}>
        <div className="editorial-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(18px, 2.5vw, 28px)'
          }}>
            {/* Tile 1 */}
            <Reveal direction="up" delay={100}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(280px, 25vw, 380px)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  marginBottom: '16px'
                }}>
                  <Image src="/maca1/maca1_2.png" alt="Desenho Ergonómico Maca" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>Ergonomia Ativa</h4>
                <p style={{ fontSize: '12px', color: '#6E6860', lineHeight: 1.6 }}>Alívio lombar e suporte postural contínuo.</p>
              </div>
            </Reveal>

            {/* Tile 2 */}
            <Reveal direction="up" delay={200}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(280px, 25vw, 380px)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  marginBottom: '16px'
                }}>
                  <Image src="/maca1/maca1_4.png" alt="Matérias Nobres Bouclé" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>Tecidos & Espuma</h4>
                <p style={{ fontSize: '12px', color: '#6E6860', lineHeight: 1.6 }}>Espuma D33 certificada e tecidos nobres.</p>
              </div>
            </Reveal>

            {/* Tile 3 */}
            <Reveal direction="up" delay={300}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(280px, 25vw, 380px)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  marginBottom: '16px'
                }}>
                  <Image src="/maca2/maca2_3.png" alt="Confeção Artesanal de Canais" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>Mestres Artesãos</h4>
                <p style={{ fontSize: '12px', color: '#6E6860', lineHeight: 1.6 }}>Costura manual e precisão milimétrica.</p>
              </div>
            </Reveal>

            {/* Tile 4 */}
            <Reveal direction="up" delay={400}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(280px, 25vw, 380px)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  marginBottom: '16px'
                }}>
                  <Image src="/maca2/maca2_5.png" alt="Controlo e Acabamento da Maca" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>5 Anos de Garantia</h4>
                <p style={{ fontSize: '12px', color: '#6E6860', lineHeight: 1.6 }}>Rigor estético e envio assegurado.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 — VALUES STRIP (MINIMALIST 4 COLUMNS) */}
      <section style={{
        backgroundColor: '#F3F1EC',
        color: '#1C1A18',
        padding: 'clamp(48px, 6vw, 72px) 0'
      }}>
        <div className="editorial-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            <Reveal direction="up" delay={100}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1C1A18', marginBottom: '6px' }}>
                  AUTENTICIDADE
                </h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#6E6860' }}>
                  Nascida da vivência prática no setor.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1C1A18', marginBottom: '6px' }}>
                  QUALIDADE ABSOLUTA
                </h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#6E6860' }}>
                  Matérias-primas nobres certificadas.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1C1A18', marginBottom: '6px' }}>
                  ESTÉTICA COM SENTIDO
                </h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#6E6860' }}>
                  Mobiliário escultural que eleva o espaço.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1C1A18', marginBottom: '6px' }}>
                  BEM-ESTAR
                </h4>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#6E6860' }}>
                  Ergonomia ativa para quem cuida.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 08 — UNIFIED DARK LUXURY FOOTER */}
      <Footer />

      {/* Editorial CSS Grid and Layout Rules */}
      <style jsx global>{`
        .editorial-container {
          width: 100%;
          max-width: 1720px;
          margin: 0 auto;
          padding: 0 clamp(16px, 2vw, 32px);
        }

        .image-hover-zoom:hover img {
          transform: scale(1.03) !important;
        }

        .editorial-btn:active {
          transform: scale(0.98) !important;
        }

        @media (max-width: 860px) {
          .editorial-container {
            padding: 0 16px;
          }
        }
      `}</style>
    </main>
  );
}
