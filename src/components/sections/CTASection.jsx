export default function CTASection() {
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
    <section id="contact" className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-blue-900 via-black to-blue-950 text-white z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Ready to Transform Your Body & Mind?
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Join thousands of others who have already started their fitness journey with RayGym. Start strong, stay consistent, and unlock your best self.
        </p>
        <div className="flex justify-center">
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, 'pricing')}
            className="px-8 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition font-medium text-lg shadow-lg"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}