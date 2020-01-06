import React from 'react'
import { useField } from '../hooks'
import { connect } from 'react-redux'
import { addBlog } from '../ducks/blogs'
import { setNotification } from '../ducks/notification'

const BlogForm = ({ setBlogFormVisible, addBlog, setNotification }) => {
  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetUrl, ...url } = useField('text')

  const handleCreate = async (event, newBlog) => {
    event.preventDefault()

    try {
      addBlog(newBlog)
      setNotification(`'${title.value}' added`)
      resetTitle()
      resetAuthor()
      resetUrl()
      setBlogFormVisible(false)
    } catch (error) {
      setNotification(`adding '${title}' failed`, true)
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
          <input {...title} />
        </label>
        <br />
        <label>
          author
          <br />
          <input {...author} />
        </label>
        <br />
        <label>
          url
          <br />
          <input {...url} />
        </label>
        <br />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default connect(null, { addBlog, setNotification })(BlogForm)
