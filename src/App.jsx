import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Views/Home'
import Header from './components/Header'
import Footer from './components/Footer'
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
					element: <Home />,
				},
				{
					path: '/shop',
					element: <Home />,
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
