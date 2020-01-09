import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Blog from './Blog'
import BlogForm from './BlogForm'
import Notification from './Notification'
import { logout } from '../ducks/user'

const MainView = ({
  name,
  blogs,
  logout,
  blogFormVisible,
  setBlogFormVisible
}) => {
  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)

  const blogList = sortedBlogs.map(blog => <Blog key={blog.id} blog={blog} />)

  const toggleVisibility = () => {
    setBlogFormVisible(!blogFormVisible)
  }

  return (
    <>
      <Notification />
      <h1>blogs</h1>
      <div className="users">
        <div>
          <span>{name} logged in</span>
          <button onClick={logout}>logout</button>
        </div>
        <Link to="/users" className="right-link">
          users
        </Link>
      </div>
      <br />
      {blogFormVisible ? (
        <div>
          <BlogForm setBlogFormVisible={setBlogFormVisible} />
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

const mapStateToProps = ({ blogs }) => ({ blogs })

export default connect(mapStateToProps, { logout })(MainView)
