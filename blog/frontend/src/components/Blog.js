import React, { useState } from 'react'
import { connect } from 'react-redux'
import { removeBlog, likeBlog } from '../ducks/blogs'
import { setNotification } from '../ducks/notification'

const Blog = ({ blog, user, removeBlog, likeBlog, setNotification }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const handleRemove = async () => {
    if (window.confirm(`Remove ${blog.title}?`)) {
      removeBlog(blog.id)
      setNotification(`'${blog.title}' removed`)
    }
  }

  const handleLike = async () => {
    const newBlog = { ...blog, likes: blog.likes + 1 }
    likeBlog(newBlog)
  }

  return (
    <div className="blog">
      <p onClick={toggleDetails} className="title">
        {blog.title} by {blog.author}
      </p>
      {showDetails && (
        <>
          <br />
          <a href={blog.url}>{blog.url}</a>
          <p>
            {blog.likes} {blog.likes === 1 ? 'like' : 'likes'}
            <button onClick={handleLike} data-cy="like">
              like
            </button>
          </p>
          <p>Added by {blog.user.name}</p>
          {user.username === blog.user.username && (
            <button onClick={handleRemove} data-cy="remove">
              remove
            </button>
          )}
        </>
      )}
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, {
  removeBlog,
  likeBlog,
  setNotification
})(Blog)
