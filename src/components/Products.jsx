import React from 'react'
import { useProducts } from '../hooks/useProducts'
import MessageAlert from './MessageAlert'
import ListProducts from './ListProducts'
import SkeletonProducts from './utils/SkeletonProducts'

export default function Products () {
  const { loading, products, deleteProduct, editProduct } = useProducts()

  if (loading) return <SkeletonProducts />

  if (!loading) {
    return <>
      {products.data && <ListProducts editProduct={editProduct} deleteProduct={deleteProduct} products={products.data} />}
      {products.error && <MessageAlert message={products.error.message} typeError="error" status={products.error.status} />}
      {!products.error && <MessageAlert message={products.success?.message} />}
    </>
  }
}
