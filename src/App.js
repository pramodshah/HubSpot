import React from 'react';

import './App.css';
import Navabr from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import ContentSecond from './components/ContentSecond';
import ContentThird from './components/ContentThird';
import Footer from './components/Footer';
import ContentFourth from './components/ContentFourth';



function App() {
  return (
    <div className="App"style={{backgroundColor:"rgb(245,248,250)"}}>
      <Navabr />
      <Home />
      <ContentSecond/>
      <Content />
      <ContentFourth />
      <ContentThird/>
      
      <Footer />

      
    </div>
  );
}

export default App;
