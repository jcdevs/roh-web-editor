import axios from "axios";
import { User } from "../interfaces/User";

// config
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:8080' : window.location.hostname;

// wrappers
const post = <T>(path: string, data: {}) => axios.post<T>(path, data).then(res => res.data);

// routes
export interface LoginParams { name: string; pw: string; };
export const login = (data: LoginParams) => post<User>('/login', data);