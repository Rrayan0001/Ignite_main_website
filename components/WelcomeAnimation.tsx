'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { lenisRef } from '@/lib/lenisInstance';
import styles from './WelcomeAnimation.module.css';

const BRAND = 'IGNITE'.split('');

function unlockScroll() {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  lenisRef.current?.start();
}

export default function WelcomeAnimation() {
  const [phase, setPhase] = useState<
    'spark' | 'ignite' | 'reveal' | 'hold' | 'exit' | 'done'
  >('spark');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    lenisRef.current?.stop();

    const timers = [
      setTimeout(() => setPhase('ignite'), 450),
      setTimeout(() => setPhase('reveal'), 950),
      setTimeout(() => setPhase('exit'), 2100),
      setTimeout(() => {
        setPhase('done');
        unlockScroll();
      }, 2750),
    ];

    return () => {
      timers.forEach(clearTimeout);
      unlockScroll();
    };
  }, []);

  if (phase === 'done') return null;

  const ignited = phase === 'ignite' || phase === 'reveal' || phase === 'exit';
  const exiting = phase === 'exit';

  return (
    <div
      className={`${styles.root} ${exiting ? styles.rootExit : ''}`}
      aria-hidden="true"
      data-phase={phase}
    >
      <div className={styles.vignette} />
      <div className={styles.gridFloor} />
      <div className={`${styles.flameColumn} ${ignited ? styles.flameColumnOn : ''}`} />
      <div className={styles.spark} />
      <div className={`${styles.igniteFlash} ${ignited ? styles.igniteFlashOn : ''}`} />
      <div className={`${styles.shockwave} ${styles.shockwave1} ${ignited ? styles.shockwaveOn : ''}`} />
      <div className={`${styles.shockwave} ${styles.shockwave2} ${ignited ? styles.shockwaveOn : ''}`} />
      <div className={`${styles.shockwave} ${styles.shockwave3} ${ignited ? styles.shockwaveOn : ''}`} />
      <div className={`${styles.heatHaze} ${ignited ? styles.heatHazeOn : ''}`} />

      <div className={styles.particles}>
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${(i * 1.7) % 100}%`,
              animationDelay: `${(i * 0.06) % 2}s`,
              animationDuration: `${1.6 + (i * 0.18) % 1.8}s`,
              width: `${2 + (i % 5)}px`,
              height: `${2 + (i % 5)}px`,
              ['--drift' as string]: `${(i % 2 === 0 ? -1 : 1) * (10 + (i % 5) * 8)}px`,
            }}
          />
        ))}
      </div>

      <div className={`${styles.streak} ${styles.streakLeft} ${ignited ? styles.streakOn : ''}`} />
      <div className={`${styles.streak} ${styles.streakRight} ${ignited ? styles.streakOn : ''}`} />

      <div className={styles.eq}>
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className={styles.eqBar} style={{ animationDelay: `${i * 0.09}s` }} />
        ))}
      </div>

      <div className={styles.center}>
        <div className={styles.logoImgWrap}>
          <div className={`${styles.logoGlowRing} ${ignited ? styles.logoGlowRingOn : ''}`} />
          <div className={styles.logoSlam}>
            <Image
              src="/bg_remove_logo.png"
              alt="IGNITE FITNESS"
              width={130}
              height={130}
              priority
              className={styles.logoImg}
            />
          </div>
        </div>

        <div className={styles.logoTextWrap}>
          {BRAND.map((ch, i) => (
            <span
              key={i}
              className={`${styles.logoChar} ${ch === ' ' ? styles.space : ''}`}
              style={{ animationDelay: `${1.0 + i * 0.045}s` }}
            >
              {ch}
            </span>
          ))}
        </div>

        <div className={`${styles.rule} ${ignited ? styles.ruleOn : ''}`} />
      </div>

      <div className={`${styles.curtainTop} ${exiting ? styles.curtainTopExit : ''}`} />
      <div className={`${styles.curtainBottom} ${exiting ? styles.curtainBottomExit : ''}`} />
      <div className={`${styles.curtainStreak} ${exiting ? styles.curtainStreakOn : ''}`} />
    </div>
  );
}
