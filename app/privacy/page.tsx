import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — IGNITE FITNESS Gym Dharwad',
  description: 'Privacy Policy for Ignite Fitness Gym Dharwad. Static website privacy statement.',
};

export default function PrivacyPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className="label">Legal & Data Protection</p>
          <h1 className={styles.title}>PRIVACY <span className={styles.accent}>POLICY</span>.</h1>
          <p className={styles.sub}>Last updated: July 2026</p>
        </div>
      </section>

      <section className={styles.bodySection}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className={styles.contentBox}>
            <h2>1. Static Website Statement</h2>
            <p>
              The Ignite Fitness Dharwad website operates as a 100% static informational platform. We do not collect, capture, store, or process any personal data, user accounts, or financial details on this website.
            </p>

            <h2>2. Direct Communications</h2>
            <p>
              When you interact with our direct communication channels (such as clicking to call our front desk or messaging us via WhatsApp), your interaction occurs directly through your chosen telecommunication provider or WhatsApp application under their respective privacy policies.
            </p>

            <h2>3. Third-Party Links & Maps</h2>
            <p>
              Our website provides links to external services such as Google Maps for branch directions and social media platforms. These third-party services operate under their own privacy standards and terms.
            </p>

            <h2>4. Contacting Us</h2>
            <p>
              If you have any questions regarding our services or branch locations, please call our front desk directly at +91 81979 17330 or visit our PB Road branches in Malmaddi and Gandhi Nagar, Dharwad.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
