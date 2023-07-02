import React,{useState, useRef, useEffect} from 'react';
import { useInform } from '../hooks/useInform';
import "./modalsearch.css";
import { Modal } from './Modal';

const Modalsearch = ({setSearchModal}) => {
  //datos de la api
  const { Datos } = useInform();

  //modal informacion
  const [openModal, setOpenModal] = useState(false);
  const [itemProduc, setItemProduc] = useState();

  //filtrar informacion
  const [search, setSearch] = useState("");
  const [searchFiltre, setSearchFiltre] = useState([]);

  const searchRef = useRef();

  useEffect(()=>{
    setSearchFiltre(
      Datos.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    );
  },[search]);


  
  return (
    <div className='Searchmodal'>
      {openModal && <Modal item={itemProduc} setOpenModal={setOpenModal}/>}
      <div className='Searchmodal-container'>
        <div className='search-btn-close'>
          <button onClick={()=>{setSearchModal(false);}}>x</button>
        </div>
        <div className='searchmodal-title'>
          <input type='text' placeholder='Buscar por Nombre' onChange={(e)=> setSearch(e.target.value)} ref={searchRef}/>
        </div>
        <div className='searchmodal-body'>
          {search.length > 0 && (
            <div className='container-item'>
              {searchFiltre.length > 0 ? (
                searchFiltre.map((item, index)=>{
                  return(
                    <div className='card-item' key={index} onClick={()=>{setOpenModal(true);setItemProduc(item)}}>
                      <img src={item.img} alt='img'/>
                      <p>{item.name}</p>
                    </div>
                  );
                })
              ):(
                <p className='search-notfound'>No se encontro Producto</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modalsearch