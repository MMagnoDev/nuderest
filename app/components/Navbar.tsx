'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  const links = [
    { label: 'Início', href: '/' },
    { label: 'Maca Sculpt', href: '/maca-modelo-1' },
    { label: 'Maca Royale', href: '/maca-modelo-2' },
    { label: 'Coleções', href: '/colecoes' },
    { label: 'Sobre a NUDE REST', href: '/sobre' },
    { label: 'Contacto', href: '/contato' }
  ];

  return (
    <>
      <header className="header-bar border-b" style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(23, 22, 21, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 48px',
        height: '68px'
      }}>
        {/* Brand Logo using logo.png */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '160px', height: '32px' }}>
            <Image
              src="/logo.png"
              alt="NUDE REST"
              fill
              style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Links (No Hamburger on Desktop) */}
        <nav className="header-nav-desktop" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px'
        }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '13px',
                  fontWeight: isActive ? 400 : 300,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--nude-alabaster)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                  borderBottom: isActive ? '1px solid var(--nude-linen)' : '1px solid transparent',
                  paddingBottom: '2px'
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA + Cart Button */}
        <div className="header-right-desktop" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Shopping Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Abrir carrinho de compras"
            className="btn-secondary-nude"
            style={{
              padding: '9px 18px',
              fontSize: '12px'
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Carrinho</span>
            {totalItems > 0 && (
              <span style={{
                backgroundColor: '#ECE2D8',
                color: '#1E1713',
                fontSize: '11px',
                fontWeight: 700,
                padding: '1px 7px',
                borderRadius: '10px',
                marginLeft: '2px'
              }}>
                {totalItems}
              </span>
            )}
          </button>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20VIP%20para%20personalizar%20uma%20Maca%20NUDE%20REST."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-nude"
            style={{
              padding: '9px 20px',
              fontSize: '11.5px'
            }}
          >
            Concierge VIP
          </a>
        </div>

        {/* Mobile Header Right (Cart + Hamburger) */}
        <div className="mobile-only" style={{ display: 'none', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Abrir carrinho"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-6px',
                backgroundColor: '#ECE2D8',
                color: '#1E1713',
                fontSize: '10px',
                fontWeight: 700,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {totalItems}
              </span>
            )}
          </button>

          <div
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-light)',
          borderBottom: '1px solid var(--border-color)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '15px',
                fontWeight: 300,
                color: 'var(--text-main)',
                textDecoration: 'none',
                letterSpacing: '0.04em'
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-nude"
              style={{
                display: 'block',
                textAlign: 'center',
                width: '100%'
              }}
            >
              Atendimento no WhatsApp
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .mobile-only {
          display: none !important;
        }
        @media (max-width: 860px) {
          .header-nav-desktop, .header-right-desktop {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
