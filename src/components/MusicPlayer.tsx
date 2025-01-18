import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("polishCowAudio") as HTMLAudioElement;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio id="polishCowAudio" loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_2449b9459c.mp3?filename=gdzie-jest-bialy-wegorz-zejscie-dancing-polish-cow-hd.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Button
        onClick={togglePlay}
        className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg"
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};