import axios from 'axios';

import { categorizeError } from '@types/error';

export const client = axios.create({
  baseURL: process.env.SERVER_URL,
  withCredentials: true,
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(categorizeError(error));
  },
);
