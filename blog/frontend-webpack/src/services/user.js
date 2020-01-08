import axios from 'axios'
const baseUrl = `${BACKEND_URL}/api/login`

const login = async ({ username, password }) => {
  const response = await axios.post(baseUrl, { username, password })
  return response.data
}

export default { login }
