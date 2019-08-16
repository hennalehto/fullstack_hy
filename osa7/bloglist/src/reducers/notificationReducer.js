import { createStore } from 'redux'

const notificationReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION' :
      return [...state, 1]
    default:
      return state
  }
}

export default notificationReducer