import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import FavIcon from '../ui-components/Favicon';
import Spinner from '../ui-components/Spinner';

const ProductStyled = styled.main`
  height: 90vh;

  & .containerproduct {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 4rem auto;
    width: 50vw;
    padding-right: 1rem;
    height: 480px;
    background-color: ${Palette.background};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.5rem;
  }

  & .imgcontainer {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    height: 100%;
    overflow: hidden;
    border-radius: 0.5rem;
  }

  & .imgcontainer img {
    height: 100%;
    width: 90%;
    object-fit: cover;
  }
  & .textcontainer {
    grid-column: 2 / 2;
    grid-row: 1 / 2;
  }
  & .favicon {
    width: 25px;
    height: 25px;
  }
  & .textcontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
    padding: 1rem;
  }
  & .textcontainer button {
    height: 100%;
    background: none;
    border: none;
  }
  & .restofcard {
    display: flex;
    justify-content: space-between;
    padding-right: 1.5rem;
    padding-top: 1.8rem;
  }
  & .articles {
    display: flex;
    gap: 1rem;
    padding-top: 1.3rem;
  }
  & .articles span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    border-radius: 0.5rem;
    background-color: rgba(248, 251, 252, 0.6);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  & .articles span p {
    text-align: center;
    color: ${Palette.primary};
    font-size: 13px;
    color: gray;
    text-transform: capitalize;
  }
`;

const Product = () => {
  const { addFav, setAddFav } = useContext(UserContext);
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
    API.put(`products/favorites/${detail}`).then(() => {});
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
        <div className="containerproduct">
          <div className="imgcontainer">
            {showImage1 && <img src={product.image1} alt={product.title} />}
            {showImage2 && <img src={product.image2} alt={product.title} />}
            {showImage3 && <img src={product.image3} alt={product.title} />}

            {showImage1 ||
              (showImage2 && <button onClick={handlePrevImg}>Previous</button>)}
            {showImage2 || (showImage3 && <button onClick={handleNextImg}>Next</button>)}
          </div>
          <div className="textcontainer">
            <h2>{product.title}</h2>

            <p>{product.description}</p>
            <p>Location: {product.owner.location}</p>

            <div className="articles">
              <span>
                <p>{product.category}</p>
              </span>
              <span>
                <p>{product.condition} </p>
              </span>
              <span>
                <p> {product.status}</p>
              </span>
            </div>
            <div className="restofcard">
              <button>Contact the owner</button>

              <button
                onClick={() => {
                  handleFavs();
                  handleFavorites();
                }}
              >
                {addFav ? (
                  <FavIcon
                    src={
                      'https://res.cloudinary.com/dnkacmdmh/image/upload/v1679738836/love_jtiq6k.png'
                    }
                    alt={'favadd icon'}
                    className={'favicon'}
                  />
                ) : (
                  <FavIcon
                    src={
                      'https://res.cloudinary.com/dnkacmdmh/image/upload/v1679738833/heart_2_ii0nmr.png'
                    }
                    alt={'favadd icon'}
                    className={'favicon'}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </ProductStyled>
  );
};

export default Product;
