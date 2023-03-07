import React from 'react';
import './App.css';
import Header from './components/header';
import Welcome from './components/welcome';
import Projects from './components/projects';
import SkillSection from './components/skill';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Projects />
      <SkillSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
