import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { API } from '../services/API';
import AverageRating from '../ui-components/AverageRating';
import Button from '../ui-components/Button';
import CommentsAll from '../ui-components/CommentsAll';
import ProductFigure from '../ui-components/ProductFigure';

const UserStyled = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  & .usercard {
    background-color: rgb(248, 248, 248);
    width: 100%;
    height: 185px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  & .imgusercard {
    width: 33%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .imgusercard > img {
    height: 100%;
    border-radius: 50%;
  }
  & .nameusercard {
    width: 33%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  & .starsusercard {
    width: 33%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  & .userbuttons {
    display: flex;
    gap: 3rem;
  }
  & .reviewlogo {
    width: 50px;
    height: 50px;
  }
  & .usercardproducts {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  @media only screen and (max-width: 750px) {
    & .usercard {
      display: flex;
      flex-direction: column;
      height: 350px;
    }
  }
`;

const UserCard = () => {
  const userProductStorage = JSON.parse(localStorage.getItem('product'));
  // const [chat, setChat] = useState(false);
  const [product, setProduct] = useState(false);
  const [review, setReview] = useState(false);
  const [products, setProducts] = useState({});
  const [comments, setComments] = useState();

  const getComments = () => {
    API.get(`/user/comments/${userProductStorage.owner._id}`).then((res) => {
      setComments(res.data);
    });
  };
  const getProducts = () => {
    API.get(`/users/${userProductStorage.owner._id}`).then((res) => {
      setProducts(res.data);
    });
  };
  console.log(products.products);

  useEffect(() => {
    getComments();
  }, []);

  return (
    <UserStyled>
      <div className="usercard">
        <nav className="imgusercard">
          <img src={userProductStorage.owner.avatar} alt="" />
        </nav>
        <nav className="nameusercard">
          <h2>{userProductStorage.owner.name}</h2>
          <h2>{userProductStorage.owner.lastname}</h2>
          <nav>
            <nav>{userProductStorage.owner.location}</nav>
          </nav>
        </nav>
        <nav className="starsusercard">
          <AverageRating ratings={userProductStorage.owner.rating} />
          <p>{userProductStorage.owner.comments.length}</p>
        </nav>
      </div>
      <div className="userbuttons">
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'PRODUCTS'}
          border={'yes'}
          action={() => setProduct(true) & setReview(false) & getProducts()}
        />
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'REVIEWS'}
          border={'yes'}
          action={() => setProduct(false) & setReview(true)}
        />
      </div>
      <nav className="usercardproducts">
        {product &&
          (Object.keys(products).length != 0 ? (
            products.products.map((item) => (
              <ProductFigure product={item} key={item._id} />
            ))
          ) : (
            <h2>no products</h2>
          ))}
      </nav>

      {review &&
        (comments.length ? (
          <CommentsAll comment={comments} />
        ) : (
          <img
            className="reviewlogo"
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1680116036/SWAPIT_PROYECT/customer-review_ifsan0.png"
            alt="reviewlogo"
          />
        ))}
    </UserStyled>
  );
};

export default UserCard;
