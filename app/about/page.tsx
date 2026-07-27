import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Dumbbell, Users, Target, Award, ArrowUpRight, Sparkles, Briefcase } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us — IGNITE FITNESS Gym Dharwad',
  description: 'Learn about Ignite Fitness Dharwad (Founded Jan 2025), our vision, state-of-the-art facilities, and founder Mr. Deepak Koneri.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent} data-aos="fade-up">
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>EST. JANUARY 2025</span>
          </div>
          <h1 className={styles.heroTitle}>
            WHERE STRENGTH MEETS <span className={styles.accent}>COMMUNITY</span>.
          </h1>
          <p className={styles.heroSub}>
            Welcome to IGNITE FITNESS — Dharwad’s premier destination for biomechanics, high-performance training, and complete personal transformation.
          </p>
        </div>
      </section>

      {/* Overview & Mission Section */}
      <section className="section">
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewText} data-aos="fade-right">
              <p className="label">About Ignite Fitness</p>
              <div className="gold-line" style={{ marginTop: 14, marginBottom: 24 }} />
              <h2 className="display-md" style={{ marginBottom: 20 }}>
                OUR MISSION IS <span className={styles.accent}>SIMPLE</span>.
              </h2>
              <p>
                Founded in <strong>January 2025</strong>, Ignite Fitness was established with a singular focus: to empower every individual to become the strongest, healthiest version of themselves.
              </p>
              <p>
                Whether you are a seasoned athlete, just starting your fitness journey, or somewhere in between, Ignite Fitness provides an invigorating, scientific, and supportive environment built for your goals.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className={styles.statsGrid} data-aos="fade-left">
              <div className={styles.statCard}>
                <span className={styles.statVal}>Jan 2025</span>
                <span className={styles.statLabel}>Founded</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statVal}>2</span>
                <span className={styles.statLabel}>PB Road Branches</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statVal}>4.9★</span>
                <span className={styles.statLabel}>Member Rating</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statVal}>60+kg</span>
                <span className={styles.statLabel}>Dumbbell Range</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.reasonsHeader} data-aos="fade-up">
            <p className="label">The Ignite Difference</p>
            <div className="neon-line" style={{ margin: '14px auto 20px' }} />
            <h2 className="display-md">
              WHY <span className={styles.accent}>CHOOSE US?</span>
            </h2>
          </div>

          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.reasonIconWrap}>
                <Dumbbell size={26} />
              </div>
              <h3 className={styles.reasonTitle}>State-of-the-Art Equipment</h3>
              <p className={styles.reasonDesc}>
                From free weights and Olympic platforms to the latest cardio machines, we’ve got everything you need for a complete full-body workout.
              </p>
            </div>

            <div className={styles.reasonCard} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.reasonIconWrap}>
                <Award size={26} />
              </div>
              <h3 className={styles.reasonTitle}>Experienced Trainers</h3>
              <p className={styles.reasonDesc}>
                A blend of certified and experienced coaches dedicated to guiding, motivating, and challenging you safely at every step of your journey.
              </p>
            </div>

            <div className={styles.reasonCard} data-aos="fade-up" data-aos-delay="300">
              <div className={styles.reasonIconWrap}>
                <Target size={26} />
              </div>
              <h3 className={styles.reasonTitle}>Variety of Classes</h3>
              <p className={styles.reasonDesc}>
                General Training, 1-on-1 Personal Training including HIIT, Heavy Strength, CrossFit functional training, and Cardio conditioning.
              </p>
            </div>

            <div className={styles.reasonCard} data-aos="fade-up" data-aos-delay="400">
              <div className={styles.reasonIconWrap}>
                <Users size={26} />
              </div>
              <h3 className={styles.reasonTitle}>Supportive Community</h3>
              <p className={styles.reasonDesc}>
                We pride ourselves on creating a welcoming, judgment-free atmosphere where individuals of all fitness levels can thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.visionBanner} data-aos="zoom-in">
            <p className="label" style={{ color: 'var(--accent-gold)' }}>OUR VISION</p>
            <h2 className={styles.visionTitle}>
              FITNESS IS NOT JUST ABOUT <span className={styles.goldAccent}>AESTHETICS</span>.
            </h2>
            <p className={styles.visionText}>
              We believe fitness is about mental strength, discipline, and overall well-being. Our vision is to create a space where individuals from all walks of life feel supported, inspired, and fully capable of achieving their highest goals.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Biography */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.founderGrid}>
            {/* Left Founder Profile */}
            <div className={styles.founderCard} data-aos="fade-right">
              <div className={styles.founderAvatar}>DK</div>
              <h3 className={styles.founderName}>Mr. Deepak Koneri</h3>
              <p className={styles.founderRole}>Founder & Owner · Ignite Fitness</p>
              
              <div className={styles.founderBadges}>
                <span className={styles.founderBadge}>Mechanical Engineering</span>
                <span className={styles.founderBadge}>16+ Yrs Corporate Leadership</span>
                <span className={styles.founderBadge}>Business & Operations</span>
              </div>
            </div>

            {/* Right Biography Content */}
            <div className={styles.founderBioText} data-aos="fade-left">
              <p className="label">Founder’s Biography</p>
              <div className="gold-line" style={{ marginTop: 14, marginBottom: 20 }} />
              <h2 className="display-md" style={{ marginBottom: 20 }}>
                FROM BOARDROOMS TO <span className={styles.accent}>BARBELLS</span>.
              </h2>

              <p>
                <strong>Mr. Deepak Koneri</strong>, a Mechanical Engineering graduate, spent 16 years building a successful corporate career across Business Development, Project Management, and Operations before deciding to turn a lifelong passion for entrepreneurship into a purpose-driven business.
              </p>

              <div className={styles.founderQuote}>
                “Fitness is not just physical—it is a way of life. Combining corporate discipline with passion creates an environment where positive transformation thrives.”
              </div>

              <p>
                Gaining extensive experience in leadership, strategic planning, and organizational growth laid a strong foundation for his next chapter in the Health and Wellness industry. Today, Mr. Deepak Koneri is the proud founder of IGNITE FITNESS, a space built on the core belief that strength, resilience, and health should be accessible to everyone.
              </p>

              <p>
                With a vision to build far more than just a gym, Mr. Deepak is focused on cultivating a supportive community that fosters positive transformation both inside and outside the training arena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaBox} data-aos="fade-up">
            <h2 className={styles.ctaTitle}>
              JOIN US <span className={styles.accent}>TODAY!</span>
            </h2>
            <p className={styles.ctaText}>
              No matter your age or fitness level, there’s a place for you at IGNITE FITNESS. Come in for a tour or try a free demo class. We’d love to meet you.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/branches" className="btn btn-primary" id="about-join-btn">
                <span>Book a Tour & Free Class</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline" id="about-contact-btn">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
