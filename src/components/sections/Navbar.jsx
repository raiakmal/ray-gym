import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-lg font-poppins">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Ray<span className="text-white">Gym</span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-2 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-base font-medium text-white hover:text-blue-500 hover:bg-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-blue-500 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/70 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      {/* Mobile menu */}
      <nav
        className={`md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-black shadow-2xl border-l border-blue-900 rounded-l-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-900">
          <a
            href="#home"
            className="text-2xl font-extrabold text-blue-700 tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            Ray<span className="text-white">Gym</span>
          </a>
          <button
            className="text-blue-400 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 py-6 bg-black/90 rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-blue-400 hover:text-white hover:bg-blue-500/20 bg-black/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
