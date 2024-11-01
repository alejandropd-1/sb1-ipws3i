import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com/v1', // Replace with your actual API endpoint
});

export const ProductService = {
  getAll: () => api.get('/products'),
  getById: (id: string) => api.get(`/products/${id}`),
  create: (data: any) => api.post('/products', data),
};

export const ContactService = {
  submit: (data: any) => api.post('/contact', data),
};

export default api;