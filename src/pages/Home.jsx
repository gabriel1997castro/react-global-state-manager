import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { store } from '../contexts/GlobalState';

export default function Home({ color }) {
  const { state, dispatch } = useContext(store)
  const { user } = state;
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState('')

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <div style={{ maxWidth: '300px' }}>
        <h1>Olá {user.name}</h1>
        {
          edit && <TextField label='Nome' placeholder="Digite o usuário" fullWidth required value={name} onChange={(e) => setName(e.target.value)} /> 
        }

        <button onClick={() => {
          if (edit) {
            dispatch({
              name: 'user',
              value: {
                ...state.user,
                name: name,
              }
            });
            setEdit(false);
          }
          else {
            setName(user.name);
            setEdit(true);
          }

        }}>{!edit ? 'Editar nome' : 'Salvar'}</button>
        <button onClick={() => dispatch({ name: 'user', value: null })}>Sair</button>
      </div>
    </div>
  )
}
