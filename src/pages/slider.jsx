import React, {useState} from 'react';
import './home.css';
import Slider from "react-slick";
import { useInform } from '../hooks/useInform';
import { Modal } from '../components/Modal';
import formatterPeso from '../components/Formatter';

const Slider2 = () => {
    
    const [openModal, setOpenModal] = useState(false);
    const [itemProduc, setItemProduc] = useState();
    //datos de la informacion
    const { Datos } = useInform();
    let newDatos = Datos.filter(produc => produc.price <= 50000);

    const settings = {
        
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
    };


    return (
        <div className='slider2'>
            {openModal && <Modal item={itemProduc} setOpenModal={setOpenModal} />}
            <Slider {...settings} className="Slider-container">
                {newDatos.map(item => (
                    <div key={item._id} className="slider2-item">
                        <img src={item.img} alt='img' className="slider2-img" />
                        <div className='slider2-btn'>
                            <p onClick={()=>{setOpenModal(true);setItemProduc(item)}}>{formatterPeso.format(item.price)}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
};

export default Slider2