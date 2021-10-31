import React from 'react'
import { useProducts } from '../hooks/useProducts'
import Alert from './alert'
import ListProducts from './ListProducts'

export default function Products() {
  const { error, loading, products, deleteProduct } = useProducts()

  return (
    <>
      {loading && <span>loading...</span>}
      {
        !loading &&
        <>
          {products && <ListProducts deleteProduct={deleteProduct} products={products}/> }
          {error && <Alert message={error.message} status={error.status} />}
        </>
      }
    </>
  )
}
