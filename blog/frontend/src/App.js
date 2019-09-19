import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import UserView from './components/UserView'
import Notification from './components/Notification'
import loginService from './services/login'
import blogsService from './services/blogs'
import { useField } from './hooks'
import { setNotification } from './actions/notification'

const App = ({ setNotification }) => {
  // better solution than in the example IMO
  const initialUser = () => {
    return window.localStorage.getItem('loggedUser')
      ? JSON.parse(window.localStorage.getItem('loggedUser'))
      : null
  }

  const [user, setUser] = useState(initialUser)
  const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [blogFormVisible, setBlogFormVisible] = useState(false)

  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')

  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await blogsService.getAll()

      setBlogs(blogs)
    }
    getBlogs()
  }, [])

  useEffect(() => {
    user && blogsService.setToken(user.token)
  }, [user])

  useEffect(() => {
    if (blogs.length > 1) {
      setBlogs(blogs.sort((a, b) => b.likes - a.likes))
    }
  }, [blogs])

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })

      window.localStorage.setItem('loggedUser', JSON.stringify(user))

      blogsService.setToken(user.token)

      setUser(user)
      resetUsername()
      resetPassword()
    } catch (error) {
      setNotification(error.response.data.error, true)
      resetUsername()
      resetPassword()
    }
  }

  const logout = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  const handleCreate = async (event, newBlog) => {
    event.preventDefault()

    try {
      const response = await blogsService.create(newBlog)
      setBlogs(blogs.concat(response))
      setNotification(`'${title}' added`)
      setTitle('')
      setAuthor('')
      setUrl('')
      setBlogFormVisible(false)
    } catch (error) {
      setNotification(`adding '${title}' failed`, true)
      console.log(error)
    }
  }

  return (
    <>
      {user ? (
        <UserView
          name={user.name}
          blogs={blogs}
          logout={logout}
          handleCreate={handleCreate}
          title={title}
          author={author}
          url={url}
          setTitle={setTitle}
          setAuthor={setAuthor}
          setUrl={setUrl}
          blogFormVisible={blogFormVisible}
          setBlogFormVisible={setBlogFormVisible}
          user={user}
          setBlogs={setBlogs}
        />
      ) : (
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          password={password}
        />
      )}
      <Notification />
    </>
  )
}

export default connect(
  null,
  { setNotification }
)(App)
