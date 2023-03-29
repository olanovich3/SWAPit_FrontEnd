import styled from 'styled-components';

import StarRating from './StarsRating';

const CommentsAllStyled = styled.div`
  height: 400px;
  width: 700px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & .comment {
    background-color: rgb(248, 248, 248);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
    padding: 2rem;
    width: 100%;
    height: 125px;
    display: flex;
    align-items: center;

    gap: 1.5rem;
  }
  & .comment img {
    height: 80%;
    width: 20%;
  }
  & .commentarist {
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 750px) {
    width: 350px;
  }
`;

const CommentsAll = ({ comment }) => {
  return (
    <CommentsAllStyled>
      {comment.map((item) => (
        <div className="comment" key={item._id}>
          <img src={item.product.image1} alt="" />
          <nav>
            <div className="commentarist">
              <h2>{item.userfrom.name}</h2>
              <h2>{item.userfrom.lastname}</h2>
            </div>
            <p>{item.comment}</p>
          </nav>
          <StarRating rating={item.rating} />
        </div>
      ))}
    </CommentsAllStyled>
  );
};

export default CommentsAll;
