import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ThirdSection from '../../components/ThirdSection';
import HeroSection from '../../components/HeroSection';
import FourthSection from '../../components/FourthSection';
import FifthSection from '../../components/FifthSection';
import SecondSection from '../../components/SecondSection';
import { ReviewSection } from '../../components/ReviewSection';

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

        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
}
