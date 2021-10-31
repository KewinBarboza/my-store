import React from 'react'
import { Textarea, Button, Input, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useProducts } from '../hooks/useProducts'

export default function FormCreateProduct () {
  const { saveProduct } = useProducts()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => saveProduct(data)

  return (
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

        <Button type='submit'> guardar producto </Button>
      </Stack>
    </form>
  )
}
