import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({
  handleSubmit,
  handleNameChange,
  handleAuthorChange,
  handleUrlChange,
  newName,
  newAuthor,
  newUrl
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Author:
          <input
            value={newAuthor}
            onChange={handleAuthorChange}
          />
        </div>
        <div>
          Url:
          <input
            value={newUrl}
            onChange={handleUrlChange}
          />
        </div>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleAuthorChange: PropTypes.func.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
  newName: PropTypes.func.isRequired,
  newAuthor: PropTypes.func.isRequired,
  newUrl: PropTypes.func.isRequired
}

export default BlogForm