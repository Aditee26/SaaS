import { User } from '@/types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  // Users
  getUsers: async (): Promise<User[]> => {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  getUser: async (id: number): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  },

  // Mock authentication
  login: async (email: string, password: string) => {
    // Fake auth - just store token
    return { token: 'fake-jwt-token', user: { email } };
  },

  signup: async (email: string, password: string, name: string) => {
    // Fake signup
    return { token: 'fake-jwt-token', user: { email, name } };
  },
};