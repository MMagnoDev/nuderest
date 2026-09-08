'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, ShieldCheck, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCustomizerForFirst?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Shipping & Security Ticker Bar */}
      <div style={{
        backgroundColor: '#16100C',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '8px 20px',
        fontSize: '12px',
        color: 'var(--nude-linen)',
        textAlign: 'center',
        fontWeight: 500,
        letterSpacing: '0.04em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={14} color="var(--nude-linen)" />
          5 ANOS DE GARANTIA ESTRUTURAL
        </span>
        <span style={{ opacity: 0.35 }}>•</span>
        <span>5% DE DESCONTO A PRONTO PAGAMENTO</span>
        <span style={{ opacity: 0.35 }}>•</span>
        <span>ENVIO ASSEGURADO PARA PORTUGAL & EUROPA</span>
      </div>

      {/* Main Navigation Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: 'rgba(30, 23, 19, 0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '8px'
            }}
            className="mobile-menu-btn"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <div style={{ position: 'relative', height: '36px', width: '190px' }}>
              <Image
                src="/logo.png"
                alt="NUDE REST — Macas Personalizadas"
                fill
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}>
            <a href="#catalogo" style={{
              color: 'var(--text-main)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              transition: 'color 0.2s ease'
            }}>
              Coleções
            </a>
            <a href="#personalizacao" style={{
              color: 'var(--text-main)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>
              Personalização
            </a>
            <a href="#ergonomia" style={{
              color: 'var(--text-main)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>
              Ergonomia & Materiais
            </a>
            <a href="#depoimentos" style={{
              color: 'var(--text-main)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>
              Avaliações
            </a>
            <a href="#faq" style={{
              color: 'var(--text-main)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>
              Garantia & FAQ
            </a>
          </nav>

          {/* Header Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20VIP%20para%20personalizar%20uma%20Maca%20NUDE%20REST."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm concierge-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                padding: '0 16px',
                height: '38px',
                borderColor: 'var(--border-medium)',
                color: 'var(--nude-linen)'
              }}
            >
              <Phone size={13} />
              <span>Concierge VIP</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              style={{
                position: 'relative',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-main)',
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              aria-label="Abrir Carrinho de Compras"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  backgroundColor: 'var(--nude-linen)',
                  color: 'var(--nude-mocha-deep)',
                  fontSize: '11px',
                  fontWeight: 700,
                  width: '19px',
                  height: '19px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}>
            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
            >
              Ver Catálogo de Macas
            </a>
            <a
              href="#personalizacao"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
            >
              Personalização
            </a>
            <a
              href="#ergonomia"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
            >
              Ergonomia & Estrutura
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
            >
              Depoimentos de Clínicas
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
            >
              Garantia e Prazos
            </a>
            <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href="https://wa.me/5511999999999"
                className="btn btn-nude btn-full"
                style={{ height: '46px', fontSize: '13px' }}
              >
                Falar com Especialista no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .concierge-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
