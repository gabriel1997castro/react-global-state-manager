import React, { useContext } from 'react'
import { store } from '../contexts/GlobalState'

export default function Login() {
  const { dispatch, state } = useContext(store);
  const { user } = state;

  const userObject = {
    name: 'Gabriel Castro',
    cpf: '000.000.000-00',
    email: 'gabriel1997.castro@gmail.com'
  }
  return (
    <div>
      Hello from Login
      <button
        onClick={() => {
          dispatch({ name: 'user', value: userObject })
        }}
      >
        Login
      </button>
    </div>
  )
}
