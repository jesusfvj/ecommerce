import './index.css';
import { InstaIcon } from '../InstaIcon';
import { CartIcon } from '../CartIcon';
import { NavList } from '../NavList';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useParams } from "react-router-dom";

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState("first");
  const { collection } = useParams();
  const location = useLocation();

  const listenToScroll = () => {
    const heightToHideFrom =
      getOffset(document.querySelector(".arrow-body"));

    const heightToHideTwoFrom =
      getOffset(document.querySelector(".mosaic-image-1"));

    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;
    if (winScroll < heightToHideFrom) {
      setIsVisible("first");
    } else if (winScroll > heightToHideFrom && winScroll < heightToHideTwoFrom) {
      isVisible && setIsVisible("second");
    } else if (winScroll > heightToHideTwoFrom) {
      setIsVisible("third");
    }
  };

  const getOffset = (element) => {
    const rect = element?.getBoundingClientRect(),
      scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    return rect?.top + scrollTop;
  };

  const handleMouseEnter = (e) => {
    e.target.parentNode.parentNode.nextSibling.style.display = 'block';
  };
  

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  })

  return (
    <div>
      <nav className={`nav-bar-container ${isVisible === 'first' ? `background-transparent` : isVisible === 'second' ? `background-translucid` : `background-none`}`}>
        <div className="nav-bar-logo">DAONIMIA</div>
        <div className="nav-bar-navigation">
          <NavLink to="/"
                    className={`${location.pathname === "/" ? `nav-bar-nav-element-location` : `nav-bar-nav-elements`}
                    ${isVisible === 'third' && `nav-bar-navigation-none`}`}
                    >Home</NavLink>
          <NavLink to="/gallery"
                    className={`${location.pathname === "/gallery" || location.pathname === `/gallery/${collection}` || location.pathname === `/gallery/manu%20rico` ? `nav-bar-nav-element-location` : `nav-bar-nav-elements`}
                    ${isVisible === 'third' && `nav-bar-navigation-none`}`}
                    onMouseEnter={handleMouseEnter}
                    >{collection ? collection : "See all work"}</NavLink>
          <NavLink to="/about-the-artist" className={`${location.pathname === "/about-the-artist" ? `nav-bar-nav-element-location` : `nav-bar-nav-elements`} ${isVisible === 'third' && `nav-bar-navigation-none`}`}>About the artist</NavLink>
          <NavLink to="/contact-me" className={`${location.pathname === "/contact-me" ? `nav-bar-nav-element-location` : `nav-bar-nav-elements`} ${isVisible === 'third' && `nav-bar-navigation-none`}`}>Contact</NavLink>
        </div>
        <div className="nav-bar-icons">
        <NavLink to="/cart" >
          <CartIcon icon={`${isVisible === 'third' && `icon-invisible`}`} />
        </NavLink>
          <InstaIcon classAttribute={`sm-inst-icon ${isVisible === 'third' && `icon-invisible`}`} />
        </div>
      </nav>
      <NavList />
    </div>
  )
}