import React from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import PropTypes from 'prop-types'

const UserView = ({
  name,
  blogs,
  logout,
  handleCreate,
  title,
  author,
  url,
  setTitle,
  setAuthor,
  setUrl,
  blogFormVisible,
  setBlogFormVisible,
  user,
  setBlogs
}) => {
  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)

  const blogList = sortedBlogs.map(blog => (
    <Blog
      key={blog.id}
      blog={blog}
      user={user}
      blogs={blogs}
      setBlogs={setBlogs}
    />
  ))

  const toggleVisibility = () => {
    setBlogFormVisible(!blogFormVisible)
  }

  return (
    <>
      <h1>blogs</h1>
      <div>
        <span>{name} logged in</span>
        <button onClick={logout}>logout</button>
      </div>
      <br />
      {blogFormVisible ? (
        <div>
          <BlogForm
            handleCreate={handleCreate}
            title={title}
            author={author}
            url={url}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setUrl={setUrl}
          />
          <button onClick={toggleVisibility}>cancel</button>
        </div>
      ) : (
        <div>
          <button onClick={toggleVisibility}>new blog</button>
        </div>
      )}
      <br />
      {blogList}
    </>
  )
}

UserView.propTypes = {
  name: PropTypes.string.isRequired,
  blogs: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setAuthor: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired,
  blogFormVisible: PropTypes.bool.isRequired,
  setBlogFormVisible: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default UserView
