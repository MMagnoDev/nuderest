'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, Star, CheckCircle2 } from 'lucide-react';

interface HeroEcommerceProps {
  onExploreCatalog: () => void;
  onOpenCustomizer: () => void;
}

export const HeroEcommerce: React.FC<HeroEcommerceProps> = ({ onExploreCatalog, onOpenCustomizer }) => {
  return (
    <section className="section-hero border-b" style={{
      position: 'relative',
      backgroundColor: 'var(--bg-page)',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
        minHeight: '680px',
        width: '100%'
      }} className="hero-grid">
        
        {/* Left Visual Column */}
        <div style={{
          position: 'relative',
          backgroundColor: '#16100C',
          minHeight: '520px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px',
          overflow: 'hidden'
        }} className="hero-left-col border-r">
          
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.32,
            mixBlendMode: 'luminosity'
          }}>
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
              alt="NUDE REST — Macas Personalizadas de Alto Padrão"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, var(--nude-mocha-deep) 0%, rgba(30,23,19,0.5) 60%, rgba(30,23,19,0.9) 100%)'
          }} />

          {/* Monogram NR Stamp */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              position: 'relative',
              filter: 'brightness(0) invert(1)'
            }}>
              <Image
                src="/logotipo.png"
                alt="NR Monograma"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="badge-pill badge-nude">
              <Sparkles size={12} />
              COLEÇÃO ATELIÊ 2026
            </span>
          </div>

          {/* Quote Card */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            backgroundColor: 'rgba(46, 37, 31, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border-medium)',
            padding: '24px',
            borderRadius: 'var(--radius-md)',
            maxWidth: '380px'
          }}>
            <div style={{ display: 'flex', gap: '3px', marginBottom: '8px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="var(--nude-linen)" color="var(--nude-linen)" />
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--nude-alabaster)', fontStyle: 'italic', marginBottom: '10px', lineHeight: 1.5 }}>
              “A maca NUDE REST transformou o faturamento e a percepção de valor dos meus atendimentos em estética facial.”
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={14} color="#4ADE80" />
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Dra. Camila V. — Verificada</span>
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px 64px 64px 56px'
        }} className="hero-right-col">
          
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--nude-linen)'
            }}>
              ATELIÊ DE ALTA ERGONOMIA & MOBILIÁRIO CLÍNICO
            </span>
          </div>

          <h1 style={{ marginBottom: '24px', maxWidth: '640px' }}>
            Macas personalizadas <br />
            com o <span className="italic">prestígio</span> que sua clínica exige.
          </h1>

          <p className="p-lead" style={{ maxWidth: '580px', marginBottom: '36px' }}>
            Projetadas sob medida com curvatura anatômica de alívio postural, espuma D33 multi-camadas e gravação personalizada da sua marca. Conforto absoluto para o seu paciente e autoridade imediata para o seu espaço.
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}>
            <button
              onClick={onOpenCustomizer}
              className="btn btn-nude"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0 36px',
                height: '54px'
              }}
            >
              <span>Personalizar Minha Maca</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onExploreCatalog}
              className="btn btn-outline"
              style={{
                padding: '0 28px',
                height: '54px'
              }}
            >
              Explorar Modelos
            </button>
          </div>

          {/* Social Proof & Trust Badges Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '24px',
            paddingTop: '28px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--nude-alabaster)', fontWeight: 600 }}>
                1.800+
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Clínicas & Spas no Brasil
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--nude-alabaster)', fontWeight: 600 }}>
                5 Anos
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Garantia Estrutural Total
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--nude-linen)', fontWeight: 600 }}>
                4.9 / 5.0
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Avaliação de Profissionais
              </div>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-left-col {
            border-right: none !important;
            border-bottom: 1px solid var(--border-subtle);
            min-height: 420px !important;
            padding: 32px !important;
          }
          .hero-right-col {
            padding: 48px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
