'use client'

import { useAuth } from '@/context/auth.context'

import classNames from 'classnames'

import { VscAccount, VscSignIn, VscSignOut } from 'react-icons/vsc'

export const NavbarUser = () => {
  const [state, dispatch] = useAuth()

  const handleLogin = () => {
    dispatch({
      type: 'SIGN_IN',
      payload: {
        user: {
          accountNumber: 'test-account-number',
        },
        accessToken: 'test-token',
      },
    })
  }

  return (
    <div>
      {state.authenticated ? (
        <VscSignOut className='cursor-pointer' onClick={() => dispatch({ type: 'SIGN_OUT' })} />
      ) : (
        <>
          <VscSignIn className='cursor-pointer' onClick={handleLogin} />
        </>
      )}
    </div>
  )
}
