'use client'

// React
import { createContext, useReducer, useContext, useEffect } from 'react'

type AuthState = {
  authenticated: boolean
  user: {
    accountNumber: string
    credits: 1000000
  } | null
  accessToken: string | null
}

type AuthAction =
  | { type: 'SIGN_IN'; payload: { user: any; accessToken: string } }
  | { type: 'SIGN_OUT' }

const AuthContext = createContext<[AuthState, React.Dispatch<AuthAction>]>([
  { authenticated: false, user: null, accessToken: null },
  () => null,
])

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      const newState = {
        authenticated: true,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      }
      localStorage.setItem('simstudio', JSON.stringify(newState))
      return newState
    case 'SIGN_OUT':
      localStorage.removeItem('simstudio')
      return { authenticated: false, user: null, accessToken: null }
    default:
      return state
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    authenticated: false,
    user: null,
    accessToken: null,
  })

  useEffect(() => {
    const stored = localStorage.getItem('simstudio')

    if (stored) {
      dispatch({ type: 'SIGN_IN', payload: JSON.parse(stored) })
    }
  }, [])

  return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
