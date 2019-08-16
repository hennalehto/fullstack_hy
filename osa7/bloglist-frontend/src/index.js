import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import blogReducer, { initializeBlogs } from './reducers/blogReducer'
import notificationReducer from './reducers/notificationReducer'
import { changeNotification } from './reducers/notificationReducer'
import userReducer, { initializeUsers } from './reducers/userReducer'
import blogService from './services/blogs'
import loginService from './services/login'

const reducer = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
  users: userReducer
})

const store = createStore(reducer)

blogService.getAll().then(blogs =>
  store.dispatch(initializeBlogs(blogs))
)

loginService.getAll().then(users =>
  store.dispatch(initializeUsers(users))
)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(changeNotification('txt'))

const renderApp = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)