import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram  } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';


import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
   
    
    <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
      </div>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">تواصل معنا</h1>
        <p className="app__footer-suptext">ADDRESS</p>
        <p className="app__footer-suptext">+966 50 438 6391</p>
        <div className="app__footer-links_icons">
          <a href='https://www.facebook.com/profile.php?id=100054198713724' target="_blank" rel="noopener noreferrer"><FiFacebook  /></a>
          <a href='#home' target="_blank" rel="noopener noreferrer"><FiTwitter  /></a>
          <a href="https://wa.me/966504386391" target="_blank" rel="noopener noreferrer"><BsWhatsapp  /></a>
          <a href='https://www.instagram.com/alhdyllmghasl/' target="_blank" rel="noopener noreferrer"><FiInstagram  /></a>

        </div>
      </div>

      

      
    </div>


  </div>
);

export default Footer;
