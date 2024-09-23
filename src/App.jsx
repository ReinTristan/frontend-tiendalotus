import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Views/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './Views/Login'
import Catalogo from './Views/Catalogo'

function App() {
	const [count, setCount] = useState(0)

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
