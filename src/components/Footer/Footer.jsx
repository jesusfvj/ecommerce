import { InstaIcon } from "../InstaIcon/InstaIcon";
import { Rights } from "../Rights/Rights";
import { TopArrow } from "../TopArrow/TopArrow";
import "./Footer.css";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-arrow-container">
                <TopArrow classAttribute="top-arrow arrow-footer"/>
                <p className = "footer-text-back">go back to beginning</p>
            </div>
            <div className="footer-icon-container">
                <p className="footer-text-find">FI<span className="footer-text-find-span">N</span>D ME IN</p>
                <InstaIcon classAttribute="lg-inst-icon" />
                <p className="footer-text-daonimia">@DA<span className="footer-text-daonimia-span">O</span>NIMIA</p>
            </div>
            <Rights classAttribute='rights-text rights-footer' />
        </div>
    )
}
