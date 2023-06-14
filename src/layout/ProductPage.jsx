import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import Swal from 'sweetalert2'
import'sweetalert2/dist/sweetalert2.css'


export const ProductPage = () => {
    const { carrito,removeProduct } = useContext(ProductContext);
    const [buyProduct, setBuyProduct] = useState(false);



    useEffect(() => {
        if(buyProduct) {

            Swal.fire("Felicitaciones!",'Esta pagina es solo de practica', 'success')
        }
    }, [buyProduct])
    

    
    return (
        <>


            <hr />
            <div className='product_container'>


                {
                    carrito && carrito.map(producto => (

                        <div key={producto.id}
                            className='product_card xs-col-12 md-col-4'>

                            <div>
                                <h3>{producto.id}</h3>
                                <img src={`/productos/${producto.id}.webp`}
                                    style={{
                                        borderRadius: "10px",
                                        height: "300px",
                                        width: "200px"
                                    }} />

                            </div>
                            <div className='row d-flex justify-content-center'>


                                <div 
                                    className='row mb-2 '
                                     >


                                    <span>{producto.precio}</span>
                                    <span
                                        style={{ color: "lightgray" }}
                                        >U$D
                                    </span>
                                    <div className='container d-flex justify-content-center'>
                                  

                                    <button
                                        className='btn btn-outline-danger ms-2 '
                                        style={{
                                            
                                            width: "100px"

                                        }}
                                        onClick={()=>removeProduct(producto.id)}
                                    >Eliminar</button>    

                                    </div>

                                </div>

                            </div>
                        </div>
                        
                        
                    ))
                }

               
                    <button
                    onClick={()=> {setBuyProduct(true)}}
                    className='btn btn-success'
                    style={{
                        position: "absolute",
                        bottom: "8px",
                        
                        width: "150px",
                        height: "60px",


                    }}

                    >Comprar</button>
           


            </div>

        </>
    )
}
