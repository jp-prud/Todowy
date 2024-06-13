import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/';
// customer
export const HttpClient = axios.create({
  baseURL: BASE_URL,
});
