const blogReducer = (state = [], action) => {
  switch (action.type) {
  case 'NEW_BLOG':
    return [...state, action.data]
  case 'INIT_BLOGS':
    return action.data
  default:
    return state
  }
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const createBlog = (title, author, url) => {
  return {
    type: 'NEW_BLOG',
    data: {
      id: generateId(),
      title,
      author,
      url,
      likes: 0
    }
  }
}

export const initializeBlogs = (blogs) => {
  return {
    type: 'INIT_BLOGS',
    data: blogs
  }
}

export default blogReducer