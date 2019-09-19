let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const blogs = [
  {
    likes: 1,
    title: 'Algebraic Effects for the Rest of Us',
    author: 'Dan Abramov',
    url: 'https://overreacted.io/algebraic-effects-for-the-rest-of-us/',
    user: {
      username: 'olli',
      name: 'Olli',
      id: '5d3964fee5462b0d95bf0286'
    },
    id: '5d43f9f6dd0796401c0bd7a1'
  },
  {
    likes: 2,
    title: 'Is React Translated Yet?',
    author: 'Nat Alison',
    url: 'https://reactjs.org/blog/2019/02/23/is-react-translated-yet.html',
    user: {
      username: 'olli',
      name: 'Olli',
      id: '5d3964fee5462b0d95bf0286'
    },
    id: '5d487bccad3e4a6e7911950c'
  }
]

const getAll = () => {
  try {
    return Promise.resolve(blogs)
  } catch (error) {
    console.log(error)
  }
}

export default { setToken, getAll }
