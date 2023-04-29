import React, {useContext} from 'react';
import './cartItems.css';
import CartContext from '../context/CartContext';
import formatCurrency from "format-currency";

const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext);
    let opts = { format: "%s%v", symbol: "$" };

  return (
    <li className='cartItem'>
        <img src={item.img} alt='img'/>
        <div>
            {item.name} 
            {formatCurrency(`${item.price}`, opts)}
        </div>
        <button className='cartItem-btn' onClick={()=>removeItem(item.id)}>Remover</button>
    </li>
  );
};

export default CartItem