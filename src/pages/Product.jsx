import { useEffect, useState } from 'react';
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
  & .prod-figure .favicon {
    width: 40px;
    height: 40px;
  }
  & .prod-figure button {
    background: none;
    border: none;
    background-color: transparent;
  }
`;

const Product = () => {
  const [addFav, setAddFav] = useState(true);
  const detail = localStorage.getItem('detail');
  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage1, setShowImage1] = useState(true);

  const getProduct = () => {
    API.get(`/products/${detail}`).then((res) => {
      setLoaded(true);
      setProduct(res.data);
      console.log(res.data);
    });
  };
  const handleFavorites = () => {
    setAddFav(!addFav);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const addFavorite = () => {
    API.put(`products/favorites/${detail}`).then((res) => {
      console.log(res.data);
    });
  };

  const removeFavorite = () => {
    API.patch(`products/favorites/${detail}`).then(() => {});
  };
  const handleFavs = () => {
    if (addFav) {
      addFavorite(detail);
    } else {
      removeFavorite(product);
    }
  };

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
          <p>Contact: {product.owner.name}</p>
          <p>Location: {product.owner.location}</p>

          <button
            onClick={() => {
              handleFavs();
              handleFavorites();
            }}
          >
            {addFav ? (
              <img
                className="favicon"
                src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1679738836/love_jtiq6k.png"
                alt="favadd icon"
              ></img>
            ) : (
              <img
                className="favicon"
                src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1679738833/heart_2_ii0nmr.png"
                alt="notfav icon"
              />
            )}
          </button>
        </div>
      ) : (
        <Spinner />
      )}
    </ProductStyled>
  );
};

export default Product;
