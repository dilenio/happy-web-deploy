import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-deploy-backend.herokuapp.com',
})

export default api;
