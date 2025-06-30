import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', targetId: 'home' },
  { label: 'About', targetId: 'about' },
  { label: 'Features', targetId: 'features' },
  { label: 'Pricing', targetId: 'pricing' },
  { label: 'Gallery', targetId: 'gallery' },
  { label: 'Contact', targetId: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = useCallback(() => {
    setIsFixed(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const yOffset = -70;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg transition-all ${
        isFixed ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Ray<span className="text-white">Gym</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => handleSmoothScroll(e, link.targetId)}
              className="px-4 py-2 rounded-lg text-base font-medium text-white hover:text-blue-500 hover:bg-blue-500/20 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-500 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/70 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-black shadow-2xl border-l border-blue-900 rounded-l-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-900">
          <span className="text-2xl font-extrabold text-blue-700">
            Ray<span className="text-white">Gym</span>
          </span>
          <button
            className="text-blue-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 py-6 bg-black/90 rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => handleSmoothScroll(e, link.targetId)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-blue-400 hover:text-white hover:bg-blue-500/20 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}