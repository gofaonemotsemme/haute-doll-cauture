import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Connect from './components/Connect/Connect.jsx'
import Media from './components/Media/Media.jsx'
import Story from './components/Story/Story.jsx'
import Banner from './components/Banner/Banner.jsx'
import About from './components/About/About.jsx'
import Values from './components/Values/Values.jsx'
import FAQs from './components/FAQs/FAQs.jsx'
import Latest from './components/Latest/Latest.jsx'
import Mailing from './components/Mailing/Mailing.jsx'
import Footer from './components/Footer/Footer.jsx'

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
      <Values />
      <FAQs />
      <Latest />
      <Mailing />
      <Footer />
    </div>
  )
}

export default App;