import React, { useState, useEffect } from 'react'
import { Center, List, ListItem, Textarea, Button, Input, Box, Grid, Stack } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'

function App () {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setLoading(true)
    const res = await window.fetch('http://localhost:4000/productos')
    const data = await res.json()
    setData(data)
    setLoading(false)
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='App'>
      <Grid templateColumns='repeat(2, 1fr)' gap={3} padding='10'>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' padding='10'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <Input placeholder='nombre' {...register('name', { required: true })} />
              {errors.name && <span>el nombre es requerido</span>}

              <Input placeholder='precio' {...register('precio')} />
              {errors.precio && <span>el precio del precio del productos es requerido</span>}

              <Textarea placeholder='descripción' {...register('descripcion')} />

              <Button> guardar producto </Button>
            </Stack>
          </form>
        </Box>

        {loading && <span>loading...</span>}

        {
          !loading &&
            <List spacing={3}>
              {data && data.map(d => (
                <ListItem spacing={3} key={d.id}>
                  <CheckCircleIcon mr={10} color='green.600' />
                  <span> <b>stock</b> {d.stock} - <b>nombre</b> {d.name} - Bs{d.precio} </span>
                </ListItem>
              ))}
            </List>
        }
      </Grid>
    </div>
  )
}

export default App
