import axios from 'axios'

const api = axios.create({
  baseURL: 'http://54.94.52.236:3333/',

})

export default api