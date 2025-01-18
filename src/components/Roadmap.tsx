import { CheckCircle, Circle } from "lucide-react";

const phases = [
  {
    title: "Phase 1: Website and Token Launch",
    description: "Launch of PolishCow.fun and token deployment",
    completed: true,
  },
  {
    title: "Phase 2: Community Growth",
    description: "Expansion of our community on Discord and Telegram",
    completed: false,
  },
  {
    title: "Phase 3: Merch and NFT Integration",
    description: "Launch of exclusive Polish Cow merchandise and NFT collection",
    completed: false,
  },
  {
    title: "Phase 4: Mini-Games",
    description: "Release of Polish Cow-themed blockchain games",
    completed: false,
  },
];

export const Roadmap = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Moo-velous Roadmap
        </h2>
        <div className="max-w-3xl mx-auto">
          {phases.map((phase, index) => (
            <div key={index} className="flex items-start mb-8 gap-4">
              {phase.completed ? (
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              ) : (
                <Circle className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
              )}
              <div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};