import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });

  if (response.data.token) {
    localStorage.setItem('token', response.data.token); // Store token in localStorage
  }

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem('token'); // Remove token on logout
};

export const getToken = () => {
  return localStorage.getItem('token');
};