import axios from 'axios';

export const BASE_URL =
  'https://c710-2804-14c-6f80-8522-fd16-9248-27d6-870f.ngrok-free.app/';
// customer
export const HttpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMGYzM2IyNi00NDllLTQ3MTMtODNlMy05ZGUyZmY1MzE3MmUiLCJpYXQiOjE3MTIxOTg4MjUsImV4cCI6MTcxMjgwMzYyNX0.M9_Qu3tInpePuUX1BGi42NGo2kq5Lvd7UZcW2KGQ_aQ',
  },
});
