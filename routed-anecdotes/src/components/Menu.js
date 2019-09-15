import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import Routes from '../Routes'

const Menu = ({ anecdotes, addNew, anecdoteById, vote, setNotification }) => {
  const style = {
    padding: '1rem',
    textDecoration: 'none',
    color: '#000',
    textTransform: 'uppercase',
    fontSize: '1.2rem'
  }

  const selected = {
    backgroundColor: '#ddd'
  }

  return (
    <BrowserRouter>
      <NavLink style={style} activeStyle={selected} exact to='/'>
        anecdotes
      </NavLink>
      <NavLink style={style} activeStyle={selected} exact to='/create'>
        create new
      </NavLink>
      <NavLink style={style} activeStyle={selected} exact to='/about'>
        about
      </NavLink>
      <Routes
        anecdotes={anecdotes}
        addNew={addNew}
        anecdoteById={anecdoteById}
        vote={vote}
        setNotification={setNotification}
      />
    </BrowserRouter>
  )
}

export default Menu
