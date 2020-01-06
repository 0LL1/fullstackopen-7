import { LOGIN, LOGOUT } from '../constants'

export const login = user => {
  return async dispatch => {
    dispatch({
      type: LOGIN,
      user
    })
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}
