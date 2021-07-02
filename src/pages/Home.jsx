import React, { useContext } from 'react'
import { store } from '../contexts/GlobalState';

export default function Home({ color }) {
  const { state, dispatch } = useContext(store)
  const { user } = state;

  return (
    <div>
      <h1>Olá {user.name}</h1>
      <button onClick={() => dispatch({ name: 'user', value: null })}>Sair</button>
    </div>
  )
}
