import './MainImage.css';
import { Triangle } from '../Triangle/Triangle';
import { Rights } from '../Rights/Rights';
import {Parallax} from 'react-parallax';
import image1 from "../../assets/images/mainImage/1.jpg";

const insideStyles = {
  background: "#fff",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

export const MainImage = () => {
  return (
    <>
      <Parallax bgImage={image1} strength={500} className="main-image-container">
        <div className="main-image-rights-container" style={{height: "100vh"}}>
          <Rights classAttribute = 'rights-text rights-main-image'/>
        </div>
      </Parallax>
      <Triangle />
    </>
  )
}

/* export const MainImage = () => {
  return (
    <>
      <div className="main-image-container">
        <Rights classAttribute = 'rights-text rights-main-image'/>
      </div>
      <Triangle />
    </>
  )
} */