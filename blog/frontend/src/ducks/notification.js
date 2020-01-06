// actions
const SHOW_NOTIFICATION = 'notification/show'
const HIDE_NOTIFICATION = 'notification/hide'

// reducer
export default function reducer(state = null, { type, message, isError }) {
  switch (type) {
    case SHOW_NOTIFICATION:
      return { message, isError }
    case HIDE_NOTIFICATION:
      return null
    default:
      return state
  }
}

// thunks
export function setNotification(message, isError = false) {
  return async dispatch => {
    dispatch({
      type: SHOW_NOTIFICATION,
      message,
      isError
    })

    setTimeout(() => {
      dispatch({ type: HIDE_NOTIFICATION })
    }, 5000)
  }
}
