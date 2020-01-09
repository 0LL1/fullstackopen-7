import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../ducks/users'

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers()
  }, [getUsers])

  const userRows = users.map(user => {
    return (
      <tr key={user.username}>
        <td>{user.name}</td>
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

export default connect(mapStateToProps, { getUsers })(Users)
