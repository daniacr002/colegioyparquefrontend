import React, { createContext, useContext, useState, useEffect } from 'react';
import { currentUser } from '../mock';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user in localStorage
    const storedUser = localStorage.getItem('twitterUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login - in real app, this would call API
    // For now, just use the mock current user
    const loggedInUser = currentUser;
    setUser(loggedInUser);
    localStorage.setItem('twitterUser', JSON.stringify(loggedInUser));
    return loggedInUser;
  };

  const signup = (userData) => {
    // Mock signup
    const newUser = {
      ...userData,
      id: Date.now().toString(),
      followers: 0,
      following: 0,
      joinedDate: new Date().toISOString(),
      verified: false
    };
    setUser(newUser);
    localStorage.setItem('twitterUser', JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('twitterUser');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};