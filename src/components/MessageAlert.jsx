import React from 'react'
import { Alert, AlertIcon, CloseButton, AlertDescription } from '@chakra-ui/react'

export default function MessageAlert ({ message = null, status = null, typeError = 'success' }) {
  !message && console.error('el mensaje es requerido')

  return (
    <Alert status="typeError">
      <AlertIcon />
      <AlertDescription>{message} {status && <p>{status}</p>}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  )
}
