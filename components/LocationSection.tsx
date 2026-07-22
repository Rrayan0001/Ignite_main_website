import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/Icons';
import styles from './LocationSection.module.css';

const hours = [
  { day: 'Monday – Saturday', time: '6:00 AM – 11:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function LocationSection() {
  return (
    <section className={`section ${styles.section}`} id="location">
      <div className="container">
        <div className={styles.header}>
          <p className="label">
            <MapPin size={14} color="var(--accent-tomato)" />
            <span>Our Branches</span>
          </p>
          <div className="neon-line" style={{ marginTop: 16 }} />
          <h2 className="display-md" style={{ marginTop: 8 }}>
            VISIT <span style={{ color: 'var(--accent-tomato)' }}>IGNITE FITNESS</span>.
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={styles.info}>
            {/* Main Branch */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin size={20} color="var(--accent-tomato)" />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Malmaddi Branch (Main)</h3>
                <p className={styles.infoText}>
                  2nd Floor, SP Laxmi Heights, PB Road,<br />
                  Near NTTF BRTS Bus Stop, Shanti Nagar, Malmaddi,<br />
                  Dharwad, Karnataka 580001
                </p>
              </div>
            </div>

            {/* Branch 2 */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin size={20} color="var(--accent-tomato)" />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Ignite Prime (Gandhi Nagar)</h3>
                <p className={styles.infoText}>
                  4th Floor, Business Center, PB Road,<br />
                  Gandhinagar, Dharwad, Karnataka 580004
                </p>
              </div>
            </div>

            {/* Phone & Contact */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Phone size={20} color="var(--accent-tomato)" />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Phone & Enquiry</h3>
                <p className={styles.infoText}>
                  <a href="tel:+918197917330" className={styles.infoLink}>+91 81979 17330</a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className={styles.hoursCard}>
              <h3 className={styles.hoursTitle}>
                <Clock size={18} color="var(--accent-tomato)" />
                <span>Operating Hours</span>
              </h3>
              <table className={styles.hoursTable}>
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day} className={styles.hoursRow}>
                      <td className={styles.hoursDay}>{h.day}</td>
                      <td className={styles.hoursTime}>{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Social */}
            <div className={styles.social}>
              <p className={styles.socialLabel}>Follow Ignite Fitness</p>
              <div className={styles.socialLinks}>
                {[
                  { name: 'Instagram', handle: '@theignitefitness', href: 'https://instagram.com', Icon: InstagramIcon },
                  { name: 'WhatsApp', handle: '+91 81979 17330', href: 'https://wa.me/918197917330', Icon: WhatsAppIcon },
                ].map(({ name, handle, href, Icon }) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer"
                    className={styles.socialLink} id={`social-${name.toLowerCase()}`}>
                    <div className={styles.socialIcon}>
                      <Icon size={20} color="var(--accent-tomato)" />
                    </div>
                    <div>
                      <span className={styles.socialName}>{name}</span>
                      <span className={styles.socialHandle}>{handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className={styles.mapCol}>
            <div className={styles.mapWrap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.54123456789!2d75.01!3d15.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7123456789a%3A0x123456789abcdef!2sDharwad%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ignite Fitness Dharwad map"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Ignite+Fitness+PB+Road+Dharwad"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-outline ${styles.directionsBtn}`}
              id="get-directions-btn"
            >
              <Navigation size={16} />
              <span>Get Directions (PB Road Dharwad)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
