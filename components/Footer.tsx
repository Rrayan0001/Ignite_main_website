import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon, YoutubeIcon } from '@/components/Icons';
import {
  PHONE_NUMBER,
  PHONE_TEL,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  YOUTUBE_LINK,
} from '@/lib/constants';
import styles from './Footer.module.css';

const footerLinks = {
  Explore: [
    { label: 'Our Concept', href: '/concept' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Training Programs', href: '/classes' },
    { label: '1-on-1 Coaching', href: '/trainers' },
    { label: 'CrossFit Arena', href: '/facilities' },
  ],
  Membership: [
    { label: 'Join Ignite Fitness', href: '/branches' },
    { label: 'Monthly Pass', href: '/membership' },
    { label: '3-Month Plan', href: '/membership' },
    { label: '6-Month Plan', href: '/membership' },
    { label: '12-Month Annual', href: '/membership' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ & Pricing', href: '/membership' },
    { label: 'Malmaddi Branch', href: '/branches' },
    { label: 'Gandhi Nagar Branch', href: '/branches' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

const socials = [
  { Icon: InstagramIcon, label: 'Instagram', href: INSTAGRAM_LINK },
  { Icon: WhatsAppIcon, label: 'WhatsApp', href: WHATSAPP_LINK },
  { Icon: YoutubeIcon, label: 'YouTube', href: YOUTUBE_LINK },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      {/* CTA Banner */}
      <div className={styles.ctaBanner} data-aos="fade-up">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>
            READY TO IGNITE YOUR <span className={styles.ctaAccent}>FITNESS?</span>
          </h2>
          <p className={styles.ctaText}>
            Join members transforming their health & physique at Ignite Fitness Dharwad.
          </p>
        </div>
        <div className={styles.ctaBtns}>
          <Link href="/branches" className="btn btn-primary" id="footer-join-btn">
            Join Ignite Fitness
          </Link>
          <Link href="/contact" className="btn btn-outline" id="footer-trial-btn">
            Book Free Trial
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        <div className={styles.container}>
          {/* Brand col */}
          <div className={styles.brand} data-aos="fade-up">
            <Link href="/" className={styles.logo} aria-label="IGNITE FITNESS">
              <Image
                src="/bg_remove_logo.png"
                alt="IGNITE FITNESS"
                width={40}
                height={40}
                style={{ objectFit: 'contain' }}
              />
              <span className={styles.logoGiga}>IGNITE</span>
              <span className={styles.logoFit}>FITNESS</span>
            </Link>
            <p className={styles.brandText}>
              Dharwad's premier high-performance fitness club. Biomechanics-based 1-on-1 coaching, heavy iron strength training, and athletic conditioning.
            </p>
            <div className={styles.socials}>
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label={label}
                  id={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon size={18} color="var(--text-secondary)" />
                </a>
              ))}
            </div>
            <div className={styles.contact}>
              <a href={PHONE_TEL} className={styles.contactLink}>
                <Phone size={14} color="var(--accent-tomato)" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <span className={styles.contactAddr}>
                <MapPin size={14} color="var(--accent-tomato)" />
                <span>PB Road, Malmaddi & Gandhi Nagar, Dharwad</span>
              </span>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <div key={category} className={styles.col} data-aos="fade-up" data-aos-delay={i * 100}>
              <h3 className={styles.colTitle}>{category}</h3>
              <ul className={styles.colLinks}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.colLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} IGNITE FITNESS. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
          </div>
          <p className={styles.tagline}>
            <span className={styles.tomatoDot}>✦</span> Ignite Your Potential.
          </p>
        </div>
      </div>
    </footer>
  );
}
