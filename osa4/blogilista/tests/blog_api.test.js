const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')
/*
test('there are blogs', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body.length).toBe(helper.initialBlogs.length)
})

test('blogs can be added', async () => {
  const newBlog = {
  	title: "Test blog",
  	author: "Test Guru",
  	url: "testguru.blog.com",
    likes: 2
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')

  expect(response.body.length).toBe(helper.initialBlogs.length +1)

})

jest.setTimeout(20000)
test('blogs can be deleted', async () => {
	const blogsAtStart = await helper.blogsInDb()
	const blogToDelete = blogsAtStart[3]
	console.log('blogToDelete._id ' + blogToDelete._id)
	await api
	  .delete(`/api/blogs/${blogToDelete._id}`)
	  .expect(204)

	const blogsAtEnd = await helper.blogsInDb()

	expect(blogsAtEnd.length).toBe(helper.initialBlogs.length - 1)

	const contents = blogsAtEnd.map(r => r.content)
	expect(contents).not.toContain(blogToDelete.content)
})
*/

describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const user = new User({ username: 'root', password: 'sekret'})
    await user.save()
  })

  test('creation succeeds with a new username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'aku313',
      name: 'Aku Ankka',
      password: 'salasana'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect('Content-Type', /application\/json/)
   
    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })
})

afterAll(() => {
  mongoose.connection.close()
})