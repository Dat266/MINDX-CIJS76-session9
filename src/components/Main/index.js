import React, { useContext } from 'react'
import { dataContext } from '../Provider'

const Main = () => {
	const { languages } = useContext(dataContext)
	console.log(languages[0].content)
	return (
		<div className="main">
			<h1>{languages[0].content}</h1>
		</div>
	)
}

export default Main
