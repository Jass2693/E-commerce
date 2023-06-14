import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { productos } from '../../data/productos'

export const Filter = () => {
    const { filterClass, marcas, setFilterState, setFilterProduct } = useContext(ProductContext)



    const handleFilter = (marca) => {
        setFilterState(marca)
        

        setFilterProduct(productos.filter(producto => producto.marca === marca))




    }

    return (
        <>
            <ul className={`${(filterClass) ? "filter_ul animate__animated animate__fadeIn" : "filter_none"}`}>

                {
                    marcas.map((marca, index) => (

                        <li key={index}>
                            <button onClick={() => handleFilter(marca)}
                                className='link'><Link to="/filter">{marca}</Link></button>
                        </li>
                    ))
                }

            </ul>

   

        </>


    )
}

      