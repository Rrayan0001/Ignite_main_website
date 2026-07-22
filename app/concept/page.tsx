import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Concept — IGNITE FITNESS Gym Dharwad',
  description: 'Discover the Ignite Fitness philosophy. Biomechanics-based strength training, 1-on-1 personal coaching, and functional athletic conditioning in Dharwad.',
};

const pillars = [
  {
    num: '01',
    title: 'Biomechanics & Form',
    desc: 'Every lift and exercise at Ignite Fitness is guided by scientific biomechanics. Our certified coaches prioritize form, movement efficiency, and joint safety over ego lifting.',
  },
  {
    num: '02',
    title: 'Heavy Iron & Hypertrophy',
    desc: 'Equipped with heavy dumbbells (2.5kg to 60+kg), Olympic lifting platforms, Smith machines, and power cages engineered for serious muscle hypertrophy and strength gains.',
  },
  {
    num: '03',
    title: 'CrossFit & Functional Conditioning',
    desc: 'Our high-intensity functional arena features battle ropes, kettlebells, plyometric boxes, and TRX systems for total-body conditioning and metabolic fat loss.',
  },
  {
    num: '04',
    title: 'Custom Nutrition & Tracking',
    desc: 'Transformation requires precise fuel. We combine structured workout routines with personalized diet plans and periodic body composition assessments.',
  },
];

export default function ConceptPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent} data-aos="fade-up">
          <p className="label">Our Concept</p>
          <h1 className={styles.heroTitle}>
            IGNITE YOUR<br />
            <span className={styles.accent}>POTENTIAL</span>.
          </h1>
          <p className={styles.heroSub}>
            Dharwad's high-performance fitness destination where biomechanics, strength and certified coaching meet.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div data-aos="fade-right">
              <p className="label">Our Mission</p>
              <div className="gold-line" style={{ marginTop: 16 }} />
              <h2 className={styles.missionTitle}>
                WE BELIEVE FITNESS IS <span className={styles.accent}>SCIENTIFIC</span>.
              </h2>
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <p className={styles.missionText}>
                Ignite Fitness was established on PB Road, Dharwad to bring international-standard strength equipment,
                biomechanics-based personal coaching, and structured conditioning to fitness enthusiasts.
              </p>
              <p className={styles.missionText}>
                Across our locations in Malmaddi and Gandhi Nagar, Ignite Fitness offers an invigorating environment
                tailored for body transformation, muscle gain, fat loss, and athletic performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className={`section section--dark ${styles.pillars}`}>
        <div className="container">
          <div className={styles.pillarsHeader}>
            <p className="label" data-aos="fade-up">Our Pillars</p>
            <div className="neon-line" style={{ marginTop: 16 }} data-aos="fade-up" data-aos-delay="100" />
            <h2 className="display-md" style={{ marginTop: 8 }} data-aos="fade-up" data-aos-delay="200">
              WHAT <span className={styles.accent}>DRIVES US</span>.
            </h2>
          </div>
          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <div key={p.num} className={`${styles.pillar} card-press`} data-aos="fade-up" data-aos-delay={i * 100}>
                <span className={styles.pillarNum}>{p.num}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className={`section ${styles.numbers}`}>
        <div className="container">
          <div className={styles.numbersGrid}>
{[
               { num: '2', label: 'Dharwad Branches' },
               { num: '1000+', label: 'Active Members' },
               { num: '4.9★', label: 'Average Rating' },
               { num: '15+', label: 'Certified Trainers' },
               { num: '60kg+', label: 'Dumbbell Range' },
               { num: '100%', label: 'Dedicated Focus' },
             ].map((s, i) => (
              <div key={s.label} className={styles.numberCard} data-aos="zoom-in" data-aos-delay={i * 80}>
                <span className={styles.numberVal}>{s.num}</span>
                <span className={styles.numberLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
