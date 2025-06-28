import { useEffect, useState } from "react";
import Aurora from "../backgrounds/Aurora";

const words = ["Stronger", "Fitter", "Healthier"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    if (typing) {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        }, 80);
      } else {
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-blue-400 overflow-hidden">
      {/* Background Image with Parallax & Blur */}
      <div
        className="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-fixed blur-sm -z-30"
        aria-hidden="true"
      />
      
      {/* Black Background Layer */}
      <div className="absolute inset-0 bg-black/70 -z-20" />
      
      {/* Background Aurora */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#1e3a8a", "#3b82f6", "#1e3a8a"]}
          amplitude={0.5}
          blend={0.3}
        />
      </div>

      {/* Content */}
      <div className="z-10 px-6 text-center max-w-4xl space-y-6">
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
          Train Smart. Get{' '}
          <span className="text-blue-400 transition-all duration-500">
            {displayed}
          </span>
          .
        </h1>
        <p className="text-blue-400 text-lg md:text-xl">
          RayGym empowers your fitness journey with modern technology and strong community support. 
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#features"
            className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-700 hover:text-white hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}