/* import { useEffect, useState } from 'react';

import { API } from '../services/API';
import Spinner from '../ui-components/Spinner';  */

const Product = () => {
  /*   const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getProducts = () => {
    API.get('/products').then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (<main>{loaded ? products.map((prod) => (<figure {prod.id}>
  <img src={prod.image1} alt={prod.title} />
  <figcaption>{prod.title}</figcaption>
  <p>{prod.status}</p>
  </figure>)) : (<Spinner/>)}</main>) */
  return <main>Products</main>;
};

export default Product;
