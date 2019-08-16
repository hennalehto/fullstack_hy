import React, { useState } from 'react'
import Blog from '../components/Blog'
import NewBlog from '../components/NewBlog'
import { Button } from 'semantic-ui-react'

const Blogs = ({ store }) => {
  const [creationVisible, setCreationVisible] = useState(false)
  const hideWhenVisible = { display: creationVisible ? 'none' : '' }
  const showWhenVisible = { display: creationVisible ? '' : 'none' }

  return (
    <div>
      <div>
        <h2>Add a new blog</h2>
        <div style={hideWhenVisible}>
          <Button onClick={() => setCreationVisible(true)}>new blog</Button>
        </div>
        <div style={showWhenVisible}>
          <NewBlog store={store} />
          <Button secondary onClick={() => setCreationVisible(false)}>cancel</Button>
        </div>
      </div>
      <ul>
        {store.getState().blogs.map(blog =>
          <Blog
            key={blog._id}
            blog={blog}
          />
        )}
      </ul>
    </div>
  )
}

export default Blogs