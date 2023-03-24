import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Palette from '../styles/Palette';
const CategoryCardStyled = styled.div`
  padding: 2rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  & .catcard {
    border: 1px solid black;
    padding: 1rem 3rem;
    border-radius: 1rem;
    overflow: hidden;
    width: 300px;
    height: 400px;
  }
  & .catcard figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    padding: 0.5rem 0;
  }
  & .catcard figure p {
    font-size: 16px;
    white-space: wrap;
  }
  & .catcard figure img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  & .catcard figure h3 {
    font-size: 20px;
    text-transform: uppercase;
    color: ${Palette.secondary};
  }
`;

const CategoryCard = ({ category }) => {
  return (
    <CategoryCardStyled category>
      <Link to={category._id}>
        <div className="catcard">
          <figure>
            <img src={category.image1} alt={category.title} />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </figure>
        </div>
      </Link>
    </CategoryCardStyled>
  );
};

export default CategoryCard;
