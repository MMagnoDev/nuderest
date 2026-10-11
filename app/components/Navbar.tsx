'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC<{ transparent?: boolean }> = ({ transparent = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  const links = [
    { label: 'Início', href: '/' },
    { label: 'Sculpt', href: '/maca-modelo-1' },
    { label: 'Pure', href: '/maca-modelo-2' },
    { label: 'Personalização', href: '/maca-sculpt-arc' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Atelier', href: '/atelie' },
    { label: 'Contacto', href: '/contato' }
  ];

  return (
    <>
      <header className={`header-bar ${transparent ? '' : 'border-b'}`} style={{
        position: transparent ? 'absolute' : 'sticky',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 100,
        background: transparent ? 'transparent' : 'rgba(20, 19, 18, 0.88)',
        backdropFilter: transparent ? 'none' : 'blur(12px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 clamp(16px, 2.5vw, 40px)',
        height: '84px',
        borderBottom: transparent ? 'none' : '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logo_clara.png?v=2"
            alt="NUDE REST"
            width={130}
            height={54}
            priority
            style={{
              height: '36px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.6))'
            }}
          />
        </Link>

        {/* Desktop Links */}
        <nav className="header-nav-desktop" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(18px, 2.2vw, 36px)'
        }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11.5px',
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: isActive ? '#FFFFFF' : '#EDE8DF',
                  opacity: isActive ? 1 : 0.88,
                  textDecoration: 'none',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)',
                  transition: 'all 0.25s ease',
                  borderBottom: isActive ? '1.5px solid #FFFFFF' : '1.5px solid transparent',
                  paddingBottom: '4px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = isActive ? '1' : '0.88';
                  e.currentTarget.style.color = isActive ? '#FFFFFF' : '#EDE8DF';
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA + Cart Button */}
        <div className="header-right-desktop" style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {/* Shopping Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Abrir carrinho de compras"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              padding: '6px',
              filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.6))'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '0px',
                right: '-4px',
                backgroundColor: '#EDE8DF',
                color: '#161514',
                fontSize: '10px',
                fontWeight: 700,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 4px rgba(0,0,0,0.4)'
              }}>
                {totalItems}
              </span>
            )}
          </button>

          <a
            href="https://wa.me/351910800000?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor%20da%20NUDE%20REST."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              fontSize: '11px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.65)',
              borderRadius: '2px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              backgroundColor: 'rgba(18, 17, 16, 0.45)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FFFFFF';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.65)';
              e.currentTarget.style.backgroundColor = 'rgba(18, 17, 16, 0.45)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>FALAR CONNOSCO</span>
            <span style={{ fontSize: '13px' }}>→</span>
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
