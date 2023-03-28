import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [editProduct, setEditProduct] = useState({});
  const productsaved = (product) => {
    setEditProduct(product);
    localStorage.setItem('product', JSON.stringify(product));
  };
  const productdeleted = () => {
    setEditProduct(null);
    localStorage.removeItem('product');
  };

  const [request, setRequest] = useState([]);
  const [modalRequest, setModalRequest] = useState(false);
  const [requestID, setRequestID] = useState([]);
  return (
    <ProductContext.Provider
      value={{
        editProduct,
        setEditProduct,
        productsaved,
        productdeleted,
        request,
        setRequest,
        modalRequest,
        setModalRequest,
        requestID,
        setRequestID,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
