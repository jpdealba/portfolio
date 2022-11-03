import { useEffect, useState } from 'react';

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audio.volume = 0.3;
  }, []);
  useEffect(() => {
    if (localStorage.getItem('mute') != 'true') {
      playing && audio.play();
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, setPlaying];
};

export default useAudio;
