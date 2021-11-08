import React from 'react'

export default function Alert ({ message = null, status = null }) {
  !message && console.error('el mensaje es requerido')

  return (
    <div>
      <p>{message}</p>
      {status && <p>{status}</p>}
    </div>
  )
}
