'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/data/products';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-pad border-b" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '56px'
        }}>
          <span className="badge-pill badge-nude" style={{ marginBottom: '16px' }}>
            <HelpCircle size={12} />
            TRANSPARÊNCIA & SEGURANÇA
          </span>
          <h2 style={{ maxWidth: '750px', marginBottom: '16px' }}>
            Perguntas Frequentes & <br />
            <span className="italic">Termos de Garantia</span>
          </h2>
          <p className="body-text" style={{ maxWidth: '600px' }}>
            Tudo o que você precisa saber sobre a fabricação sob medida, envio assegurado e personalização da sua maca NUDE REST.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{
          maxWidth: '840px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: isOpen ? '1px solid var(--nude-linen)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'var(--text-main)'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.4 }}>
                    {item.question}
                  </span>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--nude-linen)' : 'var(--bg-surface-elevated)',
                    color: isOpen ? 'var(--nude-mocha-deep)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 28px 24px 28px',
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '16px'
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Banner */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            Ainda possui dúvidas específicas sobre medidas ou tecidos?
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20as%20Macas%20NUDE%20REST."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            style={{ gap: '8px', color: 'var(--nude-linen)', borderColor: 'var(--border-medium)' }}
          >
            <MessageCircle size={15} />
            <span>Falar com Concierge no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
