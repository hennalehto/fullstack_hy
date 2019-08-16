import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({ blog }) => {
  return (
    <li key={blog._id}>
      <Link to={`/blogs/${blog._id}`}>{blog.title} {blog.author}</Link>
    </li>
  )
}

export default Blog