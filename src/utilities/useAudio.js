import { useEffect, useState } from "react";

const useAudio = (url, isMuted) => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  //   setPlaying(!playing);

  useEffect(() => {
    !isMuted && playing && audio.play();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, setPlaying];
};

export default useAudio;
