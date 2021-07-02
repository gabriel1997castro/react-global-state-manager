import React, { useContext } from 'react'
import { store } from '../contexts/GlobalState'
import Home from './Home'
import Login from './Login'

export default function Main() {
  const { state } = useContext(store)
  return (
    <div>
      {!state.user ? <Login /> : <Home />}
    </div>
  )
}
