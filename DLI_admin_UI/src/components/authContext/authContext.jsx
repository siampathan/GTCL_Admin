import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState, useEffect, useCallback, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    // Check authentication status
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    setIsLoading(false);
  }, []);

  const login = useCallback((authToken) => {
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
    // Store token in local storage
    localStorage.setItem('token', authToken);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    // Clear token from local storage
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  const authContextValue = useMemo(
    () => ({ isLoggedIn, login, logout }),
    [isLoggedIn, login, logout]
  );

  if (isLoading) {
    return <div>Loading...</div>; // Return loading indicator
  }

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
