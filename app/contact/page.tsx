import styles from './page.module.css';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import {
  PHONE_NUMBER,
  PHONE_TEL,
  WHATSAPP_LINK,
  BRANCH_1_ADDRESS,
  BRANCH_2_ADDRESS,
} from '@/lib/constants';

export const metadata = {
  title: 'Contact Us — IGNITE FITNESS Gym Dharwad',
  description: 'Connect directly with Ignite Fitness Dharwad on PB Road. Direct WhatsApp, phone line, and branch locations.',
};

export default function ContactPage() {
  const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    'Hi Ignite Fitness Dharwad, I would like to inquire about membership plans and branch visits.'
  )}`;

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent} data-aos="fade-up">
          <p className="label">Contact Ignite Fitness</p>
          <h1 className={styles.heroTitle}>
            GET IN<br />
            <span className={styles.accent}>TOUCH</span>.
          </h1>
          <p className={styles.heroSub}>
            Reach out directly for membership details, trial sessions, 1-on-1 personal training, or branch visits in Dharwad.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Left: Contact Info */}
            <div className={styles.infoCol} data-aos="fade-right">
              <p className="label">Visit Our Gyms</p>
              <div className="gold-line" style={{ marginTop: 16, marginBottom: 32 }} />
              <h2 className={styles.infoHeading}>
                DHARWAD <span className={styles.accentText}>LOCATIONS</span>.
              </h2>
              <p className={styles.infoSubtext}>
                We operate two prime branches in Dharwad on PB Road. Visit our front desk or connect with us directly.
              </p>

              <div className={styles.cards}>
                <div className={`${styles.card} card-press`} data-aos="fade-up" data-aos-delay="0">
                  <MapPin className={styles.cardIcon} size={24} color="var(--accent-tomato)" />
                  <div>
                    <h3 className={styles.cardTitle}>Malmaddi Branch (Main)</h3>
                    <p className={styles.cardText}>{BRANCH_1_ADDRESS}</p>
                  </div>
                </div>

                <div className={`${styles.card} card-press`} data-aos="fade-up" data-aos-delay="100">
                  <MapPin className={styles.cardIcon} size={24} color="var(--accent-gold)" />
                  <div>
                    <h3 className={styles.cardTitle}>Ignite Prime (Gandhi Nagar)</h3>
                    <p className={styles.cardText}>{BRANCH_2_ADDRESS}</p>
                  </div>
                </div>

                <div className={`${styles.card} card-press`} data-aos="fade-up" data-aos-delay="200">
                  <Phone className={styles.cardIcon} size={24} color="var(--accent-tomato)" />
                  <div>
                    <h3 className={styles.cardTitle}>Phone Line</h3>
                    <p className={styles.cardText}>{PHONE_NUMBER}</p>
                  </div>
                </div>

                <div className={`${styles.card} card-press`} data-aos="fade-up" data-aos-delay="300">
                  <Clock className={styles.cardIcon} size={24} color="#FFFFFF" />
                  <div>
                    <h3 className={styles.cardTitle}>Hours of Operation</h3>
                    <p className={styles.cardText}>Mon – Sat: 5:30 AM – 10:00 PM | Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Direct Connect Action Panel */}
            <div className={styles.formCol} data-aos="fade-left" data-aos-delay="200">
              <div className={styles.directPanel}>
                <p className="label">INSTANT CONNECT</p>
                <h3 className={styles.directHeading}>CONNECT WITH OUR TEAM</h3>
                <p className={styles.directSub}>
                  No forms or waiting required. Connect with our desk instantly via WhatsApp or phone.
                </p>

                <div className={styles.directActions}>
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtnWhatsapp}
                  >
                    <WhatsAppIcon size={26} />
                    <div>
                      <span className={styles.actionTitle}>Chat on WhatsApp</span>
                      <span className={styles.actionSub}>Instant reply & trial booking</span>
                    </div>
                    <ExternalLink size={18} />
                  </a>

                  {/* Direct Call */}
                  <a href={`tel:${PHONE_TEL}`} className={styles.actionBtnCall}>
                    <Phone size={24} />
                    <div>
                      <span className={styles.actionTitle}>Call {PHONE_NUMBER}</span>
                      <span className={styles.actionSub}>Speak directly to front desk</span>
                    </div>
                    <ExternalLink size={18} />
                  </a>

                  {/* Map Directions */}
                  <a
                    href="https://maps.google.com/?q=SP+Laxmi+Heights+PB+Road+Malmaddi+Dharwad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtnMap}
                  >
                    <MapPin size={24} />
                    <div>
                      <span className={styles.actionTitle}>Get Directions on Google Maps</span>
                      <span className={styles.actionSub}>PB Road, Malmaddi & Gandhi Nagar</span>
                    </div>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
