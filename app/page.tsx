import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BranchesSection from '@/components/BranchesSection';
import ConceptSection from '@/components/ConceptSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ClassesSection from '@/components/ClassesSection';
import MembershipSection from '@/components/MembershipSection';
import TrainersSection from '@/components/TrainersSection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BranchesSection />
      <ConceptSection />
      <FacilitiesSection />
      <ClassesSection />
      <MembershipSection />
      <TrainersSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </main>
  );
}
