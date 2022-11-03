import React, { useState } from 'react';
import useAudio from '../utilities/useAudio';

const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <div
      className="p-4 rounded-b-lg md:flex md:flex-row sm:flex-col
        md:justify-between bg-secondary shadow-header ">
      <div className="text-center">
        <h1 className="text-text">My Portfolio</h1>
      </div>
      <div className="divide-x flex-row flex divide-selected justify-center">
        <ToggleTheme darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Icons />
      </div>
    </div>
  );
};

const ToggleTheme = ({ darkTheme, setDarkTheme }) => {
  const urlClick = 'https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3';
  const [playingClick, setPlayingClick] = useAudio(urlClick, 0.2);
  return (
    <div className="bg-white w-10 h-min rounded-xl self-center ">
      <button
        onClick={() => {
          setPlayingClick(!playingClick);
          onChange(!darkTheme);
          setDarkTheme(!darkTheme);
        }}
        className={`w-10 h-min ${
          darkTheme
            ? 'bg-backgroundRGBA border-backgroundRGBA hover:border-white'
            : 'bg-sunRGBA border-sunRGBA hover:border-white'
        } self-center rounded-xl border flow-root`}>
        <div
          className={`h-5 w-5 items-center justify-center flex rounded-full ${
            darkTheme ? 'bg-background float-right' : 'bg-sun'
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            style={{ color: 'white' }}
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                darkTheme
                  ? 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
                  : 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
              }
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

const onChange = (value) => {
  localStorage.setItem('theme', value);
};

const Icons = () => {
  return (
    <div className="right flex space-x-6 flex-row mr-5 ml-6 pl-6">
      <Icon
        d={
          'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'
        }
        hoverColor={'#ff0000'}
        navigateTo={'https://www.youtube.com/channel/UCYiOjT35Zb7C2r9AdGxtjMw/videos'}
      />
      <Icon
        d={
          'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
        }
        hoverColor={'#333'}
        navigateTo={'https://github.com/jpdealba'}
      />
      <Icon
        d={
          'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        }
        hoverColor={'#0077b5'}
        navigateTo={'https://www.linkedin.com/in/juan-pablo-de-alba/'}
      />
    </div>
  );
};

const Icon = ({ d, hoverColor, navigateTo }) => {
  const [color, setColor] = useState('#B8B7CD');
  return (
    <svg
      onClick={() => window.open(navigateTo)}
      onMouseEnter={() => {
        setColor(hoverColor);
      }}
      onMouseLeave={() => {
        setColor('#B8B7CD');
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className={`w-7 h-7 transform transition duration-500 hover:scale-110 hover:cursor-pointer`}
      style={{ color: color }}>
      <path fill="currentColor" d={d} />
    </svg>
  );
};

export default Header;
