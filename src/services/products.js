export const fetchProducts = async () => {
	try {
		const res = await window.fetch('http://localhost:4000/productos')
		if (res.ok) {
			const data = await res.json()
			return { data, error: null }
		}

		return { data: [], error: { status: res.status, message: 'ah ocurrido un error cargando los productos.' } }
	} catch (error) {
		console.log(error)
	}
}