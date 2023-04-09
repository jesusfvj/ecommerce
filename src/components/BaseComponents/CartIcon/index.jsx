import './index.css';
import cartIcon from "../../../assets/images/cartWhite.png"

export const CartIcon = ({icon}) => {
  return (
    <img className={`sm-cart-icon ${icon}`} src={cartIcon} alt="cart icon"></img>
  )
}
