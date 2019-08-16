import React from 'react'
import { Message } from 'semantic-ui-react'

const Notification = ( props ) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: 'none'
  }
  return (
    <Message style={style} name='notification' id='notification'>
      {props.store.getState().notification}
    </Message>
  )
}

export default Notification