import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is a token in localStorage
    const token = localStorage.getItem('token');
    if (token !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Routes>
      <Route element={isLoggedIn ? <Element /> : <Navigate to="/login" replace />} />
    </Routes>
  );
};

export default ProtectedRoute;
