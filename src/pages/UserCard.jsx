import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '../ui-components/Button';

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
`;

const UserCard = () => {
  const { register, handleSubmit } = useForm();
  const [userCard, setUserCard] = useState(true);
  const [comment, setComment] = useState(false);
  const [chat, setChat] = useState(false);
  const [profile, setProfile] = useState(true);
  const [review, setReview] = useState(false);
  const formSubmit = (formData) => {
    const data = { comment: formData.comment };
    console.log(data);
  };
  console.log(chat);
  console.log(comment);

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
                action={() => setUserCard(false) & setChat(true)}
              />
            </nav>
          </div>
        ) : (
          <div className="usercomment">
            <form className="form" onSubmit={handleSubmit(formSubmit)}>
              <label htmlFor="comment">Your opinion es important</label>
              <input
                className="commentinput"
                type="text"
                name="comment"
                id="comment"
                {...register('comment')}
              />
            </form>
            <nav className="commentbutton">
              <Button type="submit" text={'Submit'} />
              <Button
                type="button"
                text="close"
                action={() => setComment(false) & setUserCard(true)}
              />
            </nav>
          </div>
        ))}

      {review && <h1>Review</h1>}
    </UserStyled>
  );
};

export default UserCard;
