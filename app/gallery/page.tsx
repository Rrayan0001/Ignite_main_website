import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gym & Ignite Cafe Gallery — IGNITE FITNESS Dharwad',
  description: 'View photos of Ignite Fitness Gym Dharwad workout zones, heavy dumbbells, CrossFit arena, and Ignite Cafe.',
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <p className="label">Photo Gallery</p>
          <h1 className={styles.heroTitle}>
            VISUAL <span className={styles.accent}>GALLERY</span>.
          </h1>
          <p className={styles.heroSub}>
            Take a visual tour of our Dharwad gym facilities, workout arenas, and the in-house Ignite Cafe.
          </p>
        </div>
      </section>

      <GallerySection />

      <Footer />
    </main>
  );
}
