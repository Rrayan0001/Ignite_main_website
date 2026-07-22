import Link from 'next/link';
import { HeartPulse, Dumbbell, Flame, ShieldCheck, UserCheck, Utensils, ArrowUpRight } from 'lucide-react';
import styles from './FacilitiesSection.module.css';

const facilities = [
  {
    id: 'cardio',
    Icon: HeartPulse,
    title: 'Cardio Suite',
    desc: 'Precision treadmills, elliptical trainers, rowing machines, and stair climbers with integrated heart-rate and calorie metrics.',
    tag: 'PB Road Gym',
  },
  {
    id: 'strength',
    Icon: Dumbbell,
    title: 'Strength & Iron Zone',
    desc: 'Free weights ranging from 2.5kg to 60+kg, Olympic lifting platforms, bumper plates, power cages, and Smith machines.',
    tag: 'Main Floor',
  },
  {
    id: 'crossfit',
    Icon: Flame,
    title: 'CrossFit & Functional Arena',
    desc: 'High-intensity functional zone equipped with battle ropes, kettlebell racks, plyometric boxes, slam balls, and TRX trainers.',
    tag: 'Functional Zone',
  },
  {
    id: 'recovery',
    Icon: ShieldCheck,
    title: 'Recovery & Changing Rooms',
    desc: 'Climate-controlled indoor environment, modern changing rooms, private shower cubicles, vanity mirrors, and secure lockers.',
    tag: 'Amenities',
  },
  {
    id: 'pt-lounge',
    Icon: UserCheck,
    title: '1-on-1 Personal Training',
    desc: 'Dedicated coaching zone where certified personal trainers guide form, posture, biomechanics, and structured hypertrophy cycles.',
    tag: 'Coaching Suite',
  },
  {
    id: 'nutrition',
    Icon: Utensils,
    title: 'Nutrition & Diet Coaching',
    desc: 'Customized meal planning, body composition analysis, and progress tracking tailored to match your specific training goals.',
    tag: 'Consultation',
  },
];

export default function FacilitiesSection() {
  return (
    <section className={`section section--dark ${styles.section}`} id="facilities">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <p className="label" data-aos="fade-down">World-Class Facilities</p>
            <div className="neon-line" style={{ marginTop: 16 }} data-aos="fade-down" data-aos-delay="100" />
            <h2 className="display-md" style={{ marginTop: 8 }} data-aos="fade-down" data-aos-delay="200">
              POWERFUL ZONES.<br />
              <span style={{ color: 'var(--accent-tomato)' }}>PROVEN</span> RESULTS.
            </h2>
          </div>
          <p className="body-lg" style={{ maxWidth: 420 }} data-aos="fade-up" data-aos-delay="300">
            Every training arena at Ignite Fitness Dharwad is engineered for progressive overload and peak physical output.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {facilities.map((f, i) => (
            <div key={f.id} className={`${styles.card} card-press`} id={`facility-${f.id}`} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <f.Icon size={24} color="var(--accent-tomato)" />
                  </div>
                  <span className={styles.tag}>{f.tag}</span>
                </div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
                <div className={styles.cardLine} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/facilities" className="btn btn-outline" id="facilities-explore-btn">
            <span>Explore All Facilities</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
