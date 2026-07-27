'use client';

import { X, Flame, Phone, MapPin, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { PHONE_NUMBER, PHONE_TEL, WHATSAPP_LINK } from '@/lib/constants';
import styles from './AdmissionModal.module.css';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBranch?: 'Branch 1: Malmaddi Branch (Main)' | 'Branch 2: Ignite Prime (Gandhi Nagar)';
  defaultPlan?: string;
}

export default function AdmissionModal({
  isOpen,
  onClose,
  defaultBranch = 'Branch 1: Malmaddi Branch (Main)',
}: AdmissionModalProps) {
  if (!isOpen) return null;

  const branchText = defaultBranch.includes('Malmaddi') ? 'Malmaddi' : 'Gandhi Nagar';
  const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hi Ignite Fitness Dharwad, I would like to inquire about joining the ${branchText} branch.`
  )}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className={styles.header}>
          <div className={styles.badge}>
            <Flame size={14} color="var(--accent-tomato)" />
            <span>Join Ignite Fitness</span>
          </div>
          <h2 className={styles.title}>GET IN TOUCH</h2>
          <p className={styles.sub}>
            Connect directly with our team at Dharwad. Visit us in person or chat with us instantly.
          </p>
        </div>

        <div className={styles.actionGrid}>
          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionCardWhatsapp}
          >
            <div className={styles.actionIconWrap}>
              <WhatsAppIcon size={24} />
            </div>
            <div className={styles.actionText}>
              <span className={styles.actionTitle}>Chat on WhatsApp</span>
              <span className={styles.actionSub}>Instant response from our team</span>
            </div>
            <ExternalLink size={18} />
          </a>

          {/* Direct Call CTA */}
          <a href={`tel:${PHONE_TEL}`} className={styles.actionCardCall}>
            <div className={styles.actionIconWrapCall}>
              <Phone size={22} />
            </div>
            <div className={styles.actionText}>
              <span className={styles.actionTitle}>Call {PHONE_NUMBER}</span>
              <span className={styles.actionSub}>Available 5:30 AM – 10:00 PM</span>
            </div>
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Branch Info Footer */}
        <div className={styles.branchFooter}>
          <div className={styles.branchFooterItem}>
            <MapPin size={18} color="var(--accent-tomato)" />
            <div>
              <strong>Malmaddi Branch:</strong> 2nd Floor, SP Laxmi Heights, PB Road (near NTTF)
            </div>
          </div>
          <div className={styles.branchFooterItem}>
            <MapPin size={18} color="var(--accent-gold)" />
            <div>
              <strong>Gandhi Nagar Branch:</strong> 4th Floor, Business Center, PB Road (Ignite Prime)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
