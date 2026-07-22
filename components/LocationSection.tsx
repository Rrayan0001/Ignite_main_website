import { MapPin, Phone, Clock } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/Icons';
import {
  PHONE_NUMBER,
  PHONE_TEL,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  BRANCH_1_ADDRESS,
  BRANCH_2_ADDRESS,
  BRANCH_1_MAP_EMBED,
  OPERATING_HOURS_WEEKDAY,
  OPERATING_HOURS_SUNDAY,
} from '@/lib/constants';
import styles from './LocationSection.module.css';

const hours = [
  { day: 'Monday – Saturday', time: '6:00 AM – 11:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function LocationSection() {
  return (
    <section className={`section ${styles.section}`} id="locations">
      <div className="container">
        <div className={styles.header}>
          <p className="label">
            <MapPin size={14} color="var(--accent-tomato)" />
            <span>Locations & Timing</span>
          </p>
          <div className="neon-line" style={{ marginTop: 16 }} />
          <h2 className="display-md" style={{ marginTop: 8 }}>
            VISIT <span style={{ color: 'var(--accent-tomato)' }}>IGNITE FITNESS</span>.
          </h2>
          <p className="body-lg" style={{ maxWidth: 560, marginTop: 12 }}>
            Conveniently located on PB Road in Malmaddi and Gandhi Nagar, Dharwad. Visit during operational hours or book a consultation call.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Info Side */}
          <div className={styles.infoCol}>
            {/* Branch 1 */}
            <div className={styles.branchBlock}>
              <div className={styles.branchHeader}>
                <MapPin size={20} color="var(--accent-tomato)" />
                <h3 className={styles.branchTitle}>Malmaddi Branch (Main)</h3>
              </div>
              <p className={styles.branchAddr}>{BRANCH_1_ADDRESS}</p>
            </div>

            {/* Branch 2 */}
            <div className={styles.branchBlock}>
              <div className={styles.branchHeader}>
                <MapPin size={20} color="var(--accent-tomato)" />
                <h3 className={styles.branchTitle}>Ignite Prime (Gandhi Nagar)</h3>
              </div>
              <p className={styles.branchAddr}>{BRANCH_2_ADDRESS}</p>
            </div>

            {/* Contact */}
            <div className={styles.contactBlock}>
              <div className={styles.contactHeader}>
                <Phone size={20} color="var(--accent-tomato)" />
                <h3 className={styles.branchTitle}>Phone & Enquiry</h3>
              </div>
              <a href={PHONE_TEL} className={styles.phoneLink}>
                {PHONE_NUMBER}
              </a>
            </div>

            {/* Hours */}
            <div className={styles.hoursBlock}>
              <div className={styles.contactHeader}>
                <Clock size={20} color="var(--accent-tomato)" />
                <h3 className={styles.branchTitle}>Operating Hours</h3>
              </div>
              <ul className={styles.hoursList}>
                <li className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Monday – Saturday</span>
                  <span className={styles.hoursTime}>6:00 AM – 11:00 PM</span>
                </li>
                <li className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Sunday</span>
                  <span className={styles.hoursTime} style={{ color: 'var(--accent-tomato)' }}>Closed</span>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className={styles.socialsBlock}>
              <span className={styles.socialLabel}>Follow Ignite Fitness</span>
              <div className={styles.socialBtns}>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  id="loc-social-instagram"
                >
                  <InstagramIcon size={18} color="#FFFFFF" />
                  <span>Instagram</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  id="loc-social-whatsapp"
                >
                  <WhatsAppIcon size={18} color="#FFFFFF" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className={styles.mapCol}>
            <div className={styles.mapContainer}>
              <iframe
                src={BRANCH_1_MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                allowFullScreen
                loading="lazy"
                title="Ignite Fitness Dharwad Google Map"
              />
            </div>
            <a
              href="https://maps.google.com/?q=SP+Laxmi+Heights+PB+Road+Malmaddi+Dharwad"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapCta}
              id="get-directions-btn"
            >
              <span>Get Directions (PB Road Dharwad)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
