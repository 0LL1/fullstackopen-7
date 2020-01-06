import blogsService from '../services/blogs'

// actions
const GET_BLOGS = 'blogs/get'
const ADD_BLOG = 'blogs/add'
const REMOVE_BLOG = 'blogs/remove'
const LIKE_BLOG = 'blogs/like'

// reducer
export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case GET_BLOGS:
      return payload
    case ADD_BLOG:
      return [...state, payload]
    case REMOVE_BLOG:
      return state.filter(blog => blog.id !== payload)
    case LIKE_BLOG:
      return state.map(blog => (blog.id === payload.id ? payload : blog))
    default:
      return state
  }
}

// thunks
export function getBlogs() {
  return async dispatch => {
    const blogs = await blogsService.getAll()
    dispatch({
      type: GET_BLOGS,
      payload: blogs
    })
  }
}

export function addBlog(newBlog) {
  return async dispatch => {
    const blog = await blogsService.create(newBlog)
    dispatch({
      type: ADD_BLOG,
      payload: blog
    })
  }
}

export function removeBlog(id) {
  return async dispatch => {
    await blogsService.remove(id)
    dispatch({
      type: REMOVE_BLOG,
      payload: id
    })
  }
}

export function likeBlog(newBlog) {
  return async dispatch => {
    await blogsService.update(newBlog.id, newBlog)
    dispatch({
      type: LIKE_BLOG,
      payload: newBlog
    })
  }
}
