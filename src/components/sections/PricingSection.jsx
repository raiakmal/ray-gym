export default function PricingSection() {
  const plans = [
    {
      name: "Daily Pass",
      price: "Rp 10.000",
      duration: "Per Day",
      features: [
        "Access to all gym equipment",
        "1 group class included",
        "No commitment"
      ],
      highlight: false,
    },
    {
      name: "Monthly Plan",
      price: "Rp 100.000",
      duration: "Per Month",
      features: [
        "Unlimited gym access",
        "4 group classes",
        "Progress tracking",
        "Community access"
      ],
      highlight: true,
    },
    {
      name: "Annual Plan",
      price: "Rp 1.000.000",
      duration: "Per Year",
      features: [
        "Unlimited gym access",
        "Free t-shirt & starter kit",
        "12 guest passes",
        "Priority coach booking"
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-2 md:px-6 text-white z-10">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
          Choose Your Plan
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          Flexible pricing that fits your fitness goals — whether you're trying it out, going steady, or committing long-term.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 group shadow-xl overflow-hidden
                ${plan.highlight
                  ? "bg-gradient-to-br from-blue-900/90 to-blue-800/90 border-blue-500 scale-105 hover:scale-110 shadow-blue-700/40"
                  : "bg-[#0f0f0f]/80 border-blue-900 hover:scale-105 hover:shadow-blue-900/30"
                }`}
            >
              {/* Popular Badge */}
              {plan.highlight && (
                <span className="absolute top-0 right-0 bg-white text-blue-700 text-sm font-semibold px-3 py-1 rounded-sm shadow-lg animate-pulse z-10">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white tracking-tight">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-white mb-1 drop-shadow">{plan.price}</p>
              <p className="text-sm text-blue-100 mb-6">{plan.duration}</p>
              <ul className="space-y-3 text-blue-100 text-left mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto w-full py-3 rounded-full font-semibold transition-all duration-200 shadow-lg cursor-pointer
                  ${plan.highlight
                    ? "bg-white text-blue-900 hover:bg-blue-100"
                    : "bg-blue-600 hover:bg-blue-800 text-white"
                  }`}
              >
                {plan.highlight ? "Get Monthly Plan" : "Get Started"}
              </button>
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300
                ${plan.highlight ? "group-hover:shadow-[0_0_40px_10px_rgba(59,130,246,0.3)]" : ""}
              `} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}