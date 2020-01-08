import React from 'react'
import { connect } from 'react-redux'
import { SUCCESS, ERROR } from '../constants'

const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }

  return (
    <h3 className={notification.isError ? ERROR : SUCCESS}>
      {notification.message}
    </h3>
  )
}

const mapStateToProps = ({ notification }) => ({ notification })

export default connect(mapStateToProps)(Notification)
