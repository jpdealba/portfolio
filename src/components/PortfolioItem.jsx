import getAverageColor from 'get-average-color';
import React, { useEffect, useState } from 'react';
import useAudio from '../utilities/useAudio';

const PortfolioItem = ({ imgUrl, title, stack, workUrl, setPlayingHover, description }) => {
  const urlClick = 'https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3';
  const [playingClick, setPlayingClick] = useAudio(urlClick);
  const [color, setColor] = useState(["white"])
  function onClick() {
    setPlayingClick(!playingClick);
    window.open('https://www.google.com');
  }

  useEffect(() => {
    getAverageColor(imgUrl).then(rgb => setColor("rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",1)"))
  }, [])

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg mx-3 dark:bg-darkenBackground 
      border dark:border-darkenBackground border-gray-200 
      mb-6 hover:cursor-pointer  hover:shadow-header transform transition duration-500 hover:scale-110
      hover:dark:shadow-darkCard"
      onMouseEnter={() => {
        setPlayingHover(true);
      }}
      onMouseLeave={() => {
        setPlayingHover(false);
      }}
      onClick={onClick}
    >
      <img class="w-full" src={imgUrl} alt="Sunset in the mountains"/>
      <div class="px-4 py-4">
        <div class="font-bold text-xl mb-2 dark:text-white">{title}</div>
        <p class="text-gray-700 text-base dark:text-text">
         {description}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
          {stack.map((item) => (
            <span class="inline-block rounded-full px-3 py-1 bg-primary
             text-sm font-semibold mr-2 mb-2 text-white">
              #{item}
            </span>
          ))}
      </div>
    </div>
  );
};

export default PortfolioItem;
