'use client';

import React, { useState, useEffect } from 'react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('nuderest_cookie_consent');
    if (!consent) {
      // Small delay for smooth, non-intrusive appearance
      const timer = setTimeout(() => {
        setVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    setClosing(true);
    setTimeout(() => {
      localStorage.setItem('nuderest_cookie_consent', type);
      setVisible(false);
    }, 350);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Aviso de Privacidade e Cookies"
      style={{
        position: 'fixed',
        bottom: 'clamp(16px, 3vw, 28px)',
        right: 'clamp(16px, 3vw, 28px)',
        zIndex: 9999,
        maxWidth: '440px',
        width: 'calc(100% - clamp(32px, 6vw, 56px))',
        backgroundColor: 'rgba(28, 26, 24, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(236, 231, 222, 0.14)',
        borderRadius: '3px',
        padding: 'clamp(20px, 2.5vw, 28px)',
        boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.35)',
        color: '#EDE8DF',
        opacity: closing ? 0 : 1,
        transform: closing ? 'translateY(16px)' : 'translateY(0)',
        transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: 'var(--font-sans)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#C8A97E',
            display: 'inline-block'
          }}
        />
        <span
          style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#A39D93'
          }}
        >
          PRIVACIDADE & COOKIES
        </span>
      </div>

      <p
        style={{
          fontSize: '13px',
          lineHeight: 1.65,
          color: '#C7BFB5',
          marginBottom: '20px'
        }}
      >
        Utilizamos cookies essenciais e tecnologias semelhantes para garantir o funcionamento do nosso atelier digital, personalizar a sua navegação e aperfeiçoar os nossos serviços.
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap'
        }}
      >
        <button
          onClick={() => handleAccept('all')}
          style={{
            flex: '1 1 auto',
            minWidth: '130px',
            backgroundColor: '#FAF9F6',
            color: '#1C1A18',
            border: 'none',
            borderRadius: '2px',
            padding: '12px 20px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background-color 0.25s ease, transform 0.2s ease',
            textAlign: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#EAE6DF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FAF9F6';
          }}
        >
          Aceitar Todos
        </button>

        <button
          onClick={() => handleAccept('essential')}
          style={{
            flex: '1 1 auto',
            minWidth: '130px',
            backgroundColor: 'transparent',
            color: '#EDE8DF',
            border: '1px solid rgba(236, 231, 222, 0.25)',
            borderRadius: '2px',
            padding: '11px 18px',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'border-color 0.25s ease, color 0.25s ease',
            textAlign: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#EDE8DF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(236, 231, 222, 0.25)';
          }}
        >
          Apenas Essenciais
        </button>
      </div>
    </aside>
  );
}
