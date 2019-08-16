import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import { useField } from './hooks'

const LoggedIn = ( { user } ) => {
  return (
    <p>
      {user.name} logged in
    </p>
  )
}

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)
  const [newName, setNewName] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [creationVisible, setCreationVisible] = useState(false)
  const name = useField('text')
  const psw = useField('password')
  const username = name.value
  const password = psw.value

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
    }
    catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload()
  }

  const loginForm = () => {
    return (
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type={name.type}
            value={name.value}
            onChange={name.onChange}
          />
        </div>
        <div>
          password
          <input
            type={psw.type}
            value={psw.value}
            onChange={psw.onChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
    )
  }

  const rows = () => (
    blogs.map(blog =>
      <Blog
        key={blog._id}
        blog={blog}
      />
    )
  )

  const blogForm = () => {
    const hideWhenVisible = { display: creationVisible ? 'none' : '' }
    const showWhenVisible = { display: creationVisible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setCreationVisible(true)}>new blog</button>
        </div>
        <div style={showWhenVisible}>
          <BlogForm
            name={newName}
            author={newAuthor}
            url={newUrl}
            handleNameChange={({ target }) => setNewName(target.value)}
            handleAuthorChange={({ target }) => setNewAuthor(target.value)}
            handleUrlChange={({ target }) => setNewUrl(target.value)}
            handleSubmit={addBlog}
          />
          <button onClick={() => setCreationVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newName,
      author: newAuthor,
      url: newUrl,
    }

    blogService
      .create(blogObject)
      .then(data => {
        setBlogs(blogs.concat(data))
      })
  }

  if (user === null) {
    return (
      <div>
        <h2>Log in to the application</h2>
        {loginForm()}
      </div>
    )
  }
  return (
    <div>
      <h2>Blogs</h2>
      <div>
        <LoggedIn user={user} />
        <button onClick={handleLogout}>logout</button>
      </div>
      <div>
        <h2>Create new</h2>
        {blogForm()}
        {rows()}
      </div>


    </div>
  )
}

export default App