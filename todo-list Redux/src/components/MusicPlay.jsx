import { useEffect, useRef, useState } from "react";

export const MusicPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/Married Life.mp3"));
  const playMusic = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
      audio.currentTime = 0;
    }
  };
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  return (
    <div>
      <h1 className={isPlaying ? "title" : ""} onClick={playMusic}>
        Todo List
      </h1>
    </div>
  );
};
