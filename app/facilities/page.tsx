import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Facilities — IGNITE FITNESS Gym Dharwad',
  description: 'Explore Ignite Fitness facilities in Dharwad. Precision cardio suite, heavy iron strength zone, CrossFit arena, recovery and personal training suites.',
};

const zones = [
  { icon: '🏃', title: 'Cardio Suite', floor: 'Main Floor', desc: 'Precision treadmills, ellipticals, rowing machines, and stair climbers with integrated heart-rate and calorie metrics.', features: ['Precision Treadmills', 'Elliptical Cross-Trainers', 'Concept Rowing Machines', 'Stair Climbers', 'Real-time performance tracking', 'Air-conditioned comfort'] },
  { icon: '🏋️', title: 'Strength & Iron Zone', floor: 'Main Floor', desc: 'Free weights ranging from 2.5kg to 60+kg, Olympic lifting platforms, bumper plates, power cages, and Smith machines.', features: ['Dumbbells 2.5kg to 60+kg', 'Olympic Barbell Stations', 'Power Cages & Squat Racks', 'Smith Machines', 'Multi-cable systems', 'Chest & Leg press isolations'] },
  { icon: '🔥', title: 'CrossFit & Functional Arena', floor: 'Functional Area', desc: 'Dedicated high-intensity zone with battle ropes, kettlebells, plyometric boxes, slam balls, and TRX suspension trainers.', features: ['Heavy Duty Battle Ropes', 'Kettlebell Racks', 'Plyometric Box Stations', 'Slam Balls & Medicine Balls', 'TRX Suspension Rigs', 'Agility Ladders'] },
  { icon: '🔬', title: '1-on-1 Personal Training Suite', floor: 'Coaching Suite', desc: 'Dedicated coaching zone where certified trainers conduct posture evaluation, bio-mechanical movement checks, and 1-on-1 sessions.', features: ['Bio-mechanics Assessment', 'Posture Evaluation', '1-on-1 Certified Coaching', 'Hypertrophy Program Design', 'Injury Prevention Tracking', 'Goal Achievement Monitoring'] },
  { icon: '🚿', title: 'Recovery & Changing Rooms', floor: 'Both Branches', desc: 'Modern, hygienic changing facilities with private shower cubicles, vanity mirrors, and secure lockers.', features: ['Private Shower Cubicles', 'Secure Personal Lockers', 'Clean Hygiene Facilities', 'Vanity Mirrors', 'Filtered Drinking Water', 'Climate-Controlled Air'] },
  { icon: '🥗', title: 'Nutrition & Consultation Lounge', floor: 'Consultation Desk', desc: 'In-house diet counseling, body composition testing, and customized meal planning tailored to your workout routines.', features: ['Body Fat & BMI Analysis', 'Customized Diet Plans', 'Pre/Post Workout Nutrition', 'Supplements Guidance', 'Progress Checkups', 'Certified Diet Counselors'] },
];

export default function FacilitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent} data-aos="fade-up">
          <p className="label">World-Class Facilities</p>
          <h1 className={styles.heroTitle}>
            DHARWAD'S PREMIER<br />
            <span className={styles.accent}>TRAINING ZONES</span>.
          </h1>
        </div>
      </section>

      {/* Zones Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.intro}>
            <p className="label" data-aos="fade-up">Training Arenas</p>
            <div className="neon-line" style={{ marginTop: 16 }} data-aos="fade-up" data-aos-delay="100" />
            <h2 className="display-md" style={{ marginTop: 8 }} data-aos="fade-up" data-aos-delay="200">
              EXPLORE THE <span className={styles.accent}>FACILITIES</span>.
            </h2>
          </div>
          <div className={styles.grid}>
            {zones.map((z, i) => (
              <div key={z.title} className={`${styles.card} card-press`} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className={styles.cardHead}>
                  <div className={styles.cardLeft}>
                    <span className={styles.icon}>{z.icon}</span>
                    <div>
                      <h2 className={styles.cardTitle}>{z.title}</h2>
                      <span className={styles.floor}>{z.floor}</span>
                    </div>
                  </div>
                </div>
                <p className={styles.desc}>{z.desc}</p>
                <ul className={styles.features}>
                  {z.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <span className={styles.check}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
