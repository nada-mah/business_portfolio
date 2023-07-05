import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi' ;
import { MdOutlineArrowDropDown } from 'react-icons/md' ;
import { BsFacebook,BsInstagram,BsWhatsapp } from 'react-icons/bs' ;


import images from '../../constants/images' ;

import './Navbar.css';

const Navbar = () => {
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle('show');
    console.log('hi');
  }
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt = 'logo' />
    </div>
    
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home"> Home </a></li>
        <li className="p__opensans"><a href="#about"> About </a></li>
        <div className="p__opensans">
        <li className="dropbtn" onClick={()=>myFunction() }>
          Contacts<MdOutlineArrowDropDown fontSize={10}/>
       </li>
  <div className="dropdown-content" id="myDropdown">
    <a href="https://www.facebook.com/profile.php?id=100054198713724" target="_blank" rel="noopener noreferrer">
    <BsFacebook/> Facebook
    </a>
    <a href='https://www.instagram.com/alhdyllmghasl/' target="_blank" rel="noopener noreferrer"> <BsInstagram/> Instgram</a>
    <a href="https://wa.me/966504386391" target="_blank" rel="noopener noreferrer" ><BsWhatsapp/> whatsapp</a>
  </div>
  </div> 
      </ul>
    <div className="app__navbar-what">
        <a href="https://wa.me/966504386391" target="_blank" rel="noopener noreferrer" className ="p__opensans" > whatsapp </a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=> setToggleMenu(true) }/>
    {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <GiHamburgerMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false) } />
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans"><a href="#home"> Home </a></li>
          <li className="p__opensans"><a href="#about"> About </a></li>
          <li className="p__opensans"><a href="https://www.facebook.com/profile.php?id=100054198713724" target="_blank" rel="noopener noreferrer">
    <BsFacebook/> Facebook
    </a></li>
          <li className="p__opensans"><a href='https://www.instagram.com/alhdyllmghasl/' target="_blank" rel="noopener noreferrer"> <BsInstagram/> Instgram</a></li>
          <li className="p__opensans"><a href="https://wa.me/966504386391" target="_blank" rel="noopener noreferrer" ><BsWhatsapp/> whatsapp</a></li>
        </ul>
      </div>
    )}

    </div>
    </nav>
  )
};

export default Navbar;
