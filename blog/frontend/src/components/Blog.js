import React, { useState } from 'react'
import blogsService from '../services/blogs'

const Blog = ({ blog, user, blogs, setBlogs }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const like = async blog => {
    try {
      const newBlog = { ...blog, likes: likes + 1 }

      const response = await blogsService.update(blog.id, newBlog)

      setLikes(response.likes)

      // trigger re-render of blogs so they are sorted correctly
      const newBlogs = [...blogs.filter(e => e.id !== blog.id), newBlog]

      setBlogs(newBlogs)
    } catch (error) {
      console.log(error)
    }
  }

  const remove = async blog => {
    if (window.confirm(`Remove ${blog.title}?`)) {
      await blogsService.remove(blog.id)

      setBlogs(blogs.filter(e => e.id !== blog.id))
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
            {likes} likes
            <button onClick={() => like(blog)}>like</button>
          </p>
          <p>Added by {blog.user.name}</p>
          {user.username === blog.user.username && (
            <button onClick={() => remove(blog)}>remove</button>
          )}
        </>
      )}
    </div>
  )
}

export default Blog
