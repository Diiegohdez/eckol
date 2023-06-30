import React, {useContext} from 'react';
import './cartItems.css';
import CartContext from '../context/CartContext';
import formatterPeso from '../components/Formatter';
import {MdDelete} from "react-icons/md";




const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext);
    
  return (
    <li className='cartItem'>
        <img src={item.img} alt='img'/>
        <div>
            <p className='cartitem-name'>{item.name}</p> 
            <p className='cartitem-price'>{formatterPeso.format(item.price)}</p>
        </div>
        <button className='cartItem-btn' onClick={()=>removeItem(item._id)}><MdDelete/></button>
    </li>
  );
};

export default CartItem