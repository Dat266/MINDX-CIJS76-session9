import { useContext } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import { dataContext } from './components/Provider'

function App() {
	const { user } = useContext(dataContext)
	return (
		<div className="App">
			<Header />
			{user == '' ? <Login /> : <Main />}
			<Footer />
		</div>
	)
}

export default App
