import "./App.css";
import Navbar from "./components/sections/Navbar";
import Silk from "./components/backgrounds/Silk";
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import PricingSection from "./components/sections/PricingSection";
import GallerySection from "./components/sections/GallerySection";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="relative z-0">
        {/* === Hero and About Section === */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-fixed blur-[2px] -z-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 opacity-90 pointer-events-none">
            <Silk
              speed={8}
              scale={0.5}
              color="#0D033F"
              noiseIntensity={0}
              rotation={0}
            />
          </div>
          <Hero />
          <AboutSection />
        </div>

        {/* === Features Section === */}
        <div className="relative">
          <div
            className="absolute -mt-1 inset-0 bg-[url('/bg-features.jpg')] bg-cover bg-center bg-fixed blur-[2px] -z-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/90 -z-10 pointer-events-none" />
          <FeaturesSection />
        </div>

        {/* === Pricing Section === */}
        <div className="relative">
          <div
            className="absolute -mt-1 inset-0 bg-[url('/bg-pricing.jpg')] bg-cover bg-center bg-fixed blur-[2px] -z-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/70 -z-10 pointer-events-none" />
          <PricingSection />
        </div>
      </div>

      {/* === Gallery Section === */}
      <GallerySection />

      {/* === Call to Action Section === */}
      <CTASection />

      {/* Footer or additional sections can go here */}
      <Footer />
    </>
  );
}

export default App;
