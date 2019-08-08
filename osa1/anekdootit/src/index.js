import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const copy = [...points]
  const [mostVoted, setMostVoted] = useState(2)

  const handleClick = () => {
  	let i = Math.floor(Math.random() * 6)
  	setSelected(i)
  }

  const vote = ({selected}) => () => {
  	copy[selected] += 1
  	setVotes(copy)
  	mostVotes()
  }

  const mostVotes = () => {
  	const j = copy.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
  	setMostVoted(j)
  }

  return (
    <div>
    	<h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}<br />
      has {votes[selected]} votes<br />
      <button onClick={vote({selected})}>
      	vote
      </button>
      <button onClick={handleClick}>
      	next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[mostVoted]}<br />
      has {copy[mostVoted]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = [1, 4, 5, 3, 2, 5]

ReactDOM.render(
  <App anecdotes={anecdotes} points={points} />,
  document.getElementById('root')
)