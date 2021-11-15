import React from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'
import Products from '../components/Products'
import FormCreateProduct from '../components/FormCreateProduct'
import Layout from '../components/Layout'

export default function Home () {
  return (
    <Layout>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} display="flex" flexDirection="column" >
        <GridItem colSpan={4} rowSpan={2} display="flex" justifyContent="center" paddingY="20px">
          <Box w="70%" display="flex" justifyContent="end" paddingY="20px">
            <FormCreateProduct />
          </Box>
        </GridItem>
        <GridItem colSpan={4} display="flex" justifyContent="center" >
          <Products />
        </GridItem>
      </Grid>
    </Layout>
  )
}
