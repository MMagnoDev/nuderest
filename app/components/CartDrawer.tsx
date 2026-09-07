'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    pixTotal,
    totalItems,
    checkoutWhatsApp
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(15, 12, 10, 0.75)',
          backdropFilter: 'blur(6px)',
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Slide-over Content Drawer */}
      <aside style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        backgroundColor: 'var(--bg-page)',
        borderLeft: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.5)',
        zIndex: 10
      }}>
          {/* Header */}
        <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--bg-light)'
        }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-title)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--nude-taupe)',
              display: 'block',
              marginBottom: '2px'
            }}>
              Atelier NUDE REST
            </span>
            <h3 style={{
              fontFamily: 'var(--font-title)',
              fontSize: '20px',
              fontWeight: 300,
              color: 'var(--text-main)',
              letterSpacing: '0.02em'
            }}>
              O Seu Carrinho ({totalItems})
            </h3>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Fechar carrinho"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-color)',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'all 0.2s ease'
            }}
          >
            ✕
          </button>
        </div>

        {/* Cart Item List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {cart.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}>
              <span style={{ fontSize: '36px', opacity: 0.4 }}>✦</span>
              <h4 style={{
                fontFamily: 'var(--font-title)',
                fontSize: '18px',
                fontWeight: 300,
                color: 'var(--text-main)'
              }}>
                O seu carrinho está vazio
              </h4>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                maxWidth: '260px'
              }}>
                Personalize o Modelo 1 ou Modelo 2 com acabamentos exclusivos feitos por medida.
              </p>
              <Link
                href="/colecoes"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary-nude"
                style={{
                  marginTop: '12px'
                }}
              >
                Ver Modelos
              </Link>
            </div>
          ) : (
            cart.map((item) => {
              const itemUnitTotal = item.unitPrice + (item.base.extraPrice || 0) + (item.addons || []).reduce((sum, a) => sum + a.price, 0);
              const itemTotal = itemUnitTotal * item.quantity;

              return (
                <div
                  key={item.id}
                  style={{
                    paddingBottom: '20px',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    {/* Item Image */}
                    <div style={{
                      position: 'relative',
                      width: '76px',
                      height: '76px',
                      flexShrink: 0,
                      overflow: 'hidden',
                      backgroundColor: 'var(--bg-light)',
                      border: '1px solid var(--border-color)'
                    }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/* Item Details */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h4 style={{
                          fontFamily: 'var(--font-title)',
                          fontSize: '15px',
                          fontWeight: 400,
                          color: 'var(--text-main)',
                          marginBottom: '4px'
                        }}>
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remover item"
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-muted)',
                            cursor: 'pointer',
                            fontSize: '14px',
                            padding: '2px'
                          }}
                        >
                          ✕
                        </button>
                      </div>

                      <div style={{
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3px',
                        marginBottom: '8px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>Tom:</span>
                          <span style={{
                            display: 'inline-block',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: item.color.hex,
                            border: '1px solid rgba(255,255,255,0.2)'
                          }} />
                          <span style={{ color: 'var(--text-main)' }}>{item.color.name}</span>
                        </div>

                        <div>
                          <span>Base:</span> <span style={{ color: 'var(--text-main)' }}>{item.base.name}</span>
                        </div>

                        {item.embroideryText && (
                          <div>
                            <span>Bordado:</span> <span style={{ color: 'var(--nude-linen)' }}>"{item.embroideryText}"</span>
                          </div>
                        )}

                        {item.addons && item.addons.length > 0 && (
                          <div>
                            <span>Opcionais:</span> <span style={{ color: 'var(--text-main)' }}>{item.addons.map(a => a.name).join(', ')}</span>
                          </div>
                        )}
                      </div>

                      {/* Quantity and Price */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '8px'
                      }}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid var(--border-color)',
                          backgroundColor: 'var(--bg-light)'
                        }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--text-main)',
                              width: '28px',
                              height: '26px',
                              cursor: 'pointer'
                            }}
                          >
                            -
                          </button>
                          <span style={{
                            fontFamily: 'var(--font-title)',
                            fontSize: '12px',
                            padding: '0 8px',
                            color: 'var(--text-main)'
                          }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--text-main)',
                              width: '28px',
                              height: '26px',
                              cursor: 'pointer'
                            }}
                          >
                            +
                          </button>
                        </div>

                        <div style={{
                          fontFamily: 'var(--font-title)',
                          fontSize: '15px',
                          fontWeight: 300,
                          color: 'var(--text-main)'
                        }}>
                          R$ {itemTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Summary & WhatsApp Buy Button */}
        {cart.length > 0 && (
          <div style={{
            padding: '24px 32px',
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>Subtotal ({totalItems} {totalItems === 1 ? 'artigo' : 'artigos'})</span>
                <span>R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#68D391' }}>
                <span>Desconto Especial no Pagamento Imediato (5%)</span>
                <span>- R$ {(subtotal * 0.05).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                paddingTop: '10px',
                borderTop: '1px solid var(--border-color)',
                marginTop: '4px'
              }}>
                <span style={{ fontFamily: 'var(--font-title)', fontSize: '14px', color: 'var(--text-main)' }}>Total com 5% OFF</span>
                <span style={{ fontFamily: 'var(--font-title)', fontSize: '22px', fontWeight: 300, color: 'var(--text-main)' }}>
                  R$ {pixTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Checkout Button */}
            <button
              onClick={checkoutWhatsApp}
              className="btn-primary-nude"
              style={{
                width: '100%',
                padding: '16px 24px',
                fontSize: '13px'
              }}
            >
              <span>Finalizar Encomenda no WhatsApp</span>
              <span style={{ fontSize: '16px' }}>→</span>
            </button>

            <span style={{
              textAlign: 'center',
              fontSize: '11px',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em'
            }}>
              🔒 Atendimento direto com os nossos mestres artesãos
            </span>
          </div>
        )}
      </aside>
    </div>
  );
};
