import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { notificationReducer } from './reducers/notification'
import { blogsReducer } from './reducers/blogs'
import userReducer from './ducks/user'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  user: userReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
