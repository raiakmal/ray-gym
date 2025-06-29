export default function GallerySection() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
    "/gallery9.jpg",
  ];

  return (
    <section id="gallery" className="relative -mt-1 py-24 md:py-32 px-2 md:px-6 text-white z-10 bg-gradient-to-b from-black via-blue-950 to-black">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
          Gallery
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          A glimpse into our community, facilities, and unstoppable energy.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl border-2 border-blue-900 hover:border-blue-500 hover:scale-105 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 group-hover:brightness-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}