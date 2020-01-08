import React from 'react'
import { useField } from '../hooks'
import { connect } from 'react-redux'
import { addBlog } from '../ducks/blogs'
import { setNotification } from '../ducks/notification'
import blogsService from '../services/blogs'

const BlogForm = ({ setBlogFormVisible, addBlog, setNotification }) => {
  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetUrl, ...url } = useField('text')

  const handleCreate = async (event, newBlog) => {
    event.preventDefault()

    try {
      const blog = await blogsService.create(newBlog)
      addBlog(blog)
      setNotification(`'${title.value}' added`)
      setBlogFormVisible(false)
    } catch (error) {
      resetTitle()
      resetAuthor()
      resetUrl()
      const name = title.value ? `'${title.value}'` : 'blog'
      setNotification(`adding ${name} failed`, true)
      console.log(error)
    }
  }

  return (
    <div>
      <h2>create new</h2>
      <form
        onSubmit={event =>
          handleCreate(event, {
            title: title.value,
            author: author.value,
            url: url.value
          })
        }
      >
        <label>
          title
          <br />
          <input {...title} data-cy="title" />
        </label>
        <br />
        <label>
          author
          <br />
          <input {...author} data-cy="author" />
        </label>
        <br />
        <label>
          url
          <br />
          <input {...url} data-cy="url" />
        </label>
        <br />
        <button type="submit" data-cy="create">
          create
        </button>
      </form>
    </div>
  )
}

export default connect(null, { addBlog, setNotification })(BlogForm)
