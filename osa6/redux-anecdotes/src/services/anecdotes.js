import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteAnecdote = async anecdote => {
  const id = anecdote.id
  const newVotes = anecdote.votes +1
  const changedAnecdote = { ...anecdote, votes: newVotes }
  const response = await axios.put(`${baseUrl}/${id}`, changedAnecdote)
  return response.data
}

export default { getAll, createNew, voteAnecdote }