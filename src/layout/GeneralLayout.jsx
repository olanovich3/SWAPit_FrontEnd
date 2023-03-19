import styled from 'styled-components';

const GeneralLayoutStyled = styled.div`
  display: grid;
  grid-template-rows: 10vh 1fr 10vh;
`;

const GeneralLayout = ({ children }) => {
  return <GeneralLayoutStyled>{children}</GeneralLayoutStyled>;
};

export default GeneralLayout;
