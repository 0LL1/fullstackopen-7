import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import UserView from './components/UserView'
import Notification from './components/Notification'
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
    <>
      {user ? (
        <UserView
          blogFormVisible={blogFormVisible}
          setBlogFormVisible={setBlogFormVisible}
        />
      ) : (
        <LoginForm />
      )}
      <Notification />
    </>
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { getBlogs })(App)
