// src/components/AuthCallback.tsx
import { useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

export default function AuthCallback() {
    const navigate = useNavigate()

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                navigate('/form') // or wherever you want to send user
            } else {
                navigate('/auth') // failed or not logged in
            }
        })
    }, [navigate])

    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <p>Signing you in...</p>
        </div>
    )
}