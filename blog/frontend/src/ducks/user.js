import loginService from '../services/user'
import blogsService from '../services/blogs'

// actions
const LOGIN = 'user/login'
const LOGOUT = 'user/logout'

// reducer
export default function reducer(
  state = JSON.parse(window.localStorage.getItem('user')) || null,
  { type, payload }
) {
  switch (type) {
    case LOGIN:
      return payload
    case LOGOUT:
      return null
    default:
      return state
  }
}

// thunks
export function login({ username, password }) {
  return async dispatch => {
    const user = await loginService.login({ username, password })
    window.localStorage.setItem('user', JSON.stringify(user))
    blogsService.setToken(user.token)
    dispatch({
      type: LOGIN,
      payload: user
    })
  }
}

export function logout() {
  window.localStorage.removeItem('user')
  return async dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}
