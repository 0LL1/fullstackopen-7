import { SET_NOTIFICATION, HIDE_NOTIFICATION } from '../constants'

const notification = (state = null, { type, message, isError }) => {
  switch (type) {
  case SET_NOTIFICATION:
    return { message, isError }
  case HIDE_NOTIFICATION:
    return null
  default:
    return state
  }
}

export default notification
