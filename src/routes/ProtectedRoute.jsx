import { useState } from 'react'
import { Outlet, useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
export default function ProtectedRoute() {
    const auth = useAuth()
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}