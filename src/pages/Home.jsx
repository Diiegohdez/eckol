import React, { useState } from 'react';
import './home.css';
import Slider from "react-slick";
import Slider2 from './slider';
import { useInform } from '../hooks/useInform';
import { Modal } from '../components/Modal';


const Home = () => {

  const { Datos } = useInform();
  const newDatos2 = Datos.filter(informacion => informacion.banner)

  const [openModal, setOpenModal] = useState(false);
  const [itemProduc, setItemProduc] = useState();


  const settings = {

    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className='home'>
      {openModal && <Modal item={itemProduc} setOpenModal={setOpenModal} />}
      <div className='home-slider'>
        <Slider  {...settings} className='Slider'>
          {newDatos2.map(item => (
            <div key={item._id} className="slider-item">
              <img src={item.banner} alt='img' className="banner-img" onClick={()=>{setOpenModal(true);setItemProduc(item)}}/>
            </div>
          ))}
        </Slider>
      </div>
      <Slider2/>
    </div>
  );
};

export default Home;