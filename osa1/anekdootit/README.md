## Exercises from the course Full Stack Development (fullstackopen.com)

## 1.12
Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering:
```
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {props.anecdotes[selected]}
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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
```

Your finished application could look something like this:

![alt text](https://fullstackopen.com/static/8577fa00fc4d946e2322de9b2707c89c/14be6/18a.png)

## 1.13
Expand your application so that you can vote for the displayed anecdote.

## 1.14
Now implement the final version of the application that displays the anecdote with the largest number of votes:

![alt text](https://fullstackopen.com/static/3e8638efbbbbcabac7bb79466ab3a5f6/14be6/20a.png)
