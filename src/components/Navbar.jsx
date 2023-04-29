import React,{useContext} from 'react';
import "./navbar.css";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { RiHome2Fill, RiContactsBookFill, RiShoppingCartFill } from 'react-icons/ri';
import { IoLogoGameControllerB } from 'react-icons/io';
import CartContext from '../context/CartContext';


const Navbar = () => {

    const {cartItems, showHideCart} =useContext(CartContext);

  return (
    <nav>
        <div className='nav-container'>
            <Link to="/"><a href='/#' className='nav-logo'>Logo</a></Link>
            <ul>
                <CustomLink to="/"><a><RiHome2Fill className='ico_navbar'/> Inicio</a></CustomLink>
                
                <CustomLink to="/Productos"><a><IoLogoGameControllerB className='ico_navbar'/> Juegos</a></CustomLink>
                
                <CustomLink to="/Contacto"><a><RiContactsBookFill className='ico_navbar'/> Contacto</a></CustomLink>
            </ul>
            <div className='ico-cart'>
                < RiShoppingCartFill aria-hidden="true"  onClick={showHideCart} />
                {cartItems.length > 0 && (
                    <div className='item-count'>
                        <span>{cartItems.length}</span>
                    </div>
                )}
            </div>
        </div>
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