import type { Metadata } from 'next';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Training Programs — IGNITE FITNESS Gym Dharwad',
  description: 'Explore 1-on-1 Personal Training, Weight Loss, Hypertrophy, CrossFit Functional Arena, and Diet Coaching at Ignite Fitness Dharwad.',
};

const programsList = [
  {
    title: '1-on-1 Personal Training',
    tag: 'Elite Coaching',
    icon: '🏋️',
    desc: 'Dedicated certified personal coaching focusing on posture assessment, biomechanics, progressive overload, and goal achievement.',
    highlights: ['Bio-mechanical movement check', 'Customized workout programming', 'Injury prevention protocol', 'Direct trainer accountability'],
  },
  {
    title: 'Weight Loss & Body Transformation',
    tag: 'Body Sculpting',
    icon: '⚡',
    desc: 'Targeted cardio and high-density training cycles designed for rapid fat loss, metabolic boost, and muscular definition.',
    highlights: ['Caloric deficit management', 'Cardio + Resistance blend', 'Weekly body fat tracking', 'Sustainable lifestyle habits'],
  },
  {
    title: 'Hypertrophy & Muscle Building',
    tag: 'Strength & Mass',
    icon: '💪',
    desc: 'Structured hypertrophy protocols using heavy dumbbells (up to 60+kg), Olympic platforms, power cages, and Smith machines.',
    highlights: ['Progressive overload tracking', 'Compound lifting focus', 'Hypertrophy volume programming', 'Muscle recovery nutrition'],
  },
  {
    title: 'CrossFit & Functional Conditioning',
    tag: 'Stamina & Agility',
    icon: '🔥',
    desc: 'Dynamic functional arena training featuring battle ropes, kettlebells, plyo boxes, slam balls, and TRX trainers.',
    highlights: ['Endurance & VO2 Max boost', 'Full-body functional movement', 'Core stability & agility', 'High-energy training environment'],
  },
  {
    title: 'Diet & Nutrition Counseling',
    tag: 'Wellness Care',
    icon: '🥗',
    desc: 'In-house nutrition counseling and personalized meal plans tailored to match individual workout intensity and metabolic profile.',
    highlights: ['Macro & micro nutrient balance', 'Customized meal charts', 'Supplement guidance', 'Continuous progress monitoring'],
  },
];

export default function ClassesPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent} data-aos="fade-up">
          <p className="label">Programs & Services</p>
          <h1 className={styles.heroTitle}>
            TRAINING<br />
            <span className={styles.accent}>PROGRAMS</span>.
          </h1>
          <p className={styles.heroSub}>
            Designed for results. Guided by certified trainers at Ignite Fitness Dharwad.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section">
        <div className="container">
          <div className={styles.scheduleHeader}>
            <p className="label" data-aos="fade-up">What We Offer</p>
            <div className="neon-line" style={{ marginTop: 16 }} data-aos="fade-up" data-aos-delay="100" />
            <h2 className="display-md" style={{ marginTop: 8 }} data-aos="fade-up" data-aos-delay="200">
              TRANSFORMATION <span className={styles.accent}>PATHWAYS</span>.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            {programsList.map((p, i) => (
              <div key={p.title} className="card-press" data-aos="fade-up" data-aos-delay={i * 120} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '6px',
                padding: '36px',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '32px',
                flexWrap: 'wrap',
              }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '28px' }}>{p.icon}</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-tomato)' }}>{p.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--text-primary)', marginBottom: '12px' }}>{p.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)' }}>{p.desc}</p>
                </div>
                <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                    {p.highlights.map((h) => (
                      <li key={h} style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--accent-tomato)', fontWeight: 700 }}>✓</span> {h}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link href="/contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                      Enquire Program →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
