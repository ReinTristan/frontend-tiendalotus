import React, { useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { PiFlowerLotusLight } from 'react-icons/pi'
import { Link, Navigate } from 'react-router-dom'

const CartItem = ({ item, onAdd, onRemove }) => {
	return (
		<div className='flex items-center justify-between mb-2'>
			<img src={item.image} alt={item.name} className='w-16 h-16 rounded-lg' />
			<span className='ml-2'>{item.name}</span>
			<div className='flex flex-col items-center ml-2'>
				<span className='font-bold'>${(10).toFixed(2)}</span>{' '}
				{/* Precio del objeto, se asume un precio fijo de 10 */}
				<div className='flex items-center  mt-1'>
					<button
						onClick={onRemove}
						className=' px-2 rounded-s-lg border border-black'
					>
						-
					</button>
					<span className='border-t border-b border-black px-2'>
						{item.quantity}
					</span>
					<button
						onClick={onAdd}
						className=' px-2 rounded-r-lg border border-black'
					>
						+
					</button>
				</div>
			</div>
		</div>
	)
}

export default function Header() {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([
		{
			id: 1,
			name: 'Producto 1',
			quantity: 1,
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 2,
			name: 'Producto 2',
			quantity: 2,
			image: 'https://via.placeholder.com/150',
		},
	])

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen)
	}

	const handleAdd = (id) => {
		setCartItems(
			cartItems.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		)
	}

	const handleRemove = (id) => {
		setCartItems(
			cartItems.map((item) =>
				item.id === id && item.quantity > 0
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		)
	}

	const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * 10, 0) // Asumiendo un precio fijo de 10 por item
	const shippingCost = 5
	const total = subtotal + shippingCost

	return (
		<header className='bg-black text-stone-500 font-inknut'>
			<div className='flex justify-between items-center p-2'>
				{/* Contenedor del logo e imagen */}
				<div className='flex space-x-2 px-3 items-center'>
					<div className='text-5xl text-orange-500'>
						<PiFlowerLotusLight />
					</div>
					<div className='text-3xl text-white'>LOTUS</div>
				</div>

				{/* Menú de navegación */}
				<nav>
					<ul className='flex space-x-6 font-title text-2xl'>
						<li>
							{/* <a href='/' className='hover:text-white'>
								Inicio
							</a> */}
							<Link to='/'> Inicio</Link>
						</li>
						<li>|</li>
						<li>
							<Link to='catalogo'> Catalogo</Link>
						</li>
						<li>|</li>
						<li>
							<a href='/' className='hover:text-white'>
								Contacto
							</a>
						</li>
						<li>|</li>
						<li>
							<a href='/login' className='hover:text-white'>
								Iniciar Sesión
							</a>
						</li>
					</ul>
				</nav>

				{/* Botón del carrito con menú desplegable */}
				<div className='relative'>
					<button onClick={toggleCart} className='text-4xl px-3'>
						<HiOutlineShoppingCart
							className={`${isCartOpen ? 'text-orange-500' : 'text-white'}`}
						/>
					</button>

					{/* Menú desplegable del carrito */}
					{isCartOpen && (
						<div className='absolute right-0 mt-2 w-72 bg-white text-black shadow-lg rounded-lg font-inria'>
							<div className='p-4 text-lg'>
								<p className='text-xl font-bold mb-4'>Carrito</p>

								{/* Items del carrito */}
								{cartItems.map((item) => (
									<CartItem
										key={item.id}
										item={item}
										onAdd={() => handleAdd(item.id)}
										onRemove={() => handleRemove(item.id)}
									/>
								))}

								<div className='relative flex pb-2 items-center flex-grow border-t border-black'></div>

								{/* Subtotal y Costo de envío con precios alineados a la derecha */}
								<div className='flex justify-between font-bold'>
									<span>Subtotal</span>
									<span className='text-right'>${subtotal.toFixed(2)}</span>
								</div>
								<div className='flex justify-between font-bold'>
									<span>Costo de envío</span>
									<span className='text-right'>${shippingCost.toFixed(2)}</span>
								</div>

								<div className='relative flex items-center flex-grow border-t border-black mt-2'></div>

								{/* Total con precio alineado a la derecha */}
								<div className='flex justify-between font-bold my-2'>
									<span>Total</span>
									<span className='text-right'>
										<span className='text-stone-500'>USD</span> $
										{total.toFixed(2)}
									</span>
								</div>

								<button className='font-bold w-full bg-orange-500 text-black py-2 rounded-2xl hover:bg-orange-600'>
									Confirmar Orden
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}
