import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
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

export default function LocationSection() {
  return (
    <section className={`section ${styles.section}`} id="locations">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.labelBadge}>
            <MapPin size={14} color="var(--accent-tomato)" />
            <span>Locations & Timings</span>
          </div>
          <h2 className={styles.title}>
            VISIT <span className={styles.accentText}>IGNITE FITNESS</span>.
          </h2>
          <p className={styles.subtitle}>
            Conveniently located on PB Road in Malmaddi and Gandhi Nagar, Dharwad. Visit during operational hours or book a consultation.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className={styles.grid}>
          {/* Left Column: Branch Cards & Details */}
          <div className={styles.infoCol}>
            {/* Branch 1 Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <MapPin size={18} color="var(--accent-tomato)" />
                </div>
                <div>
                  <span className={styles.cardTag}>Branch 1 · Main Facility</span>
                  <h3 className={styles.cardTitle}>Malmaddi Branch</h3>
                </div>
              </div>
              <p className={styles.cardAddr}>{BRANCH_1_ADDRESS}</p>
            </div>

            {/* Branch 2 Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <MapPin size={18} color="var(--accent-tomato)" />
                </div>
                <div>
                  <span className={styles.cardTagPrime}>Branch 2 · Ignite Prime</span>
                  <h3 className={styles.cardTitle}>Gandhi Nagar Branch</h3>
                </div>
              </div>
              <p className={styles.cardAddr}>{BRANCH_2_ADDRESS}</p>
            </div>

            {/* Phone & Enquiry Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <Phone size={18} color="var(--accent-tomato)" />
                </div>
                <div>
                  <span className={styles.cardTag}>Helpline & Support</span>
                  <h3 className={styles.cardTitle}>Phone & Enquiry</h3>
                </div>
              </div>
              <a href={PHONE_TEL} className={styles.phoneLink}>
                {PHONE_NUMBER}
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  <Clock size={18} color="var(--accent-tomato)" />
                </div>
                <div>
                  <span className={styles.cardTag}>Schedule</span>
                  <h3 className={styles.cardTitle}>Operating Hours</h3>
                </div>
              </div>

              <div className={styles.hoursList}>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursLabel}>Monday – Saturday</span>
                  <span className={styles.hoursVal}>6:00 AM – 11:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursLabel}>Sunday</span>
                  <span className={styles.hoursClosed}>Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialBox}>
              <span className={styles.socialTitle}>Follow Ignite Fitness</span>
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

          {/* Right Column: Google Maps Card */}
          <div className={styles.mapCol}>
            <div className={styles.mapCard}>
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
              <div className={styles.mapFooter}>
                <a
                  href="https://maps.google.com/?q=SP+Laxmi+Heights+PB+Road+Malmaddi+Dharwad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="get-directions-btn"
                >
                  <span>Get Directions (PB Road Dharwad)</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
