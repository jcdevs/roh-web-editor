import { User } from "../interfaces/User";
import api from "./config";

const post = <T>(path: string, data: {}) => api.post<T>(path, data).then(res => res.data);

export interface LoginParams { name: string; pw: string; };
export const login = (data: LoginParams) => post<User>('/login', data);