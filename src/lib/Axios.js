import axios from 'axios';

const token = localStorage.getItem('accessToken');

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
