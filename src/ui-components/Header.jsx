import { useNavigate } from 'react-router';
import styled from 'styled-components';

import Palette from '../styles/Palette';
import Button from './Button';
import DivFlex from './DivFlex';

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
`;
const Header = ({ justify, align, color, height, padding, variant }) => {
  const navigate = useNavigate();
  return (
    <HeaderStyled
      justify={justify}
      align={align}
      color={color}
      height={height}
      padding={padding}
      variant={variant}
    >
      <DivFlex padding={'20px'} margin={'20px'} gap={'2rem'}>
        <Button
          className={'principal'}
          text={'Register'}
          action={() => {
            navigate('/register');
          }}
        ></Button>
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'Login'}
          border={'yes'}
          action={() => {
            navigate('/login');
          }}
        ></Button>
      </DivFlex>
    </HeaderStyled>
  );
};
export default Header;
