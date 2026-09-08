'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '8px'
    }}>
      {/* Speech Balloon Bubble */}
      {showTooltip && (
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          maxWidth: '260px',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px'
        }} className="animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: 'none',
              border: 'none',
              color: 'var(--text-dim)',
              cursor: 'pointer'
            }}
          >
            <X size={12} />
          </button>
          <div>
            <div style={{ fontSize: '11px', color: '#4ADE80', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
              ● Consultor Online
            </div>
            <div style={{ fontSize: '12px', color: '#F2EFE9', lineHeight: 1.4 }}>
              Dúvidas sobre personalização ou envio assegurado? Fale com o nosso especialista.
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20Macas%20Personalizadas%20NUDE%20REST."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#0A2412',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          position: 'relative'
        }}
        className="pulse-glow"
        aria-label="Atendimento no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};
