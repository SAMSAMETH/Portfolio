 import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Certificate from './components/Certificate';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Educational from './components/Educational';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Educational/>
      <Skills/>
      <Projects/>
      <Internship/>
      <Certificate/>
      <Workshop/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
