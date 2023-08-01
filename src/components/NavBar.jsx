import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';
import { TbIcons, TbLetterJ, TbLetterP, TbMoon, TbSun } from 'react-icons/tb';
import Button from '../utilities/Button';
import useAudio from '../utilities/useAudio';
// const TbIcons = require('react-icons/tb');

const NavBar = ({ darkTheme, setDarkTheme }) => {
  const [scroll, setScroll] = useState(false);

  const urlClick = 'https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3';
  const [playingClick, setPlayingClick] = useAudio(urlClick, 0.2);

  const scrollToHero = () => {
    const heroSection = document.querySelector('#hero');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector('#experience');
    experienceSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  useEffect(() => {
    const listener = window.addEventListener('scroll', changeScroll);
    return listener;
  }, []);

  return (
    <div
      className={`sticky 
      items-center justify-between 
      flex px-4 h-16 bg-slate-100 dark:bg-[#171923]
      ${scroll ? 'shadow-lg' : 'shadow-none'} `}>
      <button onClick={scrollToHero} className="text-xl ">
        <div className="flex space-x-1">
          <TbLetterJ color={'#319795'} />
          <TbLetterP color={'#319795'} />
        </div>
      </button>

      <div className="items-center">
        <div className="hidden md:flex flex-row space-x-7  ">
          <Button variant="ghost" onClick={scrollToAbout}>
            About
          </Button>
          <Button variant="ghost" onClick={scrollToExperience}>
            Experience
          </Button>
          <Button variant="ghost" onClick={scrollToProjects}>
            Projects
          </Button>
          <Button variant="ghost" onClick={scrollToContact}>
            Contact
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setPlayingClick(!playingClick);
              onChange(!darkTheme);
              setDarkTheme(!darkTheme);
            }}>
            {!darkTheme ? <TbMoon className=" text-2xl" /> : <TbSun className="text-2xl" />}
          </Button>
        </div>
      </div>
    </div>
    // <div
    //   className="p-4 md:flex md:flex-row sm:flex-col
    //     md:justify-between bg-secondary shadow-header ">
    //   <div className="text-center">
    //     <h1 className="text-text">JPDEALBA</h1>
    //   </div>
    //   <div className="divide-x flex-row flex divide-selected justify-center">
    //     <ToggleTheme darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    //     <Icons />
    //   </div>
    // </div>
  );
};

// const ToggleTheme = ({ darkTheme, setDarkTheme }) => {
//   const urlClick = 'https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3';
//   const [playingClick, setPlayingClick] = useAudio(urlClick, 0.2);
//   return (
//     <div className=" w-10 h-min rounded-xl self-center ">
//       <button
//         onClick={() => {
//           setPlayingClick(!playingClick);
//           onChange(!darkTheme);
//           setDarkTheme(!darkTheme);
//         }}
//         className={`w-10 h-5 flex items-center justify-center ${
//           darkTheme ? 'bg-sunRGBA ' : 'bg-backgroundRGBA'
//         } self-center rounded-xl flow-root`}>
//         <div
//           className={`h-5 w-5 flex items-center justify-center scale-125 rounded-full ${
//             darkTheme ? 'bg-background float-right' : 'bg-sun'
//           } `}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             style={{ color: 'white' }}
//             className="w-5 h-5 scale-90">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d={
//                 darkTheme
//                   ? 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
//                   : 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
//               }
//             />
//           </svg>
//         </div>
//       </button>
//     </div>
//   );
// };

const onChange = (value) => {
  localStorage.setItem('theme', value);
};

export default NavBar;
