import { GET_BLOGS, ADD_BLOG, REMOVE_BLOG } from '../constants'
import blogsService from '../services/blogs'

export const getBlogs = () => {
  return async dispatch => {
    const blogs = await blogsService.getAll()
    dispatch({
      type: GET_BLOGS,
      blogs
    })
  }
}

export const addBlog = newBlog => {
  return async dispatch => {
    dispatch({
      type: ADD_BLOG,
      newBlog
    })
  }
}

export const removeBlog = id => {
  return async dispatch => {
    dispatch({
      type: REMOVE_BLOG,
      id
    })
  }
}
