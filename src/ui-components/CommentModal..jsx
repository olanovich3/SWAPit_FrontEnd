import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
/* import { useNavigate } from 'react-router-dom'; */
import styled from 'styled-components';

import { ProductContext } from '../context/ProductContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import StarRatingInput from '../ui-components/StarsRatingInput';

const CommentModalStyled = styled.div`
  & .modal {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
  }
  & .hidden {
    display: none !important;
    background: none;
  }
  & .commentbox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: 45%;
    background: ${Palette.background};
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
    gap: 2rem;
  }
  & .commentbox form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    font-size: 1rem;
  }
  .commentinput {
    height: 100px;
    width: 80%;
  }
  .label-style {
    font-size: 18px;
  }
`;

const CommentModal = () => {
  const product = JSON.parse(localStorage.getItem('productcomment'));
  const { Comment, setComment } = useContext(ProductContext);

  const { register, handleSubmit } = useForm();
  const [rate, setRate] = useState(0);
  const formSubmit = (formData) => {
    const comment = {
      comment: formData.comment,
      rating: rate,
    };

    API.post(`/user/comments/${product._id}`, comment).then((res) => {
      console.log(res.data);
    });
  };

  const handleRatingChange = (value) => {
    setRate(value);
  };

  return (
    <CommentModalStyled>
      <div className={Comment ? 'modal' : 'hidden'}>
        <div className="commentbox">
          <button type="button" className="label-style" onClick={() => setComment(false)}>
            Close
          </button>
          <form onSubmit={handleSubmit(formSubmit)}>
            <label htmlFor="comment" className="label-style">
              Leave your comment:
            </label>
            <textarea
              className="commentinput"
              type="text"
              name="comment"
              id="comment"
              {...register(`comment`)}
              maxLength={40}
            />
            <label htmlFor="rating" className="label-style">
              Rating:
            </label>
            <StarRatingInput onChange={handleRatingChange} />

            <button className="label-style">Submit</button>
          </form>
        </div>
      </div>
    </CommentModalStyled>
  );
};

export default CommentModal;
