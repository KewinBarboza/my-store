import React, { createContext, useState, useEffect } from 'react'
import { fetchProducts, serviceSaveProduct, serviceDeleteProduct, serviceEditProduct } from './../services/products'
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
    let deleteProduct = {}
    const res = await serviceDeleteProduct(id)

    if (res.success) {
      deleteProduct = {
        data: products.data.filter(p => p.id !== id),
        error: null,
        success: {
          message: res.success.message,
          status: null
        }
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
  }

  const saveProduct = async (product) => {
    setLoading(true)
    const res = await serviceSaveProduct(product)

    if (res.success) {
      setProducts({ data: [...products.data, res.data], error: null, success: res.success })
      setLoading(false)
      return
    }

    setProducts({ ...products, error: res.error, success: null })
    setLoading(false)
  }

  const editProduct = async (id) => {
    serviceEditProduct(id)
  }

  return (
    <ProductsContext.Provider value={{ products, loading, deleteProduct, saveProduct, editProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}
