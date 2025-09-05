import Header from './Header.jsx'
import Landing from './Landing.jsx'
import About from './about.jsx'
import Skills from './skills.jsx'
import Project from './project.jsx'
import Contact from './contact.jsx'
import Footer from './Footer.jsx'
import ScrollVelocity from './components/ScrollVelocity.jsx'
<<<<<<< HEAD
import BackToTopButton from "./components/BackToTopButton.jsx";import Particles from './Particles';



=======
import BackToTopButton from "./BackToTopButton";
import Particles from './Particles';
>>>>>>> cb6c4b717ac431ccda1977e875f64dbbca3a817c
const App = () => {
  const velocity = 50;
  return (
    
    <div className=' h-985'>
      <div style={{ width: '100%', height: '1030px', position: 'fixed', zIndex: '-1' , top: '0'}}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <BackToTopButton />



      <Header/>
      <Landing/>

      <div className='mt-35'>
              <ScrollVelocity
  texts={['CODE MAKER', 'WEB DEVELOPER']} 
  velocity={velocity} 
  className="custom-scroll-text "
/>
      </div>

      <About/>
      <Skills/>

      <Project/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default App
