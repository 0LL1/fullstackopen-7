import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const User = ({ users }) => {
  const { id } = useParams()
  const user = users.find(user => user.id === id)
  const blogList = user?.blogs.map(blog => <li key={blog.id}>{blog.title}</li>)

  return (
    <>
      <h2>{user?.name}</h2>
      <ul>{blogList?.length ? blogList : 'no blogs added'}</ul>
    </>
  )
}

const mapStateToProps = ({ users }) => ({ users })

export default connect(mapStateToProps, null)(User)
