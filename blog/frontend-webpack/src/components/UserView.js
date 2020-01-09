import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { logout } from '../ducks/user'
// import PropTypes from 'prop-types'

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
      <h1>blogs</h1>
      <div>
        <span>{name} logged in</span>
        <button onClick={logout}>logout</button>
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

// MainView.propTypes = {
//   name: PropTypes.string.isRequired,
//   blogs: PropTypes.array.isRequired,
//   logout: PropTypes.func.isRequired,
//   blogFormVisible: PropTypes.bool.isRequired,
//   setBlogFormVisible: PropTypes.func.isRequired,
//   user: PropTypes.object.isRequired
// }

const mapStateToProps = ({ blogs }) => ({ blogs })

export default connect(mapStateToProps, { logout })(MainView)
