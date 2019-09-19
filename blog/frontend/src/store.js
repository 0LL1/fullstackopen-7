import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notification from './reducers/notification'

const reducer = combineReducers({
  notification
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
