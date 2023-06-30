import React,{useState} from 'react';
import { useInform } from '../hooks/useInform';

const Modalsearch = () => {

  const { Datos } = useInform();
  const [search, setSearch] = useState("");
  
  return (
    <div>Modalsearch</div>
  )
}

export default Modalsearch