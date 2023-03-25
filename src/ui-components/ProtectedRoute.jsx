import { useContext } from 'react';
import { Navigate } from 'react-router-dom/dist';

import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
export default ProtectedRoute;
