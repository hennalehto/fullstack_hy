import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Tester',
    likes: 2
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  const div = component.container.querySelector('.blog')
  expect(div).toHaveTextContent(
    'Component testing is done with react-testing-library Tester'
  )

  const div2 = component.container.querySelector('.likes')
  expect(div2).toHaveTextContent(
    'blog has 2 likes'
  )
})

test('clicking the button twice calls event hadler twice', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Tester',
    likes: 2
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})


