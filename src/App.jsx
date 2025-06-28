import "./App.css";
import Hero from "./components/sections/Hero";
import Aurora from "./components/backgrounds/Aurora";
import Navbar from "./components/sections/Navbar";
import FeaturesSection from "./components/sections/FeaturesSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative z-0">
        {/* Background Image with Parallax & Blur */}
        <div
          className="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-fixed blur-[2px] -z-30"
          aria-hidden="true"
        />

        {/* Black Overlay Layer */}
        <div className="absolute inset-0 bg-black/80 -z-20" />

        {/* Aurora Effect Layer */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#1e3a8a", "#3b82f6", "#1e3a8a"]}
            amplitude={0.5}
            blend={0.3}
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
