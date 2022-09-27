import React, { createContext, useRef, useState } from 'react'

const dataContext = createContext()

const ProviderContext = ({ children }) => {
	const inputRef = useRef()

	const [input, setInput] = useState('')
	const [user, setUser] = useState([])
	const [language, setLanguage] = useState('vi')
	const inittalLanguage = [
		{
			language: 'vi',
			logo: 'Đăng nhập',
			placeholder: 'Tên đăng nhập ...',
			content: 'Chào mừng bạn đến với trang chủ của MindX!',
		},
		{
			language: 'en',
			logo: 'Login',
			placeholder: 'Username ...',
			content: `Welcome to MindX's homepage!`,
		},
		{
			language: '한국인',
			logo: '로그인',
			placeholder: '사용자 이름 ...',
			content: 'MindX 홈페이지에 오신 것을 환영합니다!',
		},
	]

	//xử lí onChange cho input
	const handleValue = (e) => {
		setInput(e.target.value)
	}

	// xử lí click đăng nhập

	const handleLogin = (e) => {
		e.preventDefault()
		setUser(input)
		setInput('')
		inputRef.current.focus()
	}

	//xử lí chuyển ngôn ngữ

	const handleConvertlanguage = (e) => {
		setLanguage(e.target.value)
	}

	const languages = inittalLanguage.filter(
		(item) => item.language === language
	)

	const value = {
		handleLogin,
		handleValue,
		input,
		setInput,
		inputRef,
		user,
		handleConvertlanguage,
		languages,
		language,
	}

	return <dataContext.Provider value={value}>{children}</dataContext.Provider>
}

export { ProviderContext, dataContext }
