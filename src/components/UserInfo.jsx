import React, { useState } from 'react'
import { PiUserCircleMinusBold } from 'react-icons/pi'
import { RiEditCircleLine } from 'react-icons/ri'
import useOrdersStore from '../stores/useOrdersStore'
import { CiReceipt } from 'react-icons/ci'

export default function UserInfo({ usuario }) {
	const [isOpen, setIsOpen] = useState(false)
	const getOrders = useOrdersStore((state) => state.getOrders)
	const orders = getOrders(usuario.id)
	return (
		<div
			className={`flex flex-col p-4 rounded-xl ${
				isOpen && 'bg-[#333]'
			} gap-4 transition `}
		>
			<div
				key={usuario.id}
				className={` rounded-2xl p-4 flex justify-between items-center text-white cursor-pointer ${
					!isOpen
						? 'bg-stone-500 hover:bg-stone-600'
						: 'bg-stone-900 hover:bg-stone-500'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				{/* Datos del usuario ordenados horizontalmente */}
				<div className='flex-1 flex justify-between items-center'>
					<h2 className='text-2xl flex-1 text-start ml-2'>{usuario.name}</h2>
					<p className='text-2xl flex-1 text-center'>{usuario.email}</p>
					<p className='text-2xl flex-1 text-center'>{usuario.role}</p>
				</div>
				<div className='flex space-x-2'>
					<button className='text-3xl text-white hover:text-orange-500'>
						<RiEditCircleLine />
					</button>
					<button className='text-3xl text-white hover:text-orange-500'>
						<PiUserCircleMinusBold />
					</button>
				</div>
			</div>
			{/* Detalles del usuario */}
			{isOpen &&
				(orders.length > 0 ? (
					orders.map((order) => (
						<div className='' key={order.id}>
							<div
								key={usuario.id}
								className='bg-stone-500 rounded-2xl p-4 flex justify-between items-center text-white transition'
							>
								{/* Datos del usuario ordenados horizontalmente */}
								<div className='flex-1 flex justify-between items-center'>
									<h2 className='text-2xl flex-1 text-start ml-2'>
										Orden {order.id}
									</h2>
									<p className='text-2xl flex-1 text-center'>
										{new Date(order.date).toLocaleDateString()}
									</p>
									<p className='text-2xl flex-1 text-center'>${order.total}</p>
								</div>
								<div className='flex space-x-2'>
									<button className='text-3xl text-white hover:text-orange-500'>
										<CiReceipt />
									</button>
								</div>
							</div>
						</div>
					))
				) : (
					<div className='bg-stone-500 rounded-2xl p-4 flex justify-between items-center text-white'>
						<p>No hay ordenes</p>
					</div>
				))}
		</div>
	)
}
