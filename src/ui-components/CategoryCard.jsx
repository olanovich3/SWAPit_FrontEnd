import styled from 'styled-components';

const CategoryCardStyled = styled.div`
  padding: 2rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;

  & .categoryTitle {
    text-transform: capitalize;
  }
`;

const CategoryCard = ({ cat }) => {
  return (
    <CategoryCardStyled>
      <p className="categoryTitle">{cat}</p>
    </CategoryCardStyled>
  );
};

export default CategoryCard;
