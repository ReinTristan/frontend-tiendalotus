import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Views/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './Views/Login'
import Catalogo from './Views/Catalogo'
import Admin from './Views/Admin'

function App() {
	const router = createBrowserRouter([
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
					element: <Login />,
				},
				{
					path: '/catalogo',
					element: <Catalogo />,
				},
				{
					path: '/admin',
					element: <Admin />,
				},
			],
		},
	])

	return (
		<>
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
