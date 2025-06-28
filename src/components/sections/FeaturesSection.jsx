import { Dumbbell, Brain, Users, ChartSpline } from "lucide-react";

const features = [
  {
    icon: (
      <Brain className="w-10 h-10 text-blue-500 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
    ),
    title: "Smart Workout Plans",
    description:
      "Workouts are automatically tailored to your goals, time and fitness level.",
  },
  {
    icon: (
      <Dumbbell className="w-10 h-10 text-blue-500 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
    ),
    title: "Fitness Coach",
    description:
      "Receive guidance from certified fitness coaches who tailor their support to your journey and lifestyle.",
  },
  {
    icon: (
      <Users className="w-10 h-10 text-blue-500 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
    ),
    title: "Community Support",
    description:
      "Connect with fellow fitness warriors. Share, get motivated, and grow together.",
  },
  {
    icon: (
      <ChartSpline className="w-10 h-10 text-blue-500 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
    ),
    title: "Progress Tracking",
    description:
      "Monitor your daily progress and achieve your goals with clear visual analytics.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="text-white pb-40 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
          Why Choose RayGym?
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto">
          We offer the best combination of technology, convenience, and
          community support to help you achieve your best health.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#101c2c] to-[#0f0f0f] p-[2px] rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 border border-blue-900 hover:border-blue-500/60"
            >
              <div className="bg-[#0f0f0f]/90 rounded-2xl h-full p-8 flex flex-col items-center min-h-[250px] w-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm text-center">
                  {feature.title}
                </h3>
                <p className="text-sm text-blue-200 mt-2 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="absolute -inset-1 rounded-2xl pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-blue-500/30 to-blue-900/10 blur-lg z-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
