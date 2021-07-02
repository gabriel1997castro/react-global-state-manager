import React, { useContext, useState } from 'react'
import { store } from '../contexts/GlobalState'
import { Grid, Paper, makeStyles, Avatar, TextField, FormControlLabel, Checkbox, Button, Link, Typography } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'

const useStyles = makeStyles({
  paper: {
    padding: 20,
    height: '70vh',
    width: 380,
    margin: '20px auto'
  },
  avatar: {
    backgroundColor: '#6200bd'
  },
  button: {
    margin: '10px 0',
  }
})

export default function Login() {
  const { dispatch, state } = useContext(store);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const userObject = {
    name: 'Gabriel Castro',
    cpf: '000.000.000-00',
    email: 'gabriel1997.castro@gmail.com',
    pw: '123456',
  }
  return (
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <Grid align="center">
          <Avatar className={classes.avatar}><LockOutlined /></Avatar>
        </Grid>
        <h2>Login</h2>
        <TextField label='Email' placeholder="Digite o usuário" fullWidth required value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label='Senha' placeholder="Digite a senha" fullWidth required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Lembrar a senha"
        />
        <Button
          className={classes.button}
          type='submit'
          color="primary"
          fullWidth
          variant="contained"
          onClick={() => {
            if (email === userObject.email && password === userObject.pw)
              dispatch({ name: 'user', value: userObject })
            else setError('Email ou senha inválidos')
          }}
        >Entrar</Button>
        <Typography>
          <Link href="#">Esqueci a senha</Link>
        </Typography>
        <Typography> Você tem uma conta?
          <Link href="#"> Cadastre-se</Link>
        </Typography>
        <Typography style={{ color: 'red' }}>{error}</Typography>
      </Paper>
    </Grid>
  )
}

