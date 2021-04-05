import React from 'react'
import classes from '../../containers/Auth/Login.module.css'

interface Props {
  description: string
  type: string
  placeholder: string
  name: string
  value: string
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({
  description,
  type,
  placeholder = '',
  inputHandler,
  name,
  value,
}) => {
  return (
    <div className={classes.row}>
      <label>{description}</label>
      <input
        onChange={(event) => inputHandler(event)}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </div>
  )
}
