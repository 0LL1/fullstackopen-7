import React from 'react'
import { Link } from 'react-router-dom'

const AnecdoteList = ({ anecdotes }) => {
  const style = {
    textDecoration: 'none',
    color: '#000'
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => (
          <li key={anecdote.id}>
            <Link style={style} to={`/anecdotes/${anecdote.id}`}>
              {anecdote.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnecdoteList
