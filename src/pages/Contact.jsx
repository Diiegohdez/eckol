import React from 'react';
import './contact.css';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact'>
        <h1>Hacemos que los juegos duren para siempre</h1>
        <h3>Un Lugar para tener tu colección de juegos seleccionados, SLADE es una plataforma de distribución digital que pone a los jugadores en primer lugar
        ofreciendo los mejores juegos 
        </h3>
      </div>
      <div className='contact2'>
        <form className='form-contact'>
          <label>Nombre</label>
          <input type="text"/>

          <label>Email</label>
          <input type="email"/>

          <label>Mensaje</label>
          <textarea></textarea>

          <button>Enviar</button>
        </form>
        <div className='contact-logo'>
        <img src="https://i.ibb.co/Rpt99p2/Slade.png" alt='logo' />
        <div className='contact-ico'>
          <AiFillFacebook className='ico'/>  <AiFillInstagram className='ico'/> <AiFillTwitterSquare className='ico'/> <AiFillYoutube className='ico'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact