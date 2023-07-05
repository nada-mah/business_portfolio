import React from 'react';

import { AboutUs, Footer, Gallery, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Gallery />
    <AboutUs />
    <Footer />
  </div>
);

export default App;
