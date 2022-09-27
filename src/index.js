import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProviderContext } from './components/Provider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ProviderContext>
			<App />
		</ProviderContext>
	</React.StrictMode>
)
