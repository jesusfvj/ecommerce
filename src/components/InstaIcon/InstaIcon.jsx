import './InstaIcon.css';
import instaIcon from "../../assets/images/instagramWhite.png"

export const InstaIcon = ({classAttribute}) => {
  return (
    <img className={classAttribute} src={instaIcon} alt="instagram icon"></img>
  )
}
