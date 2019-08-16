import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login'
const userUrl = 'http://localhost:3003/api/users'

const getAll = async () => {
  const response = await axios.get(userUrl)
  return response.data
}

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { getAll, login }