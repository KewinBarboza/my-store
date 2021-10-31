import React from 'react'
import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons'
import { List, ListItem, IconButton } from '@chakra-ui/react'

export default function ListProducts({ deleteProduct, products }) {
  return (
    <List spacing={3}>
      {products.map(d => (
        <ListItem spacing={3} key={d.id}>
          <CheckCircleIcon mr={10} color='green.600' />
          <span> <b>id</b> {d.id} - <b>stock</b> {d.stock} - <b>nombre</b> {d.name} - {d.currency_code} {d.price} </span>
          <IconButton aria-label="Search database" icon={<DeleteIcon />} onClick={() => deleteProduct(d.id)} />
        </ListItem>
      ))}
    </List>
  )
}
