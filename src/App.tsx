import { useRef } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Header from './components/Header'
import SelectedWork from './components/SelectedWork'
import Skill from './components/Skills'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

function App() {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)
  gsap.registerPlugin(ScrollToPlugin)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: ref.current!,
        offsetY: 100
      },
      ease: 'power3.out'
    })
  }
  return (
    <>
      <Cursor />
      <Header
        onAbout={() => scrollToSection(aboutRef)}
        onProject={() => scrollToSection(projectRef)}
        onSkills={() => scrollToSection(skillsRef)}
        onContact={() => scrollToSection(contactRef)}
      />
      <Banner onLetsTalk={() => scrollToSection(contactRef)} />
      <AboutMe ref={aboutRef} onLetsTalk={() => scrollToSection(contactRef)} />
      <SelectedWork ref={projectRef} />
      <Skill ref={skillsRef} />
      <Contact ref={contactRef} />
    </>
  )
}

export default App
