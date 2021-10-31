import React from 'react'
import Home from './pages/Home'
import { ProductsProvider } from './context/productsContext'

export default function App () {
  return (
    <ProductsProvider>
      <Home />
    </ProductsProvider>
  )
}
