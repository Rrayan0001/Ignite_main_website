import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — IGNITE FITNESS Gym Dharwad',
  description: 'Terms of Service & Gym Facility Rules for Ignite Fitness Dharwad (Malmaddi and Gandhi Nagar branches).',
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <p className="label">Terms & Rules</p>
          <h1 className={styles.title}>TERMS OF <span className={styles.accent}>SERVICE</span>.</h1>
          <p className={styles.sub}>Last updated: July 23, 2026</p>
        </div>
      </section>

      <section className={styles.bodySection}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className={styles.contentBox}>
            <h2>1. Gym Membership & Access</h2>
            <p>
              Membership grants access to Ignite Fitness workout facilities in Dharwad during operational hours (Monday to Saturday, 6:00 AM to 11:00 PM). Members must re-rack free weights and follow gym safety etiquette.
            </p>

            <h2>2. 1-on-1 Personal Training</h2>
            <p>
              Personal training sessions are scheduled directly with your assigned certified coach. Cancellations or reschedules require a minimum 12-hour advance notice.
            </p>

            <h2>3. Ignite Cafe Etiquette</h2>
            <p>
              Ignite Cafe items (protein shakes, pre-workout beverages, macro meals) are available at Ignite Prime branch. Members are requested to consume beverages in designated seating lounge areas.
            </p>

            <h2>4. Safety & Injury Prevention</h2>
            <p>
              Members are encouraged to request biomechanical posture checks from on-duty trainers before attempting heavy max-effort lifts or high-load squats.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
