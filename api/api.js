// api.js
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_ENDPOINT = 'https://reqres.in/api/';

export const registerUserApi = async (userData) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUserApi = async (userData) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const saveUserToSecureStore = async (userData) => {
  await SecureStore.setItemAsync('user', JSON.stringify(userData));
};

export const getUserFromSecureStore = async () => {
  const userString = await SecureStore.getItemAsync('user');
  return userString ? JSON.parse(userString) : null;
};

export const removeUserFromSecureStore = async () => {
  await SecureStore.deleteItemAsync('user');
};
