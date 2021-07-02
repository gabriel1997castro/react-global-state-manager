import React, { useContext } from 'react'
import { store } from '../contexts/Store'

export default function Login() {
  const { dispatch } = useContext(store);

  const userObject = {
    name: 'Gabriel Castro',
    cpf: '000.000.000-00',
    email: 'gabriel1997.castro@gmail.com'
  }
  return (
    <div>
      Hello from Login
      <button onClick={() => dispatch({ type: 'set-user', payload: userObject })}>login</button>
    </div>
  )
}
