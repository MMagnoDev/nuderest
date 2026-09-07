'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product, ProductColor } from '@/types/ecommerce';
import { PRODUCTS_CATALOG } from '@/data/products';
import { Sparkles, Star, SlidersHorizontal, Check, Eye } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProductToCustomize: (product: Product, initialColor?: ProductColor) => void;
  onQuickAddToCart: (product: Product, selectedColor: ProductColor) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProductToCustomize,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedColors, setSelectedColors] = useState<{ [productId: string]: ProductColor }>(() => {
    const initial: { [productId: string]: ProductColor } = {};
    PRODUCTS_CATALOG.forEach(p => {
      initial[p.id] = p.availableColors[0];
    });
    return initial;
  });

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(p => p.category === activeCategory);

  const handleColorChange = (productId: string, color: ProductColor, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedColors(prev => ({ ...prev, [productId]: color }));
  };

  return (
    <section id="catalogo" className="section-pad border-b" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '56px'
        }}>
          <span className="badge-pill badge-nude" style={{ marginBottom: '16px' }}>
            <Sparkles size={12} />
            COLEÇÃO EXCLUSIVA DE MACAS NUDE REST
          </span>
          
          <h2 style={{ marginBottom: '20px', maxWidth: '750px' }}>
            Escolha o modelo ideal para <br />
            o <span className="italic">posicionamento</span> do seu espaço
          </h2>
          
          <p className="body-text" style={{ maxWidth: '620px' }}>
            Cada peça é confeccionada artesanalmente com materiais hospitalares de alta performance, espuma D33 multi-densidade e acabamentos nobres na paleta Nude Rest.
          </p>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '36px'
          }}>
            {[
              { id: 'all', label: 'Todas as Macas' },
              { id: 'anatomica', label: 'Anatômicas & Lash' },
              { id: 'luxo', label: 'Design Curvo Escultural' },
              { id: 'eletrica', label: 'Ajuste Elétrico 3M' },
              { id: 'minimalista', label: 'Minimalistas Slim' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  height: '42px',
                  padding: '0 20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: activeCategory === tab.id ? '1px solid var(--nude-linen)' : '1px solid var(--border-medium)',
                  backgroundColor: activeCategory === tab.id ? 'var(--bg-surface-elevated)' : 'transparent',
                  color: activeCategory === tab.id ? 'var(--nude-alabaster)' : 'var(--text-muted)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {filteredProducts.map(product => {
            const currentColor = selectedColors[product.id] || product.availableColors[0];
            const pixPrice = product.price * (1 - product.pixDiscountPercent / 100);
            const installmentValue = product.price / 12;

            return (
              <div
                key={product.id}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s ease',
                  position: 'relative'
                }}
                className="product-card"
              >
                {/* Product Image Stage */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '320px',
                  backgroundColor: '#16100C',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => onSelectProductToCustomize(product, currentColor)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="product-image"
                  />
                  
                  {/* Badge top-left */}
                  {product.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      zIndex: 2
                    }}>
                      <span className="badge-pill badge-nude" style={{ fontSize: '10px', padding: '4px 10px' }}>
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Rating top-right */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: 2,
                    backgroundColor: 'rgba(30, 23, 19, 0.9)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Star size={12} fill="var(--nude-linen)" color="var(--nude-linen)" />
                    <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--nude-alabaster)' }}>
                      {product.rating.toFixed(1)} ({product.reviewCount})
                    </span>
                  </div>

                  {/* Hover Quick Action */}
                  <div className="card-hover-overlay" style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(30, 23, 19, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.25s ease'
                  }}>
                    <span className="btn btn-outline btn-sm" style={{ backgroundColor: 'rgba(30, 23, 19, 0.92)' }}>
                      <Eye size={14} />
                      Personalizar Detalhes
                    </span>
                  </div>
                </div>

                {/* Product Card Details */}
                <div style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}>
                  <div>
                    {/* Color Swatch Picker */}
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '12px', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Cor: <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>{currentColor.name}</strong>
                        </span>
                        <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
                          {product.availableColors.length} tons Nude
                        </span>
                      </div>

                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        {product.availableColors.map(color => (
                          <button
                            key={color.id}
                            onClick={(e) => handleColorChange(product.id, color, e)}
                            title={color.name}
                            style={{
                              width: '26px',
                              height: '26px',
                              borderRadius: '50%',
                              backgroundColor: color.hex,
                              border: currentColor.id === color.id ? '2px solid var(--nude-alabaster)' : '1px solid var(--border-medium)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'transform 0.15s ease',
                              padding: 0
                            }}
                          >
                            {currentColor.id === color.id && (
                              <Check size={12} color={color.id === 'alabaster-nude' || color.id === 'linen-nude' ? '#1E1713' : '#FFF'} />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text-main)' }}>
                      {product.name}
                    </h3>

                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
                      {product.subtitle}
                    </p>

                    {/* Features list */}
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 20px 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      {product.features.slice(0, 2).map((feat, i) => (
                        <li key={i} style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <span style={{ color: 'var(--nude-linen)' }}>✦</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action Footer */}
                  <div style={{
                    paddingTop: '20px',
                    borderTop: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '13px', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                        R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                      <span style={{ fontSize: '11px', color: '#4ADE80', fontWeight: 600 }}>
                        {product.pixDiscountPercent}% OFF NO PIX
                      </span>
                    </div>

                    <div style={{ marginBottom: '8px' }}>
                      <span style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '28px',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        marginRight: '6px'
                      }}>
                        R$ {pixPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--nude-linen)', fontWeight: 600 }}>
                        à vista no Pix
                      </span>
                    </div>

                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                      ou <strong>12x de R$ {installmentValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> sem juros
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => onSelectProductToCustomize(product, currentColor)}
                        className="btn btn-nude btn-full"
                        style={{ height: '48px', fontSize: '13px' }}
                      >
                        <SlidersHorizontal size={15} />
                        <span>Personalizar Maca</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        .product-card:hover {
          border-color: var(--nude-taupe);
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
        }
        .product-card:hover .product-image {
          transform: scale(1.04);
        }
        .product-card:hover .card-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};
