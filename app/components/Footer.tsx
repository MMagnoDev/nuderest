'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="editorial-footer" style={{
      backgroundColor: '#121110',
      color: '#EDE8DF',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: 'clamp(64px, 8vw, 96px)',
      paddingBottom: '40px',
      fontFamily: 'var(--font-sans)'
    }}>
      <div className="editorial-container">
        
        {/* Main Footer Grid */}
        <div className="editorial-footer-grid">
          
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              <Image
                src="/logo_clara.webp"
                alt="NUDE REST"
                width={130}
                height={54}
                style={{
                  height: '36px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </Link>
            <p style={{
              fontSize: '13.5px',
              lineHeight: 1.75,
              color: '#8E867C',
              maxWidth: '380px'
            }}>
              Atelier dedicado à conceção de marquesas ergonómicas de alta performance para espaços de estética, clínicas e dermatologia.
            </p>
            <div style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#EDE8DF',
              opacity: 0.8
            }}>
              Garantia Estrutural de 5 Anos
            </div>
          </div>

          {/* Navigation Column: Modelos */}
          <div>
            <h4 style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#EDE8DF',
              marginBottom: '20px'
            }}>
              Modelos & Coleções
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li>
                <Link href="/maca-modelo-1" style={{ color: '#8E867C', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8E867C')}>
                  Maca Sculpt Wave
                </Link>
              </li>
              <li>
                <Link href="/maca-modelo-2" style={{ color: '#8E867C', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8E867C')}>
                  Maca Royale Anatómica
                </Link>
              </li>
              <li>
                <Link href="/maca-sculpt-arc" style={{ color: '#8E867C', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8E867C')}>
                  Personalizador Sob Medida
                </Link>
              </li>
              <li>
                <Link href="/colecoes" style={{ color: '#8E867C', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8E867C')}>
                  Comparativo de Coleções
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column: O Atelier */}
          <div>
            <h4 style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#EDE8DF',
              marginBottom: '20px'
            }}>
              A Marca
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li>
                <Link href="/sobre" style={{ color: '#8E867C', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8E867C')}>
                  A Nossa História
                </Link>
              </li>
              <li>
                <Link href="/atelie" style={{ color: '#8E867C', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8E867C')}>
                  O Atelier & Processo
                </Link>
              </li>
              <li>
                <Link href="/contato" style={{ color: '#8E867C', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8E867C')}>
                  Atendimento & Encomendas
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column: Atendimento Concierge */}
          <div>
            <h4 style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#EDE8DF',
              marginBottom: '20px'
            }}>
              Contacto Privado
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li>
                <a href="https://wa.me/351910800000" target="_blank" rel="noopener noreferrer" style={{ color: '#8E867C', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8E867C')}>
                  WhatsApp: +351 910 800 000
                </a>
              </li>
              <li>
                <a href="mailto:contacto@nuderest.com" style={{ color: '#8E867C', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE8DF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#8E867C')}>
                  contacto@nuderest.com
                </a>
              </li>
              <li style={{ color: '#6A635A', fontSize: '12px' }}>
                Atendimento por marcação
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div style={{
          paddingTop: '28px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '11px',
          color: '#6A635A'
        }}>
          <div>
            © 2026 NUDE REST. Todos os direitos reservados.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Design Minimalista & Ergonomia Ativa</span>
            <span>•</span>
            <span>Envio Seguro</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
