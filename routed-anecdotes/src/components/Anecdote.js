import React from 'react'

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h3>{anecdote.content}</h3>
      <p>by {anecdote.author}</p>
      <p>
        Info: <a href={anecdote.info}>{anecdote.info}</a>
      </p>
      <p>Votes: {anecdote.votes}</p>
    </div>
  )
}

export default Anecdote
