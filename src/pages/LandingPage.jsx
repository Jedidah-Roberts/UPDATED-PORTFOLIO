
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
       <AllProjects/>
      <About/>
      <Experience/>
      <Skills/>
      <Services/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default LandingPage