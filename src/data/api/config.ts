import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:8080' : window.location.hostname,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;