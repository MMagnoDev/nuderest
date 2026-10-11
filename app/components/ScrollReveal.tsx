'use client';

import React, { useEffect } from 'react';

export const ScrollRevealInit: React.FC = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.reveal-on-scroll, [data-reveal]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
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

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-revealed');
          observer.unobserve(element);
        }
      },
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.12
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  let transformInitial = 'translateY(36px)';
  if (direction === 'down') transformInitial = 'translateY(-36px)';
  if (direction === 'left') transformInitial = 'translateX(40px)';
  if (direction === 'right') transformInitial = 'translateX(-40px)';
  if (direction === 'scale') transformInitial = 'scale(0.94)';

  return (
    <div
      ref={ref}
      className={`reveal-item ${className}`}
      style={{
        opacity: 0,
        transform: transformInitial,
        transition: `opacity 0.95s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.95s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
};
