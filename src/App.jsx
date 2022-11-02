import { useState } from 'react'
import './assets/input.css'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import Intro from './components/Intro.jsx'
import Mute from './components/Mute'
import Portfolio from './components/Portfolio.jsx'

function App() {
	const [isMuted, setIsMuted] = useState(sessionStorage.getItem("muted") || false)

	const toggleMute = () => {
		sessionStorage.setItem("mute", !isMuted)
		setIsMuted(!isMuted)
	}
  return (
    <div className="App">
      <div className='max-w-5x1 w11/12 mx-auto bg-background flex 
      flex-col justify-between min-h-screen'>
        <Mute toggleMute={toggleMute} isMuted={isMuted} />
        <div>
          <Intro />
          <Portfolio isMuted={isMuted} />
          {/* <Timeline />
          <Contact /> */}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
