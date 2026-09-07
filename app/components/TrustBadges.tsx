'use client';

import React from 'react';
import { ShieldCheck, Lock, Palette, Truck } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const guarantees = [
    {
      icon: ShieldCheck,
      tag: 'SEGURANÇA TOTAL',
      title: '5 Anos de Garantia',
      description: 'Chassi reforçado em aço e madeira de reflorestamento com garantia estrutural vitalícia de 5 anos.'
    },
    {
      icon: Lock,
      tag: 'PAGAMENTO BLINDADO',
      title: 'Compra Protegida SSL',
      description: 'Criptografia de ponta a ponta de 256-bit com proteção total de dados e nota fiscal eletrônica.'
    },
    {
      icon: Palette,
      tag: 'EXCLUSIVIDADE ATELIÊ',
      title: 'Bordado com sua Marca',
      description: 'Grave o logotipo da sua clínica em alta definição com fios acetinados e paleta sob medida.'
    },
    {
      icon: Truck,
      tag: 'LOGÍSTICA PREMIUM',
      title: 'Envio com Seguro 100%',
      description: 'Embalagem em caixa reforçada com rastreamento em tempo real e seguro de carga em todo o Brasil.'
    }
  ];

  return (
    <section className="border-b" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container" style={{ padding: '48px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '32px'
        }}>
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '16px 0',
                  borderLeft: index > 0 ? '1px solid var(--border-subtle)' : 'none',
                  paddingLeft: index > 0 ? '24px' : '0'
                }}
                className="trust-item"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(236, 226, 216, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--nude-linen)'
                  }}>
                    <Icon size={18} />
                  </div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--nude-linen)'
                  }}>
                    {item.tag}
                  </span>
                </div>

                <h4 style={{ fontSize: '17px', color: 'var(--text-main)' }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .trust-item {
            border-left: none !important;
            padding-left: 0 !important;
            border-bottom: 1px solid var(--border-subtle);
            padding-bottom: 24px;
          }
          .trust-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
};
