import type { Metadata } from 'next';
import AchievementsSection from '@/components/AchievementsSection';

export const metadata: Metadata = {
  title: 'Achievements & Milestones — IGNITE FITNESS Gym Dharwad',
  description: 'Explore the achievements, milestones, member transformation records, and awards of Ignite Fitness Gym Dharwad.',
};

export default function AchievementsPage() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 20px)' }}>
      <AchievementsSection />
    </main>
  );
}
