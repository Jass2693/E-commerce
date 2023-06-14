import React from 'react'
import { SideBar } from '../nav/SideBar'
import { Link } from 'react-router-dom'
import { FilterNav } from '../../layout/FilterNav'

export const Main = () => {
  return (
    <main 
    
    >
      <FilterNav/>
      
      <div className='main_div'>
        <h3 className='animate__animated animate__bounce'>Reiventando la vida del sonido</h3>
       
       <Link to="/product">
        <button className='pedir_button'>Pedir ahora</button></Link>
        
      </div>

    <SideBar/>

    </main>
  )
}
