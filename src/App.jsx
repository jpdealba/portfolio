import { useEffect, useState } from 'react';
import './assets/input.css';
import reactLogo from './assets/react.svg';
import Footer from './components/Footer';
import Header from './components/Header.jsx';
import Mute from './components/Mute';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio.jsx';

function App() {
  const [isMuted, setIsMuted] = useState(localStorage.getItem('mute'));
  const [darkTheme, setDarkTheme] = useState(null);
  useEffect(() => {
    if (!localStorage.getItem('mute')) {
      localStorage.setItem('mute', false);
    }
    if (localStorage.getItem('theme') == 'false') {
      setDarkTheme(false);
    } else if (localStorage.getItem('theme') == 'true') {
      setDarkTheme(true);
    } else {
      setDarkTheme(setDarkTheme(true));
    }
    setIsMuted(localStorage.getItem('mute'));
  }, []);

  const toggleMute = () => {
    var nextVal = isMuted == 'true' ? 'false' : 'true';
    localStorage.setItem('mute', nextVal);
    setIsMuted(nextVal);
  };
  if (darkTheme === null) return <div className="flex justify-center items-center h-screen"></div>;

  return (
    <div className={`App ${darkTheme ? 'dark bg-background' : 'light bg-backgroundLight'} `}>
      <Mute toggleMute={toggleMute} isMuted={isMuted} />
      <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Header darkTheme={darkTheme} />
      <Portfolio darkTheme={darkTheme} />
      {/* <Projects color={color} />
      <Contact color={color} /> */}
      <Footer />
    </div>
    // <div className={`App ${darkTheme ? 'dark' : 'light'} bg-secondary flex flex-col h-screen`}>
    //   <div
    //     className="bg-backgroundLight dark:bg-background flex-grow">
    //     <Mute toggleMute={toggleMute} isMuted={isMuted} />
    //     <div className=" pb-40 ">
    //       <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    //       <Intro />
    //       <Portfolio />
    //     </div>
    //     <Footer />
    //   </div>
    // </div>
  );
}

export default App;
