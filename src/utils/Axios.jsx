import axios from "axios";

// Create an axios instance with a base URL
const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 10000, // Set a default timeout of 10 seconds (optional)
  headers: {
    'Content-Type': 'application/json', // Set default Content-Type header (optional)
  },
});

export default instance;
