import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { Filter } from './Filter'


export const NavBar = () => {

  const { filterClass, setFilterClass, sideState, setSideState } = useContext(ProductContext)
  const handleSideBar = () => {
    if (sideState === false) {

      setSideState(true)
      setFilterClass(false)
    }
    else { setSideState(false) }
  }


  const handleFilter = () => {
    if (filterClass == false) {

      setFilterClass(true)
      setSideState(false)

    }
    else { setFilterClass(false) }
  }
  return (

    <nav>
      <ul className='d-flex justify-content-between '
        style={{ listStyle: "none" }}>

        <li className='m-2 mt-4' >
          <button onClick={handleFilter}
                  className='nav_button'
            
          >

            <i className="fa-solid fa-filter fa-lg" style={{ cursor: "pointer" }} ></i>
          </button>
        </li>
        <li className='ms-2 mt-4'>
          <button onClick={handleSideBar} 
                  className='nav_button'>

            <i className="fa-solid fa-cart-shopping fa-lg" style={{ cursor: "pointer" }}></i>
          </button>
        </li>
      </ul>
      <Filter
      />
    </nav>
  )
}
