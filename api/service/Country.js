import axios from 'axios'

export const API_URL = 'https://jsonplaceholder.typicode.com/todos'

axios.defaults.baseURL = API_URL

// export const CountryService = {
//   async getAll() {
//     return axios.get('/todos')
//   },
// }

export const CountryService = {
  async getAll() {
    return axios.get('/todos')
  },
}
