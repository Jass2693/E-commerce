import { useReducer, useState } from 'react'
import { ProductContext } from './ProductContext';
import { carritoReducer } from '../reducer/carritoReducer';




const initialState =
    [{

        id: 'epiphone_335',
        marca: 'Epiphone',
        modelo: '335',
        precio: '500',


    }]




export const ProductProvider = ({ children }) => {
    const [carrito, dispatch] = useReducer(carritoReducer, initialState)
    const [sideState, setSideState] = useState(false)
    const [filterState, setFilterState] = useState("")
    const [filterClass, setFilterClass] = useState(false)
    const marcas = ["Yamaha", "Fender", "Prs", "Epiphone", "Gretsch", "Ibanez"]
    const [filterProduct, setFilterProduct] = useState([]);

    const handleAddProduct = (product) => {
        dispatch({
            type: "add_product",
            payload: product
        })
    }

    const removeProduct = (product) => {
        dispatch({
            type: "remove_product",
            payload: product

        })

    }
    return (
        <ProductContext.Provider
            value={{
                carrito,
                sideState,
                filterState,
                setFilterState,
                setSideState,
                handleAddProduct,
                removeProduct,
                marcas,
                filterClass, setFilterClass, filterProduct, setFilterProduct
            }}>
            {children}
        </ProductContext.Provider>
    )
}
