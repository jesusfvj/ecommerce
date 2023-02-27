import icon from '../../assets/images/addIconWhite.png';
import './Header.css';

export const Header = () => {
  return (
    <header className="header-container">
            <h1 className="header-h1">WISHLIST</h1>
            <form>
                <div className="header-input-container">
                <input className="header-input" type="text" name="wish" placeholder="Type your wish here"/>
                    <div className="input-create-wish-container">
                        <img className="create-wish-icon" src={icon} alt="create icon"></img>
                    </div>
                </div>
            </form>
    </header>
  )
}
