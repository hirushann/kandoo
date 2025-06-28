import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import SecondSection from '../../components/SecondSection';
import ThirdSection from '../../components/ThirdSection';
import FourthSection from '../../components/FourthSection';
import FifthSection from '../../components/FifthSection';
import SixthSection from '../../components/SixthSection';
import { ReviewSection } from '../../components/ReviewSection';
import SeventhSection from 'components/SeventhSection';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-24 bg-white">
        <HeroSection />

        {/* <SecondSection /> */}

        <ThirdSection />

        <FourthSection />

        <FifthSection />

        <SixthSection />

        <SeventhSection />

        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
}
