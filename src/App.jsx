import "./App.css";
import Silk from "./components/backgrounds/Silk";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import FeaturesSection from "./components/sections/FeaturesSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative z-0">
        {/* Background Image with Parallax & Blur */}
        <div
          className="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-fixed blur-[2px] -z-20"
          aria-hidden="true"
        />

        {/* Aurora Effect Layer */}
        <div className="absolute inset-0 -z-10 opacity-90 pointer-events-none">
          <Silk
            speed={8}
            scale={0.5}
            color="#0D033F"
            noiseIntensity={0}
            rotation={0}
          />
        </div>

        {/* Hero and Features Section with transparent background */}
        <Hero />
        <FeaturesSection />
      </div>
      <h1 className="text-red-500">Hallo World</h1>
    </>
  );
}

export default App;
