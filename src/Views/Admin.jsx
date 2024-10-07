import React, { useRef, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { PiUserCircleMinusBold } from 'react-icons/pi'
import { RiEditCircleLine } from 'react-icons/ri'
import useAuthStore from '../stores/useAuthStore'
import UserInfo from '../components/UserInfo'
import toast from 'react-hot-toast'

export default function Admin() {
	const [modalVisible, setModalVisible] = useState(false)
	const users = useAuthStore((state) => state.users)
	const register = useAuthStore((state) => state.register)
	const toggleModal = () => {
		setModalVisible(!modalVisible)
	}
	const [search, setSearch] = useState('')
	const [filteredUsers, setFilteredUsers] = useState(users)
	const name = useRef()
	const email = useRef()
	const password = useRef()
	const confirmPassword = useRef()
	const role = useRef()
	const handleSubmit = (e) => {
		e.preventDefault()
		const name = e.target.nombre.value
		const email = e.target.correo.value
		const password = e.target.password.value
		const confirmPassword = e.target.confirmPassword.value
		const role = e.target.rol.value
		if (password !== confirmPassword) {
			toast.error('Las contraseñas no coinciden')
			return
		}
		register({ name, email, password, role })
		toggleModal()
		toast.success(`Usuario creado con exito`)
	}
	return (
		<div className='min-h-screen bg-black text-white font-inria'>
			<div className='w-full p-8'>
				{/* Título */}
				<h1 className='text-3xl font-bold text-white mb-4'>
					Administrar Usuarios
				</h1>

				{/* Descripción */}
				<p className='text-white mb-8 text-2xl'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
					amet luctus magna.
				</p>

				{/* Barra de búsqueda y filtro */}
				<div className='flex items-center justify-between mb-6'>
					<div className='flex items-center w-full'>
						<input
							type='text'
							placeholder='Buscar usuarios...'
							className='w-96 p-4 bg-stone-500 text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-white border border-black'
							value={search}
							onChange={(e) => {
								setSearch(e.target.value)
								setFilteredUsers(
									users.filter((user) =>
										user.name.toLowerCase().includes(search.toLowerCase())
									)
								)
							}}
						/>
						<button
							onClick={toggleModal}
							className='ml-4 p-3 bg-orange-500 text-black rounded-full flex items-center text-2xl hover:bg-white'
						>
							<FaPlus />
						</button>
					</div>
					<div className='flex flex-col items-start rounded-2xl bg-stone-500 pt-2'>
						<div>
							<span className='text-white ml-6'>Filtrar</span>
						</div>
						<select className='ml-4 mb-2 mr-4 p-2 bg-stone-500 focus:outline-none'>
							<option value=''>Cualquiera</option>
							<option value='nuevo'>Nuevo</option>
							<option value='antiguo'>Antiguo</option>
						</select>
					</div>
				</div>

				{/* Modal */}
				{modalVisible && (
					<div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
						<div className='bg-white rounded-2xl p-6 w-11/12 max-w-96 text-black font-semibold text-[20px]'>
							<h2 className='text-3xl font-bold mb-10 justify-center text-center'>
								Registro
							</h2>
							<form onSubmit={handleSubmit}>
								<div className='mb-4'>
									<label className='block mb-1' htmlFor='nombre'>
										Nombre y Apellidos
									</label>
									<input
										type='text'
										id='nombre'
										className='w-full p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 border border-black'
									/>
								</div>
								<div className='mb-4'>
									<label className='block mb-1' htmlFor='correo'>
										Correo
									</label>
									<input
										type='email'
										id='correo'
										className='w-full p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 border border-black'
									/>
								</div>
								<div className='mb-4'>
									<label className='block mb-1' htmlFor='password'>
										Contraseña
									</label>
									<input
										type='password'
										id='password'
										className='w-full p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 border border-black'
									/>
								</div>
								<div className='mb-4'>
									<label className='block mb-1' htmlFor='confirmPassword'>
										Confirmar Contraseña
									</label>
									<input
										type='password'
										id='confirmPassword'
										className='w-full p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 border border-black'
									/>
								</div>
								<div className='mb-4'>
									<label className='block mb-1' htmlFor='rol'>
										Rol
									</label>
									<select
										id='rol'
										className='w-full p-2 rounded-2xl focus:outline-none border border-black bg-white'
									>
										<option value='Usuario'>Usuario</option>
										<option value='Admin'>Admin</option>
									</select>
								</div>
								<div className='flex justify-center mt-6'>
									<button
										type='button'
										className='px-3 bg-black border -border-r-white text-white rounded-l-2xl hover:bg-orange-500 hover:text-black'
										onClick={toggleModal}
									>
										Cancelar
									</button>
									<button
										type='submit'
										className='p-2 bg-black text-white rounded-r-2xl border -border-r-white hover:bg-orange-500 hover:text-black'
									>
										Confirmar
									</button>
								</div>
							</form>
						</div>
					</div>
				)}

				{/* Tarjetas de usuarios */}
				<div className='grid grid-cols-1 gap-6 mt-4'>
					{filteredUsers.map((usuario) => (
						<UserInfo key={usuario.id} usuario={usuario} />
					))}
				</div>
			</div>
		</div>
	)
}
