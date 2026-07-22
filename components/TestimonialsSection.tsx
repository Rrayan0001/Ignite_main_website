'use client';

import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Praful Patil',
    role: 'Annual Member · PB Road Dharwad',
    rating: 5,
    avatar: 'P',
    text: 'Ignite Fitness is hands down the best gym in Dharwad. The dumbbells up to 60+kg, power racks, and certified personal trainers helped me build significant muscle mass over the past year.',
  },
  {
    id: 2,
    name: 'Ananya Deshpande',
    role: '6-Month Member · Malmaddi',
    rating: 5,
    avatar: 'A',
    text: 'The 1-on-1 personal coaching and biomechanics guidance prevented knee strain while doing squats. The CrossFit functional arena is high energy and super clean!',
  },
  {
    id: 3,
    name: 'Kiran Kulkarni',
    role: 'Annual Member · Gandhi Nagar',
    rating: 5,
    avatar: 'K',
    text: 'Ignite Prime is spectacular. State of the art equipment, clean changing rooms with private showers, and customized diet planning that actually works with Indian meals.',
  },
  {
    id: 4,
    name: 'Rohan Joshi',
    role: '6-Month Member · Dharwad',
    rating: 5,
    avatar: 'R',
    text: 'Lost 12 kg in 4 months with the weight loss transformation program. The trainers focus on form correction and keep you motivated every single day.',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <p className="label">Member Stories</p>
          <div className="gold-line" style={{ marginTop: 16 }} />
          <h2 className="display-md" style={{ marginTop: 8 }}>
            WHAT OUR <span style={{ color: 'var(--accent-tomato)' }}>MEMBERS</span> SAY.
          </h2>
        </div>

        <div className={styles.carousel}>
          <div className={styles.quoteIconWrap}>
            <Quote size={56} className={styles.quoteIcon} />
          </div>

          <p className={styles.quote} key={active}>
            "{t.text}"
          </p>

          <div className={styles.author}>
            <div className={styles.avatar}>
              <span>{t.avatar}</span>
            </div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{t.name}</span>
              <span className={styles.authorRole}>{t.role}</span>
            </div>
            <div className={styles.stars}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} fill="var(--accent-tomato)" color="var(--accent-tomato)" />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                id={`testimonial-dot-${i}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail row */}
        <div className={styles.thumbnails}>
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
              onClick={() => setActive(i)}
              id={`testimonial-thumb-${i}`}
            >
              <div className={styles.thumbAvatar}>{t.avatar}</div>
              <div className={styles.thumbInfo}>
                <span className={styles.thumbName}>{t.name}</span>
                <span className={styles.thumbRole}>{t.role.split(' · ')[0]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
