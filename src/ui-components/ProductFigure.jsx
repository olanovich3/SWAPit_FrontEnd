import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import Palette from '../styles/Palette';

const ProductFigureStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 230px;
  background-color: ${Palette.background};
  overflow: hidden;
  border-radius: 5px;
  gap: ${({ gap }) => gap};

  &:hover {
    cursor: pointer;
  }
  & .prodbtn {
    border: none;
    background: none;
  }
  & .prodfigure {
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
  & .container {
    position: relative;
    width: 100%;
    max-width: 300px;
  }
  & .container img {
    height: 280px;
    width: 250px;
    object-fit: cover;
    display: block;
  }
  & .overlay {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    color: white;
    font-size: 1rem;
    padding: 20px;
    text-align: center;
  }
  & .container:hover .overlay {
    opacity: 1;
  }
  & .caption {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  & .caption:hover figcaption {
    color: ${Palette.highlight};
  }
  & .caption figcaption {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
    max-width: 10rem;
  }
  & .caption p img {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
  & .caption p {
    height: 70px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
  }
`;

const ProductFigure = ({ product, gap }) => {
  const { setDetail } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <ProductFigureStyled product gap={gap}>
      <button
        to={product._id}
        key={product._id}
        className="prodbtn"
        onClick={() => {
          navigate(`/product/${product._id}`);
          setDetail(product._id);
          localStorage.setItem('detail', product._id);
        }}
      >
        <figure key={product._id} className="prodfigure">
          <div className="container">
            <img src={product.image1} alt={product.title} />
            <div className="overlay">View details</div>
          </div>
          <div className="caption">
            <figcaption>{product.title}</figcaption>
          </div>
        </figure>
      </button>
    </ProductFigureStyled>
  );
};

export default ProductFigure;
