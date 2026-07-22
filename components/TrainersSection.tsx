import Image from 'next/image';
import { Award, ShieldCheck, Dumbbell, Flame } from 'lucide-react';
import styles from './TrainersSection.module.css';

const trainers = [
  {
    id: 't-1',
    name: 'Coach Vikram Patil',
    role: 'Head Biomechanics Coach',
    branch: 'Malmaddi & Gandhi Nagar',
    exp: '8+ Years Exp',
    spec: ['Biomechanics', 'Posture Correction', 'Heavy Strength'],
    img: '/hero-gym.png',
  },
  {
    id: 't-2',
    name: 'Coach Sneha Kulkarni',
    role: 'CrossFit & HIIT Lead',
    branch: 'Ignite Prime (Gandhi Nagar)',
    exp: '6+ Years Exp',
    spec: ['CrossFit Arena', 'Fat Loss', 'Metabolic Conditioning'],
    img: '/concept-gym.png',
  },
  {
    id: 't-3',
    name: 'Coach Aniket Joshi',
    role: 'Hypertrophy Specialist',
    branch: 'Malmaddi Branch',
    exp: '7+ Years Exp',
    spec: ['Muscle Hypertrophy', 'Powerlifting', 'Diet Coaching'],
    img: '/hero-gym.png',
  },
];

export default function TrainersSection() {
  return (
    <section className={`section ${styles.section}`} id="trainers">
      <div className="container">
        <div className={styles.header}>
          <p className="label">
            <Award size={14} color="var(--accent-tomato)" />
            <span>Certified Fitness Coaching</span>
          </p>
          <div className="neon-line" style={{ marginTop: 16 }} />
          <h2 className="display-md" style={{ marginTop: 8 }}>
            MEET OUR <span style={{ color: 'var(--accent-tomato)' }}>TRAINERS</span>.
          </h2>
          <p className="body-lg" style={{ maxWidth: 560, marginTop: 12 }}>
            Dedicated 1-on-1 certified trainers specializing in form correction, biomechanics, and goal transformation.
          </p>
        </div>

        <div className={styles.grid}>
          {trainers.map((t) => (
            <div key={t.id} className={styles.card} id={`trainer-${t.id}`}>
              <div className={styles.imgWrap}>
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.imgOverlay} />
                <span className={styles.expBadge}>{t.exp}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.branchTag}>{t.branch}</div>
                <h3 className={styles.trainerName}>{t.name}</h3>
                <p className={styles.trainerRole}>{t.role}</p>

                <div className={styles.specs}>
                  {t.spec.map((s) => (
                    <span key={s} className={styles.specTag}>
                      <ShieldCheck size={12} /> {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
