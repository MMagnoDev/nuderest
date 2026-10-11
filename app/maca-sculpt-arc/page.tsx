'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/ScrollReveal';
import { useCart } from '../context/CartContext';

export default function CustomizerPage() {
  const [selectedModel, setSelectedModel] = useState<'sculpt' | 'royale'>('sculpt');
  const [fabricType, setFabricType] = useState<'tecido' | 'pele'>('tecido');
  const [selectedColor, setSelectedColor] = useState({ name: 'Alabaster Nude', hex: '#EDE8DF' });
  const [selectedBase, setSelectedBase] = useState('Base Cilíndrica Revestida Nude');
  const [embroidery, setEmbroidery] = useState(false);
  const [embroideryText, setEmbroideryText] = useState('');
  const [protectiveCover, setProtectiveCover] = useState(false);
  const [pillowSet, setPillowSet] = useState(false);
  const [selectedAngle, setSelectedAngle] = useState(0);

  const { addToCart } = useCart();

  const colors = [
    { name: 'Alabaster Nude', hex: '#EDE8DF' },
    { name: 'Linen Nude', hex: '#D9C8B4' },
    { name: 'Taupe Greige', hex: '#9C8F80' },
    { name: 'Mocha Expresso', hex: '#4A3B32' }
  ];

  const sculptImages = [
    '/maca1/maca1_1.png',
    '/maca1/maca1_2.png',
    '/maca1/maca1_3.png',
    '/maca1/maca1_4.png'
  ];

  const royaleImages = [
    '/maca2/maca2_1.png',
    '/maca2/maca2_2.png',
    '/maca2/maca2_3.png',
    '/maca2/maca2_4.png',
    '/maca2/maca2_5.png'
  ];

  const currentGallery = selectedModel === 'sculpt' ? sculptImages : royaleImages;
  const currentImage = currentGallery[selectedAngle] || currentGallery[0];

  const generateWhatsAppMessage = () => {
    const modelName = selectedModel === 'sculpt' ? 'Maca Sculpt (Sculpt Wave)' : 'Maca Royale (Royale Anatómica)';
    const extras = [];
    if (embroidery) extras.push(`Bordado com Logótipo: "${embroideryText || 'A definir'}"`);
    if (protectiveCover) extras.push('Capa Cristal Náutico');
    if (pillowSet) extras.push('Manta & Almofada Cervical');
    const extrasText = extras.length > 0 ? extras.join(', ') : 'Nenhum';

    const text = `Olá, configurei a minha marquesa no site NUDE REST:
- Modelo: ${modelName}
- Revestimento: ${fabricType === 'tecido' ? 'Tecido Premium' : 'Pele Sintética'} (${selectedColor.name})
- Base: ${selectedBase}
- Acabamentos Extra: ${extrasText}

Gostaria de receber uma proposta personalizada e prazo de entrega.`;

    return `https://wa.me/351910800000?text=${encodeURIComponent(text)}`;
  };

  const handleAddToCart = () => {
    const addonsList: { id: string; name: string; price: number }[] = [];
    if (embroidery) addonsList.push({ id: 'embroidery', name: 'Bordado Personalizado', price: 90 });
    if (protectiveCover) addonsList.push({ id: 'cover', name: 'Capa Cristal Náutico', price: 75 });
    if (pillowSet) addonsList.push({ id: 'pillows', name: 'Manta & Almofada Cervical', price: 65 });

    addToCart({
      productId: selectedModel === 'sculpt' ? 'sculpt-wave' : 'royale-anatomica',
      name: selectedModel === 'sculpt' ? 'Maca Sculpt Wave' : 'Maca Royale Anatómica',
      slug: selectedModel === 'sculpt' ? 'maca-modelo-1' : 'maca-modelo-2',
      image: currentImage,
      unitPrice: selectedModel === 'sculpt' ? 1480 : 1690,
      color: { id: selectedColor.name.toLowerCase().replace(/\s+/g, '-'), name: selectedColor.name, hex: selectedColor.hex },
      base: { id: selectedBase.toLowerCase().replace(/\s+/g, '-'), name: selectedBase, extraPrice: 0 },
      embroideryText: embroidery ? (embroideryText || 'Logótipo Personalizado') : undefined,
      addons: addonsList
    });
  };

  return (
    <main style={{ backgroundColor: '#FAF9F6', minHeight: '100vh', color: '#1C1A18' }}>
      <Navbar />

      {/* Main Dual Configurator Layout */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 0', borderBottom: '1px solid #ECE7DE' }}>
        <div className="editorial-container" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1.25fr) minmax(320px, 1fr)',
          gap: 'clamp(48px, 6vw, 84px)',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Visualizer & Details */}
          <div>
            <Link
              href="/colecoes"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#8E867C',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '16px'
              }}
            >
              ← VOLTAR ÀS COLEÇÕES
            </Link>

            <h1 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(34px, 4vw, 50px)',
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              color: '#1C1A18',
              marginBottom: '6px'
            }}>
              {selectedModel === 'sculpt' ? 'Maca Sculpt' : 'Maca Royale'}
            </h1>
            
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8E867C',
              display: 'block',
              marginBottom: '16px'
            }}>
              {selectedModel === 'sculpt' ? 'SCULPT WAVE' : 'ROYALE ANATÓMICA'}
            </span>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13.5px',
              lineHeight: 1.7,
              color: '#524E48',
              marginBottom: '24px',
              maxWidth: '520px'
            }}>
              Design em arco escultural contínuo que combina ergonomia e funcionalidade, proporcionando um relaxamento profundo e uma experiência única para a sua cliente.
            </p>

            {/* Main Image Stage */}
            <div className="image-hover-zoom" style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(320px, 38vw, 460px)',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E0D8',
              borderRadius: '2px',
              overflow: 'hidden',
              marginBottom: '16px'
            }}>
              <Image
                src={currentImage}
                alt="Pré-visualização da Maca Personalizada"
                fill
                priority
                style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
              />

              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(28, 26, 24, 0.75)',
                backdropFilter: 'blur(8px)',
                color: '#EDE8DF',
                padding: '6px 14px',
                borderRadius: '2px',
                fontSize: '10px',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase'
              }}>
                {selectedColor.name}
              </div>
            </div>

            {/* Angle Selectors */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '36px' }}>
              {currentGallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedAngle(idx)}
                  style={{
                    position: 'relative',
                    height: '76px',
                    backgroundColor: '#FFFFFF',
                    border: selectedAngle === idx ? '2px solid #1C1A18' : '1px solid #E5E0D8',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <Image src={img} alt={`Ângulo ${idx + 1}`} fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Feature Badges Strip */}
            <div style={{
              borderTop: '1px solid #E5E0D8',
              paddingTop: '24px'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#1C1A18',
                marginBottom: '16px'
              }}>
                Garantias do Atelier
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '10px',
                textAlign: 'center'
              }}>
                <div style={{ backgroundColor: '#F2EFEB', padding: '12px 8px', borderRadius: '2px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', color: '#1C1A18' }}>Alívio Postural</div>
                  <div style={{ fontSize: '9.5px', color: '#8E867C' }}>Ativo</div>
                </div>
                <div style={{ backgroundColor: '#F2EFEB', padding: '12px 8px', borderRadius: '2px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', color: '#1C1A18' }}>Design em Arco</div>
                  <div style={{ fontSize: '9.5px', color: '#8E867C' }}>Escultural</div>
                </div>
                <div style={{ backgroundColor: '#F2EFEB', padding: '12px 8px', borderRadius: '2px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', color: '#1C1A18' }}>Espuma D33</div>
                  <div style={{ fontSize: '9.5px', color: '#8E867C' }}>Ultra Soft</div>
                </div>
                <div style={{ backgroundColor: '#F2EFEB', padding: '12px 8px', borderRadius: '2px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', color: '#1C1A18' }}>5 Anos</div>
                  <div style={{ fontSize: '9.5px', color: '#8E867C' }}>Garantia</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 5-Step Customization Panel */}
          <div style={{
            backgroundColor: '#F7F5F0',
            border: '1px solid #ECE7DE',
            padding: 'clamp(28px, 4vw, 44px)',
            borderRadius: '2px'
          }}>
            
            {/* Step 1: Modelo */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1C1A18' }}>
                  01. MODELO
                </span>
                <span style={{ fontSize: '11px', color: '#8E867C' }}>1/5</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setSelectedModel('sculpt')}
                  style={{
                    padding: '12px',
                    border: selectedModel === 'sculpt' ? '2px solid #1C1A18' : '1px solid #E5E0D8',
                    backgroundColor: selectedModel === 'sculpt' ? '#F8F6F1' : '#FFFFFF',
                    borderRadius: '2px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#1C1A18' }}>Maca Sculpt</div>
                  <div style={{ fontSize: '10px', color: '#8E867C' }}>Sculpt Wave</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedModel('royale')}
                  style={{
                    padding: '12px',
                    border: selectedModel === 'royale' ? '2px solid #1C1A18' : '1px solid #E5E0D8',
                    backgroundColor: selectedModel === 'royale' ? '#F8F6F1' : '#FFFFFF',
                    borderRadius: '2px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#1C1A18' }}>Maca Royale</div>
                  <div style={{ fontSize: '10px', color: '#8E867C' }}>Royale Anatómica</div>
                </button>
              </div>
            </div>

            {/* Step 2: Revestimento & Cores */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1C1A18' }}>
                  02. REVESTIMENTO
                </span>
                <span style={{ fontSize: '11px', color: '#8E867C' }}>2/5</span>
              </div>

              {/* Type Tabs */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <button
                  type="button"
                  onClick={() => setFabricType('tecido')}
                  style={{
                    flex: 1,
                    padding: '9px',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: fabricType === 'tecido' ? '1px solid #1C1A18' : '1px solid #E5E0D8',
                    backgroundColor: fabricType === 'tecido' ? '#1C1A18' : '#FFFFFF',
                    color: fabricType === 'tecido' ? '#EDE8DF' : '#524E48',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Tecido Premium
                </button>
                <button
                  type="button"
                  onClick={() => setFabricType('pele')}
                  style={{
                    flex: 1,
                    padding: '9px',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: fabricType === 'pele' ? '1px solid #1C1A18' : '1px solid #E5E0D8',
                    backgroundColor: fabricType === 'pele' ? '#1C1A18' : '#FFFFFF',
                    color: fabricType === 'pele' ? '#EDE8DF' : '#524E48',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Pele Sintética
                </button>
              </div>

              {/* Swatches Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {colors.map((c) => (
                  <div
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{
                      width: '100%',
                      height: '46px',
                      backgroundColor: c.hex,
                      border: selectedColor.name === c.name ? '2px solid #1C1A18' : '1px solid #DCD5C9',
                      borderRadius: '2px',
                      marginBottom: '6px'
                    }} />
                    <span style={{ fontSize: '9.5px', color: '#524E48', textAlign: 'center', lineHeight: 1.2 }}>
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Estrutura da Base */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1C1A18' }}>
                  03. ESTRUTURA DA BASE
                </span>
                <span style={{ fontSize: '11px', color: '#8E867C' }}>3/5</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { name: 'Base Cilíndrica Revestida Nude', desc: 'Design contínuo e monolítico' },
                  { name: 'Base em Madeira Maciça Nobre', desc: 'Detalhe natural e sofisticado' },
                  { name: 'Base em Acabamento Taupe Esculpido', desc: 'Acabamento escultural mate' }
                ].map((base) => (
                  <div
                    key={base.name}
                    onClick={() => setSelectedBase(base.name)}
                    style={{
                      padding: '11px 14px',
                      border: selectedBase === base.name ? '1px solid #1C1A18' : '1px solid #E5E0D8',
                      backgroundColor: selectedBase === base.name ? '#F8F6F1' : '#FFFFFF',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 500, color: '#1C1A18' }}>{base.name}</div>
                      <div style={{ fontSize: '10px', color: '#8E867C' }}>{base.desc}</div>
                    </div>
                    <div style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      border: '1px solid #1C1A18',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {selectedBase === base.name && (
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1C1A18' }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Acabamentos Extra */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1C1A18' }}>
                  04. ACABAMENTOS EXTRA
                </span>
                <span style={{ fontSize: '11px', color: '#8E867C' }}>4/5</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '12.5px', color: '#3A3632' }}>
                    <span>Bordado personalizado com logótipo</span>
                    <input
                      type="checkbox"
                      checked={embroidery}
                      onChange={(e) => setEmbroidery(e.target.checked)}
                      style={{ width: '16px', height: '16px', accentColor: '#1C1A18' }}
                    />
                  </label>
                  {embroidery && (
                    <input
                      type="text"
                      placeholder="Nome ou texto do bordado..."
                      value={embroideryText}
                      onChange={(e) => setEmbroideryText(e.target.value)}
                      style={{
                        marginTop: '8px',
                        width: '100%',
                        padding: '8px 12px',
                        fontSize: '12px',
                        border: '1px solid #DCD5C9',
                        borderRadius: '2px',
                        fontFamily: 'var(--font-sans)'
                      }}
                    />
                  )}
                </div>

                <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '12.5px', color: '#3A3632' }}>
                  <span>Capa Protetora Cristal Náutico</span>
                  <input
                    type="checkbox"
                    checked={protectiveCover}
                    onChange={(e) => setProtectiveCover(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: '#1C1A18' }}
                  />
                </label>
                
                <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '12.5px', color: '#3A3632' }}>
                  <span>Manta & Almofada Cervical Ergonómica</span>
                  <input
                    type="checkbox"
                    checked={pillowSet}
                    onChange={(e) => setPillowSet(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: '#1C1A18' }}
                  />
                </label>
              </div>
            </div>

            {/* Step 5: CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                onClick={handleAddToCart}
                className="editorial-btn"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100%',
                  padding: '14px 24px',
                  backgroundColor: '#1C1A18',
                  color: '#EDE8DF',
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#33302C';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1C1A18';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>ADICIONAR AO CARRINHO</span>
                <span>→</span>
              </button>

              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-btn"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '13px 24px',
                  backgroundColor: 'transparent',
                  color: '#1C1A18',
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(28, 26, 24, 0.4)',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1C1A18';
                  e.currentTarget.style.backgroundColor = 'rgba(28, 26, 24, 0.05)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(28, 26, 24, 0.4)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>CONSULTAR POR WHATSAPP</span>
              </a>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '10px',
                color: '#8E867C',
                textAlign: 'center',
                paddingTop: '8px'
              }}>
                <span>✓ Atendimento Exclusivo</span>
                <span>✓ Envio Seguro</span>
                <span>✓ 5 Anos Garantia</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Explore in Detail Bottom Section */}
      <section style={{ padding: 'clamp(64px, 8vw, 110px) 0', borderBottom: '1px solid #E5E0D8' }}>
        <div className="editorial-container">
          <Reveal direction="up" delay={100}>
            <h2 style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              fontWeight: 300,
              color: '#1C1A18',
              marginBottom: '40px'
            }}>
              Explore em detalhe
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(20px, 3vw, 36px)' }}>
            <Reveal direction="up" delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca1/maca1_3.png" alt="Curvatura milimétrica" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>
                  Curvatura Milimétrica
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', lineHeight: 1.6, color: '#6E6860' }}>
                  Acompanha o corpo em relaxamento profundo e reduz pontos de pressão.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca1/maca1_4.png" alt="Tecidos de alta performance" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>
                  Tecidos de Alta Performance
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', lineHeight: 1.6, color: '#6E6860' }}>
                  Textura sofisticada, elevada durabilidade e fácil manutenção.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={350}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/maca1/maca1_2.png" alt="Base cilíndrica escultural" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>
                  Base Cilíndrica Escultural
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', lineHeight: 1.6, color: '#6E6860' }}>
                  Escolha o acabamento que melhor se adapta à arquitetura do seu espaço.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={450}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="image-hover-zoom" style={{ position: 'relative', width: '100%', height: 'clamp(260px, 22vw, 320px)', marginBottom: '16px', borderRadius: '2px', overflow: 'hidden', backgroundColor: '#EAE6DF' }}>
                  <Image src="/photos/detalhe/detalhe.png" alt="Acabamentos por medida" fill style={{ objectFit: 'cover', transition: 'transform 0.8s' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: '#1C1A18', marginBottom: '6px' }}>
                  Acabamentos por Medida
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12.5px', lineHeight: 1.6, color: '#6E6860' }}>
                  Personalize texturas, cores e gravação do logótipo da sua clínica.
                </p>
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
