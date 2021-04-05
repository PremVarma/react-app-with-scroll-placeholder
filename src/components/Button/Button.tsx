import React from 'react'
import classes from '../../containers/Auth/Login.module.css'

interface Props {
  title: string
  loginHandler?: () => void
}

export const Button: React.FC<Props> = ({ title, loginHandler }) => {
  return (
    <div className={classes.row}>
      <button onClick={loginHandler}>{title}</button>
    </div>
  )
}
