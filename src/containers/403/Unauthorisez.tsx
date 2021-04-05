import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import './Unauth.css'

const Unauthorized = () => {
  return (
    <div className="uncontainer">
      <div className="center">
        <h1>403 - You Shall Not Pass</h1>
        <p>
          Uh oh, Protected route is blocking the way!
          <br />
          Maybe you have a typo in the url? Or you meant to go to a different location?
        </p>
      </div>
      <p className="back">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button title={'Back To Home'} />
        </Link>
      </p>
    </div>
  )
}

export default Unauthorized
