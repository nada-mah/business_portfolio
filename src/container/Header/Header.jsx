import React from 'react';

// import { HeaderOverlay } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
    
  <div className="app__header app__wrapper section__padding" id="home">
      
      <div className="app__wrapper_info">
        <h1 className="app__header-h2"> مغاسل جميلة وفاخرة  </h1>
        <h1 className="app__header-h1">الهدى للمغاسل</h1>

        <div className="app__header-button">
        <a href="https://wa.me/966504386391" target="_blank" rel="noopener noreferrer">
        <button type="button" className="custom__button"> تواصل معنا </button>
        </a>
          
          
        </div>
      </div>
    
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
      
      </div>
      
);

export default Header;