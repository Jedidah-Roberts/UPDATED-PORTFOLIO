import React from 'react'
import About from './About'
import Hero from './Hero'
import Experience from './Experience'
import Skills from './Skills'
import Services from './Services'
import AllProjects from './AllProjects'
import Contact from './Contact'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Services/>
      <AllProjects/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default LandingPage