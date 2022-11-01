import { useState } from 'react'
// import './App.css'
import './assets/input.css'
import reactLogo from './assets/react.svg'
import Intro from './components/Intro.jsx'
import Portfolio from './components/Portfolio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='max-w-5x1 w11/12 mx-auto'>
        <Intro />
        <Portfolio />
        {/* <Timeline />
        <Contact />
        <Footer /> */}
      </div>
    </div>
  )
}

export default App
