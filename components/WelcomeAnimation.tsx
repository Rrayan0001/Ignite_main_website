'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './WelcomeAnimation.module.css';

export default function WelcomeAnimation() {
  const [phase, setPhase] = useState<'presenting' | 'unmask' | 'done'>('presenting');

  useEffect(() => {
    // 0ms - 1800ms: All text, logo & embers animate immediately from frame 0
    // At 1800ms: Unmasking curtain split begins
    const t1 = setTimeout(() => setPhase('unmask'), 1800);

    // At 2500ms: Complete and unmount from DOM
    const t2 = setTimeout(() => setPhase('done'), 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`${styles.root} ${phase === 'unmask' ? styles.rootExit : ''}`} aria-hidden="true">
      {/* Background grid texture & ambient aura */}
      <div className={styles.gridOverlay} />
      <div className={styles.fireAura} />

      {/* Split curtain panels for unmasking reveal */}
      <div className={`${styles.curtainTop} ${phase === 'unmask' ? styles.curtainTopExit : ''}`} />
      <div className={`${styles.curtainBottom} ${phase === 'unmask' ? styles.curtainBottomExit : ''}`} />

      {/* Ember particles active from frame 0 */}
      <div className={styles.particles}>
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${2 + (i * 4.2) % 96}%`,
              animationDelay: `${(i * 0.08) % 1.2}s`,
              animationDuration: `${1.4 + (i * 0.12) % 1}s`,
              width: `${3 + (i % 4)}px`,
              height: `${3 + (i % 4)}px`,
            }}
          />
        ))}
      </div>

      {/* Horizontal laser streak */}
      <div className={styles.streak} />

      {/* Center Stage — All elements visible & animating immediately */}
      <div className={styles.center}>
        {/* Transparent winged torch logo */}
        <div className={styles.logoImgWrap}>
          <div className={styles.logoGlowRing} />
          <Image
            src="/bg_remove_logo.png"
            alt="IGNITE FITNESS"
            width={130}
            height={130}
            priority
            className={styles.logoImg}
          />
        </div>

        {/* Brand Name Text */}
        <div className={styles.logoTextWrap}>
          <span className={styles.logoIgnite}>IGNITE</span>
          <span className={styles.logoFitness}>FITNESS</span>
        </div>

        {/* Glowing laser rule line */}
        <div className={styles.rule} />

        {/* Subtitle */}
        <p className={styles.tagline}>
          BIOMECHANICS · HEAVY IRON · 1-ON-1 COACHING
        </p>

        {/* Location badge */}
        <div className={styles.locationBadge}>
          <span>PB ROAD, DHARWAD</span>
          <span className={styles.badgeDot}>✦</span>
          <span>MALMADDI & GANDHI NAGAR</span>
        </div>
      </div>
    </div>
  );
}
