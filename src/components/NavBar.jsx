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
    document.body.scrollTop > 40 || document.documentElement.scrollTop > 40
      ? setScroll(true)
      : setScroll(false);

  useEffect(() => {
    const listener = window.addEventListener('scroll', changeScroll);
    return listener;
  }, []);

  return (
    <div
      className={`fixed  w-full z-50
      items-center justify-between transition-all duration-500
      flex px-4 h-16 bg-slate-100 dark:bg-[#171923]
      ${scroll ? 'shadow-lg dark:shadow-teal/20 ' : 'shadow-none'} `}>
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
  );
};

const onChange = (value) => {
  localStorage.setItem('theme', value);
};

export default NavBar;
