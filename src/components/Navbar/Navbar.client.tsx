'use client'

import { useAuth } from '@/context/auth.context'

export const NavbarUser = () => {
  const [state, dispatch] = useAuth()

  return <div>{state.authenticated ? 'authenticated' : 'not authenticated'}</div>
}
