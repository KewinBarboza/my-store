import React from 'react'
import { useProducts } from '../hooks/useProducts'
import MessageAlert from './MessageAlert'
import ListProducts from './ListProducts'
// import { Spinner } from '@chakra-ui/react'
import SkeletonProducts from './utils/SkeletonProducts'

export default function Products () {
  const { loading, products, deleteProduct } = useProducts()

  if (loading) return <SkeletonProducts />
  // if (loading) return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />

  if (!loading) {
    return <>
      {products && <ListProducts deleteProduct={deleteProduct} products={products.data} />}
      {products.error && <MessageAlert message={products.error.message} status={products.error.status} />}
    </>
  }
}
