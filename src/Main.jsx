import React, { useContext } from 'react'
import { store } from './contexts/GlobalState'
import Home from './pages/Home'
import Login from './pages/Login'

export default function Main() {
  const { state } = useContext(store)
  return (
    <div>
      {!state.user ? <Login /> : <Home />}
    </div>
  )
}
