import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [editProduct, setEditProduct] = useState({});
  return (
    <ProductContext.Provider value={{ editProduct, setEditProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
