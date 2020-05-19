import { AUTH_USER } from '../types';

export const signOut = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
}
