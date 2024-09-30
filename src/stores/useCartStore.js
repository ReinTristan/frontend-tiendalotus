import { create } from 'zustand' // Importa la store de autenticación
import { persist } from 'zustand/middleware'

const useCartStore = persist(
	create((set) => ({
		// Estado inicial del carrito (vacío)
		cart: [],

		// Función para agregar un producto al carrito
		addToCart: ({ product, quantity }) => {
			set((state) => ({
				cart: [...state.cart, { ...product, quantity }],
			}))
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
			}))
		},
	})),
	{ name: 'cartStore' }
)

export default useCartStore
