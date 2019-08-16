import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const votes = action.data.votes
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: votes
      }
      const newState = state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
      return newState.slice().sort((a, b) => {
        return b.votes - a.votes
      })
      default:
        return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.voteAnecdote(anecdote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

export default anecdoteReducer 