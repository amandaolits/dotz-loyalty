import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getAddresses = async () => {
  try {
    const response = await axios.get(`${API_URL}/addresses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching addresses:', error);
    throw error;
  }
};

export const addAddress = async (addressData: any) => {
  try {
    const response = await axios.post(`${API_URL}/addresses`, addressData);
    return response.data;
  } catch (error) {
    console.error('Error adding address:', error);
    throw error;
  }
};
