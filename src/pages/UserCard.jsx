import { useState } from 'react';
import styled from 'styled-components';

import Button from '../ui-components/Button';
import StarRatingInput from '../ui-components/StarsRatingInput';

const UserStyled = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;

  & .usercard {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    padding: 32px;
    width: 550px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  & .userbuttons {
    display: flex;
    gap: 48px;
  }
  & .usercomment {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    padding: 32px;
    width: 550px;
    height: 400px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  & .usercard img {
    width: 60%;
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
  const [userCard, setUserCard] = useState(true);
  const [comment, setComment] = useState(false);
  // const [chat, setChat] = useState(false);
  const [profile, setProfile] = useState(true);
  const [review, setReview] = useState(false);
  const [rating, setRating] = useState(0);
  const handleSubmit = (event) => {
    console.log(event.preventDefault());
  };
  const handleRatingChange = (value) => {
    setRating(value);
  };
  console.log(comment);
  console.log(rating);

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
            <img
              src="https://res.cloudinary.com/dysog0ybg/image/upload/v1677452413/FFVII/rafafff_j26z2x.webp"
              alt=""
            />
            <nav className="username">
              <h2>NAME</h2>
              <h2>LASTNAME</h2>
            </nav>
            <h3>Valoracion</h3>
            <nav className="userbutton">
              <Button
                type="button"
                text="COMMENT"
                action={() => setUserCard(false) & setComment(true)}
              />
              <Button
                text="CHAT"
                type="button"
                // action={() => setUserCard(false) & setChat(true)}
              />
            </nav>
          </div>
        ) : (
          <div className="usercomment">
            <form onSubmit={handleSubmit}>
              <label htmlFor="comment">Comment:</label>
              <input className="commentinput" type="text" name="comment" id="comment" />
              <label htmlFor="rating">Rating:</label>
              <StarRatingInput onChange={handleRatingChange} />

              <nav className="commentbutton">
                <Button type="submit" text={'Submit'} />
                <Button
                  type="button"
                  text="close"
                  action={() => setComment(false) & setUserCard(true)}
                />
              </nav>
            </form>
          </div>
        ))}

      {review && <h1>Review</h1>}
    </UserStyled>
  );
};

export default UserCard;
