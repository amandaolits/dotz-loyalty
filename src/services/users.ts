import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const createUser = async (userData: { name: string; email: string; password: string; phone: string }) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, message: error };
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    return [];
  }
};
