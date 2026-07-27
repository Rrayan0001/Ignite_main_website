'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { lenisRef } from '@/lib/lenisInstance';

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    const id = requestAnimationFrame(() => {
      html.style.scrollBehavior = prev;
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
