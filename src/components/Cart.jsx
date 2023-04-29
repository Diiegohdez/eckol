import React, {useContext} from 'react'
import "./cart.css";
import CartContext from '../context/CartContext';
import CartItem from './CartItems';
import formatCurrency from 'format-currency';

const Cart = () => {

  const {showCart, cartItems, showHideCart} = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  return (
    <>
      {showCart && (
        <div className='cart-container'>
          <div className='cart-close'>
            <button onClick={showHideCart} className="btn-cart">
              x
            </button>
          </div>
          <div className='cart-item'>
            {cartItems.length === 0 ? (
              <h4>El Carrito esta Vacio</h4>
            ):(
              <ul>
                {cartItems.map((item)=>(
                  <CartItem key={item.id} item={item}/>
                ))}
              </ul>
            )}
          </div>
          <div className='cart-total'>
            <h3>Total</h3>
            <div></div>
            <div className='cart-total2'>
              {formatCurrency(cartItems.reduce((amount, item)=> item.price + amount, 0), opts)}
            </div>
          </div>
        </div>
        
      )}
    </>
  );
};

export default Cart