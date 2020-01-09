import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './ducks/notification'
import blogsReducer from './ducks/blogs'
import userReducer from './ducks/user'
import usersReducer from './ducks/users'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  user: userReducer,
  users: usersReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
