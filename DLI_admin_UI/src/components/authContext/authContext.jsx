import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check if the user is already logged in by accessing localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    // Check authentication status
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    setIsLoading(false);
  }, []);

  const login = (authToken) => {
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
    // Store token in local storage
    localStorage.setItem('token', authToken);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    // Clear token from local storage
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (isLoading) {
    return <div>Loading...</div>; // Return loading indicator
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
