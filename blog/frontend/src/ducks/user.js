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

// action creators
export function login(user) {
  return { type: LOGIN, payload: user }
}

// thunks
export function logout() {
  window.localStorage.removeItem('user')
  return async dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}
