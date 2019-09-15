import React from 'react'

const Notification = ({ notification, setNotification }) => {
  setTimeout(() => {
    setNotification('')
  }, 10000)

  const style = {
    padding: '1rem',
    backgroundColor: '#aaa'
  }

  return <p style={style}>{notification}</p>
}

export default Notification
