'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Coffee } from 'lucide-react';
import styles from './GallerySection.module.css';

const galleryItems = [
  { id: 'g-1', title: 'Main Gym Floor & Treadmills', category: 'Cardio Suite', img: '/hero-gym.png', branch: 'Malmaddi' },
  { id: 'g-2', title: 'Dumbbells & Heavy Free Weights Zone', category: 'Strength Zone', img: '/concept-gym.png', branch: 'Malmaddi' },
  { id: 'g-3', title: 'CrossFit Arena & Functional Racks', category: 'CrossFit Arena', img: '/hero-gym.png', branch: 'Ignite Prime' },
  { id: 'g-4', title: 'Ignite Cafe Protein Shake Lounge', category: 'Ignite Cafe', img: '/ignite-cafe.png', branch: 'Ignite Prime' },
  { id: 'g-5', title: 'Olympic Power Cages & Bumper Racks', category: 'Strength Zone', img: '/concept-gym.png', branch: 'Malmaddi' },
  { id: 'g-6', title: 'Cardio Suite & Integrated Metrics', category: 'Cardio Suite', img: '/hero-gym.png', branch: 'Ignite Prime' },
];

const categories = ['All', 'Strength Zone', 'CrossFit Arena', 'Ignite Cafe', 'Cardio Suite'];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className={`section section--dark ${styles.section}`} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <p className="label" data-aos="fade-right">
            <Camera size={14} color="var(--accent-tomato)" />
            <span>Visual Tour</span>
          </p>
          <div className="neon-line" style={{ marginTop: 16 }} data-aos="fade-right" data-aos-delay="100" />
          <h2 className="display-md" style={{ marginTop: 8 }} data-aos="fade-right" data-aos-delay="200">
            GYM <span style={{ color: 'var(--accent-tomato)' }}>GALLERY</span>.
          </h2>
          <p className="body-lg" style={{ maxWidth: 560, marginTop: 12 }} data-aos="fade-up" data-aos-delay="300">
            Take a visual tour of our Dharwad gym facilities, workout arenas, and the in-house Ignite Cafe.
          </p>
        </div>

        {/* Filter buttons */}
        <div className={styles.filterBar} data-aos="fade-up" data-aos-delay="400">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'Ignite Cafe' && <Coffee size={14} />}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <div key={item.id} className={`${styles.card} card-press`} data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className={styles.imgWrap}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.overlay}>
                  <span className={styles.categoryBadge}>{item.category}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <span className={styles.branchTag}>{item.branch} Branch</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
