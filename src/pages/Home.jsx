import React, { useContext, useState } from 'react'
import { store } from '../contexts/Store'

export default function Home() {
  const { state, dispatch } = useContext(store)
  const { user } = state;

  return (
    <div>
      <h1>Hello from home {user.name}</h1>
      <button onClick={() => dispatch({ type: 'logout' })}>Sair</button>
    </div>
  )
}
