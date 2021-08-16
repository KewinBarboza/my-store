import React, { useState, useEffect } from 'react'
import './App.css'
import { List, ListItem } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

function App () {
  const [data, setData] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetch('http://localhost:3000/productos')
    const data = await res.json()
    console.log(data)
    setData(data)
  }

  return (
    <div className="App">
      <List spacing={3}>
      {data && data.map(d => (
          <ListItem spacing={3} key={d.id}>
            <CheckCircleIcon mr={10} color="green.600" />
            {d.nombre}
          </ListItem>
      ))}
      </List>

    </div>
  )
}

export default App
