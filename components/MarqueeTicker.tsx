'use client';

import { Flame, Dumbbell, ShieldCheck, Zap } from 'lucide-react';
import styles from './MarqueeTicker.module.css';

const marqueeItems = [
  { text: 'STRENGTH TRAINING', highlight: true },
  { text: 'BIOMECHANICS COACHING', highlight: false },
  { text: 'MUSCLE HYPERTROPHY', highlight: true },
  { text: 'CROSSFIT ARENA', highlight: false },
  { text: '1-ON-1 PERSONAL TRAINING', highlight: true },
  { text: 'HEAVY IRON ZONES (60KG+)', highlight: false },
  { text: 'PB ROAD DHARWAD', highlight: true },
  { text: 'IGNITE CAFE NUTRITION', highlight: false },
];

export default function MarqueeTicker() {
  // Duplicate array 3 times for a seamless infinite loop
  const list = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className={styles.tickerContainer} aria-label="Gym Highlights Marquee">
      <div className={styles.tickerTrack}>
        {list.map((item, index) => (
          <div key={index} className={styles.tickerItem}>
            <span className={`${styles.tickerText} ${item.highlight ? styles.highlightText : ''}`}>
              {item.text}
            </span>
            <Flame className={styles.tickerIcon} size={15} color="var(--accent-tomato)" />
          </div>
        ))}
      </div>
    </div>
  );
}
