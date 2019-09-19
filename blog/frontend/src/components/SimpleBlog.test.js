import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('renders title, author, and likes', () => {
  const blog = {
    title: 'Test title',
    author: 'Test author',
    likes: 4
  }

  const component = render(<SimpleBlog blog={blog} />)

  component.getByText('Test title Test author')
  component.getByText('blog has 4 likes')
})

test('clicking the like button twice calls the event handler twice', () => {
  const blog = {
    title: 'Test title2',
    author: 'Test author2',
    likes: 44
  }

  const mockHandler = jest.fn()

  const component = render(<SimpleBlog blog={blog} onClick={mockHandler} />)

  const button = component.getByText('like')

  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})
