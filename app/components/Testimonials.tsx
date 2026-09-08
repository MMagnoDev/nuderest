'use client';

import React from 'react';
import { REVIEWS } from '@/data/products';
import { Star, CheckCircle, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="section-pad border-b" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '56px'
        }}>
          <span className="badge-pill badge-nude" style={{ marginBottom: '16px' }}>
            <Sparkles size={12} />
            AUTORIDADE & PROVA SOCIAL
          </span>
          <h2 style={{ maxWidth: '750px', marginBottom: '16px' }}>
            O que dizem as maiores referências em <br />
            <span className="italic">estética e dermatologia</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--nude-linen)' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--nude-linen)" color="var(--nude-linen)" />
              ))}
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)' }}>
              Classificação 4.9 de 5.0 (Mais de 320 avaliações verificadas)
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--nude-linen)" color="var(--nude-linen)" />
                    ))}
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>
                    {rev.date}
                  </span>
                </div>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--nude-alabaster)',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  marginBottom: '24px'
                }}>
                  “{rev.comment}”
                </p>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h4 style={{ fontSize: '15px', color: 'var(--nude-alabaster)' }}>{rev.name}</h4>
                    <CheckCircle size={14} color="#4ADE80" />
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--nude-linen)' }}>{rev.role}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{rev.city} • {rev.maca}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
