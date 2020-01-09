import React from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../ducks/user'

const Header = ({ user, logout }) => {
  const { pathname } = useLocation()

  return (
    <div>
      <h1>blogs</h1>
      <div className="users">
        <div>
          <span>{user?.name} logged in</span>
          <button onClick={logout}>logout</button>
        </div>
        {pathname === '/' ? (
          <Link to="/users" className="right-link">
            users
          </Link>
        ) : (
          <Link to="/" className="right-link">
            home
          </Link>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { logout })(Header)
