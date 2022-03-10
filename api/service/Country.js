export const API_URL = 'https://jsonplaceholder.typicode.com/'
export const CountryService = {
  async getAll() {
    const res = await fetch(API_URL + 'todos')
    const data = await res.json()
    return data
  },
}
