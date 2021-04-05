import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('user')
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/unauth',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute
