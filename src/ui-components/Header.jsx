import { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import Palette from '../styles/Palette';
import DivFlex from './DivFlex';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) =>
    justify === 'center'
      ? 'center'
      : justify === 'flex-end'
      ? 'flex-end'
      : justify === 'flex-star'
      ? 'flex-star'
      : justify === 'space-around'
      ? 'space-around'
      : justify === 'space-between'
      ? 'space-between'
      : 'center'};
  align-items: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'flex-end'
      ? 'flex-end'
      : align === 'flex-star'
      ? 'flex-star'
      : align === 'space-around'
      ? 'space-around'
      : align === 'space-between'
      ? 'space-between'
      : 'center'};
  background-color: ${({ variant }) => (variant ? variant : Palette.background)};
  /* background: linear-gradient(#264a5f, #10101c); */
  color: ${({ color }) => (color ? color : Palette.primary)};
  height: ${({ height }) => height};
  width: 100vw;
  padding: ${({ padding }) => padding};
  flex-direction: ${({ direction }) => direction};
  & img {
    height: 20px;
    width: 20px;
  }
`;
const Header = ({ justify, align, color, height, padding, variant, direction }) => {
  const { user } = useContext(UserContext);
  return (
    <HeaderStyled
      justify={justify}
      align={align}
      color={color}
      height={height}
      padding={padding}
      variant={variant}
      direction={direction}
    >
      <DivFlex padding={'20px'}>
        <img src="../../public/vite.svg" alt="logoswapit" height={20}></img>
        <h1>SWAPit</h1>
      </DivFlex>
      {user == null && (
        <DivFlex padding={'20px'} margin={'20px'} gap={'2rem'}>
          <RegisterModal />
          <LoginModal />
        </DivFlex>
      )}
    </HeaderStyled>
  );
};
export default Header;
