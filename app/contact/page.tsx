'use client';

import styles from './page.module.css';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'Malmaddi Branch (Main)',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Contact us for memberships, free trial sessions, 1-on-1 personal training, or branch visits in Dharwad.
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
                We operate two prime branches in Dharwad. Contact us directly or visit our desk for a tour.
              </p>

              <div className={styles.cards}>
                <div className={`${styles.card} card-press`} data-aos="fade-up" data-aos-delay="0">
                  <span className={styles.cardIcon}>📍</span>
                  <div>
                    <h3 className={styles.cardTitle}>Malmaddi Branch (Main)</h3>
                    <p className={styles.cardText}>
                      2nd Floor, SP Laxmi Heights, PB Road, near NTTF BRTS Bus Stop, Shanti Nagar, Malmaddi, Dharwad 580001
                    </p>
                  </div>
                </div>

                <div className={`${styles.card} card-press`} data-aos="fade-up" data-aos-delay="100">
                  <span className={styles.cardIcon}>📍</span>
                  <div>
                    <h3 className={styles.cardTitle}>Ignite Prime (Gandhi Nagar)</h3>
                    <p className={styles.cardText}>
                      4th Floor, Business Center, PB Road, Gandhinagar, Dharwad 580004
                    </p>
                  </div>
                </div>

                <div className={`${styles.card} card-press`} data-aos="fade-up" data-aos-delay="200">
                  <span className={styles.cardIcon}>📞</span>
                  <div>
                    <h3 className={styles.cardTitle}>Phone & Enquiry</h3>
                    <p className={styles.cardText}>+91 81979 17330</p>
                  </div>
                </div>

                <div className={`${styles.card} card-press`} data-aos="fade-up" data-aos-delay="300">
                  <span className={styles.cardIcon}>🕐</span>
                  <div>
                    <h3 className={styles.cardTitle}>Hours</h3>
                    <p className={styles.cardText}>Mon – Sat: 6:00 AM – 11:00 PM | Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className={styles.formCol} data-aos="fade-left" data-aos-delay="200">
              {submitted ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✓</span>
                  <h3 className={styles.successTitle}>Thank You!</h3>
                  <p className={styles.successText}>
                    Your inquiry has been received. Our trainer team will contact you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: 16 }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="branch" className={styles.formLabel}>Preferred Branch</label>
                      <select
                        id="branch"
                        value={formState.branch}
                        onChange={(e) => setFormState({ ...formState, branch: e.target.value })}
                        className={styles.select}
                      >
                        <option>Malmaddi Branch (Main)</option>
                        <option>Ignite Prime (Gandhi Nagar)</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                      <select
                        id="subject"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className={styles.select}
                      >
                        <option>General Inquiry</option>
                        <option>Book Free Trial Session</option>
                        <option>Membership Plan Rates</option>
                        <option>1-on-1 Personal Training</option>
                        <option>Nutrition & Diet Coaching</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message" className={styles.formLabel}>Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your fitness goals..."
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
