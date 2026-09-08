'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Lock, Award, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#16100C',
      borderTop: '1px solid var(--border-subtle)',
      color: 'var(--text-muted)',
      paddingTop: '80px',
      paddingBottom: '40px'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '64px'
        }}>
          
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ position: 'relative', height: '40px', width: '200px' }}>
              <Image
                src="/logo.png"
                alt="NUDE REST"
                fill
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-muted)' }}>
              Atelier especializado na conceção e fabrico artesanal de macas ergonómicas personalizadas para clínicas de estética, spas, dermatologia e lash designers de elevado padrão.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--nude-linen)', fontSize: '12px', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Garantia Estrutural de 5 Anos em todas as peças</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '14px', color: 'var(--nude-alabaster)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
              Coleções & Modelos
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#catalogo" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Maca Nude Rest Royale (Anatómica)</a></li>
              <li><a href="#catalogo" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Maca Sculpt Arc (Design Curvo)</a></li>
              <li><a href="#catalogo" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Maca Studio Elétrica 3M</a></li>
              <li><a href="#catalogo" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Maca Minimalist Pro</a></li>
              <li><a href="#personalizacao" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Paleta de Cores Nude</a></li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 style={{ fontSize: '14px', color: 'var(--nude-alabaster)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
              Segurança & Apoio ao Cliente
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="var(--nude-linen)" />
                <span>WhatsApp: (11) 99999-9999</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} color="var(--nude-linen)" />
                <span>contacto@nuderest.com.br</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} color="var(--nude-linen)" />
                <span>Atelier & Showroom — Envio Assegurado</span>
              </li>
              <li><a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Termos de Garantia & Envio Seguro</a></li>
            </ul>
          </div>

          {/* Security & Payment Badges */}
          <div>
            <h4 style={{ fontSize: '14px', color: 'var(--nude-alabaster)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
              Certificações de Segurança
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Lock size={20} color="#4ADE80" />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nude-alabaster)' }}>SSL 256-Bit Encrypted</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>Ambiente 100% Protegido</div>
                </div>
              </div>

              <div style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Award size={20} color="var(--nude-linen)" />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nude-alabaster)' }}>Google Avaliações 4.9★</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-dim)' }}>Aprovado por profissionais</div>
                </div>
              </div>

              {/* Payment Summary */}
              <div style={{ marginTop: '8px' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginBottom: '6px' }}>
                  FORMAS DE PAGAMENTO ACEITES:
                </div>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--nude-linen)'
                }}>
                  <span style={{ padding: '4px 8px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '4px' }}>Pronto Pagamento (5% OFF)</span>
                  <span style={{ padding: '4px 8px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '4px' }}>Visa</span>
                  <span style={{ padding: '4px 8px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '4px' }}>Mastercard</span>
                  <span style={{ padding: '4px 8px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '4px' }}>Multibanco</span>
                  <span style={{ padding: '4px 8px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: '4px' }}>Até 12 Prestações</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '12px',
          color: 'var(--text-dim)'
        }}>
          <div>
            © 2026 NUDE REST MACAS PERSONALIZADAS LTDA. TODOS OS DIREITOS RESERVADOS. CNPJ: 00.000.000/0001-00
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>PALETA OFICIAL NUDE REST</span>
            <span>•</span>
            <div style={{ position: 'relative', width: '20px', height: '20px', filter: 'brightness(0) invert(1)', opacity: 0.7 }}>
              <Image src="/logotipo.png" alt="NR" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
