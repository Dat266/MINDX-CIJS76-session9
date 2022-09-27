import React, { useContext } from 'react'
import { dataContext } from '../Provider'

const Login = () => {
	const { handleValue, handleLogin, input, inputRef, languages } =
		useContext(dataContext)
	return (
		<div className="form-login">
			<div className="content">
				<div className="content-header">
					<h3>{languages[0].logo}</h3>
				</div>
				<form>
					<div className="input">
						<input
							type="text"
							placeholder={languages[0].placeholder}
							value={input}
							ref={inputRef}
							onChange={handleValue}
						/>
					</div>
					<button className="btn-login" onClick={handleLogin}>
						{languages[0].logo}
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
