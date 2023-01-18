import { useState, useRef } from 'react';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { Nav } from './components/Nav.jsx';
import { useTheme } from "react-hook-theme";
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';

function App() {

  const { theme } = useTheme();

  const sectionAbout = useRef(null);

  const sectionProjects = useRef(null);

  const sectionSkills = useRef(null);

  const handleClick = section => {
    section.current?.scrollIntoView({behavior: 'smooth'});
  };  

  return (
    <div className="App">
      <Nav handleClick={handleClick} sectionAbout={sectionAbout} sectionSkills={sectionSkills} sectionProjects={sectionProjects}/>
      <Header/>
      <main>
        <About ref={sectionAbout}/>
        <Skills ref={sectionSkills} />
        <Projects ref={sectionProjects} />
      </main>
      <Footer/>
    </div>
  )
}

export default App
