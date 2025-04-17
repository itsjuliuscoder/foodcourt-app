import HeroSection from '@/components/home/HeroSection';
import MenuSection from '@/components/home/MenuSection';
import ServicesSection from '@/components/home/ServicesSection';
import DealSection from '@/components/home/DealSection';
import NewsSection from '@/components/home/NewsSection';
import ReservationSection from '@/components/home/ReservationSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <MenuSection />
      <DealSection />
      <NewsSection />
      <ReservationSection />
    </main>
  );
}
