import styled from 'styled-components';

import Palette from '../styles.jsx/Palette';

const ButtonStyled = styled.button`
  background-color: ${({ bg }) =>
    bg === 'second' ? Palette.background : Palette.secondary};
  border: ${({ border }) => (border === 'yes' ? '1px solid #07689f' : 'none')};
  border-radius: 2rem;
  color: ${({ color }) => (color == 'second' ? Palette.secondary : Palette.background)};
  width: fit-content;
  height: 38px;
  font-size: ${({ size }) =>
    size === 'lg' ? '25px' : size === 'sm' ? '14px' : size === 'xm' ? '10px' : '16px'};
  letter-spacing: 0.5px;
  outline: none;
  padding: ${({ padding }) =>
    padding === 'lg'
      ? '1.3rem 4.5rem'
      : padding === 'sm'
      ? '8px 16px'
      : padding === 'xm'
      ? '0.2rem 0.3rem'
      : ' 0 2rem'};
  transition: all 0.1s ease-in-out;

  &.principal:hover {
    background-color: ${Palette.higlight};
    color: ${Palette.background};
  }
  &.secondary:hover {
    background-color: ${Palette.secondary};
    color: ${Palette.background};
  }
`;

const Button = ({ className, text, bg, border, color, size, padding }) => {
  return (
    <ButtonStyled
      className={className}
      bg={bg}
      border={border}
      color={color}
      size={size}
      padding={padding}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
