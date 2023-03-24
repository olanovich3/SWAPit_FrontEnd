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
  & .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    transition: 100ms;
  }
  & .checkmark {
    top: 0;
    left: 0;
    height: 1em;
    width: 1em;
    transition: 100ms;
    animation: dislike_effect 400ms ease;
  }
  & .container input:checked ~ .checkmark path {
    fill: #ff5353;
    stroke-width: 0;
  }
  & .container input:checked ~ .checkmark {
    animation: like_effect 400ms ease;
  }
  & .container:hover {
    transform: scale(1.1);
  }
  @keyframes like_effect {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes dislike_effect {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage1, setShowImage1] = useState(true);
/*   const [favorite, setFavorite] = useState([]); */

  const getProduct = () => {
    API.get(`/products/${id}`).then((res) => {
      setLoaded(true);
      setProduct(res.data);
    });
  };

  /*  const addFavorite = () => {
    API.put(`/favorites/${id}`).then((res) => {
      setLoaded(true);
      setFavorite(res.data);
    });
  };

  const removeFavorite = () => {
    API.patch(`/favorites/${id}`).then((res) => {
      setLoaded(true);
      setFavorite(res.data);
    });
  }; */

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
      {/* {product.owner !== localStorage.getItem('user') ? (
        <label className="container">
          <input
            type="checkbox"
            className="heart"
            onChange={() => {
              if (favorite.includes(id)) {
                removeFavorite();
              } else {
                addFavorite();
              }
            }}
            checked={favorite.includes(id)}
          />
          <div className="checkmark">
            <svg viewBox="0 0 256 256">
              <rect fill="none" height="256" width="256"></rect>
              <path
                d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                strokeWidth="20px"
                stroke="#FF5353"
                fill="none"
              ></path>
            </svg>
          </div>
        </label>
      ) : (
        <h4>You cant add this product to favorites.</h4>
      )} */}
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
