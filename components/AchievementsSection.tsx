'use client';

import { Trophy, Award, Users, Star, ShieldCheck, Flame } from 'lucide-react';
import styles from './AchievementsSection.module.css';

const stats = [
  {
    icon: Trophy,
    val: '4.9★',
    label: 'Highest Rated Gym',
    sub: 'Google Member Reviews in Dharwad',
  },
  {
    icon: Users,
    val: '500+',
    label: 'Member Transformations',
    sub: 'Body composition & strength goals',
  },
  {
    icon: Award,
    val: '100%',
    label: 'Certified Coaches',
    sub: 'Biomechanics & Form Experts',
  },
  {
    icon: ShieldCheck,
    val: '60kg+',
    label: 'Heavy Iron Range',
    sub: 'Largest dumbbell selection in PB Road',
  },
];

const highlights = [
  {
    year: 'JAN 2025',
    title: 'Grand Launch of Malmaddi Main Branch',
    desc: 'Established Dharwad’s premier high-performance strength facility, featuring state-of-the-art biomechanical equipment, power platforms, and functional arenas.',
    badge: 'Flagship Launch',
  },
  {
    year: '2025 – 2026',
    title: 'Expansion: Ignite Prime (Gandhi Nagar)',
    desc: 'Successfully launched our second state-of-the-art location at Gandhi Nagar, expanding premier strength training and personal coaching across Dharwad.',
    badge: 'Network Expansion',
  },
  {
    year: 'COMMUNITY',
    title: 'Dharwad’s Premier Fitness Community',
    desc: 'Fostered an inclusive, high-energy environment for men and women of all fitness levels, setting the benchmark for gym culture and results in the region.',
    badge: 'Excellence Award',
  },
];

export default function AchievementsSection() {
  return (
    <section className={`section ${styles.section}`} id="achievements">
      <div className="container">
        {/* Header */}
        <div className={styles.header} data-aos="fade-up">
          <p className="label" style={{ color: '#FFD700' }}>OUR MILESTONES & RECOGNITION</p>
          <div className="gold-line" style={{ margin: '14px auto 20px' }} />
          <h2 className={styles.title}>
            ACHIEVEMENTS & <span className={styles.accent}>MILESTONES</span>.
          </h2>
          <p className={styles.sub}>
            From our founding in January 2025 by Mr. Deepak Koneri to becoming Dharwad’s premier fitness destination across PB Road.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((item, idx) => (
            <div key={idx} className={styles.statCard} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className={styles.statIcon}>
                <item.icon size={26} />
              </div>
              <span className={styles.statVal}>{item.val}</span>
              <span className={styles.statLabel}>{item.label}</span>
              <span className={styles.statSub}>{item.sub}</span>
            </div>
          ))}
        </div>

        {/* Key Highlights Grid */}
        <div className={styles.cardsGrid}>
          {highlights.map((card, idx) => (
            <div key={idx} className={styles.achievementCard} data-aos="fade-up" data-aos-delay={150 + idx * 100}>
              <div className={styles.badgeWrap}>
                <span className={styles.yearBadge}>{card.year}</span>
                <span style={{ color: '#FFD700', fontSize: '0.8rem', fontWeight: 600 }}>{card.badge}</span>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <div className={styles.cardFooter}>
                <Flame size={16} />
                <span>Ignite Fitness Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
