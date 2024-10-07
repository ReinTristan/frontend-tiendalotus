import { nanoid } from 'nanoid'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useOrdersStore = create(
	persist(
		(set, get) => ({
			// Estado inicial de las ordenes (vacío)
			orders: [],

			// Función para agregar ordenes
			addOrders: ({ cart, user, total }) => {
				console.log('cart', cart, 'user', user, 'total', total)
				if (get().orders.find((order) => order.userId === user.id)) {
					set((state) => ({
						orders: state.orders.map((order) => {
							if (order.userId === user.id) {
								return {
									...order,
									orders: [
										...order.orders,
										{ products: cart, date: new Date(), id: nanoid(5), total },
									],
								}
							}
							return order
						}),
					}))
				} else {
					set((state) => ({
						orders: [
							...state.orders,
							{
								userId: user.id,
								orders: [
									{ products: cart, date: new Date(), id: nanoid(5), total },
								],
							},
						],
					}))
				}
			},
			modifyOrders: (userId, orderId, newOrder) => {
				set((state) => ({
					orders: state.orders.map((order) => {
						if (order.userId === userId) {
							return {
								...order,
								orders: order.orders.map((o) => {
									if (o.id === orderId) {
										return newOrder
									}
									return o
								}),
							}
						}
						return order
					}),
				}))
			},
			getOrders: (userId) => {
				return (
					get().orders.find((order) => order.userId === userId)?.orders ?? []
				)
			},
			getAllOrders: () => {
				return get().orders
			},
		}),
		{ name: 'ordersStore' }
	)
)

export default useOrdersStore
