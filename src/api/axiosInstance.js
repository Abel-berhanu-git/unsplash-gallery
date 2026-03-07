import axios from 'axios';
const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Accept: 'application/json',
    Authorization: `Client-ID ${apiKey}`,
  },
  params: {
    // client_id: apiKey
  }
});

export default axiosInstance;
