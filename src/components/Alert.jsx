import React from 'react'

export default function Alert({ message = '', status = '' }) {
	return (
		<div>
			<p>{message}</p>
			<p>{status}</p>
		</div>
	)
}
