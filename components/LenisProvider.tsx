'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { lenisRef } from '@/lib/lenisInstance';
import 'lenis/dist/lenis.css';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      anchors: { offset: -80 },
      autoRaf: true,
    });

    lenisRef.current = lenis;

    // If welcome intro still has body locked, wait until it's unlocked
    if (document.body.style.overflow === 'hidden') {
      lenis.stop();
      const poll = window.setInterval(() => {
        if (document.body.style.overflow !== 'hidden') {
          lenis.start();
          window.clearInterval(poll);
        }
      }, 100);
      // Safety: always unlock after 4s max
      window.setTimeout(() => {
        window.clearInterval(poll);
        document.body.style.overflow = '';
        lenis.start();
      }, 4000);
    }

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
