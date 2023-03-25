import styled from 'styled-components';

const SearchStyled = styled.input`
  border: 1px solid black;
  border-radius: 2rem;
  background-color: transparent;
  height: 38px;
  width: 75vw;
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
`;

const Search = ({ className, placeholder, action, value }) => {
  return (
    <SearchStyled
      value={value}
      onChange={action}
      className={className}
      placeholder={placeholder}
    ></SearchStyled>
  );
};
export default Search;
