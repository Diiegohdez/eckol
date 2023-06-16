import React, { useEffect, useState } from 'react';
import {Api} from '../apis/Api';

export const useInform = () => {

    const [Datos, setDatos] = useState([]);

    useEffect(()=>{
        getDatos();
    },[])
    const getDatos = async () =>{
        await Api.get('https://storebackend-production-3496.up.railway.app/api/product')
        .then(Response=>{
            setDatos(Response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    return{
        Datos
    }
}
