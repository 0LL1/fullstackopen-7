import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { logout } from '../actions/user'
// import PropTypes from 'prop-types'

const UserView = ({
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

  const handleLogout = () => {
    logout()
    window.localStorage.removeItem('user')
  }

  return (
    <>
      <h1>blogs</h1>
      <div>
        <span>{name} logged in</span>
        <button onClick={handleLogout}>logout</button>
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

// UserView.propTypes = {
//   name: PropTypes.string.isRequired,
//   blogs: PropTypes.array.isRequired,
//   logout: PropTypes.func.isRequired,
//   blogFormVisible: PropTypes.bool.isRequired,
//   setBlogFormVisible: PropTypes.func.isRequired,
//   user: PropTypes.object.isRequired
// }

const mapStateToProps = ({ blogs }) => ({ blogs })

export default connect(mapStateToProps, { logout })(UserView)
