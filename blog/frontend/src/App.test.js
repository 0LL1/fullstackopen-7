import React from 'react'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(<App />)
    component.rerender(<App />)

    await waitForElement(() => component.getByText('login'))

    const blogs = component.container.querySelectorAll('.blog')

    expect(blogs.length).toBe(0)
  })

  test('renders blogs when user is logged', async () => {
    const user = {
      username: 'testaaja',
      name: 'Teemu Testaaja',
      token: '122333444455555'
    }

    localStorage.setItem('loggedUser', JSON.stringify(user))

    const component = render(<App />)
    component.rerender(<App />)

    await waitForElement(() => component.container.querySelectorAll('.blog'))

    const blogs = component.container.querySelectorAll('.blog')

    expect(blogs.length).toBe(2)
  })
})
