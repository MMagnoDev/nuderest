'use client';

import React, { useState, useEffect } from 'react';
import { RECENT_SALES } from '@/data/products';
import { CheckCircle2 } from 'lucide-react';

export const SocialProofToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setVisible(prev => {
        if (!prev) {
          setCurrentIndex(i => (i + 1) % RECENT_SALES.length);
          return true;
        } else {
          return false;
        }
      });
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const current = RECENT_SALES[currentIndex];

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      zIndex: 50,
      backgroundColor: 'rgba(16, 12, 9, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--border-medium)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 18px',
      boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      maxWidth: '320px',
      animation: 'fadeIn 0.35s ease forwards'
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'rgba(74, 222, 128, 0.15)',
        color: '#4ADE80',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <CheckCircle2 size={18} />
      </div>

      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--nude-alabaster)' }}>
          {current.name} <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>({current.city})</span>
        </div>
        <div style={{ fontSize: '11px', color: 'var(--nude-linen)' }}>
          Personalizou: <strong>{current.model}</strong>
        </div>
        <div style={{ fontSize: '10px', color: 'var(--text-dim)', marginTop: '2px' }}>
          {current.time} • Compra Verificada
        </div>
      </div>
    </div>
  );
};
