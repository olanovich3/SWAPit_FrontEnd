import styled from 'styled-components';

const FavIconStyled = styled.img`
  background-color: transparent;
  & .favicon {
    width: 40px;
    height: 40px;
  }
`;

const FavIcon = ({ src, alt, className }) => {
  return <FavIconStyled src={src} alt={alt} className={className}></FavIconStyled>;
};

export default FavIcon;
