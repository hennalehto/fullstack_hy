import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ( props ) => {

  const vote = (anecdote) => () => {
    voted(anecdote.content)
    props.voteAnecdote(anecdote)
  }

  const voted = (content) => {
    document.getElementById('notification').style.display='block'
    props.setNotification(`you voted '${content}'`, 5)
  }

  return (
    <div>
      {props.anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes} 
              <button onClick={vote(anecdote)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

const mapStateProps = (state) => {
  console.log(state)
  return {
    anecdotes: state.anecdotes,
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
  initializeAnecdotes
}

export default connect(
  mapStateProps,
  mapDispatchToProps
)(AnecdoteList)
