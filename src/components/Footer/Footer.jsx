import { InstaIcon } from "../InstaIcon/InstaIcon";
import { Rights } from "../Rights/Rights";
import { TopArrow } from "../TopArrow/TopArrow";
import { Parallax, Background } from 'react-parallax';
import "./Footer.css";

export const Footer = () => {
    const handleClick = () => {
        const element = document.querySelector('.react-parallax-background');
        console.log(element)
        if (element) {
          element.scrollIntoView();
          /* { behavior: 'smooth' } */
        }
    }
    return (
        <Parallax strength={500} className="main-footer-container">
            <Background className="footer-container">
                    <div className="footer-arrow-container">
                        <TopArrow classAttribute="top-arrow arrow-footer" handleClick={handleClick}/>
                        <p className="footer-text-back" onClick={handleClick}>go back to beginning</p>
                    </div>
                    <div className="footer-icon-container">
                        <p className="footer-text-find">FI<span className="footer-text-find-span">N</span>D ME IN</p>
                        <InstaIcon classAttribute="lg-inst-icon" />
                        <p className="footer-text-daonimia">@DA<span className="footer-text-daonimia-span">O</span>NIMIA</p>
                    </div>
                    <Rights classAttribute='rights-text rights-footer' />
            </Background>
        </Parallax>
    )
}




