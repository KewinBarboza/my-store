import React, { createContext, useState, useEffect } from 'react'
import { fetchProducts, serviceSaveProduct, serviceDeleteProduct } from './../services/products'
export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    setLoading(true)
    const product = await fetchProducts()
    product.data.length > 0 ? setProducts(product.data) : setError(product.error)
    setLoading(false)
  }

  const deleteProduct = async (id) => {
    setLoading(true)
    await serviceDeleteProduct(id)
    const deleteProduct = products.filter(p => p.id !== id)
    setProducts(deleteProduct)
    setLoading(false)
  }

  const saveProduct = async (product) => {
    setLoading(true)
    const res = await serviceSaveProduct(product)
    const dataRes = await res.json()
    setProducts([...products, dataRes])
    setLoading(false)
  }

  return <ProductsContext.Provider value={{ products, error, loading, deleteProduct, saveProduct }}>{children}</ProductsContext.Provider>
}
