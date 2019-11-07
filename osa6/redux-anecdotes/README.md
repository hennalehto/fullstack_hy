## Exercises from the course Full Stack Development (fullstackopen.com)

## 6.3
Implement the functionality for voting anecdotes. The amount of votes must be saved to a Redux-store.

## 6.4
Implement the functionality for adding new anecdotes.

## 6.5
Make sure that the anecdotes are ordered by the number of votes.

## 6.6
If you haven't done so already, separate the creation of action-objects to action creator-functions and place them in the src/reducers/anecdoteReducer.js file.

## 6.7
Separate the creation of new anecdotes into its own component called AnecdoteForm. Move all logic for creating a new anecdote into this new component.

## 6.8
Separate the rendering of the anecdote list into its own component called AnecdoteList. Move all logic related to voting for a anecdote to this new component.

Now the App component should look like this:
```
import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = (props) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm store={props.store} />
      <AnecdoteList store={props.store} />
    </div>
  )
}

export default App
```
## 6.9
The application has a ready-made body for the Notification component:
```
import React from 'react'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      render here notification...
    </div>
  )
}

export default Notification
```
Extend the component so that it renders the message stored in the redux store, making the component to take the form:
```
return (
  <div style={style}>
    {props.store.getState()...}
  </div>
)
```
You will have to make changes to the application's existing reducer. Create a separate reducer for the new functionality and refactor the application so that it uses a combined reducer as shown in this part of the course material.

The application does not have to use the Notification component in any intelligent way at this point in the exercises. It is enough for the application to display the initial value set for the message in the notificationReducer.

## 6.10
Extend the application so that it uses the Notification component to display a message for the duration of five seconds when the user votes for an anecdote or creates a new anecdote.
## 6.12
The redux store is currently passed to all of the components through props.

Add the react-redux package to your application, and modify the AnecdoteList so that it accesses the store's state with the help of the connect function.

Voting for and creating new anecdotes does not need to work after this exercise.

## 6.13
Do the same for the Filter and AnecdoteForm components.

## 6.14
Change the AnecdoteList component so that the voting for anecdotes works again, and also refactor the Notification component to use connect.

Remove the redundant passing of the store's state via props by simplifying the App component into the following form:
```
const App = () => {
  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}
```
## 6.16
When the application launches, fetch the anecdotes from the backend implemented using json-server.

## 6.17
Modify the creation of new anecdotes, such that the anecdotes are stored in the backend.

## 6.18
Modify the initialization of redux-store to happen using asynchronous action creators, which are made possible by the redux-thunk-library.

## 6.19
Also modify the creation of a new anecdote to happen using asynchronous action creators, made possible by the redux-thunk-library.

## 6.20
Voting does not yet save changes to the backend. Fix the situation with the help of the redux-thunk-library.

## 6.21
The creation of notifications is still a bit tedious, since one has to do two actions and use the setTimeout function:
```
props.setNotification(`you voted '${anecdote.content}'`)
setTimeout(() => {
  props.clearNotification()
}, 5000)
```
Make an asynchronous action creator, which enables one to provide the notification as follows:
```
props.setNotification(`you voted '${anecdote.content}'`, 10)

the first parameter is the text to be rendered and the second parameter is the time to display the notification given in seconds.

Implement the use of this improved notification in your application.
