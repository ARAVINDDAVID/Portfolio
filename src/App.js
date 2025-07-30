import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import TechSkills from './components/TechSkills';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <TechSkills />
      <Certifications />
      <Hobbies />
      <SoftSkills />
      <Contact />

    </div>
  );
}

export default App;
