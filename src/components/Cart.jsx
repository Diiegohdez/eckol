import React, { useContext } from 'react'
import "./cart.css";
import CartContext from '../context/CartContext';
import CartItem from './CartItems';
import formatterPeso from '../components/Formatter';



const Cart = () => {

  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
      {showCart && (
        <div className='cart-container'>
          <div className='cart-close'>
            <button onClick={showHideCart} className="btn-cart-close">
              x
            </button>
          </div>
          <div className='cart-item'>
            {cartItems.length === 0 ? (
              <h4>El Carrito esta Vacio</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item}/>
                ))}
              </ul>
            )}
          </div>
          <div className='cart-total'>
            <h3>Total</h3>
            <div></div>
            <div className='cart-total2'>
              {formatterPeso.format(cartItems.reduce((amount, item) => amount + item.price * item.quantity, 0))}
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default Cart