import Image from 'next/image';
import Link from 'next/link';
import { Dumbbell, Activity, Flame, ArrowUpRight } from 'lucide-react';
import styles from './ConceptSection.module.css';

export default function ConceptSection() {
  return (
    <section className={styles.section} id="concept">
      <div className={styles.grid}>
        {/* Left: Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrap} data-aos="zoom-in">
            <Image
              src="/concept-gym.png"
              alt="Ignite Fitness Gym Dharwad training arena"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.imageTag}>
            <span className={styles.imageTagText}>PB Road, Dharwad</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className={styles.content}>
          <p className="label" data-aos="fade-right">Our Concept</p>
          <div className="gold-line" style={{ marginTop: 16 }} data-aos="fade-right" data-aos-delay="100" />

          <h2 className={styles.heading} data-aos="fade-right" data-aos-delay="200">
            BIOMECHANICS<br />
            MEETS <span className={styles.accent}>PERFORMANCE</span>.
          </h2>

          <p className={styles.body} data-aos="fade-up" data-aos-delay="300">
            Ignite Fitness is Dharwad's top-rated fitness center (4.9★ rating). We believe that real
            body transformations are achieved through scientific biomechanics, structured progressive
            overload, and dedicated 1-on-1 certified personal coaching across our modern branches in Dharwad.
          </p>

          <p className={styles.body} data-aos="fade-up" data-aos-delay="400">
            From heavy dumbbell racks (2.5kg to 60+kg) and Olympic lifting platforms to precision cardio units
            and high-intensity CrossFit functional arenas, Ignite Fitness provides an empowering sanctuary for beginners and elite lifters alike.
          </p>

          <div className={styles.pillars}>
            {[
              { Icon: Dumbbell, title: 'Heavy Iron & Strength', desc: 'Dumbbells up to 60+kg, Olympic platforms & power cages' },
              { Icon: Activity, title: 'Biomechanics Coaching', desc: 'Certified trainers focusing on form, posture & injury prevention' },
              { Icon: Flame, title: 'CrossFit Arena', desc: 'Dedicated functional arena with battle ropes, kettlebells & TRX' },
            ].map(({ Icon, title, desc }, i) => (
              <div key={title} className={styles.pillar} data-aos="fade-left" data-aos-delay={500 + i * 100}>
                <div className={styles.pillarIcon}>
                  <Icon size={20} color="var(--accent-tomato)" />
                </div>
                <div>
                  <h3 className={styles.pillarTitle}>{title}</h3>
                  <p className={styles.pillarDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/concept" className="btn btn-outline" id="concept-learn-btn">
            <span>Learn More</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
