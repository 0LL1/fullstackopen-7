import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Notification from './components/Notification'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import MainView from './components/MainView'
import Users from './components/Users'
import User from './components/User'
import blogsService from './services/blogs'
import { getBlogs } from './ducks/blogs'
import { getUsers } from './ducks/users'

const App = ({ user, getBlogs, getUsers }) => {
  const [blogFormVisible, setBlogFormVisible] = useState(false)

  useEffect(() => {
    getBlogs()
  }, [getBlogs])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  useEffect(() => {
    user && blogsService.setToken(user.token)
  }, [user])

  return (
    <BrowserRouter>
      <Notification />
      {user ? <Header /> : <LoginForm />}
      <Switch>
        {!user && <Redirect to="/login" />}
        <Route exact path="/">
          <MainView
            blogFormVisible={blogFormVisible}
            setBlogFormVisible={setBlogFormVisible}
          />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/users/:id">
          <User />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { getBlogs, getUsers })(App)
