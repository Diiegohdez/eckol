import React from 'react';
import './modal.css';
import { RiSteamFill,RiCheckboxFill, RiKey2Fill } from "react-icons/ri";
import {BiWorld} from "react-icons/bi";

export const Modal = ({setOpenModal, item}) => {
  return (
    <div className='modal'>
        <div className='modal-container'>
            <div className='btn-close'>
                <button onClick={()=>{setOpenModal(false);}}>
                    x
                </button>
            </div>
            <div className='title-modal'>
                <h3>{item.name}</h3>
            </div>
            <div className='body-modal'>
                <div className='container-left'>
                    <img src={item.img} alt="img" width='100%'/>
                    <p className='modal-ico'><RiSteamFill/> Plataforma: {item.platform}</p>
                    <p className='modal-ico'><RiCheckboxFill/> Puede Activarse: {item.active}</p>
                    <p className='modal-ico'><RiKey2Fill/> Tipo: {item.tipo}</p>
                    <p className='modal-ico'><BiWorld/> Version: {item.version}</p>
                </div>
                <div className='container-rigth'>
                    <p className='modal-description'>{item.description}</p>
                </div>
            </div>
            <div className='modal-footer'>
                <button className='btn-cart'>Agregar a Carrito</button>
            </div>
        </div>
    </div>
  )
}
