import './Animation.css';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import daonimiaVideo from "../../assets/gifs/daonimiaJump.mp4"

export const Animation = () => {
  const videoRef = useRef();
  const [isVisible, setIsVisible] = useState(true);

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.65;
  };

  const listenToScroll = () => {
    const heightToHideFrom =
    getOffset(document.querySelector(".arrow-body"));
    const winScroll = document.body.scrollTop ||
    document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
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
    <>
      {
        isVisible
        &&
        <div className="daonimia-gif-container">
          <video className="daonimia-gif" autoPlay loop muted ref={videoRef} onCanPlay={() => setPlayBack()}>
            <source src={daonimiaVideo} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
      }
    </>
  )
}