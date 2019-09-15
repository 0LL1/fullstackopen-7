import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import CreateNew from './components/CreateNew'
import About from './components/About'

const Routes = ({ anecdotes, addNew, anecdoteById, vote, setNotification }) => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => <AnecdoteList anecdotes={anecdotes} />}
      />
      <Route
        exact
        path='/create'
        render={() => (
          <CreateNew addNew={addNew} setNotification={setNotification} />
        )}
      />
      <Route exact path='/about' component={About} />
      <Route
        exact
        path='/anecdotes/:id'
        render={({ match }) => (
          <Anecdote anecdote={anecdoteById(match.params.id)} vote={vote} />
        )}
      />
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes
