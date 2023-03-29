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
  & .editbtn {
    position: absolute;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    transition: all 0.5s ease 0s;
    opacity: 0;
    color: white;
    font-size: 1rem;
    padding: 20px;
    text-align: center;
  }
  & .caption {
    height: 70px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 1rem;
  }

  @media only screen and (max-width: 750px) {
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
            <div className="container">
              <img src={item.image1} alt={item._id} />
              <Button
                className="editbtn"
                text="EDIT"
                action={() => {
                  navigate('/editproduct');
                  productsaved(item);
                }}
              />
            </div>
            <div className="caption">
              <h3>{item.title}</h3>
            </div>
          </article>
        );
      })}
    </ProductProfileStyled>
  );
};

export default ProductProfile;
