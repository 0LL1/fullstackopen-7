import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import BlogForm from './BlogForm'
import { logout } from '../ducks/user'

const MainView = ({ blogs, blogFormVisible, setBlogFormVisible }) => {
  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)

  const blogList = sortedBlogs.map(blog => <Blog key={blog.id} blog={blog} />)

  const toggleVisibility = () => {
    setBlogFormVisible(!blogFormVisible)
  }

  return (
    <>
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

const mapStateToProps = ({ user, blogs }) => ({ user, blogs })

export default connect(mapStateToProps, { logout })(MainView)
