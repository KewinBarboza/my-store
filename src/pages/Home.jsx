import React from 'react'
import { Box } from '@chakra-ui/react'
import Products from '../components/Products'
import FormCreateProduct from '../components/FormCreateProduct'
import Layout from '../components/Layout'

export default function Home () {
  return (
    <Layout>
      <Box display="flex" justifyContent="space-around">
        <FormCreateProduct />
        <Products />
      </Box>
    </Layout>
  )
}
