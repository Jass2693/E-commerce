import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../componentes/main/Main'
import { ProductPage } from '../layout/ProductPage'
import { GalerialPage } from '../layout/GaleriaPage'
import { FilterPage } from '../layout/FilterPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/galeria' element={<GalerialPage/>}/>
        <Route path='/filter' element={<FilterPage/>}/>

    </Routes>
  )
}
