import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import DivFlex from '../ui-components/DivFlex';
import Spinner from '../ui-components/Spinner';

const ProductStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;

  & .prod-figure {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 4rem;
    text-align: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  & .prod-imgs {
    display: flex;
    align-items: center;
  }
  & .prod-imgs img {
    height: 30rem;
    width: auto;
  }
  & .prod-imgs button {
    border: none;
    background: none;
  }
  & .prod-imgs button img {
    height: 2rem;
    width: auto;
  }
  & .prod-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  & .prod-info h4 {
    text-transform: uppercase;
    font-weight: 500;
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
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage1, setShowImage1] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [user] = useState(UserContext);

  const getProduct = () => {
    API.get(`/products/${id}`).then((res) => {
      setLoaded(true);
      setProduct(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const addFavorite = (product) => {
    API.put(`/favorites/${product._id}`).then(() => {
      setFavorite(product._id);
    });
  };

  const removeFavorite = (product) => {
    API.patch(`/favorites/${product._id}`).then(() => {
      setFavorite(product._id);
    });
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
      {
        <label className="container">
          <input
            type="checkbox"
            className="heart"
            onChange={() => {
              if (user.favorites.includes(product)) {
                addFavorite(favorite);
              } else {
                removeFavorite(favorite);
              }
            }}
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
      }
      {loaded ? (
        <div className="prod-figure" key={product._id}>
          <div className="prod-imgs">
            <button onClick={handlePrevImg}>
              <img
                src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679674826/Resources/54321_at648w.png"
                alt="Previous icon"
              />
            </button>
            {showImage1 && <img src={product.image1} alt={product.title} />}
            {showImage2 && <img src={product.image2} alt={product.title} />}
            {showImage3 && <img src={product.image3} alt={product.title} />}
            <button onClick={handleNextImg}>
              <img
                src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679674761/Resources/709586_ssuf2t.png"
                alt="Next icon"
              />
            </button>
          </div>
          <div className="prod-info">
            <h3>{product.title}</h3>
            <DivFlex gap={'2.5em'}>
              <h4>{product.category}</h4>
              <h4>{product.condition} </h4>
              <h4> {product.status}</h4>
            </DivFlex>
            <p>{product.description}</p>
            <p>Contact: {product.owner.name}</p>
            {product.owner.location == 'Madrid' ? (
              <>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38441032713!2d-3.8196196332355483!3d40.438131079723014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1679435067702!5m2!1ses!2ses"
                  width="350"
                  height="200"
                ></iframe>
              </>
            ) : (
              product.owner.location
            )}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </ProductStyled>
  );
};

export default Product;
