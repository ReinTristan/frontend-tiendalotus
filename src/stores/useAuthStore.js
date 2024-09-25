import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Definimos los usuarios por defecto
const defaultUsers = [
	{
		id: 1,
		name: 'Admin User',
		username: 'admin',
		email: 'admin@example.com',
		role: 'admin',
		password: 'admin123', // En un caso real, nunca guardes contraseñas así
	},
	{
		id: 2,
		name: 'Regular User',
		username: 'user',
		email: 'user@example.com',
		role: 'user',
		password: 'user123',
	},
]

// Definimos la store de Zustand
const useAuthStore = persist(
	create((set, get) => ({
		users: defaultUsers,
		currentUser: null,
		loginError: null,

		// Función para manejar el login
		login: (username, password) => {
			set((state) => {
				const user = state.users.find(
					(u) => u.username === username && u.password === password
				)
				if (user) {
					return { currentUser: user, loginError: null }
				}
				return { loginError: 'Invalid username or password' }
			})
		},
		register: () => {
			set((state) => {
				const user = {
					id: state.users.length + 1,
					name: 'New User',
					username: 'newuser',
					email: '',
					role: 'user',
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
	})),
	{ name: 'authStore' }
)

export default useAuthStore
