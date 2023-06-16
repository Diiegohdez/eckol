import React, { useState } from 'react';
import './home.css';
import Slider from "react-slick";
import { useInform } from '../hooks/useInform';
import { Modal } from '../components/Modal';
import formatterPeso from '../components/Formatter';


const Home = () => {

  //filtro de informacion del banner
  const { Datos } = useInform();
  const newDatos2 = Datos.filter(informacion => informacion.banner)
  let newDatos = Datos.filter(produc => produc.price <= 50000);
  
  //Control del modal
  const [openModal, setOpenModal] = useState(false);
  const [itemProduc, setItemProduc] = useState();

  //Configuracion del Slider
  const settings = {

    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const settings2 = {

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",

  };

  return (
    <div className='home'>
      {openModal && <Modal item={itemProduc} setOpenModal={setOpenModal} />}
      <div className='home-slider'>
        <Slider  {...settings} className='Slider'>
          {newDatos2.map(item => (
            <div key={item._id} className="slider-item">
              <img src={item.banner} alt='img' className="banner-img" onClick={() => { setOpenModal(true); setItemProduc(item) }} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='slider2'>
        <Slider {...settings2} className="Slider-container">
          {newDatos.map(item => (
            <div key={item._id} className="slider2-item">
              <img src={item.img} alt='img' className="slider2-img" />
              <div className='slider2-btn'>
                <p onClick={() => { setOpenModal(true); setItemProduc(item) }}>{formatterPeso.format(item.price)}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

      export default Home;