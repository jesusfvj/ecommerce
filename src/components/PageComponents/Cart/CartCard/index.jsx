import { useContext, useState, useEffect } from 'react'
import FetchContext from '../../../../context/FetchContext'
import './index.css';


export const CartCard = ({ idState, collection, frame, quantity, setTotalPrice }) => {
    const objectFrames = [
        {frame:"20 x 30cm", price: 5},
        {frame:"25 x 30cm", price: 7},
        {frame:"28 x 35cm", price: 10},
        {frame:"50 x 75cm", price: 15},
        {frame:"100 x 150cm", price: 25}];
    const { cart, setCart, dataFetchGallery, setDataFetchGallery } = useContext(FetchContext);
    const [ counter, setCounter] = useState(parseInt(quantity));
    const [ prices, setPrices ] = useState(0);
    const [ cartFetchData, setCartFetchData] = useState(JSON.parse(localStorage.getItem("fetch-gallery")) || []);
    const { url } = cartFetchData.find(({ id }) => { return id == idState }) || [];

    const handleMinusCounter = () => {
        if (counter > 0) {
            setCounter((prevState) => prevState - 1);
        }
    }

    const handleAddCounter = () => {
        setCounter((prevState) => prevState + 1);
    }

  const handleDelete = () => {
    const filteredCart = cart.map((product) => {
      if(product.id == idState && product.frame == frame){
        return false
      } else {
        return product
      }
    })
    const filteredfilteredCart = filteredCart.filter((product) =>{
      return product != false;
    }
    )
    setCart(filteredfilteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredfilteredCart));
  }

    useEffect(() => {
        if(counter == 0){
            handleDelete()
        } else {
            cart.map((product) => {
                if (product.id == idState && product.frame == frame) {
                    return product.quantity = counter;
                }
            })
            setCart(cart);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [counter])

    useEffect(() => {
        const filteredObject = objectFrames.find((product)=>{
            return product.frame==frame;
        })
        setPrices(filteredObject.price)
        setTotalPrice(prevState => prevState + (filteredObject.price * quantity)/2)
    }, [counter])


    /* useEffect(() => {
        const found = cart.find((product)=>{
            return product.frame==frameSize && product.id == idState
        })
        if(!found && counter!=0){
            setCart([
                ...cart,
                {id: idState,
                collection: collection,
                frame: frameSize,
                quantity: counter}
            ]);
        } else {
            cart.map((product)=>{
                if(product.id == idState && product.frame==frameSize){
                    return product.quantity = counter;
                }})
            setCart(cart);
        }
    }, [counter]) */

    return (
        <div className="cart-card-container">
            <img className='cart-images' src={`/images/${url}`} alt='collectioin photo' />
            <ul className="cart-list">
                <li>
                    Collection= {collection}
                </li>
                <li>
                    Frame= {frame}
                </li>
                <li>Quantity=
                    <div className="input-button-container">
                        <button className="minus-sign-button frame-button" onClick={() => handleMinusCounter()}></button>
                        <input
                            className="frame-imput"
                            value={counter}
                            readOnly
                            name="text"
                            type="text"
                        />
                        <button className="plus-sign-button frame-button" onClick={() => handleAddCounter()}></button>
                        <button type="button" className="delete-button frame-button" onClick={() => handleDelete()}></button>
                    </div>
                </li>
                {prices && <li>
                    Price={quantity} x {prices} = {quantity * prices} €
                </li>}
            </ul>
        </div>
    )
}
