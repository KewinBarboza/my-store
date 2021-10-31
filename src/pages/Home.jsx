import React from 'react'
import { Textarea, Button, Input, Box, Grid, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useProducts } from '../hooks/useProducts'

import Products from '../components/Products'

export default function Home() {
  const { saveProduct } = useProducts()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => saveProduct(data)

  return (
    <div className='App'>
      <Grid templateColumns='repeat(2, 1fr)' gap={3} padding='10'>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' padding='10'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Input placeholder='nombre' {...register('name', { required: true })} />
              {errors.name && <span>el nombre es requerido</span>}

              <Input placeholder='precio' {...register('price')} />
              {errors.precio && <span>el precio del precio del productos es requerido</span>}

              <Input placeholder='Stock' {...register('stock')} />
              {errors.stock && <span>el numero de stock es requerido</span>}

              <Input placeholder='Tipo de moneda' {...register('currency_code')} />
              {errors.stock && <span>el numero de stock es requerido</span>}

              <Textarea placeholder='descripción' {...register('description')} />

              <Button type="submit"> guardar producto </Button>
            </Stack>
          </form>
        </Box>

        <Products />
      </Grid>
    </div>
  )
}
