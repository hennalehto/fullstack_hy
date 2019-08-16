import React from 'react'
import { connect } from 'react-redux'

const Notification = ( props ) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: 'none'
  }

  return (
    <div style={style} name='message' id='notification'>
      {props.message}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const ConnectedNotifications = connect(mapStateToProps)(Notification)

export default ConnectedNotifications