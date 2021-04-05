import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Unauthorized from './containers/403/Unauthorisez'
import { Login } from './containers/Auth/Login'
import { Home } from './containers/Home/Home'
import ProtectedRoute from './containers/ProtectedRoute'

function App(props: any) {
  return (
    <div className="App-header">
      <Router>
        <Switch>
          <ProtectedRoute exact path="/home" component={Home} />
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/unauth" component={Unauthorized}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
