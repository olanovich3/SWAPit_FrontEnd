import { useState } from 'react';
import styled from 'styled-components';

const StarRatingStyled = styled.div`
  display: inline-block;

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
    cursor: pointer;
  }

  & .star.checked,
  & .star:hover {
    background-color: #ffdd00;
    border-color: #ffdd00;
    color: #fff;
  }
`;

const StarRatingInput = ({ onChange }) => {
  const [value, setValue] = useState(0);

  const handleClick = (index) => {
    setValue(index + 1);
    if (onChange) {
      onChange(index + 1);
    }
  };

  return (
    <StarRatingStyled>
      {[0, 1, 2, 3, 4].map((index) => (
        <button
          type="button"
          key={index}
          className={`star ${index < value ? 'checked' : ''}`}
          onClick={() => handleClick(index)}
        >
          ★
        </button>
      ))}
    </StarRatingStyled>
  );
};

export default StarRatingInput;
