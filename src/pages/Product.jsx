import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { API } from '../services/API';
import Spinner from '../ui-components/Spinner';

const ProductStyled = styled.div``;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getProduct = () => {
    API.get(`/products/${id}`).then((res) => {
      setLoaded(true);
      setProduct(res.data);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductStyled>
      {loaded ? (
        <div key={product._id}>
          <img src={product.image1} alt={product.title} />
          <h3>{product.title}</h3>
          <h4>
            {product.category} | {product.condition} | {product.status}
          </h4>
          <p>{product.description}</p>
        </div>
      ) : (
        <Spinner />
      )}
    </ProductStyled>
  );
};

export default Product;
