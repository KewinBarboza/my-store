import React from 'react'
import { Textarea, Button, Input, Stack, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useProducts } from '../hooks/useProducts'

export default function FormCreateProduct () {
  const { saveProduct } = useProducts()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    saveProduct(data)
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>Agregar producto</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Agregar producto</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <Stack spacing={4}>
                <Input m={0} placeholder='nombre producto' isInvalid={errors.name} {...register('name', { required: true })} />
                {errors.name?.type === 'required' && <span style={{ margin: 0, fontSize: '12px', color: 'red' }}>el nombre es requerido</span>}

                <Input m={0} placeholder='precio' isInvalid={errors.price} type="number" step="any" {...register('price', { required: true, pattern: /^\d+(\.\d{1,2})?$/ })} />
                {errors.price?.type === 'required' && <span style={{ margin: 0, fontSize: '12px', color: 'red' }}>el precio es requerido</span>}

                <Input m={0} placeholder='Stock' isInvalid={errors.stock} {...register('stock', { required: true })} />
                {errors.stock?.type === 'required' && <span style={{ margin: 0, fontSize: '12px', color: 'red' }}>el stock es requerido</span>}

                <Input m={0} placeholder='Tipo de moneda' isInvalid={errors.currency_code} {...register('currency_code', { required: true })} />
                {errors.currency_code?.type === 'required' && <span style={{ margin: 0, fontSize: '12px', color: 'red' }}>el tipo es requerido</span>}

                <Textarea m={0} placeholder='descripción' {...register('description')} />
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={onClose} mr={3}>Cancelar</Button>
              <Button type='submit' colorScheme="blue" > guardar producto </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
