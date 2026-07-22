import TrainersSection from '@/components/TrainersSection';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Certified Trainers — IGNITE FITNESS Gym Dharwad',
  description: 'Meet certified 1-on-1 personal trainers at Ignite Fitness Dharwad specializing in biomechanics, posture, hypertrophy, and fat loss.',
};

export default function TrainersPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent} data-aos="fade-up">
          <p className="label">Certified Fitness Professionals</p>
          <h1 className={styles.heroTitle}>
            OUR <span className={styles.accent}>COACHES</span>.
          </h1>
          <p className={styles.heroSub}>
            Dedicated 1-on-1 personal trainers specializing in form correction, biomechanics, and goal transformation across our Dharwad branches.
          </p>
        </div>
      </section>

      <TrainersSection />
    </main>
  );
}
