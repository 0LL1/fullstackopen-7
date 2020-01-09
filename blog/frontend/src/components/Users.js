import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Users = ({ users }) => {
  const userRows = users.map(user => {
    return (
      <tr key={user.username}>
        <td>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </td>
        <td>{user.blogs.length}</td>
      </tr>
    )
  })

  return (
    <>
      <h2>users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>user</th>
            <th>blog count</th>
          </tr>
        </thead>
        <tbody>{userRows}</tbody>
      </table>
    </>
  )
}

const mapStateToProps = ({ users }) => ({ users })

export default connect(mapStateToProps, null)(Users)
