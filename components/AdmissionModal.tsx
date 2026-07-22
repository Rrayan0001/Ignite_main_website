'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle2, Flame, MapPin } from 'lucide-react';
import { saveInquiry } from '@/lib/inquiryStore';
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
  defaultPlan = '6-Month Plan',
}: AdmissionModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState<'Branch 1: Malmaddi Branch (Main)' | 'Branch 2: Ignite Prime (Gandhi Nagar)'>(
    defaultBranch
  );
  const [plan, setPlan] = useState(defaultPlan);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultBranch) setBranch(defaultBranch);
    if (defaultPlan) setPlan(defaultPlan);
  }, [defaultBranch, defaultPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveInquiry({
      name,
      phone,
      email,
      branch,
      plan,
      message,
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <CheckCircle2 size={44} color="var(--accent-tomato)" />
            </div>
            <h3 className={styles.successTitle}>Inquiry Submitted!</h3>
            <p className={styles.successText}>
              Thank you, <strong>{name}</strong>! Your admission inquiry for{' '}
              <strong className={styles.highlight}>{branch}</strong> has been saved. Our team will contact you shortly at{' '}
              <strong>{phone}</strong>.
            </p>
            <button className="btn btn-primary" onClick={handleReset} style={{ width: '100%', justifyContent: 'center' }}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.header}>
              <div className={styles.badge}>
                <Flame size={14} color="var(--accent-tomato)" />
                <span>Join Ignite Fitness</span>
              </div>
              <h2 className={styles.title}>ADMISSION INQUIRY</h2>
              <p className={styles.sub}>
                Select your preferred branch in Dharwad and submit your details to lock in your membership rate.
              </p>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="adm-name" className={styles.label}>
                Full Name *
              </label>
              <input
                type="text"
                id="adm-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className={styles.input}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="adm-phone" className={styles.label}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="adm-phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="adm-email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="adm-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="adm-branch" className={styles.label}>
                Select Gym Branch *
              </label>
              <div className={styles.branchSelectGrid}>
                <button
                  type="button"
                  className={`${styles.branchOption} ${
                    branch === 'Branch 1: Malmaddi Branch (Main)' ? styles.branchOptionActive : ''
                  }`}
                  onClick={() => setBranch('Branch 1: Malmaddi Branch (Main)')}
                >
                  <MapPin size={16} />
                  <div>
                    <span className={styles.branchOptionTitle}>Branch 1: Malmaddi (Main)</span>
                    <span className={styles.branchOptionSub}>PB Road near NTTF Bus Stop</span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`${styles.branchOption} ${
                    branch === 'Branch 2: Ignite Prime (Gandhi Nagar)' ? styles.branchOptionActive : ''
                  }`}
                  onClick={() => setBranch('Branch 2: Ignite Prime (Gandhi Nagar)')}
                >
                  <MapPin size={16} />
                  <div>
                    <span className={styles.branchOptionTitle}>Branch 2: Ignite Prime</span>
                    <span className={styles.branchOptionSub}>Gandhinagar + Ignite Cafe</span>
                  </div>
                </button>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="adm-plan" className={styles.label}>
                Preferred Membership Plan
              </label>
              <select
                id="adm-plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className={styles.select}
              >
                <option value="1-Month Pass">1-Month Pass (Flexible)</option>
                <option value="3-Month Plan">3-Month Quarterly Plan</option>
                <option value="6-Month Plan">6-Month Half-Yearly (Most Popular)</option>
                <option value="12-Month Plan">12-Month Annual Pass (VIP)</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="adm-message" className={styles.label}>
                Fitness Goal / Notes
              </label>
              <textarea
                id="adm-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Weight loss, 1-on-1 personal training, muscle gain..."
                className={styles.textarea}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Submit Admission Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
