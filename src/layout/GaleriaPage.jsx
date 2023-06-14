
import { useContext, useEffect, useState } from 'react';
import { SideBar } from '../componentes/nav/SideBar';
import { productos } from '../data/productos';
import { ProductContext } from '../context/ProductContext';
import Swal from 'sweetalert2';



export const GalerialPage = () => {

 const {carrito,handleAddProduct} = useContext(ProductContext)
 const [classButton, setClassButton] = useState("")


 
 const addProduct = (producto) =>{
  handleAddProduct(producto)
  setClassButton("galeria_button")
  Swal.fire('Agregaste!', `${producto.id} al carrito`, 'success')
  setClassButton("")
  
  
  
 }
  

  return (
    <div className='galeria row '>
      
      <SideBar/>

      
   


    {
      productos.map(producto => (

        <div key={producto.id}
             className='galeria_card animate__animated animate__fadeInDown col-4 '>
          
          <img 
              src={`/productos/${producto.id}.webp`} 
              alt={producto.modelo} 
              className='galeria_image'
              
              />
            <div>
          <h5>{producto.precio} U$D</h5>
              <span>{producto.marca} </span>
              <span>{producto.modelo}</span> <br/>
              <button 
                onClick={()=>addProduct(producto)}
                className={`mt-1 btn btn-outline-success ${classButton}`}
                disabled={(classButton ? "galeria_button" : "") }
                >Agregar a carrito</button>
              
             
              </div>  

        </div>
      ))
      
    }





    
    </div>
  )
}
