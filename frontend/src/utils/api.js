```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const uploadReceipt = async (receiptData) => {
  try {
    const response = await axios.post(`${API_URL}/receipts/upload`, receiptData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPoints = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/points`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const redeemPoints = async (userId, productId) => {
  try {
    const response = await axios.post(`${API_URL}/users/${userId}/redeem`, { productId });
    return response.data;
  } catch (error) {
    throw error;
  }
};
```