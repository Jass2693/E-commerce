import { useState } from 'react'
import {Link} from 'react-router-dom'

export const MenuLogo = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const handleToggle = () =>{
       if(toggleMenu == false )
        setToggleMenu(true)
        else {setToggleMenu(false)}
    }
    return (
        <div className="menu_logo">
            <button style={{  border:"none",background: "none" }}
                    onClick={handleToggle}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50" height="50"
                    fill="currentColor"
                    className="bi bi-list" viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <ul className={`container menu_ul ${toggleMenu ? "menuToggle" : ""}`} >
                <li className='menu_li'><Link to="/">
                <span className="link">Inicio</span>
                </Link></li>
                <li className='menu_li'>
                    <Link  to="/galeria">
                       <span className="link">Galeria</span>
                        </Link></li>
                <li className='menu_li'><Link to="/product">
                <span className="link">Carrito</span>
                    </Link></li>
            </ul>
        </div>
    )
}
