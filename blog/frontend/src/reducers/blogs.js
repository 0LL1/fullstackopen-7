import { GET_BLOGS, ADD_BLOG, REMOVE_BLOG, LIKE_BLOG } from '../constants'

export const blogsReducer = (state = [], { type, ...payload }) => {
  switch (type) {
    case GET_BLOGS:
      return payload.blogs
    case ADD_BLOG:
      return [...state, payload.newBlog]
    case REMOVE_BLOG:
      return state.filter(blog => blog.id !== payload.id)
    case LIKE_BLOG:
      return state.map(blog =>
        blog.id === payload.newBlog.id ? payload.newBlog : blog
      )
    default:
      return state
  }
}
