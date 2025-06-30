import { Instagram, Facebook, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-20 text-sm">
        {/* Branding */}
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-lg transition-transform duration-200">
            Ray<span className="text-white">Gym</span>
          </h3>
          <p className="text-white">
            Elevate your body and mind. Join the smarter fitness movement today.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-900 hover:bg-white transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white group-hover:text-blue-900 transition-colors" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-900 hover:bg-white transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white group-hover:text-blue-900 transition-colors" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-900 hover:bg-white transition-colors group"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5 text-white group-hover:text-blue-900 transition-colors" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-3 md:col-span-1">
          <h4 className="text-blue-400 font-semibold">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="#about" className="hover:text-blue-100 transition">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-100 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-100 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-100 transition">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3 md:col-span-1">
          <h4 className="text-blue-400 font-semibold">Support</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-blue-100 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-100 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-100 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3 md:col-span-2">
          <h4 className="text-blue-400 font-semibold">Contact</h4>
          <p>Email: support@raygym.com</p>
          <p>Phone: +62 812 3456 7890</p>
          <p>Address: Tasikmalaya, Indonesia</p>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-lg">
        ©{new Date().getFullYear()} RayGym. All rights reserved.
      </div>
    </footer>
  );
}