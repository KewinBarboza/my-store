import React, { createContext, useState, useEffect } from 'react'
import { fetchProducts, serviceSaveProduct, serviceDeleteProduct } from './../services/products'
export const ProductsContext = createContext()

const PRODUCTS_INITIAL_VALUE = {
  data: [],
  error: null,
  success: null
}
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_INITIAL_VALUE)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    setLoading(true)
    const product = await fetchProducts()
    setProducts(product)
    setLoading(false)
  }

  const deleteProduct = async (id) => {
    setLoading(true)
    let deleteProduct = {}
    const res = await serviceDeleteProduct(id)

    if (res.success) {
      deleteProduct = {
        data: products.data.filter(p => p.id !== id),
        error: null,
        success: res.success.message
      }
    }

    if (res.error) {
      deleteProduct = {
        data: products.data,
        error: {
          message: res.error.message,
          status: res.error.status
        },
        success: null
      }
    }

    setProducts(deleteProduct)
    setLoading(false)
  }

  const saveProduct = async (product) => {
    setLoading(true)
    const res = await serviceSaveProduct(product)
    const dataRes = await res.data
    setProducts([...products, dataRes])
    setLoading(false)
  }

  return (
    <ProductsContext.Provider value={{ products, loading, deleteProduct, saveProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}
