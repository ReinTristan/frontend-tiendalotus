import React, { useRef, useState } from 'react'
import Image from '../assets/ImageLogin.jpg'
import useAuthStore from '../stores/useAuthStore'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
export default function Login() {
	const [isRegistering, setIsRegistering] = useState(false) // Estado para controlar el formulario mostrado
	const navigate = useNavigate()
	const { login, register, users, isAuthenticated } = useAuthStore(
		(state) => state
	)
	const emailRef = useRef()
	const passwordRef = useRef()
	const nameRegRef = useRef()
	const emailRegRef = useRef()
	const passwordRegRef = useRef()
	const passwordConfirmRegRef = useRef()
	console.log(users)
	const sendFormRegister = (event) => {
		event.preventDefault()
		if (passwordRegRef.current.value !== passwordConfirmRegRef.current.value) {
			toast.error('Las contraseñas no coinciden')
			return
		}
		const name = nameRegRef.current.value
		const email = emailRegRef.current.value
		const password = passwordRegRef.current.value
		register({ name, email, password })
		toast.success('Usuario creado')
		setIsRegistering(false)
	}
	const sendFormLogin = (event) => {
		event.preventDefault()
		const email = emailRef.current.value
		const password = passwordRef.current.value
		login({ email, password })
		if (!isAuthenticated) {
			toast.error('Usuario o contraseña incorrectos')
			return
		}
		toast.success('Login exitoso')
		navigate('/')
	}
	return (
		<div className='pt-10 pb-16 flex items-center justify-evenly bg-black'>
			<div className='w-1/4 -ml-10'>
				<img
					src={Image}
					alt='Imagen redondeada'
					className='h-full w-full object-cover rounded-2xl'
				/>
			</div>

			{/* Contenedor principal con flexbox */}
			<div className=' font-inria text-white mr-40 bg-transparent shadow-lg rounded-2xl flex overflow-hidden max-w-4xl justify-center'>
				{/* Formulario de Login o Registro */}
				<div className='p-12 flex flex-col justify-center w-full max-w-md'>
					{' '}
					{/* Ancho fijo para el contenedor */}
					{isRegistering ? ( // Condicional para mostrar el formulario correspondiente
						<>
							<h2 className='text-3xl font-bold mb-6 text-center'>
								Registrarse
							</h2>
							<form className='space-y-6' onSubmit={sendFormRegister}>
								<div>
									<label className='block text-2xl mb-1' htmlFor='name'>
										Nombre
									</label>
									<input
										type='text'
										id='name'
										ref={nameRegRef}
										className='w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500'
										placeholder='Tu nombre'
									/>
								</div>

								<div>
									<label className='block text-2xl mb-1' htmlFor='new-email'>
										Correo
									</label>
									<input
										type='email'
										id='new-email'
										ref={emailRegRef}
										className='w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500'
										placeholder='correo@ejemplo.com'
									/>
								</div>

								<div>
									<label className='block text-2xl mb-1' htmlFor='new-password'>
										Contraseña
									</label>
									<input
										type='password'
										id='new-password'
										ref={passwordRegRef}
										className='w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500'
										placeholder='* * * * * * * *'
									/>
								</div>

								<div>
									<label
										className='block text-2xl mb-1'
										htmlFor='confirm-password'
									>
										Confirmar Contraseña
									</label>
									<input
										type='password'
										id='confirm-password'
										ref={passwordConfirmRegRef}
										className='w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500'
										placeholder='* * * * * * * *'
									/>
								</div>

								<button
									type='submit'
									className='w-full py-3 px-4 mb-5 bg-orange-500 rounded-2xl text-black text-2xl hover:bg-white transition duration-200'
								>
									Registrarse
								</button>
							</form>
							<div className='relative flex pt-5 mt-10 items-center flex-grow border-t border-stone-500'></div>
							{/* Texto de inicio de sesión debajo del formulario */}
							<div className='text-center'>
								<p className='font-inria text-white'>
									¿Ya tienes cuenta?
									<a
										onClick={() => setIsRegistering(false)}
										className='text-blue-500 hover:underline cursor-pointer'
									>
										{' '}
										Inicia sesión aquí
									</a>
								</p>
							</div>
						</>
					) : (
						<>
							<h2 className='text-3xl font-bold mb-6 text-center'>
								Iniciar Sesión
							</h2>
							<form className='space-y-6' onSubmit={sendFormLogin}>
								<div>
									<label className='block text-2xl mb-1' htmlFor='email'>
										Correo
									</label>
									<input
										type='email'
										id='email'
										ref={emailRef}
										className='w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500'
										placeholder='correo@ejemplo.com'
									/>
								</div>

								<div>
									<label className='block text-2xl mb-1' htmlFor='password'>
										Contraseña
									</label>
									<input
										type='password'
										id='password'
										ref={passwordRef}
										className='w-full p-3 rounded-2xl bg-stone-500 placeholder-white  focus:outline-none focus:ring-2 focus:ring-orange-500'
										placeholder='* * * * * * * *'
									/>
								</div>

								<button
									type='submit'
									className='w-full py-3 px-4 mb-5 bg-orange-500 rounded-2xl text-black text-2xl hover:bg-white transition duration-200'
								>
									Iniciar Sesión
								</button>
							</form>
							<div className='relative flex py-5 mt-10 items-center flex-grow border-t border-stone-500'></div>
							{/* Texto de registro debajo del formulario */}
							<div className='text-center'>
								<p className='font-inria text-white'>
									No tienes cuenta?
									<a
										onClick={() => setIsRegistering(true)}
										className='text-blue-500 hover:underline cursor-pointer'
									>
										{' '}
										Regístrate aquí
									</a>
								</p>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
