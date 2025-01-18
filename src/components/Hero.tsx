import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-radial from-purple-50 to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="z-10 text-center p-4">
        <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
          Join the Polish Cow Craze!
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-8">
          Where memes meet decentralized fun
        </p>
        <div className="relative w-full max-w-2xl mx-auto mb-8 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/OyDyOweu-PA?autoplay=1&loop=1&playlist=OyDyOweu-PA&mute=1"
            title="Dancing Polish Cow"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
        <div className="flex gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            Buy Now
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
};