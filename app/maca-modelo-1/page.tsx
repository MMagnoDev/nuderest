'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { SiteFooter } from '../components/SiteFooter';
import { PRODUCTS_CATALOG } from '@/data/products';
import { useCart } from '../context/CartContext';

export default function MacaModelo1Page() {
  const product = PRODUCTS_CATALOG[0]; // Maca Modelo 1 — Sculpt Wave
  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [selectedBase, setSelectedBase] = useState(product.baseFinishes[0]);
  const [embroideryText, setEmbroideryText] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const { addToCart, checkoutDirectWhatsApp } = useCart();

  const baseExtra = selectedBase.extraPrice || 0;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = product.optionalAddons.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalPrice = product.price + baseExtra + addonsTotal;
  const pixPrice = totalPrice * 0.95;

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const getCustomizedItem = () => {
    const chosenAddons = selectedAddons
      .map(id => product.optionalAddons.find(a => a.id === id))
      .filter((a): a is typeof product.optionalAddons[0] => !!a);

    return {
      productId: product.id,
      name: product.name,
      slug: product.slug,
      image: activeImage || product.image,
      unitPrice: product.price,
      color: selectedColor,
      base: selectedBase,
      embroideryText: embroideryText.trim() || undefined,
      addons: chosenAddons
    };
  };

  const handleBuyWhatsApp = () => {
    checkoutDirectWhatsApp(getCustomizedItem());
  };

  const handleAddToCart = () => {
    addToCart(getCustomizedItem());
  };

  return (
    <main className="page-container">
      <Navbar />

      {/* Page Title */}
      <section className="section-page-title border-b">
        <h1 className="page-title">
          <span className="quote-mark">‘</span>NUDE REST — <span className="italic">Maca Sculpt Wave</span><span className="quote-mark">’</span>
        </h1>
      </section>

      {/* Hero 50% / 50% with Interactive Photo Gallery */}
      <section className="section-hero border-b">
        <div className="hero-col-left border-r" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, position: 'relative', minHeight: '440px', overflow: 'hidden' }}>
            <img
              src={activeImage}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Gallery Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div style={{
              display: 'flex',
              gap: '12px',
              padding: '16px 24px',
              backgroundColor: 'var(--bg-page)',
              borderTop: '1px solid var(--border-color)',
              overflowX: 'auto'
            }}>
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  style={{
                    width: '64px',
                    height: '64px',
                    padding: 0,
                    border: activeImage === img ? '2px solid var(--nude-linen)' : '1px solid var(--border-color)',
                    background: 'none',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    flexShrink: 0,
                    opacity: activeImage === img ? 1 : 0.6,
                    transition: 'opacity 0.2s ease'
                  }}
                >
                  <img src={img} alt={`Ângulo ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hero-col-right">
          <h2 className="hero-quote">
            Arco escultural contínuo,<br />
            base cilíndrica &<br />
            conforto anatómico ativo<br />
            <span className="line-italic">Maca Sculpt Wave</span>
          </h2>
        </div>
      </section>

      {/* Editorial Customizer Section (Bege Quase Preta) */}
      <section className="section-customizer border-b">
        <div className="customizer-content">
          
          <h3 className="customizer-title">
            Personalize o seu Modelo 1 — Sculpt Wave
          </h3>
          <p className="customizer-desc">
            Design fluido escultural com cabeceira contínua e curvatura milimétrica para acomodação perfeita da coluna lombar.
          </p>

          {/* 1. Escolha de Cor */}
          <div style={{ textAlign: 'left', marginBottom: '32px' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--nude-taupe)', marginBottom: '12px' }}>
              1. Tonalidade do Revestimento: <span style={{ color: 'var(--text-main)', fontWeight: 400 }}>{selectedColor.name}</span>
            </label>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {product.availableColors.map(color => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 18px',
                    backgroundColor: selectedColor.id === color.id ? 'var(--bg-contrast)' : 'var(--bg-light)',
                    border: selectedColor.id === color.id ? '1px solid var(--nude-linen)' : '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: color.hex,
                    border: '1px solid rgba(255,255,255,0.2)'
                  }} />
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Escolha de Base */}
          <div style={{ textAlign: 'left', marginBottom: '32px' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--nude-taupe)', marginBottom: '12px' }}>
              2. Estrutura da Base: <span style={{ color: 'var(--text-main)', fontWeight: 400 }}>{selectedBase.name}</span>
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {product.baseFinishes.map(base => (
                <button
                  key={base.id}
                  onClick={() => setSelectedBase(base)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 20px',
                    backgroundColor: selectedBase.id === base.id ? 'var(--bg-contrast)' : 'var(--bg-light)',
                    border: selectedBase.id === base.id ? '1px solid var(--nude-linen)' : '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    textAlign: 'left'
                  }}
                >
                  <span>{base.name}</span>
                  <span style={{ color: 'var(--nude-taupe)', fontSize: '12px' }}>
                    {base.extraPrice ? `+ ${base.extraPrice.toFixed(2)} €` : 'Incluído'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Bordado Personalizado */}
          <div style={{ textAlign: 'left', marginBottom: '32px' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--nude-taupe)', marginBottom: '8px' }}>
              3. Gravação de Nome / Monograma da Clínica:
            </label>
            <input
              type="text"
              placeholder="Insira o nome ou deixe em branco para acabamento liso"
              value={embroideryText}
              onChange={(e) => setEmbroideryText(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 18px',
                backgroundColor: 'var(--bg-light)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                outline: 'none'
              }}
            />
          </div>

          {/* 4. Opcionais */}
          <div style={{ textAlign: 'left', marginBottom: '32px' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--nude-taupe)', marginBottom: '12px' }}>
              4. Acessórios & Proteção de Atelier:
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {product.optionalAddons.map(addon => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 20px',
                      backgroundColor: isSelected ? 'var(--bg-contrast)' : 'var(--bg-light)',
                      border: isSelected ? '1px solid var(--nude-linen)' : '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      textAlign: 'left'
                    }}
                  >
                    <div>
                      <div>{addon.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{addon.description}</div>
                    </div>
                    <span style={{ color: 'var(--nude-taupe)', fontSize: '12px', flexShrink: 0, marginLeft: '12px' }}>
                      {isSelected ? '✓ Adicionado (+ ' + addon.price.toFixed(2) + ' €)' : '+ ' + addon.price.toFixed(2) + ' €'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing & Dual CTA Buttons */}
          <div style={{
            padding: '32px',
            backgroundColor: 'var(--bg-light)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--nude-taupe)' }}>
              Valor Total Personalizado
            </div>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '36px', fontWeight: 200, color: 'var(--text-main)' }}>
              {pixPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €
              <span style={{ fontSize: '14px', color: 'var(--nude-linen)', marginLeft: '8px' }}>a pronto pagamento</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              ou 12 prestações de {(totalPrice / 12).toLocaleString('pt-PT', { minimumFractionDigits: 2 })} € sem juros com cartão
            </div>
            
            {/* Dual High Contrast CTA Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              width: '100%',
              maxWidth: '420px',
              marginTop: '12px'
            }}>
              {/* Direct WhatsApp Purchase */}
              <button
                onClick={handleBuyWhatsApp}
                className="btn-primary-nude"
                style={{
                  width: '100%',
                  padding: '16px'
                }}
              >
                <span>Encomendar via WhatsApp</span>
                <span>→</span>
              </button>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="btn-secondary-nude"
                style={{
                  width: '100%',
                  padding: '14px'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Adicionar ao Carrinho</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Specifications 3-Column Grid */}
      <section className="section-manifesto border-b">
        <div className="manifesto-col border-r">
          <span className="manifesto-num">DIMENSÕES & PESO</span>
          <div>
            <h3 className="manifesto-title">{product.dimensions.length} × {product.dimensions.width}</h3>
            <p className="manifesto-desc">
              Altura de {product.dimensions.height}. Estrutura em multilaminado naval com capacidade para {product.dimensions.weightCapacity}.
            </p>
          </div>
        </div>
        <div className="manifesto-col border-r">
          <span className="manifesto-num">CONSTRUÇÃO & RELEVO</span>
          <div>
            <h3 className="manifesto-title">Arco Escultural Contínuo</h3>
            <p className="manifesto-desc">
              Sem emendas aparentes, garantindo postura correta à profissional e imponência arquitetónica ao ambiente.
            </p>
          </div>
        </div>
        <div className="manifesto-col">
          <span className="manifesto-num">GARANTIA & TRANSPORTE</span>
          <div>
            <h3 className="manifesto-title">5 Anos de Garantia</h3>
            <p className="manifesto-desc">
              Garantia estrutural de fábrica e entrega assegurada em embalagem reforçada para todo o território nacional.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
