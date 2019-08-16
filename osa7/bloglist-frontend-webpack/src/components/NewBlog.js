import React from 'react'
import { createBlog } from '../reducers/blogReducer'
import blogService from '../services/blogs'
import { changeNotification } from '../reducers/notificationReducer'
import { Form, Button } from 'semantic-ui-react'

const NewBlog = (props) => {
  const addBlog = async (event) => {
    event.preventDefault()
    event.persist()
    const title = event.target.title.value
    const author = event.target.author.value
    const url = event.target.url.value
    try {
      props.store.dispatch(
        createBlog(title, author, url)
      )
      const blog = {
        title: title,
        author: author,
        url: url,
        likes: 0
      }
      const newBlog = await blogService.create(blog)
      event.target.title.value = ''
      event.target.author.value = ''
      event.target.url.value = ''
      message('created a blog ' + blog.title)
    } catch (exception) {
      message('error while adding a new blog')
    }
  }

  const message = ( message ) => {
    document.getElementById('notification').style.display='block'
    props.store.dispatch(changeNotification(message))
    setTimeout(() => {
      document.getElementById('notification').style.display='none'
    }, 5000)
  }
  return (
    <div>
      <Form onSubmit={addBlog}>
        <Form.Field>
          <label>title:</label>
          <input name="title" />
        </Form.Field>
        <Form.Field>
          <label>author:</label>
          <input name="author" />
        </Form.Field>
        <Form.Field>
          <label>url:</label>
          <input name="url" />
        </Form.Field>
        <Button primary type="submit">add</Button>
      </Form>
    </div>
  )
}

export default NewBlog