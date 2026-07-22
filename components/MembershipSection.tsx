import Link from 'next/link';
import { CheckCircle2, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './MembershipSection.module.css';

const plans = [
  {
    id: 'monthly',
    name: '1-Month',
    price: 'Enquire',
    period: 'flexible pass',
    popular: false,
    desc: 'Perfect for short-term visitors & trial workouts.',
    features: [
      'Full gym & strength zone access',
      'Cardio suite access',
      'Lockers & shower facilities',
      'General trainer assistance',
      'Fitness assessment',
    ],
    cta: 'Get Monthly Pass',
  },
  {
    id: 'quarterly',
    name: '3-Month',
    price: 'Quarterly',
    period: 'membership',
    popular: false,
    desc: 'Structured 90-day conditioning and body goal target.',
    features: [
      'Full access to all workout zones',
      'CrossFit functional arena access',
      'Locker & shower facilities',
      'Initial posture & bio-assessment',
      'Basic nutrition consultation',
    ],
    cta: 'Start 3-Month Plan',
  },
  {
    id: 'biannual',
    name: '6-Month',
    price: 'Half-Yearly',
    period: 'most popular',
    popular: true,
    saving: 'Best Value',
    desc: 'Our most recommended plan for steady transformations.',
    features: [
      'Unlimited access to all workout zones',
      'CrossFit & functional arena access',
      '1-on-1 personal training orientation',
      'Customized diet & nutrition plan',
      'Periodic progress assessment',
      'Locker & shower facilities',
    ],
    cta: 'Join 6-Month Plan',
  },
  {
    id: 'annual',
    name: '12-Month',
    price: 'Annual',
    period: 'full year',
    popular: false,
    saving: 'Max Savings',
    desc: 'Maximum savings & priority trainer scheduling for 1 full year.',
    features: [
      'Unlimited 365-day access to all branches',
      'Full CrossFit & functional arena access',
      'Dedicated personal training sessions',
      'Complete personalized nutrition plans',
      'Quarterly bio-mechanical checkups',
      'VIP locker & locker assignment',
    ],
    cta: 'Join 12-Month Plan',
  },
];

export default function MembershipSection() {
  return (
    <section className={`section section--dark ${styles.section}`} id="membership">
      <div className="container">
        <div className={styles.header}>
          <p className="label">
            <ShieldCheck size={14} color="var(--accent-tomato)" />
            <span>Membership Options</span>
          </p>
          <div className="neon-line" style={{ marginTop: 16 }} />
          <h2 className="display-md" style={{ marginTop: 8, marginBottom: 16 }}>
            YOUR <span style={{ color: 'var(--accent-tomato)' }}>MEMBERSHIP</span>.
          </h2>
          <p className="body-lg" style={{ maxWidth: 560 }}>
            Choose the membership tier that fits your goals. Visit us at Malmaddi or Gandhi Nagar, Dharwad or call +91 81979 17330.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
              id={`plan-${plan.id}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <Sparkles size={12} />
                  <span>Most Popular</span>
                </div>
              )}

              <div className={styles.cardTop}>
                <h3 className={styles.planName}>{plan.name}</h3>
                {plan.saving && (
                  <span className={styles.saving}>{plan.saving}</span>
                )}
              </div>

              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
              </div>

              <p className={styles.planDesc}>{plan.desc}</p>

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} ${styles.cta}`}
                id={`plan-cta-${plan.id}`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.footnote}>
          <p>For exact promotional pricing and student offers, contact Ignite Fitness Dharwad at +91 81979 17330.</p>
          <Link href="/membership" className={styles.footnoteLink} id="membership-full-link">
            View full membership details & FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
