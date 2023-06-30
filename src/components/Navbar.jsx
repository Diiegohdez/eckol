import React,{useContext, useState} from 'react';
import "./navbar.css";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { RiHome2Fill, RiContactsBookFill, RiShoppingCartFill, RiSearchLine } from 'react-icons/ri';
import { IoLogoGameControllerB } from 'react-icons/io';
import CartContext from '../context/CartContext';
import Modalsearch from './Modalsearch';


const Navbar = () => {
    //Context de la app
    const {cartItems, showHideCart} =useContext(CartContext);

    //Modal de la Busqueda
    const [searchModal, setSearchModal] = useState(false);
    const [itemSearch, setItemSearch] = useState("");

  return (
    <nav>
        <div className='nav-container'>
            <Link to="/"><a href='/#' className='nav-logo'>
                    <img src="https://i.ibb.co/Rpt99p2/Slade.png" alt='logo' className='logo-navbar'/>
                </a></Link>
            <ul>
                <CustomLink to="/"><a><RiHome2Fill className='ico_navbar'/> Inicio</a></CustomLink>
                
                <CustomLink to="/Productos"><a><IoLogoGameControllerB className='ico_navbar'/> Juegos</a></CustomLink>
                
                <CustomLink to="/Contacto"><a><RiContactsBookFill className='ico_navbar'/> Contacto</a></CustomLink>
            </ul>
            <div className='ico-serach'>
                <RiSearchLine onClick={()=>{setSearchModal(true);setItemSearch(item)}}/>
            </div>
            <div className='ico-cart'>
                < RiShoppingCartFill aria-hidden="true"  onClick={showHideCart} />
                {cartItems.length > 0 && (
                    <div className='item-count'>
                        <span>{cartItems.length}</span>
                    </div>
                )}
            </div>
        </div>
        {searchModal && <Modalsearch item={itemSearch} setSearchModal={setSearchModal}/>}
    </nav>
  )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar