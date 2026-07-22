import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ConceptSection from '@/components/ConceptSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ClassesSection from '@/components/ClassesSection';
import MembershipSection from '@/components/MembershipSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <FacilitiesSection />
      <ClassesSection />
      <MembershipSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
