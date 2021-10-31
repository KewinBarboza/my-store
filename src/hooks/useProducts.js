import { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'

export const useProducts = () => useContext(ProductsContext)
