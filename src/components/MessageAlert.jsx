import React, { useState, useEffect } from 'react'
import { Alert, AlertIcon, AlertDescription, AlertTitle } from '@chakra-ui/react'

export default function MessageAlert ({ message = null, status = null, typeError = 'success' }) {
  if (message === null) return <></>
  const [time, setTime] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setTime(false)
    }, 4000)
  }, [])

  return <>
    {time && <Alert status={typeError} variant="left-accent" position="absolute" top="8px" right="8px" zIndex="2" width="auto">
      <AlertIcon />
      <AlertTitle>{status && <p>status {status}</p>}</AlertTitle>
      <AlertDescription display="block"> {message}</AlertDescription>
    </Alert>}
  </>
}
