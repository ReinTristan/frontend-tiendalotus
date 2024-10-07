import { create } from 'zustand' // Importa la store de autenticación
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create(
	persist(
		(set) => ({
			// Estado inicial del carrito (vacío)
			cart: [],
			subtotal: 0,
			total: 0,
			shippingCost: 5,
			// Función para agregar un producto al carrito
			addToCart: ({ product, quantity }) => {
				set((state) => {
					// Verifica si el producto ya está en el carrito
					const item = state.cart.find((item) => item.id === product.id)
					// Si el producto ya está en el carrito, actualiza la cantidad
					if (item) {
						return {
							cart: state.cart.map((item) => {
								if (item.id === product.id) {
									return { ...item, quantity: item.quantity + quantity }
								}
								return item
							}),
						}
					}
					return {
						cart: [...state.cart, { ...product, quantity }],
					}
				})
			},
			updateQuantity: ({ productId, quantity }) => {
				set((state) => ({
					cart: state.cart.map((item) => {
						if (item.id === productId) {
							return { ...item, quantity }
						}
						return item
					}),
				}))
			},
			// Función para agregar una cantidad a un producto del carrito
			addQuantity: ({ productId, quantity }) => {
				set((state) => {
					const item = state.cart.find((item) => item.id === productId)
					if (item.quantity + quantity <= 0) {
						return { cart: state.cart.filter((item) => item.id !== productId) }
					}
					return {
						cart: state.cart.map((item) => {
							const newQuantity = item.quantity + quantity
							if (item.id === productId && newQuantity >= 0) {
								return { ...item, quantity: newQuantity }
							}
							return item
						}),
					}
				})
			},
			// Función para eliminar un producto del carrito
			removeFromCart: (productId) => {
				set((state) => ({
					cart: state.cart.filter((item) => item.id !== productId),
				}))
			},

			// Función para vaciar el carrito
			clearCart: () => {
				set(() => ({
					cart: [],
					total: 0,
					subtotal: 0,
				}))
			},
			setSubAndTotal: () => {
				set((state) => {
					const subtotal = state.cart.reduce(
						(acc, item) => acc + item.quantity * item.price,
						0
					)
					const total = subtotal > 0 ? subtotal + state.shippingCost : 0
					return {
						...state,
						subtotal,
						total,
					}
				})
			},
		}),
		{ name: 'cartStore', storage: createJSONStorage(() => localStorage) } // Nombre y tipo de almacenamiento
	)
)

export default useCartStore
