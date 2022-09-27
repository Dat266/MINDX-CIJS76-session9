import React, { useContext } from 'react'
import { dataContext } from '../Provider'

const Header = () => {
	const { user, languages } = useContext(dataContext)

	return (
		<div className="header">
			<div className="logo">
				<h2>MindX</h2>
			</div>
			<div className="login">
				<a href="#">{user == '' ? languages[0].logo : user}</a>
			</div>
		</div>
	)
}

export default Header
