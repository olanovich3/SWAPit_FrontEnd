import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: ${({ justify }) =>
    justify === 'center'
      ? 'center'
      : justify === 'flex-end'
      ? 'flex-end'
      : justify === 'flex-start'
      ? 'flex-start'
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
      : align === 'flex-start'
      ? 'flex-start'
      : align === 'space-around'
      ? 'space-around'
      : align === 'space-between'
      ? 'space-between'
      : 'center'};
  flex-direction: ${({ direction }) => (direction === 'column' ? 'column' : 'row')};
  background-color: ${({ variant }) => (variant ? variant : 'none')};
  background: ${({ background }) => background};
  background-size: cover;
  background-attachment: fixed;
  color: ${({ color }) => (color === 'white' ? 'white' : '#526F80')};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
  border: ${({ border }) => (border === 'yes' ? '2px solid black' : 'none')};
  flex-wrap: wrap;
  position: ${({ position }) => position};
  overflow-x: ${({ flowx }) => flowx};
  overflow-y: ${({ flowy }) => flowy};
  position: ${({ position }) => position};
  text-transform: ${({ transform }) => transform};
`;

const DivFlex = ({
  align,
  justify,
  background,
  direction,
  children,
  margin,
  padding,
  variant,
  color,
  height,
  width,
  gap,
  border,
  position,
  flowx,
  flowy,
  transform,
}) => {
  return (
    <StyledDiv
      transform={transform}
      justify={justify}
      align={align}
      background={background}
      flowx={flowx}
      flowy={flowy}
      direction={direction}
      margin={margin}
      padding={padding}
      variant={variant}
      color={color}
      height={height}
      width={width}
      gap={gap}
      border={border}
      position={position}
    >
      {children}
    </StyledDiv>
  );
};

export default DivFlex;
