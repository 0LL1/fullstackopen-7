import usersService from '../services/users'

// actions
const GET_USERS = 'users/get'

// reducer
export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case GET_USERS:
      return payload
    default:
      return state
  }
}

// thunks
export function getUsers() {
  return async dispatch => {
    const users = await usersService.getUsers()
    dispatch({
      type: GET_USERS,
      payload: users
    })
  }
}
