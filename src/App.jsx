
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './componentes/header/Header'
import { Main } from './componentes/main/Main'
import { NavBar } from './componentes/nav/NavBar'
import { ProductPage } from './layout/ProductPage'
import { AppRouter } from './router/AppRouter'
import { Footer } from './componentes/footer/Footer'
import { ProductProvider } from './context/ProductProvider'




function App() {



  return (
    <ProductProvider>
      <div className='container  header_container'
           
     
      >
        <Header className="col-6"/>
        <NavBar className="col-6"/>
      </div>

    
    
    <AppRouter/>
    <Footer/>



    </ProductProvider>
  )
}

export default App
