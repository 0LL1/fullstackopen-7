import React, { useState } from 'react'
import { connect } from 'react-redux'
import blogsService from '../services/blogs'
import { removeBlog } from '../actions/blogs'
import { setNotification } from '../actions/notification'

const Blog = ({ blog, user, removeBlog }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  // const like = async blog => {
  //   try {
  //     const newBlog = { ...blog, likes: likes + 1 }

  //     const response = await blogsService.update(blog.id, newBlog)

  //     setLikes(response.likes)

  //     // trigger re-render of blogs so they are sorted correctly
  //     const newBlogs = [...blogs.filter(e => e.id !== blog.id), newBlog]

  //     setBlogs(newBlogs)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleRemove = async blog => {
    if (window.confirm(`Remove ${blog.title}?`)) {
      await blogsService.remove(blog.id)

      setNotification(`'${blog.title}' removed`)
      removeBlog(blog.id)
    }
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
            {blog.likes} likes
            {/* <button onClick={() => like(blog)}>like</button> */}
          </p>
          <p>Added by {blog.user.name}</p>
          {user.username === blog.user.username && (
            <button onClick={() => handleRemove(blog)}>remove</button>
          )}
        </>
      )}
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { removeBlog })(Blog)
