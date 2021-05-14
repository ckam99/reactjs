import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Route } from './router/base'
import About from './views/About'
import NotFound from './views/errors/404'
import Home from './views/Home'
import Login from './views/Login'
import UserDetail from './views/users/UserDetail'
import UserList from './views/users/UserList'
import Users from './views/users/Users'
// import Router from './router'

function App() {

  return <RecoilRoot>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={UserList} authRequired />
        <Route path="/users/:id" exact component={UserDetail} authRequired />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </RecoilRoot>
}

export default App
