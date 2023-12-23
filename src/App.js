import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import SkillAwards from './components/Skill_Awards/SkillAwards'
import Work from './components/Work/Work'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import Testimonial from './components/Testimonial/Testimonial'
import AOS from 'aos';


const App = () => {
  // AOS Animation function 
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Education />
      <SkillAwards />
      <Work />
      <Testimonial />
      <Blog />
      <Footer />
    </React.Fragment>
  )
}

export default App
