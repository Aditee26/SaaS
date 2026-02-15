'use client';

import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check localStorage on mount
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      
      // Also set cookie for middleware
      Cookies.set('token', storedToken, { expires: 7 });
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Fake login - accept any non-empty email/password
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      // Create fake user data
      const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).substr(2);
      const fakeUser = { 
        id: 1, 
        email, 
        name: email.split('@')[0],
        role: 'user'
      };
      
      // Store in localStorage
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('user', JSON.stringify(fakeUser));
      
      // Set cookie for middleware
      Cookies.set('token', fakeToken, { expires: 7 });
      
      setToken(fakeToken);
      setUser(fakeUser);
      setIsAuthenticated(true);
      
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      // Fake signup - accept any input
      if (!email || !password || !name) {
        throw new Error('All fields are required');
      }

      const fakeToken = 'fake-jwt-token-' + Math.random().toString(36).substr(2);
      const fakeUser = { 
        id: 1, 
        email, 
        name,
        role: 'user'
      };
      
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('user', JSON.stringify(fakeUser));
      
      // Set cookie for middleware
      Cookies.set('token', fakeToken, { expires: 7 });
      
      setToken(fakeToken);
      setUser(fakeUser);
      setIsAuthenticated(true);
      
      router.push('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Remove cookie
    Cookies.remove('token');
    
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      token, 
      login, 
      signup, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};