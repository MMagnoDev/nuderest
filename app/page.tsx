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
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    // Pause video when scrolled out of viewport to save massive CPU/GPU resources
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
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
            preload="metadata"
            suppressHydrationWarning
            poster="/photos/hero.webp"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 35%',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          >
            <source src="/hero.webm" type="video/webm" />
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
                fontSize: 'clamp(40px, 5.2vw, 72px)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: '#EDE8DF',
                marginBottom: '22px'
              }}>
                Uma nova forma<br />
                de olhar para<br />
                os espaços de beleza.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={350}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(14px, 1.15vw, 16px)',
                lineHeight: 1.7,
                color: '#C8C2B7',
                maxWidth: '540px',
                marginBottom: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <p>
                  A NUDE REST nasceu de quem conhece esta realidade de perto e acredita que a peça onde tudo acontece pode oferecer mais.
                </p>
                <p style={{
                  fontFamily: 'var(--font-editorial)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(20px, 1.7vw, 25px)',
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                  color: '#EDE8DF'
                }}>
                  Conforto para quem recebe.<br />
                  Funcionalidade para quem trabalha.<br />
                  Presença para o espaço.
                </p>
              </div>
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

      {/* 03 — SIGNATURE MODELS SHOWCASE (STAGGERED EDITORIAL SHOWCASE) */}
      <section style={{
        padding: 'clamp(72px, 8vw, 120px) 0',
        backgroundColor: '#FAF9F6',
        borderBottom: '1px solid #ECE7DE'
      }}>
        <div className="editorial-container" style={{ maxWidth: '1360px' }}>
          
          {/* Row 1: Sculpt (Text on Left, Image on Right) */}
          <div className="model-showcase-row model-showcase-row-sculpt" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.1fr)',
            gap: 'clamp(36px, 6vw, 96px)',
            alignItems: 'center',
            marginBottom: 'clamp(64px, 8vw, 120px)'
          }}>
            {/* Text Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Reveal direction="up" delay={150}>
                <h2 style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(38px, 4.5vw, 62px)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#1C1A18',
                  marginBottom: '20px'
                }}>
                  SCULPT
                </h2>
              </Reveal>

              <Reveal direction="up" delay={250}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(14px, 1.05vw, 15.5px)',
                  lineHeight: 1.65,
                  color: '#55514B',
                  maxWidth: '360px',
                  marginBottom: '32px'
                }}>
                  Escultura e presença para ambientes de tratamento onde o conforto e a estética se encontram.
                </p>
              </Reveal>

              <Reveal direction="up" delay={350}>
                <Link
                  href="/maca-modelo-1"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#1C1A18',
                    textDecoration: 'none',
                    borderBottom: '1px solid #1C1A18',
                    paddingBottom: '3px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <span>VER MODELO</span>
                  <span>→</span>
                </Link>
              </Reveal>
            </div>

            {/* Image Column */}
            <Reveal direction="up" delay={200}>
              <Link href="/maca-modelo-1" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '520px',
                  aspectRatio: '2/3',
                  marginLeft: 'auto',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
                }}>
                  <Image
                    src="/photos/sculpt.webp"
                    alt="Sculpt — NUDE REST"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 900px) 100vw, 60vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 50%',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Row 2: Pure (Image on Left, Text on Right) */}
          <div className="model-showcase-row model-showcase-row-pure" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.1fr) minmax(280px, 1fr)',
            gap: 'clamp(36px, 6vw, 96px)',
            alignItems: 'center'
          }}>
            {/* Image Column */}
            <Reveal direction="up" delay={200}>
              <Link href="/maca-modelo-2" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="image-hover-zoom" style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '520px',
                  aspectRatio: '2/3',
                  marginRight: 'auto',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#EAE6DF',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
                }}>
                  <Image
                    src="/photos/pure.webp"
                    alt="Pure — NUDE REST"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 900px) 100vw, 60vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 50%',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>
              </Link>
            </Reveal>

            {/* Text Column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Reveal direction="up" delay={150}>
                <h2 style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(38px, 4.5vw, 62px)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#1C1A18',
                  marginBottom: '20px'
                }}>
                  PURE
                </h2>
              </Reveal>

              <Reveal direction="up" delay={250}>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(14px, 1.05vw, 15.5px)',
                  lineHeight: 1.65,
                  color: '#55514B',
                  maxWidth: '360px',
                  marginBottom: '32px'
                }}>
                  Conforto envolvente e linhas equilibradas para uma experiência de tratamento em pleno bem-estar.
                </p>
              </Reveal>

              <Reveal direction="up" delay={350}>
                <Link
                  href="/maca-modelo-2"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#1C1A18',
                    textDecoration: 'none',
                    borderBottom: '1px solid #1C1A18',
                    paddingBottom: '3px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <span>VER MODELO</span>
                  <span>→</span>
                </Link>
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* 03.5 — INFINITE EDITORIAL TICKER (LIGHT THEME) */}
      <section
        aria-label="Destaques do Atelier NUDE REST"
        style={{
          backgroundColor: '#FAF9F6',
          borderTop: '1px solid rgba(28, 26, 24, 0.07)',
          borderBottom: '1px solid rgba(28, 26, 24, 0.07)',
          padding: 'clamp(14px, 1.5vw, 20px) 0',
          overflow: 'hidden',
          width: '100%',
          userSelect: 'none'
        }}
      >
        <div className="infinite-ticker-wrapper">
          <div className="infinite-ticker-track">
            {/* Loop Group 1 */}
            <div className="infinite-ticker-group">
              <span className="ticker-item">Confeção Sob Medida para <em>Clínicas & Spas</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Design de Assinatura com a sua <em>Marca</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">NUDE REST <em>Atelier</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Atelier de Marquesas de <em>Alta Costura</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Ergonomia Ativa & <em>Conforto Absoluto</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Personalização Exclusiva de <em>Tecidos & Estrutura</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Estrutura Reforçada com <em>Capacidade até 150 kg</em></span>
              <span className="ticker-dot">·</span>
            </div>

            {/* Loop Group 2 (Duplicate for Seamless Infinite Scroll) */}
            <div className="infinite-ticker-group" aria-hidden="true">
              <span className="ticker-item">Confeção Sob Medida para <em>Clínicas & Spas</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Design de Assinatura com a sua <em>Marca</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">NUDE REST <em>Atelier</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Atelier de Marquesas de <em>Alta Costura</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Ergonomia Ativa & <em>Conforto Absoluto</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Personalização Exclusiva de <em>Tecidos & Estrutura</em></span>
              <span className="ticker-dot">·</span>
              <span className="ticker-item">Estrutura Reforçada com <em>Capacidade até 150 kg</em></span>
              <span className="ticker-dot">·</span>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — REFERENCE SECTION 2: DA EXPERIÊNCIA À VISÃO */}
      <section style={{
        padding: 'clamp(56px, 6vw, 96px) 0',
        backgroundColor: '#F7F4EE',
        overflow: 'hidden',
        width: '100%'
      }}>
        <div className="editorial-container" style={{ maxWidth: '1140px' }}>
          <div className="model-showcase-row model-showcase-row-sculpt" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            alignItems: 'center',
            gap: 'clamp(40px, 5.5vw, 84px)'
          }}>
            {/* Left Text Block */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Reveal direction="up" delay={150}>
                <h2 style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(34px, 3.8vw, 50px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: '#1C1A18',
                  marginBottom: '22px'
                }}>
                  Da experiência<br />
                  à visão.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={250}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(14px, 1.02vw, 15px)',
                  lineHeight: 1.7,
                  color: '#55514B',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '32px',
                  maxWidth: '410px'
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
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#1C1A18',
                    textDecoration: 'none',
                    borderBottom: '1px solid #1C1A18',
                    paddingBottom: '3px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <span>A NOSSA HISTÓRIA</span>
                  <span>→</span>
                </Link>
              </Reveal>
            </div>

            {/* Right Image Column (Exact 3:4 framing from screenshot) */}
            <Reveal direction="left" delay={200}>
              <div className="image-hover-zoom" style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                backgroundColor: '#EAE6DF'
              }}>
                <Image
                  src="/photos/sobre/experiencia.webp"
                  alt="NUDE REST — Da experiência à visão"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 16%',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 — REFERENCE SECTION 3: DO DESENHO AO DETALHE */}
      <section style={{
        padding: 'clamp(56px, 6vw, 96px) 0',
        backgroundColor: '#FAF9F6',
        overflow: 'hidden',
        width: '100%'
      }}>
        <div className="editorial-container" style={{ maxWidth: '1140px' }}>
          <div className="model-showcase-row model-showcase-row-pure" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            alignItems: 'center',
            gap: 'clamp(40px, 5.5vw, 84px)'
          }}>
            {/* Left Image Column (Exact 3:4 framing matching Section 04) */}
            <Reveal direction="right" delay={200}>
              <div className="image-hover-zoom" style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                backgroundColor: '#EAE6DF'
              }}>
                <Image
                  src="/photos/detalhe/detalhe.webp"
                  alt="NUDE REST — Do desenho ao detalhe"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 50%',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>
            </Reveal>

            {/* Right Text Block */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Reveal direction="up" delay={150}>
                <h2 style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(34px, 3.8vw, 50px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: '#1C1A18',
                  marginBottom: '22px'
                }}>
                  Do desenho<br />
                  ao detalhe.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={250}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(14px, 1.02vw, 15px)',
                  lineHeight: 1.7,
                  color: '#55514B',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '32px',
                  maxWidth: '410px'
                }}>
                  <p>
                    Cada NUDE REST começa numa ideia e ganha forma através de escolhas feitas com intenção: das proporções ao estofo, das espumas ao tecido e aos acabamentos.
                  </p>
                  <p>
                    São esses detalhes, muitos deles quase invisíveis, que definem a forma como a peça se sente, se integra no espaço e acompanha o dia a dia de quem a utiliza.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up" delay={350}>
                <Link
                  href="/atelie"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#1C1A18',
                    textDecoration: 'none',
                    borderBottom: '1px solid #1C1A18',
                    paddingBottom: '3px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <span>CONHECER O ATELIER</span>
                  <span>→</span>
                </Link>
              </Reveal>
            </div>
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
          <div className="editorial-values-grid">
            <Reveal direction="up" delay={100}>
              <div className="editorial-value-card">
                <span className="editorial-value-index">01</span>
                <h4 className="editorial-value-title">AUTENTICIDADE</h4>
                <p className="editorial-value-desc">Nascida da vivência prática no setor.</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="editorial-value-card">
                <span className="editorial-value-index">02</span>
                <h4 className="editorial-value-title">QUALIDADE ABSOLUTA</h4>
                <p className="editorial-value-desc">Matérias-primas nobres certificadas.</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div className="editorial-value-card">
                <span className="editorial-value-index">03</span>
                <h4 className="editorial-value-title">ESTÉTICA COM SENTIDO</h4>
                <p className="editorial-value-desc">Mobiliário escultural que eleva o espaço.</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <div className="editorial-value-card">
                <span className="editorial-value-index">04</span>
                <h4 className="editorial-value-title">BEM-ESTAR</h4>
                <p className="editorial-value-desc">Ergonomia ativa para quem cuida.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07.5 — MANIFESTO STATEMENT (LIGHT MODE) */}
      <section
        aria-label="Manifesto NUDE REST"
        style={{
          backgroundColor: '#FAF9F6',
          borderTop: '1px solid #ECE7DE',
          padding: 'clamp(84px, 10vw, 136px) 0',
          textAlign: 'center'
        }}
      >
        <div className="editorial-container" style={{ maxWidth: '980px', margin: '0 auto' }}>
          <Reveal direction="up" delay={150}>
            <blockquote
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(26px, 3.2vw, 42px)',
                fontWeight: 400,
                lineHeight: 1.35,
                letterSpacing: '-0.015em',
                color: '#1C1A18',
                margin: '0 auto',
                maxWidth: '860px'
              }}
            >
              “O luxo no atendimento começa onde a cliente repousa: na união perfeita entre ergonomia absoluta e design por medida.”
            </blockquote>
          </Reveal>

          <Reveal direction="up" delay={250}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8E867C',
                marginTop: '28px'
              }}
            >
              NUDE REST MANIFESTO
            </span>
          </Reveal>
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
