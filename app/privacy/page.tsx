import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — IGNITE FITNESS Gym Dharwad',
  description: 'Privacy Policy for Ignite Fitness Gym Dharwad. Learn how we collect, store, and protect member inquiry and registration data.',
};

export default function PrivacyPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className="label">Legal & Data Protection</p>
          <h1 className={styles.title}>PRIVACY <span className={styles.accent}>POLICY</span>.</h1>
          <p className={styles.sub}>Last updated: July 23, 2026</p>
        </div>
      </section>

      <section className={styles.bodySection}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className={styles.contentBox}>
            <h2>1. Information We Collect</h2>
            <p>
              When you submit an admission inquiry or register for membership at Ignite Fitness Dharwad (Malmaddi or Gandhi Nagar branches), we collect personal information such as your name, phone number, email address, selected gym branch, and fitness goals.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              Your contact information is strictly used by Ignite Fitness staff to process admission inquiries, schedule 1-on-1 personal training orientations, provide membership updates, and respond to your questions.
            </p>

            <h2>3. Data Protection & Sharing</h2>
            <p>
              We do not sell, rent, or trade member data to third parties. All inquiry records are securely handled by authorized Ignite Fitness staff members.
            </p>

            <h2>4. Contacting Us</h2>
            <p>
              If you have any questions regarding your personal data or wish to request data removal, please contact our front desk at +91 81979 17330 or visit our PB Road branches in Dharwad.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
