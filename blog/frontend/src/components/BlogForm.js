import React from 'react'
import { useField } from '../hooks'
import { connect } from 'react-redux'
import { addBlog } from '../actions/blogs'
import { setNotification } from '../ducks/notification'
import blogsService from '../services/blogs'

const BlogForm = ({ setBlogFormVisible, user, addBlog, setNotification }) => {
  const { reset: resetTitle, ...title } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetUrl, ...url } = useField('text')

  const handleCreate = async (event, newBlog) => {
    event.preventDefault()

    try {
      const response = await blogsService.create(newBlog)
      addBlog({
        ...response,
        user: { id: response.user.id, username: user.username, name: user.name }
      })
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

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { addBlog, setNotification })(BlogForm)
