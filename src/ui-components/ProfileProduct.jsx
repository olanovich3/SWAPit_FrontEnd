import { useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { ProductContext } from '../context/ProductContext';
import Button from './Button';

const ProductProfileStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  & .productcard {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    width: 250px;
    min-height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding-top: 1rem;
  }
  & .productcard img {
    width: auto;
    height: 250px;
    border-radius: 5px;
    object-fit: contain;
    object-position: center;
  }
  & .description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    gap: 0.5rem;
  }
  & .productcard button {
    margin: 1rem;
  }
`;

const ProductProfile = ({ data }) => {
  let navigate = useNavigate();
  const { productsaved } = useContext(ProductContext);
  return (
    <ProductProfileStyled>
      {data.products.map((item) => {
        return (
          <article className="productcard" key={item._id}>
            <img src={item.image1} alt={item._id} />
            <div className="description">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <Button
              text="EDIT"
              action={() => {
                navigate('/editproduct');
                productsaved(item);
              }}
            />
          </article>
        );
      })}
    </ProductProfileStyled>
  );
};

export default ProductProfile;
