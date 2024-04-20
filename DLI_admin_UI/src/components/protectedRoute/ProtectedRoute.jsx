import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../authContext/authContext';
import { useContext } from 'react';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Route {...rest} element={element} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
