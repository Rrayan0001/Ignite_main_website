import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Membership — IGNITE FITNESS Gym Dharwad',
  description: 'Explore Ignite Fitness membership plans in Dharwad. Monthly, 3-Month, 6-Month, and 12-Month Annual options available.',
};

const plans = [
  {
    id: 'monthly',
    name: '1-Month',
    price: 'Monthly',
    period: 'pass',
    popular: false,
    desc: 'Flexible 1-month pass for trial training and short-term workouts.',
    features: [
      'Full gym & strength zone access',
      'Cardio suite access',
      'Lockers & shower facilities',
      'General trainer guidance',
      'Initial fitness assessment',
    ],
    cta: 'Get Monthly Pass',
  },
  {
    id: 'quarterly',
    name: '3-Month',
    price: 'Quarterly',
    period: 'membership',
    popular: false,
    desc: 'Structured 90-day conditioning for body weight targets.',
    features: [
      'Full access to all workout zones',
      'CrossFit functional arena access',
      'Lockers & shower facilities',
      'Posture & bio-assessment',
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
    desc: 'Our most recommended plan for steady physical transformation.',
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

const faqs = [
  {
    q: 'Where is Ignite Fitness located in Dharwad?',
    a: 'We have two branches on PB Road: 1) Malmaddi Branch (2nd Floor, SP Laxmi Heights, near NTTF BRTS Bus Stop) and 2) Ignite Prime (4th Floor, Business Center, Gandhinagar).',
  },
  {
    q: 'Can I visit for a free trial or tour?',
    a: 'Yes, we welcome newcomers for a facility tour and trial workout! Call us at +91 81979 17330 or fill out the contact form.',
  },
  {
    q: 'Are personal trainers certified?',
    a: 'Yes! All personal trainers at Ignite Fitness are certified fitness professionals trained in movement biomechanics, form correction, and custom workout programming.',
  },
  {
    q: 'What are the operating hours?',
    a: 'We are open Monday through Saturday from 6:00 AM to 11:00 PM. We are closed on Sundays.',
  },
];

export default function MembershipPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent} data-aos="fade-up">
          <p className="label">Membership Options</p>
          <h1 className={styles.heroTitle}>
            CHOOSE YOUR<br />
            <span className={styles.accent}>PATH</span>.
          </h1>
          <p className={styles.heroSub}>
            Flexible membership plans designed for goal commitment.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.pricingGrid}>
            {plans.map((plan, i) => (
              <div
                key={plan.id}
                className={`${styles.card} ${plan.popular ? styles.popular : ''} card-press`}
                data-aos={plan.popular ? 'flip-up' : 'zoom-in'}
                data-aos-delay={i * 150}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
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
                      <span className={styles.check}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} ${styles.cta}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`section section--dark ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.faqHeader}>
            <p className="label" data-aos="fade-up">Frequently Asked Questions</p>
            <div className="gold-line" style={{ marginTop: 16 }} data-aos="fade-up" data-aos-delay="100" />
            <h2 className="display-md" style={{ marginTop: 8 }} data-aos="fade-up" data-aos-delay="200">
              GOT <span style={{ color: 'var(--accent-tomato)' }}>QUESTIONS?</span>
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <div key={i} className={`${styles.faqCard} card-press`} data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 className={styles.faqQuestion}>{faq.q}</h3>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
