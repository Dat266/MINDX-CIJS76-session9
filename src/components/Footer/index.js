import React, { useContext } from 'react'
import { dataContext } from '../Provider'

const Footer = () => {
	const { handleConvertlanguage } = useContext(dataContext)
	return (
		<div className="footer">
			<select className="select" onChange={handleConvertlanguage}>
				<option value="vi">vi</option>
				<option value="en">en</option>
				<option value="한국인">한국인</option>
			</select>
		</div>
	)
}

export default Footer
