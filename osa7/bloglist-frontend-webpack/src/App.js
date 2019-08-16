import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import Notification from './components/Notification'
import Users from './components/Users'
import loginService from './services/login'
import blogService from './services/blogs'
import { changeNotification } from './reducers/notificationReducer'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Form, Button, Icon, Label, Menu, Divider } from 'semantic-ui-react'

const User = ({ user }) => {
  if (user === undefined) {
    return null
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ul>
        {user.blogs.map(blog =>
          <li key={blog.title}>{blog.title}</li>
        )}
      </ul>
    </div>
  )
}

const BlogView = ({ blog }) => {
  if (blog === undefined) {
    return null
  }

  return (
    <div>
      <h2>{blog.title} {blog.author}</h2>
      <a href="{blog.url}">{blog.url}</a><br />
      <Button as='div' labelpositon='right'>
        <Button icon>
          <Icon name='heart' />
          Like
        </Button>
        <Label as='a' basic pointing='left'>
          {blog.likes}
        </Label>
      </Button><br />
      added by {blog.user.name}
    </div>
  )
}

const App = ( props ) => {
  const store = props.store
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const userJSON = JSON.parse(loggedUserJSON)
      setUser(userJSON)
      blogService.setToken(userJSON.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    event.persist()
    const username = event.target.username.value
    const password = event.target.password.value
    try {
      const newUser = await loginService.login({ username, password })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(newUser))
      blogService.setToken(newUser.token)
      setUser(newUser)
      event.target.username.value = ''
      event.target.password.value = ''
      message('logged in')
    } catch (exception) {
      message('wrong credentials')
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload()
  }

  const message = ( message ) => {
    document.getElementById('notification').style.display='block'
    props.store.dispatch(changeNotification(message))
    setTimeout(() => {
      document.getElementById('notification').style.display='none'
    }, 5000)
  }

  const loginForm = () => (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Field>
          <label>username:</label>
          <input name="username" />
        </Form.Field>
        <Form.Field>
          <label>password:</label>
          <input type="password" name="password" />
        </Form.Field>
        <Button animated type="submit">
          <Button.Content visible>login</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </Form>
    </div>
  )

  const userById = (id) =>
    store.getState().users.find(user => user.id === id)

  const blogById = (id) =>
    store.getState().blogs.find(blog => blog._id === id)

  if (user === null) {
    return (
      <Container>
        <h2>Login to the application</h2>
        <Notification store={store} />
        {loginForm()}
      </Container>
    )
  }

  return (
    <Container>
      <Notification store={store} />
      <Router>
        <Menu inverted>
          <Menu.Item link>
            <Link to="/">blogs</Link>
          </Menu.Item>
          <Menu.Item link>
            <Link to="/users">users</Link>
          </Menu.Item>
        </Menu>
        <Route exact path="/" render={() => <Blogs store={store} />} />
        <Route exact path="/users" render={() => <Users store={store} /> } />
        <Route exact path="/users/:id" render={({ match }) =>
          <User user={userById(match.params.id)} />
        } />
        <Route exact path="/blogs/:id" render={({ match }) =>
          <BlogView blog={blogById(match.params.id)} />
        } />
      </Router>
      <Divider />
      <Container>
        <div> {user.name} logged in </div>
        <Button animated onClick={handleLogout}>
          <Button.Content visible>
            logout
          </Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>
      </Container>
    </Container>
  )
}

export default App