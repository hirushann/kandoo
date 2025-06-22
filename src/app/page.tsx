import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-24 bg-white">
        <HeroSection />
      </main>
    </div>
  );
}
