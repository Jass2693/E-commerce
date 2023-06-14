import { useContext } from 'react'
import { SideBar } from '../componentes/nav/SideBar'
import { ProductContext } from '../context/ProductContext'



export const FilterPage = () => {
  const { handleAddProduct, filterProduct } = useContext(ProductContext)


  const addProduct = (producto) => {
    handleAddProduct(producto)
  }


  return (
    <div className='galeria row '>

      <SideBar />

      {
        filterProduct && filterProduct.map(producto => (

          <div key={producto.id}
            className='galeria_card col-4'>

            <img
              src={`/productos/${producto.id}.webp`}
              alt={producto.modelo}
              className='galeria_image'

            />
            <div>
              <h5>{producto.precio} U$D</h5>
              <span>{producto.marca} </span>
              <span>{producto.modelo}</span> <br />
              <button
                onClick={() => addProduct(producto)}
                className="mt-1 btn btn-primary "

              >Agregar a carrito</button>


            </div>

          </div>

        )


        )}

    </div>
  )
}
