import { Instagram, Facebook, Phone } from "lucide-react";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 text-white z-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
            About RayGym
          </h2>
          <p className="text-blue-100 leading-relaxed">
            At <span className="text-white font-semibold">RayGym</span>, we
            believe fitness is more than just exercise — it's a journey to a
            better life. Whether you're just starting out or you're a seasoned
            athlete, our platform empowers you to move smarter, stay motivated,
            and achieve more.
          </p>
          <p className="text-blue-100 leading-relaxed">
            With personalized workout plans, real coaches, and an engaged
            community, RayGym gives you the tools and support to build
            long-lasting habits — all in one place.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-900 hover:bg-white transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white group-hover:text-blue-900" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-900 hover:bg-white transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white group-hover:text-blue-900" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-900 hover:bg-white transition-colors group"
              aria-label="WhatsApp"
            >
              <Phone className="w-6 h-6 text-white group-hover:text-blue-900" />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group w-full">
            <img
              src="/about-img.jpg"
              alt="About RayGym"
              className="rounded-2xl w-full max-h-[420px] object-cover shadow-2xl border-2 border-blue-900 group-hover:scale-105 group-hover:shadow-blue-800/40 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}