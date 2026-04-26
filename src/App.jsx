import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Culture from './components/Culture';
import Tourism from './components/Tourism';
import Culinary from './components/Culinary';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-nias-night text-nias-cream font-sans">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Culture />
        <Tourism />
        <Culinary />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
