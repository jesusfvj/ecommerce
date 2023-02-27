import './MainImage.css';
import { Triangle } from '../Triangle/Triangle';
import { Rights } from '../Rights/Rights';
import { Parallax, Background } from 'react-parallax';

export const MainImage = ({location}) => {
  return (
    <>
      <Parallax blur={10} strength={500} className="main-image-container">
        <Background className={`main-image-rights-container ${location}`}>
          <Rights classAttribute = 'rights-text rights-main-image'/>
        </Background>
      </Parallax>
      <Triangle />
    </>
  )
}