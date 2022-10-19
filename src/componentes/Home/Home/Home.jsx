import React from 'react'
import Header from '../../Header/Header/Header'
import Categorias from '../Categorias/CategoriasListContainer'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import Banners from '../Banners/Banners'
import Variedades from '../Variedades/Variedades'

export default function Home() {
  return (
    <div>
        <Header />
        <Landing/>
        <Variedades/>
        <Categorias/>
        <Banners/>
        <Footer/>
    </div>
  )
}
