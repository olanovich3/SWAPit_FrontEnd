import styled from 'styled-components';

const StarsRatingStyled = styled.div`
  & .star-rating {
    display: inline-block;
    font-size: 2em;
    font-weight: bold;
    line-height: 1;
  }

  & .star {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.25em;
    text-align: center;
    font-style: normal;
    border-radius: 50%;
    border: 1px solid #ccc;
    color: #ccc;
    line-height: 1em;
  }

  & .star.checked {
    background-color: #ffdd00;
    border-color: #ffdd00;
    color: #fff;
  }
`;

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(null);

  return (
    <StarsRatingStyled>
      {stars.map((_, index) => (
        <span key={index} className={`star ${index <= rating ? 'checked' : ''}`}>
          ★
        </span>
      ))}
    </StarsRatingStyled>
  );
};

export default StarRating;
