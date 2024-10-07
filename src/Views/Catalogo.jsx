import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import useCartStore from '../stores/useCartStore'

const Catalogo = () => {
	const [category, setCategory] = useState('')
	const [color, setColor] = useState('')
	const [price, setPrice] = useState('')
	const [sort, setSort] = useState('')

	const [cart, setCart] = useState([])
	const cartStore = useCartStore((state) => state)
	const products = [
		{
			id: 1,
			name: 'Producto 1',
			description: 'Descripción del producto 1',
			price: 50,
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 2,
			name: 'Producto 2',
			description: 'Descripción del producto 2',
			price: 75,
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 3,
			name: 'Producto 3',
			description: 'Descripción del producto 3',
			price: 100,
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 4,
			name: 'Producto 4',
			description: 'Descripción del producto 4',
			price: 120,
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 5,
			name: 'Producto 5',
			description: 'Descripción del producto 5',
			price: 90,
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 6,
			name: 'Producto 6',
			description: 'Descripción del producto 6',
			price: 60,
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 7,
			name: 'Producto 7',
			description: 'Descripción del producto 7',
			price: 30,
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 8,
			name: 'Producto 8',
			description: 'Descripción del producto 8',
			price: 45,
			image: 'https://via.placeholder.com/150',
		},
	]

	return (
		<div className='min-h-screen bg-black text-white font-inria'>
			<div className='w-full p-8'>
				{' '}
				{/* Cambiado aquí */}
				{/* Título */}
				<h1 className='text-3xl font-bold text-white mb-4'>Catálogo</h1>
				{/* Descripción */}
				<p className='text-white mb-8 text-2xl'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
					amet luctus magna.
				</p>
				{/* Filtros */}
				<div className='mb-8 flex items-center'>
					<div className='flex space-x-4'>
						<div className='bg-stone-500 rounded-3xl p-4'>
							<label className='block text-1xl text-white'>Categoría</label>
							<select
								className='mt-1 block w-full bg-stone-500 text-white'
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							>
								<option value=''>Todas las Categorias</option>
								<option value='ropa'>Ropa</option>
								<option value='electronica'>Electrónica</option>
								<option value='hogar'>Hogar</option>
							</select>
						</div>

						<div className='bg-stone-500 rounded-3xl p-4'>
							<label className='block text-1xl text-white'>Color</label>
							<select
								className='mt-1 block w-full bg-stone-500 text-white'
								value={color}
								onChange={(e) => setColor(e.target.value)}
							>
								<option value=''>Todos los Colores</option>
								<option value='rojo'>Rojo</option>
								<option value='azul'>Azul</option>
								<option value='negro'>Negro</option>
							</select>
						</div>

						<div className='bg-stone-500 rounded-3xl p-4'>
							<label className='block text-1xl text-white'>Precio</label>
							<select
								className='mt-1 block w-full bg-stone-500 text-white'
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							>
								<option value=''>Todos los precios</option>
								<option value='0-50'>0 - 50$</option>
								<option value='51-100'>51 - 100$</option>
								<option value='101-200'>101 - 200$</option>
							</select>
						</div>
					</div>

					{/* Botón de ordenar alineado a la derecha */}
					<div className='bg-stone-500 rounded-3xl p-4 ml-auto'>
						<label className='block text-1xl text-white'>Ordenar</label>
						<select
							className='mt-1 block w-full bg-stone-500 text-white'
							value={sort}
							onChange={(e) => setSort(e.target.value)}
						>
							<option value='nuevo'>Nuevo</option>
							<option value='antiguo'>Antiguo</option>
						</select>
					</div>
				</div>
				{/* Productos en grid */}
				<div className='grid grid-cols-4 gap-4'>
					{products.map((product) => (
						<div key={product.id} className='p-4 flex flex-col justify-between'>
							<img
								src={product.image}
								alt={product.name}
								className='w-full h-80 object-cover rounded-2xl'
							/>
							<div className='mt-4 flex justify-between items-center'>
								<h3 className='font-semibold'>{product.name}</h3>
								<button
									onClick={() => cartStore.addToCart({ product, quantity: 1 })}
									className='text-orange-500 hover:text-white'
								>
									<AiFillPlusCircle className='h-8 w-8' />
								</button>
							</div>
							<p className='text-white mt-2'>{product.description}</p>
							<p className='text-white mt-4'>${product.price}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Catalogo
