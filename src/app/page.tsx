import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Suspense } from "react";
import HeroSection from '../../components/HeroSection';
import SecondSection from '../../components/SecondSection';
import ThirdSection from '../../components/ThirdSection';
import FourthSection from '../../components/FourthSection';
import FifthSection from '../../components/FifthSection';
import SixthSection from '../../components/SixthSection';
import { ReviewSection } from '../../components/ReviewSection';
import SeventhSection from 'components/SeventhSection';
import PricingSection from 'components/PricingSection';


export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-24 bg-white">
        <Suspense fallback={null}>
          <HeroSection />
        </Suspense>

        {/* <SecondSection /> */}

        <ThirdSection />

        <div className='flex flex-col gap-28 px-3.5 relative'>
          <FourthSection />

          <FifthSection />

          <SixthSection />

          <SeventhSection />
        </div>

          <ReviewSection />

          <PricingSection />
        
      </main>
      <Footer />
    </div>
  );
}
