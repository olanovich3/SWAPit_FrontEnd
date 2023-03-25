import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [addFav, setAddFav] = useState(false);

  return (
    <FavoritesContext.Provider value={{ addFav, setAddFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};
