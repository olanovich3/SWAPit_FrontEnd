import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../ui-components/Button';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <Img
        src="https://res.cloudinary.com/damtbzspb/image/upload/v1679435830/e78c5f4d033f7f8841ab0157ec9f16bc_ngchpf.jpg"
        alt="Error 404 gif"
      />
      <Title className="h1">Nothing over here!</Title>
      <Description className="p">
        Oops... This page does not exist in Swap It, what does exist are thousands of
        opportunities waiting for you...
      </Description>
      <Button action={() => navigate('/products')} text={'See products'}></Button>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0rem;
  height: 72vh;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
  color: grey;
`;

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 2rem 0;
`;

export default NotFound;
