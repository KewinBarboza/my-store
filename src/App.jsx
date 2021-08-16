import React, { useState, useEffect } from 'react'
import { List, ListItem } from '@chakra-ui/react'
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='nombre' {...register('name', { required: true })} />
        {errors.name && <span>el nombre es requerido</span>}

        <input placeholder='precio' {...register('precio')} />
        {errors.precio && <span>el precio del precio del productos es requerido</span>}

        <textarea placeholder='descripción' {...register('descripcion')} />

        <button> guardar producto </button>
      </form>

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
    </div>
  )
}

export default App
