'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, HeartPulse, Layers, Droplets, Check } from 'lucide-react';

export const MaterialCraft: React.FC = () => {
  return (
    <section id="ergonomia" className="section-pad border-b" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <span className="badge-pill badge-nude" style={{ marginBottom: '16px' }}>
            <Sparkles size={12} />
            ENGENHARIA ERGONÔMICA & ARTESANATO
          </span>
          <h2 style={{ maxWidth: '800px', marginBottom: '20px' }}>
            A ciência do <span className="italic">conforto supremo</span> e durabilidade hospitalar
          </h2>
          <p className="body-text" style={{ maxWidth: '640px' }}>
            Mais do que uma maca, uma peça de design arquitetônico que garante que seus pacientes relaxem profundamente durante procedimentos de 2 a 5 horas, sem tensão na coluna.
          </p>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          {/* Card 1 */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(236, 226, 216, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--nude-linen)'
            }}>
              <HeartPulse size={22} />
            </div>
            <h3 style={{ fontSize: '22px', color: 'var(--nude-alabaster)' }}>Alívio Lombar Ativo</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Curvatura inspirada na fisioterapia postural que acomoda a coluna em ângulo zero de pressão, prevenindo a inquietação e desconforto das clientes.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#4ADE80" /> Angulação perfeita para Lash e Micropigmentação
              </li>
              <li style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#4ADE80" /> Encaixe cervical macio que não cansa o pescoço
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(236, 226, 216, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--nude-linen)'
            }}>
              <Layers size={22} />
            </div>
            <h3 style={{ fontSize: '22px', color: 'var(--nude-alabaster)' }}>Espuma D33 Ultra Soft</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Construção multicamadas com espuma de densidade progressiva que oferece sustentação ideal sem perder a maciez de uma cama de hotel 5 estrelas.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#4ADE80" /> Não deforma com o tempo nem cria sulcos
              </li>
              <li style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#4ADE80" /> Camada viscoelástica termossensível
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(236, 226, 216, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--nude-linen)'
            }}>
              <Droplets size={22} />
            </div>
            <h3 style={{ fontSize: '22px', color: 'var(--nude-alabaster)' }}>Couro Náutico Hospitalar</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Superfície nobre com tratamento antimicrobiano, impermeável a óleos, pigmentos e resistente à assepsia constante com álcool 70%.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#4ADE80" /> Toque aveludado e acetinado fosco
              </li>
              <li style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="#4ADE80" /> Costuras duplas com linha náutica de alta resistência
              </li>
            </ul>
          </div>
        </div>

        {/* Editorial Visual Composition */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden'
        }} className="craft-editorial-box">
          <div style={{ position: 'relative', minHeight: '340px' }}>
            <Image
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800"
              alt="Materiais Nobres NUDE REST"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{
            padding: '48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--nude-linen)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              PRODUÇÃO SOB ENCOMENDA
            </span>
            <h3 style={{ fontSize: '28px', color: 'var(--nude-alabaster)', marginBottom: '16px' }}>
              Cada maca é fabricada individualmente com seu nome
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '24px' }}>
              Não produzimos em massa. Cada estrutura em aço carbono ou madeira maciça de lei é calibrada manualmente e finalizada com o bordado personalizado da sua marca registrada.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#catalogo" className="btn btn-nude btn-sm">
                Personalizar Agora
              </a>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          .craft-editorial-box {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
