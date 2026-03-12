import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

export const fetchProjects = () => api.get('/projects').then(r => r.data.data)
export const fetchSkills = () => api.get('/skills').then(r => r.data.data)
export const submitContact = (data) => api.post('/contact', data).then(r => r.data)

export default api
