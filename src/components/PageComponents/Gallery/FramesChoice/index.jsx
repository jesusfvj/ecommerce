import { useState, useContext, useEffect } from 'react'
import "./index.css";
import FetchContext from '../../../../context/FetchContext.jsx';

export const FramesChoice = ({ frameSize, idState, collection }) => {
    const { cart, setCart } = useContext(FetchContext);

    const quantitySaved = cart.map(({ frame, id, quantity }) => {
        if (frame == frameSize && id == idState) {
            return quantity;
        }
    }).join('');
    const initialState = quantitySaved != "" ? parseInt(quantitySaved) : 0;
    const [counter, setCounter] = useState(initialState);

    const handleMinusCounter = () => {
        if (counter > 0) {
            setCounter((prevState) => prevState - 1);
        }
    }

    const handleAddCounter = () => {
        setCounter((prevState) => prevState + 1);
    }

    useEffect(() => {
        const found = cart.find((product) => {
            return product.frame == frameSize && product.id == idState
        })
        if (!found && counter != 0) {
            setCart([
                ...cart,
                {
                    id: idState,
                    collection: collection,
                    frame: frameSize,
                    quantity: counter
                }
            ]);
        } else {
            cart.map((product) => {
                if (product.id == idState && product.frame == frameSize) {
                    return product.quantity = counter;
                }
            })
            setCart(cart);
        }
    }, [counter])

    return (
        <div className="frame-section-container">
            <p className="text-frame">{frameSize}</p>
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
            </div>
        </div>
    )
}
