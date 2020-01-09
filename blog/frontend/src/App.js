import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import MainView from './components/MainView'
import Users from './components/Users'
import User from './components/User'
import blogsService from './services/blogs'
import { getBlogs } from './ducks/blogs'

const App = ({ user, getBlogs }) => {
  const [blogFormVisible, setBlogFormVisible] = useState(false)

  useEffect(() => {
    getBlogs()
  }, [getBlogs])

  useEffect(() => {
    user && blogsService.setToken(user.token)
  }, [user])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {user ? (
            <MainView
              blogFormVisible={blogFormVisible}
              setBlogFormVisible={setBlogFormVisible}
            />
          ) : (
            <Redirect to="/login" />
          )}
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

export default connect(mapStateToProps, { getBlogs })(App)
