import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('by default, renders only title and author', () => {
  const blog = {
    title: 'Test title',
    author: 'Test author',
    url: 'https://www.google.com/',
    likes: 4
  }

  const component = render(<Blog blog={blog} />)

  component.getByText('Test title by Test author')

  expect(component.container).not.toHaveTextContent('https://www.google.com/')
  expect(component.container).not.toHaveTextContent('4 likes')
})

test('renders details after clicking the title once', () => {
  const user = {
    name: 'Teemu Testaaja'
  }

  const blog = {
    title: 'Test title',
    author: 'Test author',
    url: 'https://www.google.com/',
    likes: 4,
    user: user
  }

  const component = render(<Blog blog={blog} user={user} />)

  const clickableText = component.getByText('Test title by Test author')

  fireEvent.click(clickableText)

  component.getByText('Test title by Test author')
  component.getByText('https://www.google.com/')
  component.getByText('4 likes')
  component.getByText('Added by Teemu Testaaja')
})
