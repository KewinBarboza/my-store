import React from 'react'
import { Textarea, Button, Input, Stack, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useProducts } from '../hooks/useProducts'

export default function FormCreateProduct () {
  const { saveProduct } = useProducts()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => saveProduct(data)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Crear producto</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Crear producto</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <Input placeholder='nombre' {...register('name', { required: true })} />
                {errors.name && <span>el nombre es requerido</span>}

                <Input placeholder='precio' {...register('price')} />
                {errors.precio && <span>el precio del precio del productos es requerido</span>}

                <Input placeholder='Stock' {...register('stock')} />
                {errors.stock && <span>el numero de stock es requerido</span>}

                <Input placeholder='Tipo de moneda' {...register('currency_code')} />
                {errors.stock && <span>el numero de stock es requerido</span>}

                <Textarea placeholder='descripción' {...register('description')} />
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={onClose} mr={3}>Cancelar</Button>
              <Button type='submit' colorScheme="blue" onClick={onClose}> guardar producto </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
