import styled from 'styled-components';

const FavIconStyled = styled.img`
  background-color: transparent;
  border: none;
  background: none;
  width: 25px;
  height: 25px;
`;

const FavIcon = ({ src, alt, className }) => {
  return <FavIconStyled src={src} alt={alt} className={className}></FavIconStyled>;
};

export default FavIcon;
