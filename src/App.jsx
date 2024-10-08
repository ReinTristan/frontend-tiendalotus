import { useState } from 'react'
import {
	createBrowserRouter,
	createHashRouter,
	Outlet,
	RouterProvider,
} from 'react-router-dom'
import Home from './Views/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './Views/Login'
import Catalogo from './Views/Catalogo'
import Admin from './Views/Admin'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/ProtectedRoutes'
function App() {
	const router = createHashRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/login',
					element: (
						<ProtectedRoute>
							<Login />
						</ProtectedRoute>
					),
				},
				{
					path: '/catalogo',
					element: <Catalogo />,
				},
				{
					path: '/admin',
					element: (
						<ProtectedRoute>
							<Admin />,
						</ProtectedRoute>
					),
				},
			],
		},
	])

	return (
		<>
			<Toaster />
			<RouterProvider router={router} />
		</>
	)
}

function Layout() {
	return (
		<>
			<Header />

			<Outlet />
			<Footer />
		</>
	)
}

export default App
