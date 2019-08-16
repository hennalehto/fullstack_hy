import React from 'react'

const Noficiation = ( {store} ) => {
  const style = {
    border: 'solid',
    display: 'none'
  }

  return (
    <div style={style} name='notification' id='notification'>
      {store.message}
    </div>
  )
}

export default Noficiation