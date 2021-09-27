import React from 'react';
import Header from './components/Header/Header';
import Aboutme from './components/About_me/About_me';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';




function App() {
  return (
    <div>
      <Header/>
      <Aboutme/>
      <Skills/>
      <Project/>
      <Hobbies/>
      <Contact/>
    </div>
  );
}

export default App;
