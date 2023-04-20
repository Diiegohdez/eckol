import React from 'react';
import './product.css'
import { useInform } from '../hooks/useInform';
import { Modal } from '../components/Modal';
import { useState } from 'react';

const Product = () => {

  const [openModal, setOpenModal] = useState(false);
  const { Datos } = useInform();

  return (
    <div className='product'>
      {openModal && <Modal setOpenModal={setOpenModal}/>}
      <div className='product-container'>
        {Datos.map(item => (
          <div className='product-item' key={item.id}>
            <img src={item.img} alt='imagen' width='100%' />
            <div className='pruduct-button'>
              <button onClick={()=>{setOpenModal(true);}}>Mostrar mas..</button>
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