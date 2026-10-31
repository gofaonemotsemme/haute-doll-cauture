import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Connect from './components/Connect/Connect.jsx'
import Media from './components/Media/Media.jsx'
import Story from './components/story/Story.jsx'
import Banner from './components/Banner/Banner.jsx'
import About from './components/About/About.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Connect />
      <Media />
      <Story />
      <Banner />
      <About />
    </div>
  )
}

export default App;