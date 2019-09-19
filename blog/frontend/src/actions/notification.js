import {
  SET_NOTIFICATION,
  HIDE_NOTIFICATION,
  NOTIFICATION_TIME
} from '../constants'

export const setNotification = (message, isError = false) => {
  return async dispatch => {
    dispatch({
      type: SET_NOTIFICATION,
      message,
      isError
    })

    setTimeout(() => {
      dispatch({ type: HIDE_NOTIFICATION })
    }, NOTIFICATION_TIME)
  }
}
