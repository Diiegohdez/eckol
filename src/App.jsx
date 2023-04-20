import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {Route, Routes} from 'react-router-dom';
import Product from './pages/Product';



function App() {


  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/Productos' element = {<Product/>}/>
          <Route path='/Contacto' element = {<Contact/>}/>
      </Routes>
      
      
    </>
  )
}

export default App
