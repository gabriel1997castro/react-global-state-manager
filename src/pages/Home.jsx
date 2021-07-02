import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { store } from '../contexts/GlobalState';

export default function Home({ color }) {
  const { state, dispatch } = useContext(store)
  const { user } = state;
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState('')

  const onEdit = () => {
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

  }

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <div style={{ maxWidth: '300px' }}>
        <h1>Olá {user.name}</h1>
        {
          edit && <TextField label='Nome' placeholder="Digite o usuário" fullWidth required value={name} onChange={(e) => setName(e.target.value)} /> 
        }

        <Button color="primary" variant="contained" onClick={onEdit}>{!edit ? 'Editar nome' : 'Salvar'}</Button>
        <Button color="secondary" variant="contained" onClick={() => dispatch({ name: 'user', value: null })}>Sair</Button>
      </div>
    </div>
  )
}
