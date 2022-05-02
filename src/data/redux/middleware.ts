import { Middleware } from "@reduxjs/toolkit";
import axios from "axios";

// on successful login, susbequent requests will have the Authorization header
// on logout, remove Authorization header
export const setAuthHeader: Middleware = store => next => action => {
  if (action.type === 'auth/login/fulfilled') {
    const token = action.payload.token;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else if(action.type === 'auth/logout') {
    delete axios.defaults.headers.common.Authorization;
  }

  return next(action);
}