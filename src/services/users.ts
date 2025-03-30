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

export const getUserBalance = async (email: string) => {
  try {
    const response = await axios.get(`${API_URL}/users?email=${email}`);
    const user = response.data[0];
    return user ? user.balance : 0; // Retorna o saldo do usuário
  } catch (error) {
    console.error("Erro ao buscar saldo do usuário:", error);
    return 0;
  }
};

export const updateUserBalance = async (email: string, balance: number) => {
  try {
    const response = await axios.patch(`${API_URL}/users/${email}`, { balance });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar saldo:", error);
    throw error;
  }
};
