import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

export const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-primary">
          Join the Herd and Moo-ve with Us!
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Button
            className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white px-8 py-6 text-lg rounded-full flex items-center gap-2"
            onClick={() => window.open("https://discord.gg/polishcow", "_blank")}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12h6m-6 4h6m-6-8h6m-3-4v16" />
            </svg>
            Join Discord
          </Button>
          <Button
            className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white px-8 py-6 text-lg rounded-full flex items-center gap-2"
            onClick={() => window.open("https://twitter.com/polishcowcoin", "_blank")}
          >
            <Twitter className="w-6 h-6" />
            Follow Twitter
          </Button>
        </div>
      </div>
    </section>
  );
};