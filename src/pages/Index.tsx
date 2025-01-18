import { Hero } from "@/components/Hero";
import { Roadmap } from "@/components/Roadmap";
import { Community } from "@/components/Community";
import { MusicPlayer } from "@/components/MusicPlayer";
import DecorativeCows from "@/components/DecorativeCows";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <DecorativeCows />
      <Hero />
      <Roadmap />
      <Community />
      <MusicPlayer />
    </div>
  );
};

export default Index;