import React from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react'

export default function ListProducts ({ deleteProduct = null, products = [] }) {
  products.length === 0 && console.error('los productos son requeridos en el componente ListProducts.jsx')
  return (
    <Table variant="simple" w="70%">
      <Thead>
        <Tr>
          <Th>producto</Th>
          <Th>stock</Th>
          <Th isNumeric>precio</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map(d => (
          <Tr key={d.id}>
            <Td>{d.name}</Td>
            <Td>{d.stock}</Td>
            <Td isNumeric> {d.currency_code} {d.price}</Td>
            <Td>{deleteProduct && <IconButton aria-label='Search database' icon={<DeleteIcon />} onClick={() => deleteProduct(d.id)} />}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}
