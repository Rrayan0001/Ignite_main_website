import { Smartphone, Calendar, TrendingUp, Target, Award, ShieldCheck } from 'lucide-react';
import styles from './AppSection.module.css';

export default function AppSection() {
  return (
    <section className={styles.section} id="app">
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.grid}>
          {/* Content */}
          <div className={styles.content}>
            <p className="label">
              <Smartphone size={14} color="var(--accent-tomato)" />
              <span>IGNITE Fitness App</span>
            </p>
            <div className="neon-line" style={{ marginTop: 16 }} />
            <h2 className={styles.heading}>
              YOUR FITNESS.<br />
              YOUR <span className={styles.accent}>PHONE</span>.
            </h2>
            <p className={styles.body}>
              The Ignite Fitness app puts your entire training journey at your fingertips.
              Book personal training slots, track workouts, monitor progressive overload, and consult with certified trainers.
            </p>

            <ul className={styles.features}>
              {[
                { Icon: Calendar, text: 'Book 1-on-1 coaching slots in seconds' },
                { Icon: TrendingUp, text: 'Real-time workout tracking & progress analytics' },
                { Icon: Target, text: 'Personalized diet charts from certified counselors' },
                { Icon: Award, text: 'Trainer guidance & schedule reminders' },
                { Icon: ShieldCheck, text: 'Manage membership & plan renewals easily' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <Icon size={18} color="var(--accent-tomato)" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className={styles.badges}>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badge}
                id="app-store-badge"
              >
                <Smartphone className={styles.badgeIcon} size={24} />
                <div className={styles.badgeText}>
                  <span className={styles.badgeSmall}>Download on the</span>
                  <span className={styles.badgeBig}>App Store</span>
                </div>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badge}
                id="google-play-badge"
              >
                <Smartphone className={styles.badgeIcon} size={24} />
                <div className={styles.badgeText}>
                  <span className={styles.badgeSmall}>Get it on</span>
                  <span className={styles.badgeBig}>Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className={styles.mockupCol}>
            <div className={styles.mockupWrap}>
              {/* Phone frame */}
              <div className={styles.phone}>
                <div className={styles.phoneSpeaker} />
                <div className={styles.phoneScreen}>
                  {/* App UI mockup */}
                  <div className={styles.appHeader}>
                    <span className={styles.appGreeting}>Good morning, Member 👋</span>
                    <span className={styles.appStreak}>🔥 14 day streak</span>
                  </div>
                  <div className={styles.appToday}>
                    <div className={styles.appTodayLabel}>Today's Session</div>
                    <div className={styles.appClass}>
                      <div className={styles.appClassIcon}>🏋️</div>
                      <div>
                        <div className={styles.appClassName}>1-on-1 PT Session</div>
                        <div className={styles.appClassTime}>07:00 AM · PB Road</div>
                      </div>
                      <div className={styles.appClassStatus}>Confirmed</div>
                    </div>
                  </div>
                  <div className={styles.appStats}>
                    <div className={styles.appStat}>
                      <span className={styles.appStatNum}>18</span>
                      <span className={styles.appStatLabel}>Sessions</span>
                    </div>
                    <div className={styles.appStat}>
                      <span className={styles.appStatNum}>4.2k</span>
                      <span className={styles.appStatLabel}>Kcal</span>
                    </div>
                    <div className={styles.appStat}>
                      <span className={styles.appStatNum}>14</span>
                      <span className={styles.appStatLabel}>Day Streak</span>
                    </div>
                  </div>
                  <div className={styles.appUpcoming}>
                    <div className={styles.appUpcomingLabel}>Upcoming Schedule</div>
                    {[
                      { name: 'Hypertrophy Leg Day', day: 'Tomorrow', time: '06:30' },
                      { name: 'CrossFit Arena', day: 'Thu', time: '08:00' },
                    ].map((c) => (
                      <div key={c.name} className={styles.appUpcomingItem}>
                        <span className={styles.appUpcomingName}>{c.name}</span>
                        <span className={styles.appUpcomingTime}>{c.day} · {c.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div className={styles.glow} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
