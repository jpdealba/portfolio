import { useEffect, useState } from 'react';
import './assets/input.css';
import reactLogo from './assets/react.svg';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro.jsx';
import Mute from './components/Mute';
import Portfolio from './components/Portfolio.jsx';

function App() {
  const [isMuted, setIsMuted] = useState(localStorage.getItem('mute'));
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('mute')) {
      localStorage.setItem('mute', false);
    }
    if (localStorage.getItem('theme') == 'false') {
      setDarkTheme(false);
    } else if (localStorage.getItem('theme') == 'true') {
      setDarkTheme(true);
    } else {
      setDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    setIsMuted(localStorage.getItem('mute'));
  }, []);

  const toggleMute = () => {
    var nextVal = isMuted == 'true' ? 'false' : 'true';
    localStorage.setItem('mute', nextVal);
    setIsMuted(nextVal);
  };
  return (
    <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
      <div
        className="max-w-5x1 w11/12 mx-auto bg-backgroundLight dark:bg-background flex 
                    flex-col justify-between min-h-screen ">
        <Mute toggleMute={toggleMute} isMuted={isMuted} />
        <div className="">
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Intro />
          <Portfolio />
          {/* <Timeline />
          <Contact /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
