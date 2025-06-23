import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import SecondSection from '../../components/SecondSection';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-24 bg-white">
        <HeroSection />

        <SecondSection />
      </main>
      <Footer />
    </div>
  );
}
