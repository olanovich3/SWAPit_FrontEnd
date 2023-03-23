/* import { useEffect, useState } from 'react';

import { API } from '../services/API';

const getAllProducts = () => {
  const [products, setProducts] = useState([]);
  API.get('/products').then((res) => {
    const filterProducst = res.data.filter((item) => console.log(item));
    setProducts(res.data);
  });
  useEffect(() => {
    getAllProducts();
  }, []);
  return <main></main>;
};
 */
