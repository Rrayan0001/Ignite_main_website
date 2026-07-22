import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BranchesSection from '@/components/BranchesSection';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Branches — IGNITE FITNESS Gym Dharwad',
  description: 'Explore Ignite Fitness Malmaddi Branch & Ignite Prime (Gandhi Nagar Branch featuring Ignite Cafe) in Dharwad.',
};

export default function BranchesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent} data-aos="fade-up">
          <p className="label">Multi-Branch Fitness</p>
          <h1 className={styles.heroTitle}>
            OUR <span className={styles.accent}>BRANCHES</span>.
          </h1>
          <p className={styles.heroSub}>
            Two state-of-the-art gym locations on PB Road, Dharwad equipped for heavy strength training, CrossFit, and in-house nutrition.
          </p>
        </div>
      </section>

      {/* Branches List */}
      <BranchesSection showTitle={false} />

      <Footer />
    </main>
  );
}
