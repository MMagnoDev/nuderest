'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // 2. IntersectionObserver for Smooth Scroll Fade-in Effects
    const handleScrollFade = () => {
      const elements = document.querySelectorAll('.fade-on-scroll, section:not(.section-hero)');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      elements.forEach((el) => {
        el.classList.add('fade-on-scroll');
        observer.observe(el);
      });

      return observer;
    };

    const observer = handleScrollFade();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      observer?.disconnect();
    };
  }, []);

  return null;
};
