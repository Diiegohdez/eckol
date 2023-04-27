import React from 'react';
import './product.css'
import { useInform } from '../hooks/useInform';
import { Modal } from '../components/Modal';
import { useState } from 'react';

const Product = () => {

  const [openModal, setOpenModal] = useState(false);
  const { Datos } = useInform();
  const [itemProduc, setItemProduc] = useState();

  return (
    <div className='product'>
      {openModal && <Modal item={itemProduc} setOpenModal={setOpenModal}/>}
      <div className='product-container'>
        {Datos.map(item => (
          <div className='product-item' key={item.id}>
            <img src={item.img} alt='imagen' width='100%' />
            <div className='pruduct-button'>
              <button onClick={()=>{setOpenModal(true);setItemProduc(item)}}>Mostrar mas..</button>
            </div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product