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
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    background-color: rgb(248, 248, 248);
  }
  & .container {
    width: 100%;
    height: 50%;
  }

  & .caption {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50%;
    width: 100%;
    gap: 1rem;
  }
  & .caption > button {
    height: 20%;
    width: 30%;
  }

  & .container {
    border-radius: 50%;
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
            <img className="container" src={item.image1} alt={item._id} />

            <div className="caption">
              <h3>{item.title}</h3>

              <Button
                className="editbtn"
                text="EDIT"
                action={() => {
                  navigate('/editproduct');
                  productsaved(item);
                }}
              />
            </div>
          </article>
        );
      })}
    </ProductProfileStyled>
  );
};

export default ProductProfile;
