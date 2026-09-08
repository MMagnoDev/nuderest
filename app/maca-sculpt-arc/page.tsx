'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { SiteFooter } from '../components/SiteFooter';
import { PRODUCTS_CATALOG } from '@/data/products';
import { useCart } from '../context/CartContext';

export default function MacaSculptArcPage() {
  const product = PRODUCTS_CATALOG[1]; // Maca Sculpt Arc
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
      image: product.image,
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
          <span className="quote-mark">‘</span>Maca Nude Rest <span className="italic">Sculpt Arc</span><span className="quote-mark">’</span>
        </h1>
      </section>

      {/* Hero 50% / 50% */}
      <section className="section-hero border-b">
        <div className="hero-col-left border-r">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="hero-col-right">
          <h2 className="hero-quote">
            Design curvo contínuo,<br />
            rebaixo ergonómico &<br />
            presença escultural<br />
            <span className="line-italic">Sculpt Arc</span>
          </h2>
        </div>
      </section>

      {/* Editorial Customizer Section (Bege Quase Preta) */}
      <section className="section-customizer border-b">
        <div className="customizer-content">
          
          <h3 className="customizer-title">
            Personalize a sua Maca Sculpt Arc
          </h3>
          <p className="customizer-desc">
            Desenho arquitetónico fluido com cabeceira ampla e rebaixo anatómico para o encaixe perfeito da cadeira da profissional durante os tratamentos.
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
                    fontFamily: 'var(--font-title)',
                    fontSize: '13px',
                    fontWeight: 300,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: color.hex, border: '1px solid #777' }} />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Escolha da Base */}
          <div style={{ textAlign: 'left', marginBottom: '32px' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--nude-taupe)', marginBottom: '12px' }}>
              2. Estrutura e Base Esculpida:
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
                    fontFamily: 'var(--font-title)',
                    fontSize: '13px',
                    fontWeight: 300,
                    textAlign: 'left'
                  }}
                >
                  <span>{base.name}</span>
                  <span style={{ color: 'var(--nude-linen)', fontSize: '12px' }}>
                    {base.extraPrice > 0 ? `+ ${base.extraPrice.toFixed(2)} €` : 'Incluído'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Bordado com sua Marca */}
          <div style={{ textAlign: 'left', marginBottom: '36px' }}>
            <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--nude-taupe)', marginBottom: '8px' }}>
              3. Gravação de Nome / Monograma da Clínica:
            </label>
            <input
              type="text"
              placeholder="Digite o nome ou deixe em branco para acabamento liso"
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

          {/* Pricing & CTA */}
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
              ou 12 prestações de {(totalPrice / 12).toLocaleString('pt-PT', { minimumFractionDigits: 2 })} € sem juros no cartão
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              width: '100%',
              maxWidth: '420px',
              marginTop: '12px'
            }}>
              {/* Direct WhatsApp Purchase Button */}
              <button
                onClick={handleBuyWhatsApp}
                className="btn-primary-nude"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: 'none',
                  fontFamily: 'var(--font-title)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <span>Comprar via WhatsApp</span>
                <span>→</span>
              </button>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="btn-secondary-nude"
                style={{
                  width: '100%',
                  padding: '14px',
                  border: '1px solid var(--border-color)',
                  fontFamily: 'var(--font-title)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
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
          <span className="manifesto-num">GARANTIA & ENVIO</span>
          <div>
            <h3 className="manifesto-title">5 Anos de Garantia</h3>
            <p className="manifesto-desc">
              Garantia estrutural de 5 anos no chassis e transporte assegurado em embalagem reforçada.
            </p>
          </div>
        </div>
      </section>

      {/* Link to other model */}
      <section className="section-archive-header border-b">
        <h2 className="archive-header-title">Conheça também a <span className="italic">Maca Royale</span></h2>
        <Link href="/maca-royale" className="archive-header-index" style={{ textDecoration: 'none' }}>
          Ver Modelo Anatómico →
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
