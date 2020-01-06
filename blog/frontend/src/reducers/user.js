import { LOGIN, LOGOUT } from '../constants'

export const userReducer = (
  state = JSON.parse(window.localStorage.getItem('user')),
  { type, ...payload }
) => {
  switch (type) {
    case LOGIN:
      return payload
    case LOGOUT:
      return null
    default:
      return state
  }
}
