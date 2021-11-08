import React from 'react'
import { Box, Heading, Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
export default function Navbar () {
  return (
    <nav>
      <Flex justifyContent="space-between" p={3} align="center" backgroundColor="white" pos="fixed" w="100%" zIndex={2} boxShadow="base">
        {/* Logo */}
        <Box px={4} color="dark">
          <Heading>myStore</Heading>
        </Box>

        {/* Buscador */}
        <Box px={4}>
          <FormControl id="first-name" display="flex">
            <Input placeholder="Buscar" />
            <Button mx={2}><SearchIcon /></Button>
          </FormControl>
        </Box>

        {/* Links */}
        <Box display="flex" px={4}>
          <Button mx={2}>Clientes</Button>
          <Button mx={2}>Productos</Button>
        </Box>
      </Flex>
    </nav>
  )
}
