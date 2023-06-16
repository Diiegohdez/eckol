import React, {useContext} from 'react';
import './cartItems.css';
import CartContext from '../context/CartContext';
import formatterPeso from '../components/Formatter';




const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext);
    
  return (
    <li className='cartItem'>
        <img src={item.img} alt='img'/>
        <div>
            {item.name} 
            {formatterPeso.format(item.price)}
        </div>
        <button className='cartItem-btn' onClick={()=>removeItem(item._id)}>Remover</button>
    </li>
  );
};

export default CartItem