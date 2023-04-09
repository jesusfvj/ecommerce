import { useContext, useEffect, useState } from 'react';
import FetchContext from '../context/FetchContext.jsx';
import { Fetch } from '../Fetch/Fetch';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { NavBar, CartCard } from '../components';

const urlJson = `http://localhost:3000/gallery`;

export const Cart = () => {
  const {logout} = useAuthContext();
  const { cart } = useContext(FetchContext);
  const [photoCounter, setPhotCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const handleLogOut = () =>{
    logout();
    navigate("/home");
  }

  useEffect(() => {
    cart.map((product) => {
      setPhotCounter(prevState => prevState + product.quantity / 2)
      return false
    })
  }, [cart])

  return (
    <>
      <Fetch />
      <NavBar/>
      <div className="flex">
        <div className="w-[60vw] border border-black">
          <h2>CART</h2>
          <div>
            {cart.map(({ id, collection, frame, quantity }, index) => {
              return (
                <div>
                  <CartCard key={`product-card-${index}`} idState={id} collection={collection} frame={frame} quantity={quantity} setTotalPrice={setTotalPrice} />
                </div>
              )
            }
            )}
          </div>
        </div>
        <div>
          <div>
            <p>SHOPPING DETAILS</p>
            <p>Number of photos: {photoCounter}</p>
            <p>Total Price: {totalPrice}</p>
          </div>
          <button>Buy now</button>
        </div>
          <button onClick={handleLogOut}>Log out</button>
      </div>
    </>
  )
}
