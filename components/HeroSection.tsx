'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, ArrowRight, Sparkles, Trophy, Users, ShieldCheck } from 'lucide-react';
import styles from './HeroSection.module.css';

const bgImages = [
  { src: '/hero-gym.png', alt: 'Ignite Fitness Gym Dharwad Main Arena' },
  { src: '/concept-gym.png', alt: 'Ignite Fitness Heavy Iron Strength Zone' },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Slideshow Background */}
      <div className={styles.bg}>
        {bgImages.map((img, index) => (
          <div
            key={img.src}
            className={`${styles.slideImage} ${index === currentSlide ? styles.slideActive : ''}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ))}
        <div className={styles.overlay} />
        <div className={styles.overlayGradient} />
      </div>

      {/* Main hero wrapper */}
      <div className={styles.mainWrapper}>
        {/* Top Ticker Tape */}
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {[
              'Strength Training',
              'Biomechanics',
              'Muscle Hypertrophy',
              'CrossFit Arena',
              '1-on-1 Personal Coaching',
              'PB Road Dharwad',
              'Strength Training',
              'Biomechanics',
              'Muscle Hypertrophy',
              'CrossFit Arena',
              '1-on-1 Personal Coaching',
              'PB Road Dharwad',
            ].map((word, i) => (
              <span key={i} className={styles.tickerItem}>
                {word} <Flame className={styles.tickerIcon} size={12} />
              </span>
            ))}
          </div>
        </div>

        {/* Central Content with Slide-In animation */}
        <div className={styles.content}>
          <div className={`label ${styles.eyebrow}`}>
            <Sparkles size={14} color="var(--accent-tomato)" />
            <span>Dharwad, Karnataka — Malmaddi & Gandhi Nagar</span>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.headlineLine}>IGNITE YOUR</span>
            <span className={styles.headlineLine}>
              POTENTIAL<span className={styles.tomatoWord}>.</span>
            </span>
          </h1>

          <p className={styles.subtext}>
            Dharwad's premier high-performance fitness club. Biomechanics-based personal training,
            heavy iron strength zones, and athletic transformation programs.
          </p>

          <div className={styles.ctas}>
            <Link href="/membership" className="btn btn-primary" id="hero-join-btn">
              <span>Join Ignite Fitness</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/concept" className="btn btn-outline" id="hero-concept-btn">
              <span>Explore Gym</span>
            </Link>
          </div>
        </div>

        {/* Bottom Stats Row with Slide-up Animation */}
        <div className={styles.statsRow}>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <ShieldCheck className={styles.statIcon} size={22} />
              <div className={styles.statInfo}>
                <span className={styles.statNum}>2</span>
                <span className={styles.statLabel}>Dharwad Branches</span>
              </div>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statCard}>
              <Trophy className={styles.statIcon} size={22} />
              <div className={styles.statInfo}>
                <span className={styles.statNum}>4.9★</span>
                <span className={styles.statLabel}>Member Rating</span>
              </div>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statCard}>
              <Users className={styles.statIcon} size={22} />
              <div className={styles.statInfo}>
                <span className={styles.statNum}>1000+</span>
                <span className={styles.statLabel}>Active Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
