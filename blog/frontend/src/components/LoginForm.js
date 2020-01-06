import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { login } from '../ducks/user'
import { setNotification } from '../ducks/notification'

const LoginForm = ({ login }) => {
  const { reset: resetUsername, ...username } = useField('text')
  const { reset: resetPassword, ...password } = useField('password')

  const handleLogin = async event => {
    event.preventDefault()

    try {
      login({ username: username.value, password: password.value })
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

export default connect(null, { login })(LoginForm)
