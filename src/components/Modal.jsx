import React from 'react';
import './modal.css';

export const Modal = ({setOpenModal}) => {
  return (
    <div className='modal'>
        <div className='modal-container'>
            <div className='btn-close'>
                <button onClick={()=>{setOpenModal(false);}}>
                    x
                </button>
            </div>
            <div className='title-modal'>
                <h2>Soy el titulo</h2>
            </div>
            <div className='body-modal'>
                <h2>soy la informacion</h2>
            </div>
            <div className='modal-footer'>
                <button>Aceptar</button>
            </div>
        </div>
    </div>
  )
}
