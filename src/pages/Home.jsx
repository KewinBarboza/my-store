import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import Products from '../components/Products'
import FormCreateProduct from '../components/FormCreateProduct'

export default function Home () {
  return (
    <div className='App'>
      <Grid templateColumns='repeat(2, 1fr)' gap={3} padding='10'>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' padding='10'>
          <FormCreateProduct />
        </Box>
        <Products />
      </Grid>
    </div>
  )
}
