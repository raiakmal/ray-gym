import { Instagram, Facebook, Phone } from "lucide-react";
import { useCallback } from "react";

export default function Footer() {
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const yOffset = -50;
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-16 text-sm">
        {/* Branding */}
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg">
            Ray<span className="text-white">Gym</span>
          </h3>
          <p>
            Elevate your body and mind. Join the smarter fitness movement today.
          </p>
          <div className="flex gap-3 mt-2">{/* Icon links */}</div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 md:col-span-1">
          <h4 className="text-blue-400 font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "About", id: "about" },
              { label: "Features", id: "features" },
              { label: "Pricing", id: "pricing" },
              { label: "Gallery", id: "gallery" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className="hover:text-blue-200 transition-colors text-left w-full cursor-pointer" 
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3 md:col-span-1">
          <h4 className="text-blue-400 font-semibold">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3 md:col-span-2">
          <h4 className="text-blue-400 font-semibold">Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:support@raygym.com" className="hover:text-blue-200">
              support@raygym.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+6281234567890" className="hover:text-blue-200">
              +62 812 3456 7890
            </a>
          </p>
          <p>Address: Tasikmalaya, Indonesia</p>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-xs text-blue-200">
        ©{new Date().getFullYear()} RayGym. All rights reserved.
      </div>
    </footer>
  );
}
