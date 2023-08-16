import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Feature from './components/Feature'
import Offer from './components/Offer'
import About from './components/About'
import Contactus from './components/Contactus'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Offer/>
      <About/>
      <Contactus/>
    </div>
  );
}

export default App;
