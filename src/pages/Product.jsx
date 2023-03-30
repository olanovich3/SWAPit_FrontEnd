import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ProductContext } from '../context/ProductContext';
import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import DivFlex from '../ui-components/DivFlex';
import FavIcon from '../ui-components/Favicon';
import RequestModal from '../ui-components/RequestModal';
import Spinner from '../ui-components/Spinner';

const ProductStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  & .containerproduct {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;

    background-color: white;

    border-radius: 0.5rem;
  }

  & .imgcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    height: 100%;
    overflow: hidden;
    border-radius: 0.5rem;
    position: relative;
    width: 100%;
  }
  & .imgcontainer img {
    height: 100%;
    object-fit: cover;
  }
  & .imgcontainer button {
    height: 2rem;
    background: rgba(255, 255, 255, 0.7);
    border: none;
    padding: 5px;
  }
  & .prevbtn {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  & .nextbtn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  & .textcontainer {
    grid-column: 2 / 2;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 4rem;

    gap: 1rem;
    padding: 1rem;
  }
  & .textcontainer h2 {
    font-family: 'Anton', sans-serif;
    font-size: 3.5rem;
    color: ${Palette.secondary};
  }
  & .favicon {
    width: 25px;
    height: 25px;
  }

  & .textcontainer button {
    height: 100%;

    background: none;
    border: none;
  }
  & .restofcard {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2.7rem;
    padding-right: 1.5rem;
    padding-top: 1.8rem;
  }
  & .btncontact {
    cursor: pointer;
    font-weight: bolder;
    font-size: 1rem;
    border: 1px solid ${Palette.secondary};
    padding: 0.4rem;
    height: 1rem;
    transition: all 0.2s ease-in-out;
    border-radius: 0.3rem;
  }
  & .btncontact:hover {
    background: ${Palette.secondary};
    color: ${Palette.background};
    padding: 0.4rem;
    border-radius: 0.3rem;
  }
  & .articles {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
  }
  & .articles2 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5rem;
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
    font-size: 14px;
    color: gray;
    text-transform: capitalize;
  }
  & .prodlocation {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & .prodlocation img {
    height: 1.3rem;
    width: 1.3rem;
  }
  & .disabled {
    opacity: 0.1;
    pointer-events: none;
  }
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;

    & .containerproduct {
      display: flex;
      grid-gap: 1rem;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 4rem auto;
      width: 380px;
      padding: 1rem;
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
      position: relative;
    }
    & .imgcontainer img {
      height: 100%;
      width: 90%;
      object-fit: contain;
    }
    .articlescontainer {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 2rem;
    }
  }
`;
const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setDetail, user, setUser } = useContext(UserContext);
  const { setModalRequest, setRequestID } = useContext(ProductContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const { productsaved } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage1, setShowImage1] = useState(true);

  setDetail(id);

  const getProduct = () => {
    API.get(`/products/${id}`).then((res) => {
      setLoaded(true);
      setProduct(res.data);
    });
  };

  const getUser = () => {
    API.get(`http://localhost:8080/api/v1/users/${user._id}`).then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      setUser(res.data);
      res.data.favorites.map((item) => {
        if (item._id == id) {
          setIsFavorite(true);
        }
      });
    });
  };

  useEffect(() => {
    getProduct();
    getUser();
  }, []);

  const addFavorite = () => {
    API.put(`products/favorites/${id}`).then(() => {
      navigate('/favorites');
    });
  };

  const removeFavorite = () => {
    API.patch(`products/favorites/${id}`).then(() => {
      navigate('/favorites');
    });
  };

  const handleFavs = () => {
    getUser();
    getProduct();
    if (isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
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
            <button
              className={`prevbtn ${showImage1 ? 'disabled' : ''}`}
              onClick={handlePrevImg}
            >
              <img
                src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679674826/Resources/54321_at648w.png"
                alt="Previous icon"
              />
            </button>
            {showImage1 && <img src={product.image1} alt={product.title} />}
            {showImage2 && <img src={product.image2} alt={product.title} />}
            {showImage3 && <img src={product.image3} alt={product.title} />}
            <button
              className={`nextbtn ${
                product.image2 == null && product.image3 == null
                  ? 'disabled'
                  : showImage2 && product.image3 == null
                  ? 'disabled'
                  : showImage3
                  ? 'disabled'
                  : ''
              }`}
              onClick={handleNextImg}
            >
              <img
                src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679674761/Resources/709586_ssuf2t.png"
                alt="Next icon"
              />
            </button>
          </div>
          <div className="textcontainer">
            <h2 className="productitle">{product.title}</h2>

            <p>{product.description}</p>

            <div className="restofcard">
              <button
                className="btncontact"
                onClick={() => {
                  setModalRequest(true);
                  setRequestID(product._id);
                  localStorage.setItem('requestID', JSON.stringify(product._id));
                }}
              >
                Request this product
              </button>

              <button
                className="btncontact"
                onClick={() => {
                  productsaved(product);
                  navigate('/usercard');
                }}
              >
                Contact with {product.owner.name}
              </button>
              <RequestModal />
            </div>

            <div className="articlescontainer">
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
                <div className="articles2">
                  <button
                    onClick={() => {
                      handleFavs();
                    }}
                  >
                    {isFavorite == false ? (
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
          </div>
          <DivFlex justify={'flex-start'}></DivFlex>
        </div>
      ) : (
        <Spinner />
      )}
    </ProductStyled>
  );
};

export default Product;
