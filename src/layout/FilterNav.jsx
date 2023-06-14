import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { productos } from '../data/productos'
import { useContext } from 'react'


export const FilterNav = () => {
    const { marcas, setFilterState, setFilterProduct } = useContext(ProductContext)



    const handleFilter = (marca) => {
        setFilterState(marca)

        setFilterProduct(productos.filter(producto => producto.marca === marca))




    }

    return (
        <>
            <ul className="filter_responsive">

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

