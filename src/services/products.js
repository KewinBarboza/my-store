import { v4 as uuid } from 'uuid'
const SERVICES = {
  PRODUCT: 'http://localhost:4000/productos'
}

const headers = {
  'Content-Type': 'application/json'
}

export const fetchProducts = async () => {
  try {
    const res = await window.fetch(SERVICES.PRODUCT)
    if (res.ok) {
      const data = await res.json()
      return { data, error: null }
    }

    return {
      data: null,
      error: {
        status: res.status,
        message: 'ah ocurrido un error cargando los productos.'
      }
    }
  } catch (error) {
    return {
      data: null,
      error: {
        status: null,
        message: error.message
      }
    }
  }
}

export const serviceSaveProduct = async (product) => {
  try {
    const event = new Date()
    const options = { dateStyle: 'short' }
    const date = event.toLocaleString('en', options)
    const res = await window.fetch(SERVICES.PRODUCT,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          id: uuid(),
          name: product.name,
          price: product.price,
          description: product.description,
          stock: product.stock,
          currency_code: product.currency_code,
          date
        })
      }
    )
    if (res.ok) {
      const data = await res.json()
      return {
        data,
        success: {
          status: res.status,
          message: 'producto guardado con exito.'
        },
        error: null
      }
    }

    return {
      data: [],
      success: null,
      error: {
        status: res.status,
        message: 'ah ocurrido un error intente de nuevo.'
      }
    }
  } catch (error) {
    return {
      data: null,
      error: {
        status: null,
        message: error.message
      }
    }
  }
}

export const serviceDeleteProduct = async (id) => {
  try {
    const res = await window.fetch(`${SERVICES.PRODUCT}/${id}`,
      {
        method: 'DELETE',
        headers
      }
    )

    if (res.ok) {
      return {
        success: {
          status: `status ${res.status}`,
          message: 'producto eliminado con exito.'
        },
        error: null
      }
    }

    return {
      success: null,
      error: {
        status: `status ${res.status}`,
        message: 'ah ocurrido un error intente de nuevo.'
      }
    }
  } catch (error) {
    return {
      success: null,
      error: {
        status: error,
        message: error.message
      }
    }
  }
}

export const serviceEditProduct = async (product) => {
  console.log(product)
}
