'use client';

import React, { useEffect } from 'react';

// Singleton observer to avoid creating 50+ observer instances
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, () => void>();

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined') return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            const cb = observerCallbacks.get(entry.target);
            if (cb) {
              cb();
              observerCallbacks.delete(entry.target);
            }
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '120px 0px 0px 0px',
        threshold: 0.01
      }
    );
  }
  return sharedObserver;
}

export const ScrollRevealInit: React.FC = () => {
  useEffect(() => {
    const observer = getSharedObserver();
    if (!observer) return;

    const elements = document.querySelectorAll('.reveal-on-scroll, [data-reveal]');
    elements.forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el);
      }
    });

    return () => {
      // Keep shared observer alive for unrevealed items, clean up elements
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
  style?: React.CSSProperties;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  style = {}
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = React.useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      element.classList.add('is-revealed');
      setIsRevealed(true);
      return;
    }

    const observer = getSharedObserver();
    if (!observer) {
      setIsRevealed(true);
      return;
    }

    observerCallbacks.set(element, () => {
      setIsRevealed(true);
    });
    observer.observe(element);

    return () => {
      observerCallbacks.delete(element);
      observer.unobserve(element);
    };
  }, []);

  let transformInitial = 'translateY(16px)';
  if (direction === 'down') transformInitial = 'translateY(-16px)';
  if (direction === 'left') transformInitial = 'translateX(18px)';
  if (direction === 'right') transformInitial = 'translateX(-18px)';
  if (direction === 'scale') transformInitial = 'scale(0.98)';

  return (
    <div
      ref={ref}
      className={`reveal-item ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'none' : transformInitial,
        transition: `opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isRevealed ? 'auto' : 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
};
