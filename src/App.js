import React from 'react';

import { AboutUs, Footer, Intro, Gallery, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Gallery />
    <Intro />
    <Footer />
  </div>
);

export default App;
