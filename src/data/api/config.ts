import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:8080' : window.location.hostname,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(
  config => {
    const user = localStorage.getItem('user');
    if (!user) {
      return config;
    }

    const parsed = JSON.parse(user);
    if (parsed && parsed.token && config.headers) {
      config.headers['Authorization'] = `Bearer ${parsed.token}`;
    }
    return config;
  },
  err => Promise.reject(err),
);

export const post = <T>(path: string, data: {}) => api.post<T>(path, data).then(res => res.data);
export default api;