import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import loginService from '../services/login'
import blogsService from '../services/blogs'
import { useField } from '../hooks'
import { login } from '../actions/user'
import { setNotification } from '../actions/notification'

const LoginForm = ({ login }) => {
  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      })

      window.localStorage.setItem('user', JSON.stringify(user))

      blogsService.setToken(user.token)

      login(user)
    } catch (error) {
      setNotification(error.response.data.error, true)
      resetUsername()
      resetPassword()
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

// LoginForm.propTypes = {
//   handleLogin: PropTypes.func.isRequired,
//   username: PropTypes.object.isRequired,
//   password: PropTypes.object.isRequired
// }

export default connect(null, { login })(LoginForm)
