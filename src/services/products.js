export const fetchProducts = async () => {
  try {
    const res = await window.fetch('http://localhost:4000/productos')
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
    console.log(error)
  }
}

export const serviceSaveProduct = async (product) => {
  try {
    const res = await window.fetch('http://localhost:4000/productos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 200,
          name: product.name,
          price: product.price,
          description: product.description,
          stock: product.stock,
          currency_code: product.currency_code,
          date: '24/09/2021'
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
        message: 'ah ocurrido un error guardando el producto intente de nuevo mas tarde.'
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export const serviceDeleteProduct = async (id) => {
  try {
    const res = await window.fetch(`http://localhost:4000/productos/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (res.ok) {
      return {
        success: {
          status: res.status,
          message: 'producto eliminado con exito.'
        },
        error: null
      }
    }

    return {
      success: null,
      error: {
        status: res.status,
        message: 'ah ocurrido un error eliminando el producto intente de nuevo mas tarde.'
      }
    }
  } catch (error) {
    console.log(error)
  }
}
