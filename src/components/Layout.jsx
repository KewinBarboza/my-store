import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from './Navbar'

export default function Layout ({ children }) {
  return (
    <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem rowSpan={5} colSpan={5} >
        <Navbar />
      </GridItem>
      <GridItem colSpan={5}>
        {children}
      </GridItem>
    </Grid>
  )
}
