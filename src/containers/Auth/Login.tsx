import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import classes from './Login.module.css'

interface State {
  username: string
  password: string
}

export const Login: React.FC<any> = () => {
  const history = useHistory()

  const [loginState, setLoginState] = useState<State>({
    username: '',
    password: '',
  })

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loggedIn = localStorage.getItem('user')
    if (loggedIn) {
      history.push('/home')
    }
  }, []) //eslint-disable-line

  const loginHandler = () => {
    const { username, password } = loginState
    if (username === 'foo' && password === 'bar') {
      localStorage.setItem('user', 'foo')
      setErrorMessage('')
      history?.push('/home')
    } else {
      setErrorMessage('Please use Username: "foo" and Password: "bar" for authentication')
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginState((prevState: State) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  return (
    <>
      <div className={classes.loginform}>
        <h2 className={classes.headerTitle}>Login</h2>
        <Input
          inputHandler={onChangeHandler}
          name="username"
          description="Username"
          placeholder="Enter your username"
          type="text"
          value={loginState.username}
        />
        <Input
          inputHandler={onChangeHandler}
          name="password"
          description="Password"
          placeholder="Enter your password"
          type="password"
          value={loginState.password}
        />
        <Button title="Log in" loginHandler={loginHandler} />
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
      </div>
    </>
  )
}
