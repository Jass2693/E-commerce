
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/logo_4png.png'
import { MenuLogo } from '../nav/MenuLogo'




export const Header = () => {
  return (
    <header className='d-flex justify-content-around header'>
      <img src={LogoImage} alt="Logo" className='logo_image' />
      <ul className='header_nav' style={{ listStyle: "none" }}>
        <li className='m-1 mt-4' ><Link to="/">Inicio</Link></li>
        <li className='m-1 mt-4' ><Link to="/galeria">Galeria</Link></li>
        <li className='m-1 mt-4' ><Link to="/product">Carrito</Link></li>
      </ul>

      <MenuLogo />


    </header>
  )
}
