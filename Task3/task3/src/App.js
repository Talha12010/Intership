import HeroSection from './components/hero';
import Features from './components/Features';
import Testimonials from './components/test';
import Pricing from './components/price';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;