import { useEffect, useState } from "react";

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

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const yOffset = -60;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-blue-400 overflow-hidden">
      <div className="z-10 px-6 text-center max-w-4xl space-y-6">
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
          Train Smart. Get{' '}
          <span className="text-blue-400 transition-all duration-500">
            {displayed}
          </span>
          .
        </h1>
        <p className="text-white text-lg md:text-xl">
          RayGym empowers your fitness journey with modern technology and strong community support.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, 'pricing')}
            className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          >
            Get Started
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="inline-block px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
