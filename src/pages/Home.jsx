import { Button, Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { store } from '../contexts/GlobalState';

const useStyles = makeStyles({
  paper: {
    padding: 20,
    height: '70vh',
    width: 480,
    margin: '20px auto'
  },
})

export default function Home({ color }) {
  const classes = useStyles();
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
    <Grid align="center">
      <Paper elevation={10} className={classes.paper}>
        <h1>Olá {user.name}</h1>
        <Grid style={{ minHeight: '50px' }}>
          {
            edit && <TextField label='Nome' placeholder="Digite o usuário" fullWidth required value={name} onChange={(e) => setName(e.target.value)} />
          }
        </Grid>

        <Button color="primary" variant="contained" onClick={onEdit}>{!edit ? 'Editar nome' : 'Salvar'}</Button>
        <Button color="secondary" variant="contained" onClick={() => dispatch({ name: 'user', value: null })}>Sair</Button>
      </Paper>
    </Grid>
  )
}
