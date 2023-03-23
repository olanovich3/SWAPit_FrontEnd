import styled from 'styled-components';

const SpinnerStyled = styled.div`
  margin: 0;
  padding: 0;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border: 4px solid #444;
  margin: calc(50vh - 28px) auto;
  border-radius: 50%;
  animation: spin 5s linear infinite;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-top: 4px solid #444;
    border-right: 4px solid #444;
    position: absolute;
    top: 5px;
    left: -5px;
    box-shadow: 4px -4px 0 4px #fff;
  }

  &:after {
    top: 39px;
    left: 35px;
    border: none;
    border-bottom: 4px solid #444;
    border-left: 4px solid #444;
    box-shadow: -4px 4px 0 4px #fff;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <SpinnerStyled></SpinnerStyled>;
};

export default Spinner;
