import React, { createContext, useState, useEffect } from 'react'
import { fetchProducts } from './../services/products'
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
    await window.fetch(`http://localhost:4000/productos/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const deleteProduct = products.filter(p => p.id !== id)
    setProducts(deleteProduct)
    setLoading(false)
  }

  const saveProduct = async (product) => {
    setLoading(true)
    const res = await window.fetch('http://localhost:4000/productos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 200,
          name: product.name,
          price: product.price,
          description: product.description,
          stock: product.stock,
          currency_code: product.currency_code,
          date: '24/09/2021'
        })
      }
    )

    const dataRes = await res.json()
    setProducts([...products, dataRes])
    setLoading(false)
  }

  return <ProductsContext.Provider value={{ products, error, loading, deleteProduct, saveProduct }}>{children}</ProductsContext.Provider>
}
