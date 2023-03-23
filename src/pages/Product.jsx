import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { API } from '../services/API';
import Palette from '../styles/Palette';
import Spinner from '../ui-components/Spinner';

const ProductStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;

  & .prod-figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 4rem;
    text-align: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  & .prod-figure img {
    height: 20rem;
    width: auto;
  }
  & .prod-figure a {
    color: ${Palette.secondary};
  }
  & .prod-figure h4 {
    text-transform: uppercase;
    font-weight: 500;
  }
`;

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
        <div className="prod-figure" key={product._id}>
          <img src={product.image1} alt={product.title} />
          <h3>{product.title}</h3>
          <h4>{product.category}</h4>
          <h4>{product.condition} </h4>
          <h4> {product.status}</h4>
          <p>{product.description}</p>
          <NavLink to="/chat">Contact {product.owner}</NavLink>
        </div>
      ) : (
        <Spinner />
      )}
    </ProductStyled>
  );
};

export default Product;
