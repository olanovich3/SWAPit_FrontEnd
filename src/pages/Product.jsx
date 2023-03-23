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
    height: 30rem;
    width: auto;
  }
  & .prod-figure a {
    color: ${Palette.secondary};
  }
  & .prod-figure h4 {
    text-transform: uppercase;
    font-weight: 500;
  }
  & .imgbtns {
    display: flex;
    gap: 4rem;
  }
  & .imgbtns button {
    border: none;
    background: transparent;
  }
  & .imgbtns button:hover {
    color: ${Palette.secondary};
  }
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage1, setShowImage1] = useState(true);

  const getProduct = () => {
    API.get(`/products/${id}`).then((res) => {
      setLoaded(true);
      setProduct(res.data);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handlePrevImg = () => {
    if (showImage3) {
      setShowImage3(false);
      setShowImage2(true);
      setShowImage1(false);
    } else if (showImage2) {
      setShowImage3(false);
      setShowImage2(false);
      setShowImage1(true);
    } else {
      setShowImage3(true);
      setShowImage2(false);
      setShowImage1(false);
    }
  };
  const handleNextImg = () => {
    if (showImage1) {
      setShowImage3(false);
      setShowImage2(true);
      setShowImage1(false);
    } else if (showImage2) {
      setShowImage3(true);
      setShowImage2(false);
      setShowImage1(false);
    } else {
      setShowImage3(false);
      setShowImage2(false);
      setShowImage1(true);
    }
  };

  return (
    <ProductStyled>
      {loaded ? (
        <div className="prod-figure" key={product._id}>
          <div className="prod-imgs">
            {showImage1 && <img src={product.image1} alt={product.title} />}
            {showImage2 && <img src={product.image2} alt={product.title} />}
            {showImage3 && <img src={product.image3} alt={product.title} />}
          </div>
          <div className="imgbtns">
            <button onClick={handlePrevImg}>Previous</button>
            <button onClick={handleNextImg}>Next</button>
          </div>
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
