import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowLeft, ShieldCheck, Flame, Dumbbell, Lock } from 'lucide-react';
import {
  BRANCH_1_ADDRESS,
  BRANCH_1_MAP_EMBED,
  PHONE_NUMBER,
  PHONE_TEL,
  OPERATING_HOURS_WEEKDAY,
  OPERATING_HOURS_SUNDAY,
} from '@/lib/constants';
import styles from './page.module.css';

export const metadata = {
  title: 'Malmaddi Branch (Main) — IGNITE FITNESS Gym Dharwad',
  description: 'Visit the main Ignite Fitness branch in Malmaddi, Dharwad. Heavy iron, Olympic lifting platforms, cardio suite, and more.',
};

export default function MalmaddiBranchPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent} data-aos="fade-up">
          <Link href="/branches" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to Branches</span>
          </Link>
          <p className="label">Branch 1 · Main Facility</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.accent}>MALMADDI</span> BRANCH.
          </h1>
          <p className={styles.heroSub}>
            Our flagship facility on PB Road — built for serious lifters, athletes, and anyone committed to real strength training.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className={styles.detailsSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column: Info */}
            <div className={styles.infoColumn}>
              {/* Address */}
              <div className={styles.infoCard} data-aos="fade-up">
                <div className={styles.infoCardHeader}>
                  <MapPin size={20} color="var(--accent-tomato)" />
                  <h3 className={styles.infoCardTitle}>ADDRESS</h3>
                </div>
                <p className={styles.infoCardText}>{BRANCH_1_ADDRESS}</p>
              </div>

              {/* Phone */}
              <div className={styles.infoCard} data-aos="fade-up" data-aos-delay="100">
                <div className={styles.infoCardHeader}>
                  <Phone size={20} color="var(--accent-tomato)" />
                  <h3 className={styles.infoCardTitle}>CONTACT</h3>
                </div>
                <a href={PHONE_TEL} className={styles.phoneLink}>{PHONE_NUMBER}</a>
              </div>

              {/* Hours */}
              <div className={styles.infoCard} data-aos="fade-up" data-aos-delay="200">
                <div className={styles.infoCardHeader}>
                  <Clock size={20} color="var(--accent-tomato)" />
                  <h3 className={styles.infoCardTitle}>OPERATING HOURS</h3>
                </div>
                <p className={styles.infoCardText}>{OPERATING_HOURS_WEEKDAY}</p>
                <p className={styles.infoCardText}>{OPERATING_HOURS_SUNDAY}</p>
              </div>
            </div>

            {/* Right Column: Map & Features */}
            <div className={styles.mapColumn}>
              <div className={styles.mapWrap} data-aos="fade-up" data-aos-delay="100">
                <iframe
                  src={BRANCH_1_MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Malmaddi Branch Google Map"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className={styles.featuresSection} data-aos="fade-up">
            <h2 className={styles.featuresTitle}>FACILITY <span className={styles.accent}>FEATURES</span></h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <ShieldCheck size={28} color="var(--accent-tomato)" />
                <h4 className={styles.featureTitle}>Heavy Iron & Free Weights</h4>
                <p className={styles.featureDesc}>Dumbbells up to 60kg+, Olympic bars, and bumper plates for serious strength work.</p>
              </div>
              <div className={styles.featureCard}>
                <Flame size={28} color="var(--accent-tomato)" />
                <h4 className={styles.featureTitle}>Olympic Lifting Platforms</h4>
                <p className={styles.featureDesc}>Dedicated platforms and cages for squats, deadlifts, and Olympic lifts.</p>
              </div>
              <div className={styles.featureCard}>
                <Dumbbell size={28} color="var(--accent-tomato)" />
                <h4 className={styles.featureTitle}>Cardio Suite</h4>
                <p className={styles.featureDesc}>Treadmills, rowers, assault bikes, and more for conditioning work.</p>
              </div>
              <div className={styles.featureCard}>
                <Lock size={28} color="var(--accent-tomato)" />
                <h4 className={styles.featureTitle}>Secure Lockers</h4>
                <p className={styles.featureDesc}>Individual lockers to keep your belongings safe during your workout.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaSection} data-aos="fade-up">
            <h2 className={styles.ctaTitle}>READY TO <span className={styles.accent}>JOIN</span>?</h2>
            <p className={styles.ctaText}>
              Start your fitness journey at Malmaddi Branch. Connect with us directly on WhatsApp or call our desk.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/918197917330?text=Hi%20Ignite%20Fitness%20Dharwad%2C%20I%20want%20to%20join%20the%20Malmaddi%20Branch."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <a href="tel:+918197917330" className="btn btn-outline">
                <span>Call +91 81979 17330</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
