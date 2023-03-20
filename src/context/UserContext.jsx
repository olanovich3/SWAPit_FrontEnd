import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    const initialValue = JSON.parse(savedUser);
    return initialValue || null;
  });

  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem('token');
    return savedJwt || null;
  });

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const login = (resUser, resToken) => {
    setUser(resUser);
    setJwt(resToken);
    localStorage.setItem('user', JSON.stringify(resUser));
    localStorage.setItem('token', resToken);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        jwt,
        logout,
        login,
        setUser,
        setJwt,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
