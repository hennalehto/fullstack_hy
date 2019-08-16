const notificationReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message
    default:
      return state
  }
}

export const setNotification = (message, seconds) => {
  return async dispatch => {
    const time = seconds * 1000
    setTimeout(() => {
      document.getElementById('notification').style.display='none';
    }, time)
    dispatch({
      type: 'SET_MESSAGE',
      message
    })
  }
}

export default notificationReducer