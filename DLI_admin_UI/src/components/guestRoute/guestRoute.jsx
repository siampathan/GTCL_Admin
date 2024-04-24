import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import LoginPage from 'src/pages/login';

import AuthContext from 'src/components/authContext/authContext';

const GuestRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />;
};

export default GuestRoute;
