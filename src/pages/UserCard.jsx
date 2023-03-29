import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { API } from '../services/API';
import AverageRating from '../ui-components/AverageRating';
import Button from '../ui-components/Button';
import CommentsAll from '../ui-components/CommentsAll';
import StarRatingInput from '../ui-components/StarsRatingInput';

const UserStyled = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;

  & .usercard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .usercard img {
    display: block;
    max-width: 50%;
    max-height: fit-content;
    height: auto;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .usercard > div {
    padding: 20px;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: white;
  }
  .usercard div {
    text-align: center;
  }
  .usercard > div nav.username {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .usercard > div nav.username::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background-color: #ddd;
  }
  .usercard > div h2,
  .usercard > div h3 {
    margin: 0;
    text-align: center;
  }

  .usercard > div nav.userbutton {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .userbuttons {
    display: flex;
    gap: 48px;
  }
  .usercomment {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .usercomment form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .usercomment label {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .usercomment input[type='text'],
  .usercomment .star-rating-wrapper {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .usercomment .commentbutton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }

  .usercomment .commentbutton button {
    width: 48%;
    border-radius: 5px;
    font-size: 16px;
  }

  & .username {
    display: flex;
    gap: 16px;
  }

  & .userbutton {
    display: flex;
    gap: 40px;
  }
  & .commentbutton {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
  & .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    height: 100%;
  }
  & .commentinput {
    width: 80%;
    height: 70%;
  }
`;

const UserCard = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [userCard, setUserCard] = useState(true);
  const userProductStorage = JSON.parse(localStorage.getItem('product'));
  // const [chat, setChat] = useState(false);
  const [profile, setProfile] = useState(true);
  const [review, setReview] = useState(false);
  const [comments, setComments] = useState();
  const [rate, setRate] = useState(0);

  const handleRatingChange = (value) => {
    setRate(value);
  };

  const formSubmit = (formData) => {
    const comment = {
      comment: formData.comment,
      rating: rate,
    };
    console.log(comment);
    API.post(`/user/comments/${userProductStorage._id}`, comment).then(() => {
      navigate('/products');
    });
  };

  const getComments = () => {
    API.get(`/user/comments/${userProductStorage.owner._id}`).then((res) => {
      setComments(res.data);
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <UserStyled>
      <div className="userbuttons">
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'PROFILE'}
          border={'yes'}
          action={() => setProfile(true) & setReview(false)}
        />
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'REVIEWS'}
          border={'yes'}
          action={() => setProfile(false) & setReview(true)}
        />
      </div>

      {profile &&
        (userCard ? (
          <div className="usercard">
            <img src={userProductStorage.owner.avatar} alt="" />
            <div>
              <nav className="username">
                <h2>{userProductStorage.owner.name}</h2>
                <h2>{userProductStorage.owner.lastname}</h2>
              </nav>
              <AverageRating ratings={userProductStorage.owner.rating} />
              <nav className="userbutton">
                <Button type="button" text="COMMENT" action={() => setUserCard(false)} />
                <Button
                  text="CHAT"
                  type="button"
                  // action={() => setUserCard(false) & setChat(true)}
                />
              </nav>
            </div>
          </div>
        ) : (
          <div className="usercomment">
            <form onSubmit={handleSubmit(formSubmit)}>
              <label htmlFor="comment">Comment:</label>
              <input
                className="commentinput"
                type="text"
                name="comment"
                id="comment"
                {...register(`comment`)}
                maxLength={40}
              />
              <label htmlFor="rating">Rating:</label>
              <StarRatingInput onChange={handleRatingChange} />

              <nav className="commentbutton">
                <Button type="submit" text={'Submit'} />
                <Button type="button" text="close" action={() => setUserCard(true)} />
              </nav>
            </form>
          </div>
        ))}

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
