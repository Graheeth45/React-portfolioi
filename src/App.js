import React from 'react';
import Header from './components/Header/Header';
import About_me from './components/About_me/About_me';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Hobbies from './components/Hobbies/Hobbies';




function App() {
  return (
    <div>
      <Header/>
      <About_me/>
      <Skills/>
      <Project/>
      <Hobbies/>
    </div>
  );
}

export default App;
