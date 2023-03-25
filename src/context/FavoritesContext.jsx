import { createContext, useState } from 'react';

import { API } from '../services/API';
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState('');
  const addFavorites = () => {
    API.put(`/favorites/:id`).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites, addFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
