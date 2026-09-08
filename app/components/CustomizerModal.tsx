'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product, ProductColor, BaseFinish, CustomOption, CustomizationSelection, CartItem } from '@/types/ecommerce';
import { X, Check, ShieldCheck, ShoppingBag, MessageCircle, Truck } from 'lucide-react';

interface CustomizerModalProps {
  product: Product | null;
  initialColor?: ProductColor;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  product,
  initialColor,
  isOpen,
  onClose,
  onAddToCart
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedBase, setSelectedBase] = useState<BaseFinish | null>(null);
  const [embroideryText, setEmbroideryText] = useState<string>('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    if (product) {
      setSelectedColor(initialColor || product.availableColors[0]);
      setSelectedBase(product.baseFinishes[0]);
      setEmbroideryText('');
      setSelectedAddons([]);
      setActiveImageIndex(0);
    }
  }, [product, initialColor]);

  if (!isOpen || !product || !selectedColor || !selectedBase) return null;

  const baseExtra = selectedBase.extraPrice || 0;
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = product.optionalAddons.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const unitPrice = product.price + baseExtra + addonsTotal;
  const pixPrice = unitPrice * (1 - product.pixDiscountPercent / 100);
  const installmentVal = unitPrice / 12;

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const handleConfirmAddToCart = () => {
    const customization: CustomizationSelection = {
      color: selectedColor,
      baseFinish: selectedBase,
      embroideryText: embroideryText.trim() ? embroideryText.trim() : undefined,
      selectedAddons
    };

    const cartItem: CartItem = {
      id: `${product.id}-${selectedColor.id}-${selectedBase.id}-${selectedAddons.sort().join('_')}-${embroideryText}`,
      product,
      customization,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice
    };

    onAddToCart(cartItem);
    onClose();
  };

  const handleDirectWhatsAppOrder = () => {
    const text = `Olá! Gostaria de encomendar a *${product.name}* na paleta NUDE REST:%0A` +
      `- *Cor do Estofo:* ${selectedColor.name}%0A` +
      `- *Acabamento da Base:* ${selectedBase.name}%0A` +
      (embroideryText ? `- *Bordado Personalizado:* ${embroideryText}%0A` : '') +
      `- *Valor Total:* ${unitPrice.toFixed(2)} € (ou ${pixPrice.toFixed(2)} € a pronto pagamento)%0A` +
      `Poderiam enviar-me o link de confirmação da encomenda?`;
    
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      backgroundColor: 'rgba(22, 16, 12, 0.88)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: '1080px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
      }} className="animate-fade-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10,
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-main)',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Fechar"
        >
          <X size={18} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1.3fr)'
        }} className="customizer-modal-grid">
          
          {/* Left Column: Gallery */}
          <div style={{
            backgroundColor: '#16100C',
            padding: '40px',
            borderRight: '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '360px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#201813',
                marginBottom: '16px'
              }}>
                <Image
                  src={product.gallery[activeImageIndex] || product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                
                {/* Live Customization Badge Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(23, 22, 21, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: selectedColor.hex,
                      border: '1px solid #777'
                    }} />
                    <span style={{ fontSize: '12px', color: 'var(--nude-alabaster)', fontWeight: 600 }}>
                      {selectedColor.name}
                    </span>
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--nude-linen)' }}>
                    {selectedBase.name.split('(')[0]}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery.length > 1 && (
                <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        position: 'relative',
                        border: activeImageIndex === i ? '2px solid var(--nude-linen)' : '1px solid var(--border-medium)',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <Image src={img} alt={`Preview ${i}`} fill style={{ objectFit: 'cover' }} />
                    </button>
                  ))}
                </div>
              )}

              {/* Technical Dimensions */}
              <div style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                padding: '20px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--nude-linen)', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.06em' }}>
                  Especificações Técnicas
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px' }}>
                  <div>
                    <span style={{ color: 'var(--text-dim)' }}>Comprimento: </span>
                    <strong style={{ color: 'var(--text-main)' }}>{product.dimensions.length}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-dim)' }}>Largura: </span>
                    <strong style={{ color: 'var(--text-main)' }}>{product.dimensions.width}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-dim)' }}>Altura: </span>
                    <strong style={{ color: 'var(--text-main)' }}>{product.dimensions.height}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-dim)' }}>Sustentação: </span>
                    <strong style={{ color: '#4ADE80' }}>{product.dimensions.weightCapacity}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '24px', color: 'var(--text-muted)', fontSize: '12px' }}>
              <Truck size={16} color="var(--nude-linen)" />
              <span>{product.leadTime} + Envio Assegurado</span>
            </div>
          </div>

          {/* Right Column: Controls */}
          <div style={{
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto'
          }}>
            <div>
              <div style={{ marginBottom: '24px' }}>
                <span className="badge-pill badge-nude" style={{ fontSize: '10px', marginBottom: '8px' }}>
                  ATELIER DE PERSONALIZAÇÃO
                </span>
                <h2 style={{ fontSize: '32px', marginBottom: '6px' }}>{product.name}</h2>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{product.subtitle}</p>
              </div>

              {/* 1. Revestimento Náutico */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    1. Revestimento Nobre: <span style={{ color: 'var(--nude-linen)' }}>{selectedColor.name}</span>
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {product.availableColors.map(color => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: selectedColor.id === color.id ? 'var(--bg-surface-elevated)' : 'transparent',
                        border: selectedColor.id === color.id ? '1px solid var(--nude-linen)' : '1px solid var(--border-medium)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: color.hex,
                        border: '1px solid #555'
                      }} />
                      <span style={{ fontSize: '12px', color: selectedColor.id === color.id ? 'var(--nude-alabaster)' : 'var(--text-muted)', fontWeight: 500 }}>
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Base & Frame */}
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                  2. Estrutura & Acabamento da Base
                </label>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {product.baseFinishes.map(base => (
                    <button
                      key={base.id}
                      onClick={() => setSelectedBase(base)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: selectedBase.id === base.id ? 'rgba(236, 226, 216, 0.08)' : 'var(--bg-card)',
                        border: selectedBase.id === base.id ? '1px solid var(--nude-linen)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: selectedBase.id === base.id ? '5px solid var(--nude-linen)' : '2px solid #555',
                          backgroundColor: '#1E1713'
                        }} />
                        <span style={{ fontSize: '13px', color: selectedBase.id === base.id ? 'var(--nude-alabaster)' : 'var(--text-muted)', fontWeight: 500 }}>
                          {base.name}
                        </span>
                      </div>
                      <span style={{ fontSize: '12px', color: base.extraPrice > 0 ? 'var(--nude-linen)' : 'var(--text-dim)', fontWeight: 600 }}>
                        {base.extraPrice > 0 ? `+ ${base.extraPrice.toFixed(2)} €` : 'Incluído'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Personalized Embroidery */}
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  3. Gravação de Nome / Monograma da Clínica
                </label>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  Introduza o nome que deseja bordar no apoio de cabeça ou deixe em branco para receber a maca lisa.
                </p>
                <input
                  type="text"
                  placeholder="Ex: Dra. Camila Vasconcellos ou Monograma CV"
                  value={embroideryText}
                  onChange={(e) => setEmbroideryText(e.target.value)}
                  style={{
                    width: '100%',
                    height: '46px',
                    backgroundColor: 'var(--bg-page)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0 16px',
                    color: 'var(--nude-alabaster)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* 4. Addons */}
              {product.optionalAddons.length > 0 && (
                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                    4. Acessórios Opcionais
                  </label>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {product.optionalAddons.map(addon => {
                      const isSelected = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 16px',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: isSelected ? 'rgba(74, 222, 128, 0.06)' : 'var(--bg-card)',
                            border: isSelected ? '1px solid #4ADE80' : '1px solid var(--border-subtle)',
                            cursor: 'pointer'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '4px',
                              border: isSelected ? 'none' : '1px solid #555',
                              backgroundColor: isSelected ? '#4ADE80' : 'transparent',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              {isSelected && <Check size={12} color="#000" strokeWidth={3} />}
                            </div>
                            <div>
                              <div style={{ fontSize: '13px', color: 'var(--nude-alabaster)', fontWeight: 500 }}>{addon.name}</div>
                              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{addon.description}</div>
                            </div>
                          </div>
                          <span style={{ fontSize: '12px', color: 'var(--nude-linen)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                            + {addon.price.toFixed(2)} €
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Total & Action */}
            <div style={{
              paddingTop: '24px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: '20px'
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Valor Total Personalizado:</div>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '34px',
                    fontWeight: 600,
                    color: 'var(--nude-alabaster)',
                    lineHeight: 1.1
                  }}>
                    {pixPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €
                    <span style={{ fontSize: '13px', color: '#4ADE80', marginLeft: '8px', fontWeight: 600 }}>a pronto pagamento</span>
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    ou {unitPrice.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} € em <strong>12 prestações de {installmentVal.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €</strong> sem juros
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="badge-pill badge-green" style={{ fontSize: '10px' }}>
                    <ShieldCheck size={12} />
                    COMPRA SEGURA
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={handleConfirmAddToCart}
                  className="btn btn-nude"
                  style={{ flex: '1 1 200px', height: '52px' }}
                >
                  <ShoppingBag size={17} />
                  <span>Adicionar ao Carrinho</span>
                </button>

                <button
                  onClick={handleDirectWhatsAppOrder}
                  className="btn btn-whatsapp"
                  style={{ flex: '1 1 180px', height: '52px' }}
                >
                  <MessageCircle size={17} />
                  <span>Encomendar no WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .customizer-modal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
