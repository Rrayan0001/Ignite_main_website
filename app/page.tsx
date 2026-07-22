import HeroSection from '@/components/HeroSection';
import MarqueeTicker from '@/components/MarqueeTicker';
import BranchesSection from '@/components/BranchesSection';
import ConceptSection from '@/components/ConceptSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ClassesSection from '@/components/ClassesSection';
import MembershipSection from '@/components/MembershipSection';
import TrainersSection from '@/components/TrainersSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeTicker />
      <BranchesSection />
      <ConceptSection />
      <FacilitiesSection />
      <ClassesSection />
      <MembershipSection />
      <TrainersSection />
      <GallerySection />
      <LocationSection />
    </main>
  );
}
