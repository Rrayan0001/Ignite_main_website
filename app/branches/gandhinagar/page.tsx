import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowLeft, Flame, Coffee, ShieldCheck, Users } from 'lucide-react';
import {
  BRANCH_2_ADDRESS,
  BRANCH_2_MAP_EMBED,
  PHONE_NUMBER,
  PHONE_TEL,
  OPERATING_HOURS_WEEKDAY,
  OPERATING_HOURS_SUNDAY,
  CAFE_HOURS,
} from '@/lib/constants';
import styles from './page.module.css';

export const metadata = {
  title: 'Ignite Prime (Gandhi Nagar) — IGNITE FITNESS Gym Dharwad',
  description: 'Visit Ignite Prime in Gandhi Nagar, Dharwad. CrossFit arena, in-house Ignite Cafe, and 1-on-1 personal training.',
};

export default function GandhinagarBranchPage() {
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
          <p className="label">Branch 2 · Ignite Prime</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.accent}>IGNITE PRIME</span>.
          </h1>
          <p className={styles.heroSub}>
            Our premium facility in Gandhi Nagar featuring CrossFit, an in-house nutrition cafe, and dedicated 1-on-1 personal training.
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
                <p className={styles.infoCardText}>{BRANCH_2_ADDRESS}</p>
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

              {/* Cafe Hours */}
              <div className={styles.infoCard} data-aos="fade-up" data-aos-delay="300">
                <div className={styles.infoCardHeader}>
                  <Coffee size={20} color="var(--accent-tomato)" />
                  <h3 className={styles.infoCardTitle}>IGNITE CAFE HOURS</h3>
                </div>
                <p className={styles.infoCardText}>{CAFE_HOURS}</p>
              </div>
            </div>

            {/* Right Column: Map & Features */}
            <div className={styles.mapColumn}>
              <div className={styles.mapWrap} data-aos="fade-up" data-aos-delay="100">
                <iframe
                  src={BRANCH_2_MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Ignite Prime Gandhi Nagar Map"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className={styles.featuresSection} data-aos="fade-up">
            <h2 className={styles.featuresTitle}>FACILITY <span className={styles.accent}>FEATURES</span></h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <Flame size={28} color="var(--accent-tomato)" />
                <h4 className={styles.featureTitle}>CrossFit & High-Intensity Arena</h4>
                <p className={styles.featureDesc}>Full CrossFit rig, ropes, sleds, and space for high-intensity group workouts.</p>
              </div>
              <div className={styles.featureCard}>
                <Coffee size={28} color="var(--accent-tomato)" />
                <h4 className={styles.featureTitle}>In-house Ignite Cafe</h4>
                <p className={styles.featureDesc}>Protein shakes, pre-workout brews, cold-pressed juices & post-workout macro meals.</p>
              </div>
              <div className={styles.featureCard}>
                <ShieldCheck size={28} color="var(--accent-tomato)" />
                <h4 className={styles.featureTitle}>1-on-1 PT Suite</h4>
                <p className={styles.featureDesc}>Dedicated biomechanics-focused personal training with certified coaches.</p>
              </div>
              <div className={styles.featureCard}>
                <Users size={28} color="var(--accent-tomato)" />
                <h4 className={styles.featureTitle}>Group Classes</h4>
                <p className={styles.featureDesc}>Scheduled HIIT, functional fitness, and mobility classes throughout the day.</p>
              </div>
            </div>
          </div>

          {/* Cafe Spotlight */}
          <div className={styles.cafeSpotlight} data-aos="fade-up">
            <div className={styles.cafeSpotlightHeader}>
              <Coffee size={24} color="var(--accent-tomato)" />
              <h3 className={styles.cafeSpotlightTitle}>IGNITE CAFE — IN-HOUSE NUTRITION</h3>
            </div>
            <p className={styles.cafeSpotlightText}>
              Fuel your workouts with our exclusive in-house cafe. From pre-workout energy drinks to post-workout recovery meals, 
              Ignite Cafe serves macro-balanced nutrition crafted for athletes. Protein shakes, cold-pressed juices, healthy bowls, 
              and more — all available exclusively inside Ignite Prime.
            </p>
          </div>

          {/* CTA */}
          <div className={styles.ctaSection} data-aos="fade-up">
            <h2 className={styles.ctaTitle}>READY TO <span className={styles.accent}>JOIN</span>?</h2>
            <p className={styles.ctaText}>
              Start your fitness journey at Ignite Prime (Gandhi Nagar Branch). Connect with us directly on WhatsApp or call our desk.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/918197917330?text=Hi%20Ignite%20Fitness%20Dharwad%2C%20I%20want%20to%20join%20the%20Gandhi%20Nagar%20Branch."
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
