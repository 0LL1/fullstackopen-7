import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { login } from '../ducks/user'
import { setNotification } from '../ducks/notification'
import loginService from '../services/user'
import blogsService from '../services/blogs'

const LoginForm = ({ login, setNotification }) => {
  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })
      login(user)
      window.localStorage.setItem('user', JSON.stringify(user))
      blogsService.setToken(user.token)
    } catch (error) {
      resetUsername()
      resetPassword()
      setNotification(error.response.data.error, true)
      console.log(error)
    }
  }

  return (
    <>
      <h1>log in to application</h1>
      <form onSubmit={handleLogin}>
        <label>
          username
          <br />
          <input {...username} />
        </label>
        <br />
        <label>
          password
          <br />
          <input {...password} />
        </label>
        <br />
        <button type="submit">login</button>
      </form>
    </>
  )
}

export default connect(null, { login, setNotification })(LoginForm)
