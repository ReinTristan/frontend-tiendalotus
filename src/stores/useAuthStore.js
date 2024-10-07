import { nanoid } from 'nanoid'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Definimos los usuarios por defecto
const defaultUsers = [
	{
		id: 'qfPny2pk10LlUiRlq6N8G',
		name: 'Admin User',
		email: 'admin@example.com',
		role: 'admin',
		password: 'e',
	},
	{
		id: 'plF3y2as22Lmmilll6NDD',
		name: 'Regular User',
		email: 'user@example.com',
		role: 'user',
		password: 'user123',
	},
]

// Definimos la store de Zustand
const useAuthStore = create(
	persist(
		(set, get) => ({
			users: defaultUsers,
			currentUser: null,
			loginError: null,

			// Función para manejar el login
			login: ({ email, password }) => {
				set((state) => {
					const user = state.users.find(
						(u) => u.email === email && u.password === password
					)
					if (user) {
						return { currentUser: user, loginError: null }
					}
					return { loginError: 'Invalid username or password' }
				})
			},
			register: ({ name, email, password, role = 'user' }) => {
				if (
					get().currentUser.role !== 'admin' &&
					role.toLowerCase() !== 'user'
				) {
					return 'Unauthorized'
				}
				set((state) => {
					const user = {
						id: nanoid(),
						name,
						email,
						password,
						role: role.toLowerCase(),
					}
					return { users: [...state.users, user] }
				})
			},

			// Función para desloguear
			logout: () => {
				set({ currentUser: null })
			},

			// Función para verificar si hay un usuario logueado
			isAuthenticated: () => {
				return !!get().currentUser
			},
		}),
		{ name: 'authStore' }
	)
)

export default useAuthStore
