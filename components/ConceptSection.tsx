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
          <div className={styles.imageWrap}>
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
          <p className="label">Our Concept</p>
          <div className="gold-line" style={{ marginTop: 16 }} />

          <h2 className={styles.heading}>
            BIOMECHANICS<br />
            MEETS <span className={styles.accent}>PERFORMANCE</span>.
          </h2>

          <p className={styles.body}>
            Ignite Fitness is Dharwad's top-rated fitness center (4.9★ rating). We believe that real
            body transformations are achieved through scientific biomechanics, structured progressive
            overload, and dedicated 1-on-1 certified personal coaching across our modern branches in Dharwad.
          </p>

          <p className={styles.body}>
            From heavy dumbbell racks (2.5kg to 60+kg) and Olympic lifting platforms to precision cardio units
            and high-intensity CrossFit functional arenas, Ignite Fitness provides an empowering sanctuary for beginners and elite lifters alike.
          </p>

          <div className={styles.pillars}>
            {[
              { Icon: Dumbbell, title: 'Heavy Iron & Strength', desc: 'Dumbbells up to 60+kg, Olympic platforms & power cages' },
              { Icon: Activity, title: 'Biomechanics Coaching', desc: 'Certified trainers focusing on form, posture & injury prevention' },
              { Icon: Flame, title: 'CrossFit Arena', desc: 'Dedicated functional arena with battle ropes, kettlebells & TRX' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className={styles.pillar}>
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
