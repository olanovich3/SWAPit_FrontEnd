import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { API } from '../services/API';
import Spinner from '../ui-components/Spinner';

const ProductStyled = styled.div``;

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getProduct = () => {
    API.get(`/product/:id`).then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductStyled>
      {loaded ? (
        products.map((prod) => (
          <div key={prod.id}>
            <img src={prod.image1} alt={prod.title} />
            <h3>{prod.title}</h3>
            <h4>
              From: {prod.owner.name}
              {prod.owner.lastname}
            </h4>
            <p>
              {prod.category} | {prod.condition} | {prod.status}
            </p>
            <p>{prod.description}</p>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </ProductStyled>
  );
};

export default Product;
