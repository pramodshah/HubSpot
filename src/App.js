import React from 'react';

import './App.css';
import Navabr from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import ContentSecond from './components/ContentSecond';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navabr />
      <Home />
      <ContentSecond />
      <Content />
      <Footer />
      
    </div>
  );
}

export default App;
