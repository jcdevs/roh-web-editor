import { Middleware } from "@reduxjs/toolkit";
import api from "../api/config";

// after successful login, susbequent requests will have the Authorization header
export const setAuthHeader: Middleware = store => next => action => {
  if (action.type === 'auth/login/fulfilled') {
    api.interceptors.request.use(
      config => {
        const token = action.payload.token;

        if (token && config.headers) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      err => Promise.reject(err),
    );
  }
  return next(action);
}