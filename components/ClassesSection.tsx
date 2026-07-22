'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { UserCheck, Zap, Dumbbell, Flame, Utensils, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import styles from './ClassesSection.module.css';

const programs = [
  {
    id: 'pt',
    name: '1-on-1 Personal Training',
    type: 'Elite Coaching',
    intensity: 'Very High',
    duration: 'Customized',
    schedule: 'Mon – Sat',
    Icon: UserCheck,
    color: '#FF3B30',
    desc: 'Dedicated certified coaching focused on posture, biomechanics, progressive overload, and goal achievement.',
  },
  {
    id: 'transformation',
    name: 'Weight Loss & Transformation',
    type: 'Body Sculpting',
    intensity: 'High',
    duration: '60 min',
    schedule: 'Daily',
    Icon: Zap,
    color: '#FF6961',
    desc: 'Tailored cardio + nutrition programs engineered for fat loss, metabolic conditioning, and physique renewal.',
  },
  {
    id: 'hypertrophy',
    name: 'Hypertrophy & Muscle Building',
    type: 'Strength Training',
    intensity: 'Very High',
    duration: '75 min',
    schedule: 'Mon – Sat',
    Icon: Dumbbell,
    color: '#FF3B30',
    desc: 'Structured hypertrophy programs targeting maximum muscle gain, powerlifter strength, and muscle density.',
  },
  {
    id: 'functional',
    name: 'Functional & HIIT Conditioning',
    type: 'CrossFit Arena',
    intensity: 'High',
    duration: '45 min',
    schedule: 'Mon, Wed, Fri',
    Icon: Flame,
    color: '#FF8080',
    desc: 'High-intensity arena conditioning with battle ropes, kettlebells, slam balls, and TRX for cardiovascular stamina.',
  },
  {
    id: 'nutrition',
    name: 'Diet & Nutrition Coaching',
    type: 'Wellness Care',
    intensity: 'Medium',
    duration: 'Consultation',
    schedule: 'Flexible',
    Icon: Utensils,
    color: '#FFA384',
    desc: 'Customized meal plans aligned with training schedules to fuel muscle growth and accelerate recovery.',
  },
];

const intensityColors: Record<string, string> = {
  'Medium': '#FFA384',
  'High': '#FF6961',
  'Very High': '#FF3B30',
};

export default function ClassesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' });
  };

  return (
    <section className={`section ${styles.section}`} id="classes">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="label" data-aos="fade-right">Training Programs</p>
            <div className="neon-line" style={{ marginTop: 16 }} data-aos="fade-right" data-aos-delay="100" />
            <h2 className="display-md" style={{ marginTop: 8 }} data-aos="fade-right" data-aos-delay="200">
              EXPLORE OUR <span style={{ color: 'var(--accent-tomato)' }}>PROGRAMS</span>.
            </h2>
          </div>
          <div className={styles.controls} data-aos="zoom-in" data-aos-delay="300">
            <button className={styles.arrow} onClick={() => scroll('left')} aria-label="Scroll left" id="classes-scroll-left">
              <ChevronLeft size={20} />
            </button>
            <button className={styles.arrow} onClick={() => scroll('right')} aria-label="Scroll right" id="classes-scroll-right">
              <ChevronRight size={20} />
            </button>
            <Link href="/classes" className="btn btn-outline" id="classes-view-all-btn">
              View All Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Scrollable track */}
      <div className={styles.trackWrapper}>
        <div className={styles.track} ref={trackRef}>
          {programs.map((cls, i) => (
            <div key={cls.id} className={`${styles.card} card-press`} id={`program-${cls.id}`} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className={styles.cardHeader} style={{ borderColor: cls.color }}>
                <div className={styles.classIcon}>
                  <cls.Icon size={24} color={cls.color} />
                </div>
                <span className={styles.classType}>{cls.type}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.className}>{cls.name}</h3>
                <p className={styles.classDesc}>{cls.desc}</p>
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Duration</span>
                    <span className={styles.metaValue}>{cls.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Schedule</span>
                    <span className={styles.metaValue}>{cls.schedule}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Intensity</span>
                    <span className={styles.metaValue} style={{ color: intensityColors[cls.intensity] }}>
                      {cls.intensity}
                    </span>
                  </div>
                </div>
                <Link href="/contact" className={styles.bookBtn} id={`book-${cls.id}`}>
                  <span>Enquire Program</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
