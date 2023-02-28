import './NavBar.css';
import { InstaIcon } from '../InstaIcon/InstaIcon';
import { CartIcon } from '../CartIcon/CartIcon';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const listenToScroll = () => {
    
    const heightToHideFrom =
    getOffset(document.querySelector(".arrow-body"));
    
    const heightToHideTwoFrom =
    getOffset(document.querySelector(".mosaic-image-1"));
    
    const winScroll = document.body.scrollTop ||
    document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom && winScroll < heightToHideTwoFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  
  const getOffset = (element) => {
    const rect = element?.getBoundingClientRect(),
    scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
    return rect?.top + scrollTop;
  };
  
  useEffect(() => {
     window.addEventListener("scroll", listenToScroll);
     return () =>
       window.removeEventListener("scroll", listenToScroll);
   })

  return (
    <div>
      <nav className={`nav-bar-container ${!isVisible ? `background-translucid`:`background-transparent`}`}>
        <div className="nav-bar-logo">DAONIMIA</div>
        <div className="nav-bar-navigation">
          <NavLink to="/" className={`${location.pathname === "/" ? `nav-bar-nav-element-location`:`nav-bar-nav-elements`}`}>Home</NavLink>
          <NavLink to="/gallery" className={`${location.pathname === "/gallery" ? `nav-bar-nav-element-location`:`nav-bar-nav-elements`}`}>See all work</NavLink>
          <NavLink to="/about-the-artist" className={`${location.pathname === "/about-the-artist" ? `nav-bar-nav-element-location`:`nav-bar-nav-elements`}`}>About the artist</NavLink>
          <NavLink to="/contact-me" className={`${location.pathname === "/contact-me" ? `nav-bar-nav-element-location`:`nav-bar-nav-elements`}`}>Contact</NavLink>
        </div>
        <div className="nav-bar-icons">
          <CartIcon />
          <InstaIcon classAttribute="sm-inst-icon" />
        </div>
      </nav>
    </div>
  )
}