import React,{useState} from 'react';
import { useInform } from '../hooks/useInform';
import "./modalsearch.css";

const Modalsearch = ({setSearchModal, item}) => {

  const { Datos } = useInform();
  const [search, setSearch] = useState("");
  
  return (
    <div className='Searchmodal'>
      <div className='Searchmodal-container'>
        <div className='search-btn-close'>
          <button onClick={()=>{setSearchModal(false);}}>x</button>
        </div>
        <div className='searchmodal-title'>
          <input type='text' placeholder='Buscar por Nombre'/>
        </div>
      </div>
    </div>
  )
}

export default Modalsearch