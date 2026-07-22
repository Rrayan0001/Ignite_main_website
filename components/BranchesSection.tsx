'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Coffee, ArrowUpRight, ShieldCheck, Flame } from 'lucide-react';
import AdmissionModal from './AdmissionModal';
import {
  BRANCH_1_NAME,
  BRANCH_1_ADDRESS,
  BRANCH_1_MAP_EMBED,
  BRANCH_2_NAME,
  BRANCH_2_ADDRESS,
  BRANCH_2_MAP_EMBED,
  PHONE_NUMBER,
  PHONE_TEL,
} from '@/lib/constants';
import styles from './BranchesSection.module.css';

interface BranchesSectionProps {
  showTitle?: boolean;
}

export default function BranchesSection({ showTitle = true }: BranchesSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<
    'Branch 1: Malmaddi Branch (Main)' | 'Branch 2: Ignite Prime (Gandhi Nagar)'
  >('Branch 1: Malmaddi Branch (Main)');

  const handleJoinClick = (branchName: 'Branch 1: Malmaddi Branch (Main)' | 'Branch 2: Ignite Prime (Gandhi Nagar)') => {
    setSelectedBranch(branchName);
    setModalOpen(true);
  };

  return (
    <section className={`section ${styles.section}`} id="branches">
      <div className="container">
        {showTitle && (
          <div className={styles.header} data-aos="fade-up">
            <p className="label" data-aos="fade-up">
              <MapPin size={14} color="var(--accent-tomato)" />
              <span>Multi-Branch Fitness Destination</span>
            </p>
            <div className="neon-line" style={{ marginTop: 16 }} data-aos="fade-up" data-aos-delay="100" />
            <h2 className="display-md" style={{ marginTop: 8 }} data-aos="fade-up" data-aos-delay="200">
              OUR <span style={{ color: 'var(--accent-tomato)' }}>BRANCHES</span> IN DHARWAD.
            </h2>
            <p className="body-lg" style={{ maxWidth: 560, marginTop: 12 }} data-aos="fade-up" data-aos-delay="300">
              Two world-class gym facilities on PB Road. Select your branch to explore equipment, address, and admission details.
            </p>
          </div>
        )}

        <div className={styles.grid}>
          {/* Branch 1 Card */}
          <div className={`${styles.card} card-press`} id="branch-malmaddi-card" data-aos="zoom-in" data-aos-delay="0">
            <div className={styles.cardHeader}>
              <span className={styles.branchTag}>Branch 1 · Main Facility</span>
              <h3 className={styles.branchName}>Malmaddi Branch (Main)</h3>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.infoLine}>
                <MapPin size={18} className={styles.infoIcon} />
                <span>{BRANCH_1_ADDRESS}</span>
              </div>

              <div className={styles.infoLine}>
                <Phone size={18} className={styles.infoIcon} />
                <a href={PHONE_TEL} className={styles.phoneLink}>{PHONE_NUMBER}</a>
              </div>

              <div className={styles.featuresList}>
                <span className={styles.featureItem}><ShieldCheck size={14} /> Heavy Iron & Free Weights (up to 60kg+)</span>
                <span className={styles.featureItem}><Flame size={14} /> Olympic Lifting Platforms & Cages</span>
                <span className={styles.featureItem}><ShieldCheck size={14} /> Cardio Suite & Lockers</span>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  src={BRANCH_1_MAP_EMBED}
                  width="100%"
                  height="160"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Malmaddi Branch Google Map"
                />
              </div>
            </div>

            <div className={styles.cardFooter}>
              <Link href="/branches" className="btn btn-outline" style={{ padding: '12px 18px', fontSize: 12 }}>
                <span>View Details</span>
                <ArrowUpRight size={14} />
              </Link>
              <button
                className="btn btn-primary"
                style={{ padding: '12px 20px', fontSize: 12 }}
                onClick={() => handleJoinClick('Branch 1: Malmaddi Branch (Main)')}
              >
                <span>Join Now</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Branch 2 Card */}
          <div className={`${styles.card} ${styles.cardPrime} card-press`} id="branch-prime-card" data-aos="zoom-in" data-aos-delay="150">
            <div className={styles.cardHeader}>
              <div className={styles.badgeRow}>
                <span className={styles.branchTagPrime}>Branch 2 · Ignite Prime</span>
                <span className={styles.cafeTag}><Coffee size={12} /> Includes Ignite Cafe</span>
              </div>
              <h3 className={styles.branchName}>Ignite Prime (Gandhi Nagar)</h3>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.infoLine}>
                <MapPin size={18} className={styles.infoIcon} />
                <span>{BRANCH_2_ADDRESS}</span>
              </div>

              <div className={styles.infoLine}>
                <Phone size={18} className={styles.infoIcon} />
                <a href={PHONE_TEL} className={styles.phoneLink}>{PHONE_NUMBER}</a>
              </div>

              {/* Ignite Cafe Spotlight Banner */}
              <div className={styles.cafeSpotlight}>
                <div className={styles.cafeHeader}>
                  <Coffee size={18} color="var(--accent-tomato)" />
                  <span className={styles.cafeTitle}>IGNITE CAFE IN-HOUSE NUTRITION</span>
                </div>
                <p className={styles.cafeDesc}>
                  Protein shakes, pre-workout brews, cold-pressed juices & post-workout macro meals exclusively inside Ignite Prime.
                </p>
              </div>

              <div className={styles.featuresList}>
                <span className={styles.featureItem}><Flame size={14} /> CrossFit & High-Intensity Arena</span>
                <span className={styles.featureItem}><Coffee size={14} /> In-house Fitness Cafe & Shake Lounge</span>
                <span className={styles.featureItem}><ShieldCheck size={14} /> Biomechanics 1-on-1 PT Suite</span>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  src={BRANCH_2_MAP_EMBED}
                  width="100%"
                  height="160"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Ignite Prime Gandhi Nagar Map"
                />
              </div>
            </div>

            <div className={styles.cardFooter}>
              <Link href="/branches" className="btn btn-outline" style={{ padding: '12px 18px', fontSize: 12 }}>
                <span>View Details</span>
                <ArrowUpRight size={14} />
              </Link>
              <button
                className="btn btn-primary"
                style={{ padding: '12px 20px', fontSize: 12 }}
                onClick={() => handleJoinClick('Branch 2: Ignite Prime (Gandhi Nagar)')}
              >
                <span>Join Now</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Admission Modal */}
        <AdmissionModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          defaultBranch={selectedBranch}
        />
      </div>
    </section>
  );
}
