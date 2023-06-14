import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'


export const SideBar = () => {


    const { carrito, sideState } = useContext(ProductContext)




    return (
        <aside className={(sideState) ? 'sidebar animate__animated animate__fadeInRight' : "aside_none"}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ margin: "auto" }}>Carrito</h3>






            </div>
            <hr />

            {carrito && carrito.map(producto => (

                <div
                    className='sidebar_product'
                    key={producto.id}
                >
                    <div>
                        <span>{producto.id}</span> <br />
                        <span>u$d {producto.precio}</span>

                    </div>
                    <img src={`/productos/${producto.id}.webp`} alt={producto.id} className='sidebar_image' />
                </div>
            ))

            }


        </aside>
    )
}

