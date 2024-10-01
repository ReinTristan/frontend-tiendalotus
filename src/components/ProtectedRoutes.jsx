import React, { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuthStore from '../stores/useAuthStore'
const protectedRoutes = ['/login']
const adminRoutes = ['/admin']
export default function ProtectedRoute({ children }) {
	const { isAuthenticated, currentUser } = useAuthStore((state) => state)
	const location = useLocation()
	const currentPath = location.pathname
	console.log(currentPath, isAuthenticated())
	const isProtectedRoute = protectedRoutes.includes(currentPath)

	if (isAuthenticated() && isProtectedRoute) {
		return <Navigate to='/' />
	}

	if (!isAuthenticated() && !isProtectedRoute) {
		return <Navigate to='/login' />
	}
	if (
		isAuthenticated() &&
		adminRoutes.includes(currentPath) &&
		currentUser?.role !== 'admin'
	) {
		return <Navigate to='/' />
	}
	return children
}
