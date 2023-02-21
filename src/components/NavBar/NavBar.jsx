import './NavBar.css';
import { InstaIcon } from '../InstaIcon/InstaIcon';
import { CartIcon } from '../CartIcon/CartIcon';
import { useState, useEffect } from 'react';

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const listenToScroll = () => {
     const heightToHideFrom =
     getOffset(document.querySelector(".arrow-body"));
     const heightToHideTwoFrom =
     getOffset(document.querySelector(".mosaic-image-15"));
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
     return rect.top + scrollTop;
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
          <div className="nav-bar-nav-elements">Home</div>
          <div className="nav-bar-nav-elements">See all work</div>
          <div className="nav-bar-nav-elements">About the artist</div>
          <div className="nav-bar-nav-elements">Contact</div>
        </div>
        <div className="nav-bar-icons">
          <CartIcon />
          <InstaIcon classAttribute="sm-inst-icon" />
        </div>
      </nav>
    </div>
  )
}